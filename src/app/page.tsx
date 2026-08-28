"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "@/data/products";
import { ArrowRight, Package, Monitor, CheckCircle2, Zap, Database, CloudOff, Shield } from "lucide-react";

const stats = [
  { icon: Zap, label: "<1s Startup Time", desc: "Desktop app cold boot" },
  { icon: Database, label: "Zero DB Bloat", desc: "Custom table architecture" },
  { icon: CloudOff, label: "100% Offline", desc: "No cloud dependency" },
  { icon: Shield, label: "FTC Compliant", desc: "Auto-disclosure injector" },
];

export default function HomePage() {
  const [filter, setFilter] = useState<"all" | "wordpress-plugin" | "desktop-app">("all");

  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  return (
    <div className="flex flex-col min-h-screen bg-background">

      {/* ── Hero Section ── */}
      <section className="bg-primary text-on-primary py-20 md:py-28 px-4 md:px-6 overflow-hidden relative">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8 text-label-caps text-white/80">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Now available — ShelfMaster v1.2 released
          </div>

          <h1 className="text-headline-lg-mobile md:text-headline-xl mb-6 leading-tight text-white">
            Engineered for Performance.{" "}
            <br className="hidden md:block" />
            Built for Growth.
          </h1>

          <p className="text-body-lg text-primary-fixed mb-10 max-w-2xl mx-auto leading-relaxed">
            High-performance WordPress Plugins, Offline-First Desktop Systems, and Creator Tools crafted by{" "}
            <span className="font-semibold text-white">Abu Saeed Sayem</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#products"
              className="bg-white text-primary text-label-caps py-4 px-8 rounded-full hover:bg-surface-container-lowest transition-colors w-full sm:w-auto text-center shadow-lg font-bold flex items-center justify-center gap-2"
            >
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://appsumo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white text-label-caps py-4 px-8 rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              View on AppSumo / Freemius
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-inverse-surface text-inverse-on-surface py-8 px-4 md:px-6">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex flex-col items-center text-center py-4 md:py-0 px-4 gap-2">
              <Icon className="h-5 w-5 text-primary-fixed-dim mb-1" />
              <span className="font-bold text-base text-white">{label}</span>
              <span className="text-xs text-inverse-on-surface/60">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Products Section ── */}
      <section id="products" className="px-4 md:px-6 max-w-[1280px] mx-auto py-20 w-full">
        <div className="text-center mb-12">
          <p className="text-label-caps text-primary mb-3">Our Products</p>
          <h2 className="text-headline-lg text-on-background mb-4">
            Flagship Software Solutions
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Discover tools designed to elevate your workflow and boost your online presence.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[
            { key: "all", label: "All Solutions" },
            { key: "wordpress-plugin", label: "WordPress Plugins" },
            { key: "desktop-app", label: "Desktop Software" },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as typeof filter)}
              className={`text-label-caps px-5 py-2.5 rounded-full transition-all duration-200 ${
                filter === tab.key
                  ? "bg-primary text-on-primary shadow-sm"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-surface border border-border-subtle rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 premium-glow flex flex-col"
            >
              {/* Image / Visual area */}
              <div className="aspect-[16/9] relative overflow-hidden bg-surface-container-high">
                {/* Gradient placeholder — replace with actual screenshots */}
                <div className={`absolute inset-0 flex items-center justify-center ${
                  product.category === "wordpress-plugin"
                    ? "bg-gradient-to-br from-blue-600 to-indigo-800"
                    : "bg-gradient-to-br from-slate-700 to-indigo-900"
                }`}>
                  {product.category === "wordpress-plugin" ? (
                    <Package className="h-20 w-20 text-white/20" />
                  ) : (
                    <Monitor className="h-20 w-20 text-white/20" />
                  )}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white font-bold text-lg">{product.name}</p>
                    <p className="text-white/70 text-sm">{product.tagline}</p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-headline-md text-on-background">{product.name}</h3>
                  <span className={`text-label-caps px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${
                    product.category === "wordpress-plugin"
                      ? "bg-success/10 text-success"
                      : "bg-primary-container/10 text-primary-container"
                  }`}>
                    {product.category === "wordpress-plugin" ? "WordPress Plugin" : "Desktop Software"}
                  </span>
                </div>

                <p className="text-body-md text-on-surface-variant mb-5">{product.description.slice(0, 140)}...</p>

                {/* Key highlights */}
                {product.keyFeatures.slice(0, 3).map(f => (
                  <div key={f.title} className="flex items-center gap-2 text-sm text-on-surface-variant mb-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    {f.title}
                  </div>
                ))}

                {/* Tech Stack badges */}
                <div className="flex flex-wrap gap-2 mt-5 mb-6">
                  {product.techStack.slice(0, 4).map(tech => (
                    <span key={tech} className="text-[11px] font-mono bg-surface-container-low text-on-surface-variant px-2.5 py-1 rounded border border-border-subtle">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto flex gap-3">
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex-1 bg-primary text-on-primary text-label-caps py-3 px-6 rounded hover:bg-primary-container transition-colors text-center flex items-center justify-center gap-2"
                  >
                    Explore Product <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href={`/products/${product.slug}#pricing`}
                    className="border border-border-strong text-on-surface text-label-caps py-3 px-6 rounded hover:bg-surface-container-low transition-colors text-center"
                  >
                    Pricing
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Distribution Channels ── */}
      <section className="bg-surface-container-low px-4 md:px-6 py-20 border-y border-border-subtle">
        <div className="max-w-[1280px] mx-auto text-center">
          <p className="text-label-caps text-primary mb-3">Where to Get It</p>
          <h2 className="text-headline-lg text-on-background mb-4">Distribution Channels</h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-12">
            Available across all major marketplaces and direct download portals.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "WordPress.org", sub: "Free plugin directory", color: "from-blue-500 to-blue-600" },
              { name: "Freemius", sub: "Pro license & billing", color: "from-indigo-500 to-purple-600" },
              { name: "AppSumo", sub: "Lifetime deal offers", color: "from-amber-500 to-orange-600" },
              { name: "Direct Download", sub: "Get it from our site", color: "from-slate-600 to-slate-800" },
            ].map(ch => (
              <div key={ch.name} className="bg-surface rounded-xl border border-border-subtle p-6 hover:shadow-md hover:border-primary/20 transition-all text-left">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${ch.color} mb-4`} />
                <h3 className="font-semibold text-on-background text-sm">{ch.name}</h3>
                <p className="text-xs text-on-surface-variant mt-1">{ch.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Architect Spotlight ── */}
      <section className="px-4 md:px-6 max-w-[1280px] mx-auto py-20 w-full">
        <div className="bg-surface border border-border-subtle rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 premium-glow">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-3xl font-extrabold text-white flex-shrink-0">
            AS
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-label-caps text-primary mb-2">Lead Architect</p>
            <h3 className="text-headline-md text-on-background mb-3">Abu Saeed Sayem</h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed max-w-2xl">
              Building high-performance, offline-first systems and WordPress plugins with zero bloat. Every product at VibePress Studio is engineered with a relentless focus on speed, reliability, and the end user.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="https://abusaeedsayem.netlify.app" target="_blank" rel="noopener noreferrer"
                className="text-label-caps border border-border-strong text-on-surface px-5 py-2.5 rounded hover:bg-surface-container-low transition-colors">
                Developer Portfolio ↗
              </a>
              <a href="https://github.com/abusaeedsayem" target="_blank" rel="noopener noreferrer"
                className="text-label-caps border border-border-strong text-on-surface px-5 py-2.5 rounded hover:bg-surface-container-low transition-colors">
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
