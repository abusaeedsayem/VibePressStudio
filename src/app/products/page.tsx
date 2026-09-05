"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { 
  Package, ArrowRight, CheckCircle2, Code2, Users, 
  Share2, Sparkles, Bell, ShieldCheck, Zap,
  Layers, ExternalLink, BookOpen, Activity, Globe
} from "lucide-react";
import cloakerData from "@/content/cloaker.json";

export default function ProductsDirectoryPage() {
  const [featureCategory, setFeatureCategory] = useState<string>("all");
  const { coreFeatures24, navigation } = cloakerData;

  const filteredFeatures = featureCategory === "all" 
    ? coreFeatures24 
    : coreFeatures24.filter(f => f.category === featureCategory);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Directory Hero Block */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-16 md:py-24 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1 mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold text-primary">VibePress Software Suite</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
            Production-Grade WordPress Plugin
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Engineered natively upon WordPress core database schema (wp_posts and wp_postmeta) for uncompromising speed, compliance, and complete data sovereignty.
          </p>
        </div>
      </section>

      {/* Directory Items List */}
      <section className="py-16 px-4 md:px-6 max-w-[1280px] mx-auto w-full">
        <div className="space-y-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-xl transition-all"
            >
              {/* Product Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-border pb-6 mb-8">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {product.categoryLabel}
                    </span>
                    <span className="text-xs font-mono font-medium text-muted-foreground border border-border px-2.5 py-0.5 rounded">
                      Current Release: {product.version}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                      24 Core Features Built-in
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                    {product.name}
                  </h2>
                  <p className="text-base text-primary font-medium mt-1">
                    {product.tagline}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href={`/products/${product.slug}`}
                    className="bg-primary text-primary-foreground text-sm font-bold py-3.5 px-6 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-sm hover:shadow-md text-center"
                  >
                    View Product Page &amp; Features <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/docs"
                    className="bg-background text-foreground border border-border text-sm font-bold py-3.5 px-5 rounded-xl hover:bg-muted transition-colors flex items-center justify-center gap-2 text-center"
                  >
                    <BookOpen className="h-4 w-4 text-primary" /> Technical Docs
                  </Link>
                </div>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-4xl">
                {product.description}
              </p>

              {/* Interactive 24 Core Features Mini-Explorer */}
              <div className="bg-muted/30 border border-border rounded-xl p-6 mb-8 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
                  <div>
                    <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" /> 24 Core Features Master Catalog
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Filter all built-in capabilities included in the suite</p>
                  </div>
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                    {["all", "redirection", "compliance", "automation", "monetization", "analytics"].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setFeatureCategory(cat)}
                        className={`text-xs capitalize font-semibold px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                          featureCategory === cat
                            ? "bg-primary text-primary-foreground"
                            : "bg-background text-muted-foreground hover:bg-muted border border-border"
                        }`}
                      >
                        {cat === "all" ? "All (24)" : cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {filteredFeatures.map((feat) => (
                    <div key={feat.id} className="p-3.5 bg-card border border-border rounded-lg space-y-1.5 hover:border-primary/40 transition-colors">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-bold text-primary">#{feat.id}</span>
                        <span className="text-[10px] font-semibold uppercase bg-muted px-2 py-0.5 rounded text-muted-foreground border">
                          {feat.badge}
                        </span>
                      </div>
                      <h4 className="font-bold text-xs text-foreground leading-snug">{feat.title}</h4>
                      <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">{feat.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Three-Column Spec Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-border/60">
                {/* Technical Foundation */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                    <Code2 className="h-4 w-4 text-primary" /> Technical Foundation
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.techStack.map((tech, idx) => (
                      <span key={idx} className="text-xs font-mono bg-muted text-muted-foreground px-2.5 py-1 rounded border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Target Users */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                    <Users className="h-4 w-4 text-primary" /> Target Users
                  </div>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {product.targetAudience.map((user, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span>{user}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Admin Navigation & Distribution */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                    <Layers className="h-4 w-4 text-primary" /> Admin Menu Structure
                  </div>
                  <div className="space-y-1.5 text-xs text-muted-foreground">
                    <div className="font-semibold text-foreground">
                      Main Menu: <code className="bg-muted px-1.5 py-0.5 rounded text-primary">{navigation.menuName}</code>
                    </div>
                    <p className="text-[11px] leading-relaxed">
                      8 Submenus: All Links, Add New Link, Categories, Tags, Statistics, Tools &amp; Migration, Settings, Documentation.
                    </p>
                    <div className="pt-2">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                      >
                        Explore detailed specifications &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Engineering Roadmap Teaser */}
      <section id="roadmap" className="py-16 px-4 md:px-6 max-w-[1280px] mx-auto w-full">
        <div className="bg-gradient-to-r from-primary to-indigo-600 text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
              <Sparkles className="h-3.5 w-3.5" /> Upcoming Software Roadmap
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              In The Studio Pipeline
            </h3>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              We are continually architecting new tools, including automated content staging workflows and enterprise WordPress performance utilities.
            </p>
          </div>

          <Link
            href="/lab"
            className="bg-white text-primary text-sm font-bold py-3.5 px-7 rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2 shrink-0 shadow-md"
          >
            <Bell className="h-4 w-4 text-primary" /> Subscribe to Release Notes
          </Link>
        </div>
      </section>

    </div>
  );
}
