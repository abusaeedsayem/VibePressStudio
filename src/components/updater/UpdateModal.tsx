"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Loader2, Sparkles, AlertCircle, CheckCircle2 } from "lucide-react";
import type { UpdaterStatus, UpdateInfo } from "@/hooks/useAutoUpdater";

interface UpdateModalProps {
  status: UpdaterStatus;
  updateInfo: UpdateInfo | null;
  progress: number;
  error: string | null;
  onInstall: () => Promise<void>;
  onDismiss: () => void;
}

/**
 * Production-ready update modal for Tauri updater.
 * - Shows release notes, version, progress bar
 * - "Install & Restart" triggers downloadAndInstall + relaunch
 * - Accessible via Radix Dialog (focus trap, ESC handling)
 */
export function UpdateModal({
  status,
  updateInfo,
  progress,
  error,
  onInstall,
  onDismiss,
}: UpdateModalProps) {
  const isOpen =
    status === "available" || status === "downloading" || status === "downloaded";

  // Error state also opens as a dismissable dialog
  const showError = status === "error" && !!error;

  return (
    <>
      {/* Main Update Available / Downloading Modal */}
      <Dialog open={isOpen} onOpenChange={(open) => !open && onDismiss()}>
        <DialogContent
          className="sm:max-w-[520px]"
          aria-describedby="updater-description"
        >
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-lg">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Sparkles className="h-4 w-4" />
              </span>
              Update Available
              {updateInfo?.version && (
                <span className="ml-1 font-mono text-sm font-bold text-primary">
                  v{updateInfo.version}
                </span>
              )}
            </DialogTitle>
            <DialogDescription id="updater-description">
              A new version of ShelfMaster is ready to install. Your data is safe — the update will restart the application.
            </DialogDescription>
          </DialogHeader>

          {/* Release Notes */}
          {updateInfo?.body ? (
            <div className="max-h-48 overflow-y-auto rounded-lg border bg-muted/30 p-4">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Release Notes
              </p>
              <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-relaxed text-foreground">
                {updateInfo.body}
              </pre>
            </div>
          ) : (
            <div className="rounded-lg border border-dashed p-4 text-center">
              <p className="text-sm text-muted-foreground">
                Performance improvements and bug fixes included.
              </p>
            </div>
          )}

          {/* Progress Bar */}
          {status === "downloading" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-muted-foreground">
                  Downloading update...
                </span>
                <span className="font-mono font-bold text-primary">
                  {progress}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <p className="text-center text-xs text-muted-foreground">
                Please keep the app open until download completes.
              </p>
            </div>
          )}

          {status === "downloaded" && (
            <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 p-3 text-sm text-emerald-700 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span className="font-medium">Download complete — restarting...</span>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <Button
              variant="ghost"
              onClick={onDismiss}
              disabled={status === "downloading"}
              className="w-full sm:w-auto"
            >
              {status === "downloading" ? "Downloading…" : "Later"}
            </Button>
            <Button
              onClick={onInstall}
              disabled={status === "downloading" || status === "downloaded"}
              className="w-full sm:w-auto"
            >
              {status === "downloading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Downloading {progress}%
                </>
              ) : status === "downloaded" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Restarting…
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  Install & Restart
                </>
              )}
            </Button>
          </div>

          <p className="text-center text-xs text-muted-foreground">
            Signed and verified update • ShelfMaster by VibePress Studio
          </p>
        </DialogContent>
      </Dialog>

      {/* Error Toast-like Dialog (alternative to toast for critical errors) */}
      <Dialog open={showError} onOpenChange={(open) => !open && onDismiss()}>
        <DialogContent className="sm:max-w-[420px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-destructive">
              <AlertCircle className="h-5 w-5" />
              Update Failed
            </DialogTitle>
            <DialogDescription className="break-words text-left">
              {error}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button variant="outline" onClick={onDismiss}>
              Dismiss
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
