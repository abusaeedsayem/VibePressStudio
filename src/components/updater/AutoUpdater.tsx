"use client";

import { useEffect } from "react";
import { useAutoUpdater } from "@/hooks/useAutoUpdater";
import { UpdateModal } from "./UpdateModal";

/**
 * Global auto-updater controller.
 * Mount once in RootLayout to enable:
 * - Silent background check 2.5s after launch
 * - UpdateModal when an update is available
 * - Toast-like error handling (could be replaced with sonner/toast)
 *
 * Safe to render on web/Vercel — hook no-ops when `window.__TAURI__` missing.
 */
export function AutoUpdater() {
  const { status, updateInfo, progress, error, downloadAndInstall, dismiss } =
    useAutoUpdater();

  // Optional: debug logging in dev
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      if (status === "available") {
        console.info(
          `[ShelfMaster Updater] Update available: v${updateInfo?.version}`
        );
      }
      if (status === "error") {
        console.warn(`[ShelfMaster Updater] Error: ${error}`);
      }
    }
  }, [status, updateInfo, error]);

  return (
    <UpdateModal
      status={status}
      updateInfo={updateInfo}
      progress={progress}
      error={error}
      onInstall={downloadAndInstall}
      onDismiss={dismiss}
    />
  );
}
