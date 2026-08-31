"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "@/data/products";
import { 
  ArrowRight, Package, Monitor, CheckCircle2, Zap, Database, 
  CloudOff, ShieldCheck, Download, Code2, Lock, Scale, Bell
} from "lucide-react";
import homeData from "@/content/home.json";

export default function HomePage() {
  const [filter, setFilter] = useState<"all" | "wordpress-plugin" | "desktop-app">("all");

  const filteredProducts = filter === "all" ? products : products.filter(p => p.category === filter);
  const { hero, valueProps, flagship, standards, globalCta } = homeData;

  return (
    <div className="flex flex-col min-h-screen bg-background">

      {/* ── 1. Hero Section ── */}
      <section className="relative bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-28 px-4 md:px-6 overflow-hidden border-b border-border">
        <div className="max-w-[1280px] mx-auto text-center relative z-10">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
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
              className="w-full sm:w-auto bg-primary text-primary-foreground text-sm font-bold py-4 px-8 rounded-full hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              {hero.ctaPrimary} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/lab"
              className="w-full sm:w-auto bg-background text-foreground border border-input text-sm font-bold py-4 px-8 rounded-full hover:bg-muted transition-all flex items-center justify-center gap-2"
            >
              {hero.ctaSecondary}
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
              Our engineering principles prioritize speed, offline reliability, and zero unnecessary dependencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.pillars.map((pillar, idx) => {
              return (
                <div 
                  key={idx} 
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all flex flex-col"
                >
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 text-primary">
                    {idx === 0 ? <Database className="h-6 w-6" /> : idx === 1 ? <CloudOff className="h-6 w-6" /> : idx === 2 ? <ShieldCheck className="h-6 w-6" /> : <Zap className="h-6 w-6" />}
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    Core Pillar {idx + 1}: {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
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

        {/* Category Toggles */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`text-xs font-bold px-5 py-2.5 rounded-full transition-all ${
              filter === "all"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            All Software
          </button>
          <button
            onClick={() => setFilter("wordpress-plugin")}
            className={`text-xs font-bold px-5 py-2.5 rounded-full transition-all ${
              filter === "wordpress-plugin"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            WordPress Plugins
          </button>
          <button
            onClick={() => setFilter("desktop-app")}
            className={`text-xs font-bold px-5 py-2.5 rounded-full transition-all ${
              filter === "desktop-app"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Desktop Applications
          </button>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all flex flex-col"
            >
              {/* Top Banner */}
              <div className={`p-8 ${
                p.category === "wordpress-plugin" 
                  ? "bg-gradient-to-r from-primary to-indigo-600 text-white" 
                  : "bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
              }`}>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider bg-white text-primary px-3 py-1 rounded-full shadow-sm">
                    {p.categoryLabel}
                  </span>
                  <span className="text-xs font-mono font-semibold text-white">
                    {p.version}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {p.name}
                </h3>
                <p className="text-sm text-white leading-snug">
                  {p.tagline}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {p.description}
                </p>

                {/* Key Architecture Highlights */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                    Key Architecture Highlights:
                  </h4>
                  <div className="space-y-2">
                    {p.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span><strong>{feat.title}:</strong> {feat.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Distribution Channels */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                    Distribution Channels:
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
                    {p.category === "wordpress-plugin" ? (
                      <>
                        <span className="bg-muted px-2.5 py-1 rounded border">100% Feature Complete (v1.0.0)</span>
                        <span className="bg-muted px-2.5 py-1 rounded border">Pre-Launch Registration</span>
                      </>
                    ) : (
                      <>
                        <span className="bg-muted px-2.5 py-1 rounded border">80% Production Ready</span>
                        <span className="bg-muted px-2.5 py-1 rounded border">Pre-Launch Registration</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Action Links */}
                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/products/${p.slug}`}
                    className="flex-1 bg-primary text-primary-foreground text-xs font-bold py-3 px-5 rounded-lg hover:bg-primary/90 transition-colors text-center flex items-center justify-center gap-1.5"
                  >
                    Explore Product Details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/lab"
                    className="flex-1 bg-muted text-foreground border border-input text-xs font-bold py-3 px-5 rounded-lg hover:bg-muted/80 transition-colors text-center flex items-center justify-center gap-1.5"
                  >
                    Register for Launch Updates
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
              <div className="p-3 bg-amber-500/10 text-amber-500 rounded-lg w-fit mb-4">
                <Lock className="h-6 w-6" />
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
