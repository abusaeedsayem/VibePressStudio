"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "@/data/products";
import { 
  ArrowRight, CheckCircle2, Zap, Database, 
  ShieldCheck, Code2, Lock, Scale, Bell,
  Sparkles, TrendingUp, ChevronRight, Activity,
  Layers, ExternalLink, Copy, Check
} from "lucide-react";
import homeData from "@/content/home.json";

export default function HomePage() {
  const [activeFeatureTab, setActiveFeatureTab] = useState<"architecture" | "highlights" | "scenarios">("highlights");
  const [copied, setCopied] = useState(false);
  const { hero, valueProps, flagship, standards, globalCta } = homeData;

  const handleCopyDemo = () => {
    navigator.clipboard.writeText("https://yoursite.com/go/best-vpn");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">

      {/* ── 1. Hero Section ── */}
      <section className="relative bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-28 px-4 md:px-6 overflow-hidden border-b border-border">
        <div className="max-w-[1280px] mx-auto text-center relative z-10">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6 shadow-xs">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs md:text-sm font-semibold text-primary">
              {hero.eyebrow}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight text-foreground mb-6">
            {hero.title}
          </h1>

          {/* Supporting Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            {hero.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="#products"
              className="w-full sm:w-auto bg-primary text-primary-foreground text-sm font-bold py-4 px-8 rounded-full hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {hero.ctaPrimary} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/lab"
              className="w-full sm:w-auto bg-background text-foreground border border-input text-sm font-bold py-4 px-8 rounded-full hover:bg-muted transition-all flex items-center justify-center gap-2"
            >
              <Bell className="h-4 w-4 text-primary" /> {hero.ctaSecondary}
            </Link>
          </div>

          {/* Trust Proof Bar */}
          <div className="pt-8 border-t border-border/60 max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs md:text-sm font-medium text-muted-foreground">
              {hero.trustBar.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. Studio Value Proposition Block ── */}
      <section className="py-20 px-4 md:px-6 bg-muted/20 border-b border-border">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              {valueProps.title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Our engineering principles prioritize speed, compliance, and 100% data sovereignty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.pillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all flex flex-col group"
              >
                <div className="p-3 bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground text-primary rounded-lg w-fit mb-4 transition-colors">
                  {idx === 0 ? <Database className="h-6 w-6" /> : idx === 1 ? <ShieldCheck className="h-6 w-6" /> : idx === 2 ? <Zap className="h-6 w-6" /> : <Lock className="h-6 w-6" />}
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Featured Flagship Products Showcase ── */}
      <section id="products" className="py-20 px-4 md:px-6 max-w-[1280px] mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
            {flagship.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            {flagship.title}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            {flagship.subtitle}
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/40 transition-all flex flex-col"
            >
              {/* Top Hero Banner */}
              <div className="p-8 bg-gradient-to-r from-primary via-indigo-600 to-violet-600 text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider bg-white text-primary px-3.5 py-1 rounded-full shadow-xs">
                      {p.categoryLabel}
                    </span>
                    <span className="text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-xs">
                      24 Core Features
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-white/90">
                    {p.version}
                  </span>
                </div>

                <h3 className="text-2xl md:text-4xl font-bold mb-3 text-white relative z-10">
                  {p.name}
                </h3>
                <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-3xl relative z-10">
                  {p.tagline}
                </p>

                {/* Stat Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-white/20 relative z-10">
                  <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 text-center border border-white/15">
                    <div className="text-lg md:text-xl font-extrabold text-white">+25% - 40%</div>
                    <div className="text-[11px] text-white/80 font-medium">Click-Through Lift</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 text-center border border-white/15">
                    <div className="text-lg md:text-xl font-extrabold text-white">wp_posts</div>
                    <div className="text-[11px] text-white/80 font-medium">Native DB Tables</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 text-center border border-white/15">
                    <div className="text-lg md:text-xl font-extrabold text-white">Amazon §6</div>
                    <div className="text-[11px] text-white/80 font-medium">ToS Safe Uncloaking</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 text-center border border-white/15">
                    <div className="text-lg md:text-xl font-extrabold text-white">1-Click</div>
                    <div className="text-[11px] text-white/80 font-medium">Stripe Checkouts</div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-1">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                  {p.description}
                </p>

                {/* Interactive Demo Box: Before & After Transformation */}
                <div className="bg-muted/40 border border-border rounded-xl p-5 mb-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" /> Live Link Transformation Engine
                    </span>
                    <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      307 Temporary Redirect
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-background p-3.5 rounded-lg border border-destructive/20 space-y-1.5">
                      <div className="text-[11px] font-bold uppercase text-destructive flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-destructive" /> Fragile Raw Affiliate Link
                      </div>
                      <div className="font-mono text-xs text-muted-foreground break-all">
                        https://network.com/aff_c?offer_id=892&aff_id=99281&custom=subid
                      </div>
                    </div>

                    <div className="bg-background p-3.5 rounded-lg border border-primary/30 space-y-1.5">
                      <div className="text-[11px] font-bold uppercase text-primary flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Clean Branded Cloaked Link
                        </span>
                        <button
                          onClick={handleCopyDemo}
                          className="text-[11px] text-muted-foreground hover:text-primary flex items-center gap-1 cursor-pointer transition-colors"
                          title="Copy demo link"
                        >
                          {copied ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                          <span>{copied ? "Copied" : "Copy"}</span>
                        </button>
                      </div>
                      <div className="font-mono text-xs text-foreground font-bold break-all flex items-center justify-between">
                        <span>https://yoursite.com/go/best-vpn</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Feature Spotlight Tabs */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 border-b border-border pb-3 mb-4">
                    <button
                      onClick={() => setActiveFeatureTab("highlights")}
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${
                        activeFeatureTab === "highlights" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      Core Architecture (24 Features)
                    </button>
                    <button
                      onClick={() => setActiveFeatureTab("scenarios")}
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${
                        activeFeatureTab === "scenarios" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      Practical Use Cases
                    </button>
                    <button
                      onClick={() => setActiveFeatureTab("architecture")}
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${
                        activeFeatureTab === "architecture" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      Admin Navigation (Link Cloaker)
                    </button>
                  </div>

                  {activeFeatureTab === "highlights" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {p.keyFeatures.slice(0, 6).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-muted-foreground bg-muted/30 p-3.5 rounded-xl border border-border/60 hover:border-primary/30 transition-colors">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-foreground">{feat.title}:</strong> {feat.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeFeatureTab === "scenarios" && (
                    <div className="space-y-2.5">
                      <div className="p-3 bg-muted/30 rounded-xl border border-border text-xs space-y-1">
                        <div className="font-bold text-foreground">📱 Platform-Targeted Mobile Arbitrage</div>
                        <p className="text-muted-foreground">Single link dynamically routes iPhone to iOS App Store, Android to Google Play, and PC to desktop download.</p>
                      </div>
                      <div className="p-3 bg-muted/30 rounded-xl border border-border text-xs space-y-1">
                        <div className="font-bold text-foreground">⏱️ Flash Sales & Expirations</div>
                        <p className="text-muted-foreground">Sets deal expiration date or click thresholds. Expired links 302-redirect to fallback roundups, preventing 404s.</p>
                      </div>
                      <div className="p-3 bg-muted/30 rounded-xl border border-border text-xs space-y-1">
                        <div className="font-bold text-foreground">💳 Direct Stripe Payment Links</div>
                        <p className="text-muted-foreground">Sell digital downloads and services directly via Stripe Checkout sessions without WooCommerce overhead.</p>
                      </div>
                    </div>
                  )}

                  {activeFeatureTab === "architecture" && (
                    <div className="p-4 bg-muted/30 rounded-xl border border-border text-xs space-y-3">
                      <div className="flex items-center justify-between border-b border-border pb-2">
                        <span className="font-bold text-foreground flex items-center gap-1.5">
                          <Layers className="h-4 w-4 text-primary" /> Primary WordPress Admin Menu: <span className="text-primary font-mono">Link Cloaker</span>
                        </span>
                        <span className="text-[11px] text-muted-foreground">8 Submenus</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[11px]">
                        <span className="bg-background p-2 rounded border text-center">1. All Links</span>
                        <span className="bg-background p-2 rounded border text-center">2. Add New Link</span>
                        <span className="bg-background p-2 rounded border text-center">3. Categories</span>
                        <span className="bg-background p-2 rounded border text-center">4. Tags</span>
                        <span className="bg-background p-2 rounded border text-center">5. Statistics</span>
                        <span className="bg-background p-2 rounded border text-center">6. Tools &amp; Migration</span>
                        <span className="bg-background p-2 rounded border text-center">7. Settings</span>
                        <span className="bg-background p-2 rounded border text-center">8. Documentation</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Distribution Channels */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                    Production Status &amp; Readiness:
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
                    <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold px-3 py-1 rounded-md border border-emerald-500/30">
                      100% Feature Complete (v1.0.6)
                    </span>
                    <span className="bg-muted px-3 py-1 rounded-md border">
                      Submitted for WordPress.org Review
                    </span>
                    <span className="bg-muted px-3 py-1 rounded-md border">
                      Pre-Launch Early Access Registration Open
                    </span>
                  </div>
                </div>

                {/* Action Links */}
                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/products/${p.slug}`}
                    className="flex-1 bg-primary text-primary-foreground text-sm font-bold py-3.5 px-6 rounded-xl hover:bg-primary/90 transition-all text-center flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    Explore Product Page &amp; 24 Features <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/docs"
                    className="flex-1 bg-background text-foreground border border-input text-sm font-bold py-3.5 px-6 rounded-xl hover:bg-muted transition-colors text-center flex items-center justify-center gap-2"
                  >
                    Read Technical Documentation
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Engineering Standards & Code Quality Section ── */}
      <section className="py-20 px-4 md:px-6 bg-muted/30 border-y border-border">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              {standards.title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              We adhere strictly to official coding standards, security specs, and zero telemetry privacy requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-8 flex flex-col">
              <div className="p-3 bg-primary/10 text-primary rounded-lg w-fit mb-4">
                <Code2 className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-3">
                {standards.items[0].heading}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {standards.items[0].body}
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 flex flex-col">
              <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-lg w-fit mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-3">
                {standards.items[1].heading}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {standards.items[1].body}
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 flex flex-col">
              <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-lg w-fit mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-3">
                {standards.items[2].heading}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {standards.items[2].body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Global Call to Action Section ── */}
      <section className="py-20 px-4 md:px-6 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            {globalCta.title}
          </h2>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 leading-relaxed">
            {globalCta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={globalCta.cta1Href}
              className="w-full sm:w-auto bg-background text-foreground text-sm font-bold py-4 px-8 rounded-full hover:bg-muted transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Bell className="h-4 w-4 text-primary" /> {globalCta.cta1Label}
            </Link>
            <Link
              href={globalCta.cta2Href}
              className="w-full sm:w-auto bg-white text-primary border border-transparent text-sm font-bold py-4 px-8 rounded-full hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <ArrowRight className="h-4 w-4" /> {globalCta.cta2Label}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
