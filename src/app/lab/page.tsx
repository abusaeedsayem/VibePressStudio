"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, Bell, Sparkles, Clock, BookOpen, ArrowRight,
  Download, HardDrive, ShieldCheck, Sliders, Layers, Terminal, Check,
  ExternalLink
} from "lucide-react";
import pricingData from "@/content/pricing.json";
import blueprntData from "@/content/blueprnt.json";
import { SubscriberForm } from "@/components/forms/SubscriberForm";
import { DownloadModal } from "@/components/blueprnt/DownloadModal";

export default function LabPage() {
  const { hero, notice, upcomingProducts } = pricingData;
  const { installation, userGuide } = blueprntData;

  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [selectedDownloadOs, setSelectedDownloadOs] = useState<"macOS" | "Windows" | "Linux">("macOS");

  const openDownloadModal = (os: "macOS" | "Windows" | "Linux" = "macOS") => {
    setSelectedDownloadOs(os);
    setIsDownloadModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* ── 1. Hero Announcement Header ── */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-16 md:py-24 border-b border-border text-center">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <Badge variant="outline" className="text-xs font-bold px-3.5 py-1 bg-primary/10 text-primary border-primary/30">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 inline" /> Built in Flow. Made for Reality.
            </Badge>
            <Badge variant="outline" className="text-xs font-semibold px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30">
              <Clock className="w-3.5 h-3.5 mr-1.5 inline" /> {hero.badge}
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 max-w-4xl mx-auto">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* ── 2. Software Pipeline Overview ── */}
      <section className="py-16 px-4 md:px-6 max-w-[1280px] mx-auto w-full border-b border-border">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
            Software Pipeline Overview
          </span>
          <h2 className="text-3xl font-extrabold text-foreground mb-3">
            Products Currently in Development
          </h2>
          <p className="text-sm text-muted-foreground">
            A preview of our enterprise WordPress performance tools and local-first desktop applications scheduled for rollout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {upcomingProducts.map((prod, idx) => (
            <Card key={idx} className="border-border shadow-sm flex flex-col justify-between hover:shadow-lg hover:border-primary/40 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3.5 mb-2">
                  <img 
                    src={prod.logoImage || '/Smart-Affiliate-Link-Cloaker-icon.svg'} 
                    alt={prod.name} 
                    className="w-12 h-12 rounded-xl p-1 bg-white border border-border shrink-0 object-contain shadow-xs" 
                  />
                  <div>
                    <CardTitle className="text-xl font-bold">{prod.name}</CardTitle>
                    <span className="text-xs text-muted-foreground font-medium">{prod.type}</span>
                  </div>
                </div>
                <Badge variant="outline" className="w-fit text-[11px] font-semibold px-2.5 py-0.5 border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 mt-2">
                  {prod.status}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{prod.description}</p>
                {prod.link && (
                  <Link
                    href={prod.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline pt-2"
                  >
                    View Product Page &amp; Documentation <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── 3. How to Use Blueprnt — Operational Documentation ── */}
      <section id="blueprnt-guide" className="py-16 px-4 md:px-6 max-w-[1280px] mx-auto w-full border-b border-border bg-muted/20">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 rounded-full px-3.5 py-1 mb-3">
              <img src="/blueprnt-icon.svg" alt="Blueprnt Icon" className="w-4 h-4 object-contain" />
              <span className="text-xs font-bold text-sky-400">Featured Software Manual</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              How to Use &apos;Blueprnt&apos;
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Official operational manual, multi-platform installation guides, and step-by-step feature walkthroughs for desktop media asset management.
            </p>
          </div>

          {/* 6.1 Multi-Platform Installation Guide */}
          <Card className="border-sky-500/30 shadow-md">
            <CardHeader className="bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <Download className="h-5 w-5 text-sky-500" /> Multi-Platform Installation Guide &amp; Free Binaries
              </CardTitle>
              <a
                href="/api/checkout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-1.5 w-fit"
              >
                Buy Instant Pro License <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
                <div className="p-5 bg-muted/40 rounded-xl border border-border space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="font-bold text-foreground flex items-center gap-1.5 font-sans">
                       macOS (Apple Silicon / Universal)
                    </div>
                    <p className="text-muted-foreground text-[11px] leading-relaxed font-sans">
                      {installation.macOS}
                    </p>
                  </div>
                  <button
                    onClick={() => openDownloadModal("macOS")}
                    className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-xs font-sans cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" /> Download macOS (.dmg)
                  </button>
                </div>

                <div className="p-5 bg-muted/40 rounded-xl border border-border space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="font-bold text-foreground flex items-center gap-1.5 font-sans">
                      ⊞ Windows 10/11 (x64 Setup)
                    </div>
                    <p className="text-muted-foreground text-[11px] leading-relaxed font-sans">
                      {installation.Windows}
                    </p>
                  </div>
                  <button
                    onClick={() => openDownloadModal("Windows")}
                    className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-xs font-sans cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" /> Download Windows (.exe)
                  </button>
                </div>

                <div className="p-5 bg-muted/40 rounded-xl border border-border space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="font-bold text-foreground flex items-center gap-1.5 font-sans">
                      🐧 Linux (AppImage Executable)
                    </div>
                    <p className="text-muted-foreground text-[11px] leading-relaxed font-sans">
                      {installation.Linux}
                    </p>
                  </div>
                  <button
                    onClick={() => openDownloadModal("Linux")}
                    className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-xs font-sans cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" /> Download Linux (.AppImage)
                  </button>
                </div>
              </div>

              {/* PDF Manual Download Banner */}
              <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-sky-500/10 text-sky-500 rounded-xl">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">FREE Blueprnt Operational User Manual</h4>
                    <p className="text-xs text-muted-foreground">Comprehensive PDF guide covering BLAKE3 transfers, token renamer patterns, and proxy codecs.</p>
                  </div>
                </div>
                <a
                  href="/downloads/Blueprnt_Operational_User_Manual.pdf"
                  download="Blueprnt_Operational_User_Manual.pdf"
                  className="w-full sm:w-auto shrink-0 bg-slate-900 dark:bg-slate-800 border border-sky-500/40 text-sky-400 font-bold py-2.5 px-5 rounded-lg hover:bg-sky-500/10 transition-colors flex items-center justify-center gap-2 text-xs"
                >
                  <Download className="w-4 h-4" /> Download FREE User Manual (PDF)
                </a>
              </div>
            </CardContent>
          </Card>

          {/* 6.2 Step-by-Step Feature Instructions */}
          <Card className="border-border shadow-md">
            <CardHeader className="bg-muted/40 border-b border-border">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <Sliders className="h-5 w-5 text-sky-500" /> Step-by-Step Feature Instructions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userGuide.map((step) => (
                  <div key={step.step} className="p-5 bg-card border border-border rounded-xl space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        {step.step}
                      </span>
                      <h4 className="font-bold text-sm text-foreground">{step.title}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed pl-8 font-mono">
                      {step.action}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  Need in-depth technical FAQs or BLAKE3 checksum specifications?
                </p>
                <Link
                  href="/products/blueprnt"
                  className="bg-sky-600 text-white text-xs font-bold py-2.5 px-5 rounded-lg hover:bg-sky-500 transition-colors flex items-center gap-2"
                >
                  Explore Full Blueprnt Product Page <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* ── 4. Pre-Launch Registration Portal ── */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-16 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Information & Launch Guarantees */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
              <Sparkles className="h-4 w-4 text-primary" /> Pre-Launch Registration
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
              {notice.heading}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {notice.subheading}
            </p>

            <div className="space-y-3 pt-2">
              {notice.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Subscription Form */}
          <div className="lg:col-span-6">
            <Card className="border-primary/30 shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-indigo-500/10 border-b border-border p-6 md:p-8">
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" /> Subscription Form
                </CardTitle>
                <p className="text-xs text-muted-foreground mt-1">
                  Subscribe to receive instant updates, architectural notes, and software releases.
                </p>
              </CardHeader>

              <CardContent className="p-6 md:p-8">
                <SubscriberForm
                  source="lab_hero"
                  variant="expanded"
                  buttonLabel="Subscribe"
                />
              </CardContent>
            </Card>
          </div>

        </div>

      </div>

      {/* Download Intercept & User Manual Suggestion Modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        defaultOs={selectedDownloadOs}
      />

    </div>
  );
}