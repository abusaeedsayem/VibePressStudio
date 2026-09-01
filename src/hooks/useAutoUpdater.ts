"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export type UpdaterStatus =
  | "idle"
  | "checking"
  | "available"
  | "downloading"
  | "downloaded"
  | "error"
  | "upToDate";

export interface UpdateInfo {
  version: string;
  body?: string;
  date?: string;
}

export interface UseAutoUpdaterReturn {
  status: UpdaterStatus;
  updateInfo: UpdateInfo | null;
  progress: number;
  error: string | null;
  checkForUpdates: (notifyIfUptodate?: boolean) => Promise<void>;
  downloadAndInstall: () => Promise<void>;
  dismiss: () => void;
  setStatus: (s: UpdaterStatus) => void;
}

/**
 * Production-ready auto-updater hook for Tauri 2.x.
 * - Runs quietly on mount (no toast if up-to-date)
 * - Gracefully no-ops when running outside Tauri (web/Vercel)
 * - Exposes manual check, download with progress, and relaunch
 * - Uses dynamic imports to avoid SSR bundling issues
 */
export function useAutoUpdater(): UseAutoUpdaterReturn {
  const [status, setStatus] = useState<UpdaterStatus>("idle");
  const [updateInfo, setUpdateInfo] = useState<UpdateInfo | null>(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const hasCheckedRef = useRef(false);

  const isTauri = useCallback(() => {
    if (typeof window === "undefined") return false;
    // Tauri 2 injects __TAURI__ or __TAURI_INTERNALS__
    return "__TAURI__" in window || "__TAURI_INTERNALS__" in window;
  }, []);

  const checkForUpdates = useCallback(
    async (notifyIfUptodate = false) => {
      if (!isTauri()) {
        // Web mode: silently set idle, or upToDate if manual check requested
        if (notifyIfUptodate) {
          setStatus("upToDate");
          // Reset to idle after 3s for web UX
          setTimeout(() => setStatus("idle"), 3000);
        }
        return;
      }

      try {
        setStatus("checking");
        setError(null);

        const { check } = await import("@tauri-apps/plugin-updater");
        const update = await check();

        if (update) {
          setUpdateInfo({
            version: update.version,
            body: update.body ?? undefined,
            date: update.date ?? undefined,
          });
          setStatus("available");
        } else {
          setStatus("upToDate");
          if (notifyIfUptodate) {
            // Keep upToDate visible briefly then return to idle
            setTimeout(() => setStatus("idle"), 3000);
          } else {
            // Silent background check: return to idle quickly
            setTimeout(() => setStatus("idle"), 1500);
          }
        }
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        setError(msg);
        setStatus("error");
        // Auto-clear error after 5s
        setTimeout(() => setStatus("idle"), 5000);
      }
    },
    [isTauri]
  );

  const downloadAndInstall = useCallback(async () => {
    if (!isTauri()) {
      setError("Auto-update is only available in the desktop application.");
      setStatus("error");
      return;
    }

    try {
      const { check } = await import("@tauri-apps/plugin-updater");
      const { relaunch } = await import("@tauri-apps/plugin-process");

      const update = await check();
      if (!update) {
        setStatus("upToDate");
        return;
      }

      setStatus("downloading");
      setProgress(0);
      setError(null);

      let downloaded = 0;
      let contentLength = 0;

      await update.downloadAndInstall((event) => {
        switch (event.event) {
          case "Started":
            contentLength = event.data.contentLength ?? 0;
            break;
          case "Progress":
            downloaded += event.data.chunkLength;
            if (contentLength > 0) {
              const pct = Math.round((downloaded / contentLength) * 100);
              setProgress(Math.min(100, pct));
            }
            break;
          case "Finished":
            setProgress(100);
            setStatus("downloaded");
            break;
        }
      });

      // Relaunch to apply update
      await relaunch();
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      setError(msg);
      setStatus("error");
    }
  }, [isTauri]);

  const dismiss = useCallback(() => {
    setStatus("idle");
    setError(null);
  }, []);

  // Quiet background check on mount — runs once
  useEffect(() => {
    if (hasCheckedRef.current) return;
    hasCheckedRef.current = true;

    // Delay 2.5s after mount to avoid blocking initial render
    const timer = setTimeout(() => {
      checkForUpdates(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [checkForUpdates]);

  return {
    status,
    updateInfo,
    progress,
    error,
    checkForUpdates,
    downloadAndInstall,
    dismiss,
    setStatus,
  };
}
