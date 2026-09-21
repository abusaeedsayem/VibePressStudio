"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { 
  X, Download, BookOpen, CheckCircle2, Sparkles, 
  ExternalLink, ArrowRight, ShieldCheck, HardDrive
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultOs?: "macOS" | "Windows" | "Linux";
}

const OS_INSTALLERS = {
  macOS: {
    label: " macOS (Apple Silicon / Universal)",
    fileName: "Blueprnt_1.0.0_universal.dmg",
    url: "/downloads/Blueprnt_1.0.0_universal.dmg",
    type: ".dmg installer"
  },
  Windows: {
    label: "⊞ Windows 10/11 (x64 Setup)",
    fileName: "Blueprnt_1.0.0_x64-setup.exe",
    url: "/downloads/Blueprnt_1.0.0_x64-setup.exe",
    type: ".exe setup"
  },
  Linux: {
    label: "🐧 Linux (AppImage Executable)",
    fileName: "blueprnt_1.0.0_amd64.AppImage",
    url: "/downloads/blueprnt_1.0.0_amd64.AppImage",
    type: ".AppImage package"
  }
};

export function DownloadModal({ isOpen, onClose, defaultOs = "macOS" }: DownloadModalProps) {
  const [selectedOs, setSelectedOs] = useState<"macOS" | "Windows" | "Linux">(defaultOs);
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  useEffect(() => {
    if (defaultOs) {
      setSelectedOs(defaultOs);
    }
  }, [defaultOs]);

  useEffect(() => {
    if (isOpen) {
      setDownloadTriggered(false);
      // Auto-trigger the installer download after a short delay for smooth UX
      const timer = setTimeout(() => {
        triggerDownload(selectedOs);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, selectedOs]);

  const triggerDownload = (os: "macOS" | "Windows" | "Linux") => {
    const installer = OS_INSTALLERS[os];
    const link = document.createElement("a");
    link.href = installer.url;
    link.download = installer.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadTriggered(true);
  };

  if (!isOpen) return null;

  const currentInstaller = OS_INSTALLERS[selectedOs];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-card border border-sky-500/40 rounded-3xl shadow-2xl overflow-hidden text-foreground flex flex-col my-8 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-sky-950 via-slate-900 to-slate-950 border-b border-border text-white">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-sky-500/20 border border-sky-400/30 rounded-2xl">
              <img src="/blueprnt-icon.svg" alt="Blueprnt Icon" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold tracking-tight flex items-center gap-2">
                Download FREE Installer <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Free Edition</span>
              </h3>
              <p className="text-xs text-sky-200/80">Local-First Desktop Media Application</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6 overflow-y-auto">
          
          {/* Download Status Toast / Banner */}
          <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-foreground">
                Your Free Download Has Started!
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Downloading <span className="font-mono font-bold text-foreground">{currentInstaller.fileName}</span> ({currentInstaller.type}). If your download does not start automatically, click the manual link below.
              </p>
              <button
                onClick={() => triggerDownload(selectedOs)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-500 hover:underline pt-1"
              >
                <Download className="w-3.5 h-3.5" /> Re-trigger {selectedOs} Download
              </button>
            </div>
          </div>

          {/* OS Switcher Pills */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
              Select Operating System Installer
            </div>
            <div className="grid grid-cols-3 gap-2">
              {(["macOS", "Windows", "Linux"] as const).map((os) => (
                <button
                  key={os}
                  onClick={() => setSelectedOs(os)}
                  className={`p-3 text-xs font-bold rounded-xl border transition-all flex items-center justify-center gap-1.5 ${
                    selectedOs === os
                      ? "bg-sky-600 text-white border-sky-500 shadow-sm"
                      : "bg-muted/40 border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {os === "macOS" && " macOS"}
                  {os === "Windows" && "⊞ Windows"}
                  {os === "Linux" && "🐧 Linux"}
                </button>
              ))}
            </div>
          </div>

          {/* 🌟 HIGHLIGHTED USER MANUAL SUGGESTION CARD */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-500/15 via-background to-muted border border-sky-500/40 space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-sky-500/20 text-sky-400 rounded-xl">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-sky-500 block">Recommended Step</span>
                <h4 className="text-base font-extrabold text-foreground">
                  Get the FREE Blueprnt Operational User Manual
                </h4>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Master BLAKE3 checksum verification, EXIF token renaming, atomic shot-group locking, and Apple ProRes/Avid DNxHR proxy workflows with our complete PDF guide.
            </p>
            
            <a
              href="/downloads/Blueprnt_Operational_User_Manual.pdf"
              download="Blueprnt_Operational_User_Manual.pdf"
              className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-xs md:text-sm"
            >
              <Download className="w-4 h-4" /> Download FREE User Manual (PDF) <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* 💳 INSTANT PRO LICENSE PURCHASE CARD (CLOAKED REDIRECT) */}
          <div className="p-5 rounded-2xl bg-muted/40 border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="font-bold text-sm text-foreground">Need Renamer Pro &amp; ProRes Proxies?</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Unlock lifetime Pro license keys instantly via Lemon Squeezy checkout.
              </p>
            </div>
            
            <a
              href="/api/checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto shrink-0 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-5 rounded-xl transition-colors flex items-center justify-center gap-2 text-xs"
            >
              Buy Pro License Key <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-muted/40 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-500" /> 100% Offline · Zero Telemetry
          </span>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-xs font-bold">
            Close Modal
          </Button>
        </div>

      </div>
    </div>
  );
}
