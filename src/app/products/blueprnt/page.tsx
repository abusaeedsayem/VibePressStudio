"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, ShieldCheck, Zap, Database, CheckCircle2, 
  Layers, HardDrive, Cpu, Settings, FileSpreadsheet, 
  Video, BarChart3, Lock, Sparkles, Building2, Users, 
  Clock, Check, ChevronRight, Copy, Search, ExternalLink,
  ShieldAlert, Terminal, HelpCircle, BookOpen, Download,
  FolderCheck, Sliders, Film
} from "lucide-react";
import blueprntData from "@/content/blueprnt.json";

export default function BlueprntProductPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "usecases" | "guide" | "faq">("overview");
  const [activeFeatureId, setActiveFeatureId] = useState("5.1");
  const [activeUseCaseId, setActiveUseCaseId] = useState("dit-workstage");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [faqCategory, setFaqCategory] = useState("All");
  const [copiedCmd, setCopiedCmd] = useState(false);

  const { 
    name, version, tagline, description, logoImage,
    categoryLabel, techStack, whyUseful, useCases, 
    targetAudience, detailedFeatures, installation, 
    userGuide, faq 
  } = blueprntData;

  const handleCopyCmd = () => {
    navigator.clipboard.writeText("Blueprnt_1.1.0_universal.dmg");
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const activeFeature = detailedFeatures.find(f => f.id === activeFeatureId) || detailedFeatures[0];
  const activeUseCase = useCases.find(u => u.id === activeUseCaseId) || useCases[0];

  const faqCategories = ["All", "Architecture & Speed", "Data Integrity", "Asset Management", "Video Editing", "Workflow & Roster", "Privacy & Security", "Installation"];
  const filteredFaq = faq.filter(q => faqCategory === "All" || q.category === faqCategory);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* ── 1. Hero Section ── */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-24 border-b border-border bg-gradient-to-b from-sky-500/10 via-background to-background overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 text-center relative z-10">
          
          {/* App Icon Badge */}
          <div className="inline-block p-4 rounded-3xl bg-slate-950 border border-sky-500/30 shadow-2xl mb-6 hover:scale-105 transition-transform">
            <img src={logoImage} alt="Blueprnt Icon" className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-2xl" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="px-4 py-1.5 text-xs md:text-sm font-semibold border border-sky-500/30 bg-sky-500/10 text-sky-400 rounded-full shadow-xs">
              {categoryLabel}
            </span>
            <Badge variant="outline" className="text-xs font-mono font-bold px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1 inline" /> {version}
            </Badge>
            <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full">
              100% Offline • Zero-Cloud Privacy
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight text-foreground mb-6">
            {name} <span className="text-sky-500 font-mono text-3xl md:text-5xl">{version}</span>
          </h1>

          <p className="text-base md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-10 font-medium">
            {tagline}. Engineered for zero bit-rot camera offloading, BLAKE3 checksum verification, 3-2-1 backup mirroring, token renaming, ProRes/DNxHR proxies, and EXIF privacy scrubbing.
          </p>
          
          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto mb-12">
            <Link
              href="/lab"
              className="w-full sm:w-auto bg-sky-600 hover:bg-sky-500 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-sky-500/20"
            >
              <Download className="h-4 w-4" /> Download Studio Build / Pre-Launch <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#guide"
              onClick={() => setActiveTab("guide")}
              className="w-full sm:w-auto bg-card text-foreground border border-border font-bold py-4 px-8 rounded-xl hover:bg-muted transition-colors flex items-center justify-center gap-2"
            >
              <BookOpen className="h-4 w-4 text-sky-500" /> Operational Manual &amp; Setup Guide
            </Link>
          </div>

          {/* Tech Stack Chips */}
          <div className="pt-8 border-t border-border/60 max-w-4xl mx-auto">
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
              Core Technical Architecture
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {techStack.map((tech, idx) => (
                <span key={idx} className="text-xs font-mono font-semibold bg-muted/80 text-foreground px-3 py-1.5 rounded-lg border border-border">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. Sticky Tab Navigation Bar ── */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur border-b border-border shadow-xs">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 flex items-center justify-between overflow-x-auto no-scrollbar py-2">
          <div className="flex items-center gap-2">
            {[
              { id: "overview", label: "Overview & Value" },
              { id: "features", label: "4 Core Feature Studios" },
              { id: "usecases", label: "Use Cases & Workflows" },
              { id: "guide", label: "User Manual & Install Guide" },
              { id: "faq", label: "Technical FAQs" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`text-xs md:text-sm font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-sky-600 text-white shadow-xs"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <span className="text-xs font-mono font-semibold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
              100% Offline
            </span>
            <Link
              href="/lab"
              className="text-xs font-bold bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Studio License
            </Link>
          </div>
        </div>
      </div>

      {/* ── 3. Main Content Container ── */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-16 space-y-20">

        {/* ── OVERVIEW TAB CONTENT ── */}
        {(activeTab === "overview" || activeTab === "features") && (
          <section id="overview" className="space-y-12">
            
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold text-sky-500 uppercase tracking-widest block mb-2">
                Why Software Blueprnt Is Essential
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
                Zero Data Loss &amp; High-Throughput Media Offloading
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Designed specifically for high-stress media environments where camera card corruption or lost sidecar files mean total loss of project revenue.
              </p>
            </div>

            {/* 4 Key Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUseful.map((pillar, idx) => (
                <Card key={idx} className="border-border shadow-xs hover:border-sky-500/40 hover:shadow-lg transition-all flex flex-col justify-between">
                  <CardHeader className="pb-3">
                    <div className="p-3 bg-sky-500/10 text-sky-500 rounded-xl w-fit mb-3">
                      {idx === 0 ? <ShieldCheck className="h-6 w-6" /> : idx === 1 ? <Layers className="h-6 w-6" /> : idx === 2 ? <Settings className="h-6 w-6" /> : <Zap className="h-6 w-6" />}
                    </div>
                    <CardTitle className="text-lg font-bold">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* In-Depth Software Summary Box */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-sky-500/10 text-sky-500 rounded-xl">
                  <Cpu className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    What is the &apos;Blueprnt&apos; Software About?
                  </h3>
                  <p className="text-xs text-muted-foreground">Architectural Overview &amp; Engine Specifications</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

          </section>
        )}

        {/* ── DETAILED FEATURES TAB CONTENT ── */}
        {(activeTab === "features" || activeTab === "overview") && (
          <section id="features" className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold text-sky-500 uppercase tracking-widest block mb-2">
                Detailed Feature Breakdown
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                4 Core Production Workstage Studios
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Click across the studio tabs to examine exact operational specs, presets, and workflows.
              </p>
            </div>

            {/* Feature Selector Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {detailedFeatures.map((feat) => (
                <button
                  key={feat.id}
                  onClick={() => setActiveFeatureId(feat.id)}
                  className={`p-5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    activeFeatureId === feat.id
                      ? "bg-sky-500/10 border-sky-500 text-foreground shadow-md"
                      : "bg-card border-border hover:border-border/80 text-muted-foreground"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-sky-500">Feature {feat.id}</span>
                    <Badge variant="outline" className="text-[10px] font-semibold uppercase bg-muted">
                      {feat.badge}
                    </Badge>
                  </div>
                  <h4 className="font-bold text-sm text-foreground mb-1">{feat.title}</h4>
                </button>
              ))}
            </div>

            {/* Active Feature Deep Dive Card */}
            <Card className="border-sky-500/30 shadow-xl bg-card overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-sky-500/10 via-slate-900 to-background border-b border-border p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                  <span className="text-xs font-mono font-bold text-sky-400 bg-sky-500/20 px-3 py-1 rounded-full border border-sky-500/30">
                    Feature {activeFeature.id}: {activeFeature.badge}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">High-Performance Ingestion Workstage</span>
                </div>
                <CardTitle className="text-2xl md:text-3xl font-extrabold text-foreground">
                  {activeFeature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8 space-y-6">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {activeFeature.description}
                </p>
                
                <div className="bg-muted/40 border border-border rounded-xl p-5 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-500 flex items-center gap-2">
                    <Sparkles className="h-4 w-4" /> Operational Specification &amp; Capabilities
                  </div>
                  <p className="text-xs md:text-sm font-mono text-foreground leading-relaxed">
                    {activeFeature.details}
                  </p>
                </div>

                {/* Specific Visual Mockups for Features */}
                {activeFeature.id === "5.1" && (
                  <div className="p-4 bg-slate-950 rounded-xl border border-border font-mono text-xs text-slate-300 space-y-2">
                    <div className="text-sky-400 font-bold border-b border-slate-800 pb-2">Global Settings — Destination Folders, 3-2-1 Backup &amp; IPTC Defaults</div>
                    <div>Primary Edit SSD: <span className="text-amber-300">/Volumes/NVMe_EDIT/Project_01</span></div>
                    <div>Secondary 3-2-1 Backup: <span className="text-amber-300">/Volumes/BACKUP_RAID/Vault</span></div>
                    <div>Cloud Sync Folder: <span className="text-amber-300">~/Library/Mobile Documents/com~apple~CloudDocs/Inbound</span></div>
                    <div className="text-emerald-400 pt-1">✔ Bit-by-bit BLAKE3 Checksum Verification Enabled</div>
                    <div className="text-emerald-400">✔ 3-2-1 Dual-Drive Mirroring Active</div>
                  </div>
                )}

                {activeFeature.id === "5.2" && (
                  <div className="p-4 bg-slate-950 rounded-xl border border-border font-mono text-xs text-slate-300 space-y-2">
                    <div className="text-sky-400 font-bold border-b border-slate-800 pb-2">Token Pattern Builder &amp; CSV Roster Synchronization</div>
                    <div>Template Pattern: <span className="text-emerald-300 font-bold">{"{Date:YYYY-MM-DD}_{Model}_WDD-Sequence:03}"}</span></div>
                    <div>CSV Roster Mapping: <span className="text-amber-300">Roster_StudentList_2026.csv (Range 1-500)</span></div>
                    <div>Atomic Shot-Group Guarantee: <span className="text-sky-300">RAW + JPG + XMP sidecars renamed synchronously</span></div>
                  </div>
                )}

                {activeFeature.id === "5.3" && (
                  <div className="p-4 bg-slate-950 rounded-xl border border-border font-mono text-xs text-slate-300 space-y-2">
                    <div className="text-sky-400 font-bold border-b border-slate-800 pb-2">Video Transcoder Settings — Codecs, Scaling &amp; Timecode</div>
                    <div>Target Video Codec: <span className="text-emerald-300 font-bold">Apple ProRes 422 Proxy / Avid DNxHR LB</span></div>
                    <div>Resolution Downscaling: <span className="text-sky-300">1080p Full HD (1920x1080) — Recommended</span></div>
                    <div>Framerate &amp; Timecode: <span className="text-amber-300">Match Native Framerate • Preserve SMPTE Timecode &amp; Reel ID</span></div>
                    <div>Audio Options: <span className="text-slate-300">Stereo Downmix (48kHz 24-bit)</span></div>
                  </div>
                )}

                {activeFeature.id === "5.4" && (
                  <div className="p-4 bg-slate-950 rounded-xl border border-border font-mono text-xs text-slate-300 space-y-2">
                    <div className="text-sky-400 font-bold border-b border-slate-800 pb-2">Media Indexer — Infographic Analytics &amp; Payload Summary</div>
                    <div className="flex flex-wrap gap-4 text-xs">
                      <span className="text-sky-300">Total Assets: 4,647 Files</span>
                      <span className="text-emerald-300">Stills: 3,889 (84%)</span>
                      <span className="text-purple-300">RAW Negatives: 165 (4% Pairs)</span>
                      <span className="text-amber-300">Video Clips: 466 (10%)</span>
                      <span className="text-slate-200">Payload: 56.15 GB</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </section>
        )}

        {/* ── USE CASES & TARGET AUDIENCE TAB CONTENT ── */}
        {(activeTab === "usecases" || activeTab === "overview") && (
          <section id="usecases" className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold text-sky-500 uppercase tracking-widest block mb-2">
                Real-World Production Scenarios
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                All Possible Use Cases of &apos;Blueprnt&apos;
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Explore how Blueprnt handles high-volume photography, cinema offloads, burst deduplication, and privacy sanitation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((uc) => (
                <div 
                  key={uc.id} 
                  className="bg-card border border-border rounded-2xl p-6 hover:border-sky-500/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="p-2 bg-sky-500/10 text-sky-500 rounded-lg">
                        <FolderCheck className="h-5 w-5" />
                      </span>
                      <h3 className="font-bold text-lg text-foreground">{uc.title}</h3>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {uc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Target Audience Section */}
            <div className="bg-muted/30 border border-border rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Who Needs &apos;Blueprnt&apos;?
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {targetAudience.map((aud, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl text-xs md:text-sm text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{aud}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── USER MANUAL & INSTALLATION GUIDE TAB CONTENT ── */}
        {(activeTab === "guide" || activeTab === "overview") && (
          <section id="guide" className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold text-sky-500 uppercase tracking-widest block mb-2">
                Operational Manual &amp; Installation
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                6. End-User Manual &amp; Operational Guide
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Multi-platform installation instructions and step-by-step feature workflows.
              </p>
            </div>

            {/* 6.1 Multi-Platform Installation Guide */}
            <div className="bg-card border border-border rounded-2xl p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Download className="h-5 w-5 text-sky-500" /> 6.1 Multi-Platform Installation Guide
                </h3>
                <span className="text-xs font-mono text-muted-foreground">Version 1.1.0 Binaries</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
                <div className="p-4 bg-muted/40 rounded-xl border border-border space-y-2">
                  <div className="font-bold text-foreground flex items-center gap-1.5">
                     macOS (Apple Silicon / Universal)
                  </div>
                  <p className="text-muted-foreground text-[11px] leading-relaxed">
                    {installation.macOS}
                  </p>
                  <div className="bg-background p-2 rounded border border-border text-[10px] text-sky-400 truncate">
                    Blueprnt_1.1.0_universal.dmg
                  </div>
                </div>

                <div className="p-4 bg-muted/40 rounded-xl border border-border space-y-2">
                  <div className="font-bold text-foreground flex items-center gap-1.5">
                    ⊞ Windows 10/11 (x64)
                  </div>
                  <p className="text-muted-foreground text-[11px] leading-relaxed">
                    {installation.Windows}
                  </p>
                  <div className="bg-background p-2 rounded border border-border text-[10px] text-sky-400 truncate">
                    Blueprnt_1.1.0_x64-setup.exe
                  </div>
                </div>

                <div className="p-4 bg-muted/40 rounded-xl border border-border space-y-2">
                  <div className="font-bold text-foreground flex items-center gap-1.5">
                    🐧 Linux (AppImage / Debian)
                  </div>
                  <p className="text-muted-foreground text-[11px] leading-relaxed">
                    {installation.Linux}
                  </p>
                  <div className="bg-background p-2 rounded border border-border text-[10px] text-sky-400 truncate">
                    blueprnt_1.1.0_amd64.AppImage
                  </div>
                </div>
              </div>
            </div>

            {/* 6.2 Step-by-Step Feature Instructions */}
            <div className="bg-card border border-border rounded-2xl p-8 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-4">
                <Sliders className="h-5 w-5 text-sky-500" /> 6.2 Step-by-Step Feature Instructions
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userGuide.map((step) => (
                  <div key={step.step} className="p-5 bg-muted/30 border border-border rounded-xl space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-sky-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
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
            </div>
          </section>
        )}

        {/* ── TECHNICAL FAQS TAB CONTENT ── */}
        {(activeTab === "faq" || activeTab === "overview") && (
          <section id="faq" className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold text-sky-500 uppercase tracking-widest block mb-2">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                Technical Knowledgebase &amp; FAQs
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                In-depth technical answers regarding BLAKE3 verification, atomic shot-groups, ProRes proxies, and local data sovereignty.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {faqCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFaqCategory(cat)}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                    faqCategory === cat
                      ? "bg-sky-600 text-white"
                      : "bg-card text-muted-foreground hover:bg-muted border border-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* FAQ Accordion List */}
            <div className="space-y-4 max-w-4xl mx-auto">
              {filteredFaq.map((q, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full p-5 text-left font-bold text-sm md:text-base text-foreground flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="h-4 w-4 text-sky-500 shrink-0" />
                      {q.question}
                    </span>
                    <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform ${expandedFaq === idx ? "rotate-90 text-sky-500" : ""}`} />
                  </button>

                  {expandedFaq === idx && (
                    <div className="p-5 pt-0 text-xs md:text-sm text-muted-foreground leading-relaxed border-t border-border/60 bg-muted/20">
                      {q.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* ── 4. Bottom Global CTA ── */}
      <section className="py-20 px-4 md:px-6 bg-slate-950 text-white text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto space-y-6">
          <Badge variant="outline" className="text-xs font-semibold px-3.5 py-1 bg-sky-500/10 text-sky-400 border-sky-500/30">
            High-Performance Desktop Toolkit
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Ready to Protect Your Digital Assets with Blueprnt v1.1.0?
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Register your studio to receive pre-launch download links, early access licenses, and release updates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/lab"
              className="w-full sm:w-auto bg-sky-600 hover:bg-sky-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              Register for Pre-Launch Release <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/docs"
              className="w-full sm:w-auto bg-slate-900 border border-slate-700 text-slate-200 font-bold py-4 px-8 rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              Browse Technical Knowledgebase
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
