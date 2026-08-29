"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, Download, Zap, Database, CloudOff,
  BookOpen, ShoppingCart, Gift, Users, Calendar, Banknote, Receipt, BarChart, Printer,
  Building2, GraduationCap, Landmark, Command, Terminal, Monitor, CheckCircle2,
  FileSpreadsheet, ShieldCheck
} from "lucide-react";
import shelfData from "@/content/shelfmaster.json";

const moduleIcons: Record<string, typeof BookOpen> = {
  BookOpen, ShoppingCart, Gift, Users, Calendar, Banknote, Receipt, BarChart, Printer,
};

export default function ShelfMasterPage() {
  const { eyebrow, hero, problems, modules, deployments, architecture, pricing } = shelfData;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* ── 1. Hero Section ── */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 border-b border-border bg-gradient-to-br from-indigo-500/10 via-background to-background">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 text-center relative z-10">
          
          <span className="inline-block mb-6 px-4 py-1.5 text-xs md:text-sm font-semibold border border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full">
            {eyebrow}
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight text-foreground mb-6">
            {hero.title}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            {hero.subtitle}
          </p>
          
          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto mb-12">
            <a
              href={hero.ctaPrimaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold py-4 px-8 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md"
            >
              {hero.ctaPrimary} <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href={hero.ctaSecondaryHref}
              className="w-full sm:w-auto bg-background text-foreground border border-input text-sm font-bold py-4 px-8 rounded-lg hover:bg-muted transition-all flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4" /> {hero.ctaSecondary}
            </Link>
          </div>
          
          {/* Core Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm font-medium text-muted-foreground pt-6 border-t border-border/60 max-w-4xl mx-auto">
            {hero.coreMetrics.map((metric, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0" />
                <span>{metric}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 2. The Problem with Legacy Spreadsheets & Web SaaS ── */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              {problems.title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              {problems.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-8 flex flex-col shadow-sm">
              <div className="p-3 bg-red-500/10 text-red-500 rounded-lg w-fit mb-4">
                <FileSpreadsheet className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">
                {problems.items[0].title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problems.items[0].desc}
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 flex flex-col shadow-sm">
              <div className="p-3 bg-amber-500/10 text-amber-500 rounded-lg w-fit mb-4">
                <CloudOff className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">
                {problems.items[1].title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problems.items[1].desc}
              </p>
            </div>

            <div className="bg-card border border-indigo-500/40 rounded-xl p-8 flex flex-col shadow-md bg-indigo-500/5">
              <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-lg w-fit mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">
                {problems.items[2].title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problems.items[2].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Nine Core Integrated Modules ── */}
      <section className="py-20 bg-muted/20 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              {modules.title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              {modules.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.items.map((m, idx) => {
              const Icon = moduleIcons[m.icon] ?? BookOpen;
              return (
                <Card key={idx} className="border-border hover:border-indigo-500/50 transition-colors shadow-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-indigo-500/10 rounded-lg text-indigo-500 shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-base font-bold">{idx + 1}. {m.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Real-World Deployments ── */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              {deployments.title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              {deployments.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deployments.items.map((dep, idx) => (
              <div key={idx} className="bg-card border border-border rounded-2xl p-8 text-center flex flex-col items-center shadow-sm">
                <div className="p-4 bg-indigo-500/10 text-indigo-500 rounded-full mb-6">
                  {idx === 0 ? <Building2 className="h-8 w-8" /> : idx === 1 ? <GraduationCap className="h-8 w-8" /> : <Landmark className="h-8 w-8" />}
                </div>
                <h3 className="font-bold text-xl text-foreground mb-3">{dep.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{dep.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Technical Architecture & Platform Compatibility ── */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-6 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                System Compatibility Matrix
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                {architecture.title}
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                {architecture.description}
              </p>

              <div className="space-y-4 pt-4">
                <div className="border-l-2 border-indigo-500 pl-4">
                  <span className="text-xs font-bold text-slate-400 block">Frontend Stack</span>
                  <span className="text-sm font-semibold text-white">{architecture.frontend}</span>
                </div>
                <div className="border-l-2 border-indigo-500 pl-4">
                  <span className="text-xs font-bold text-slate-400 block">Core Kernel</span>
                  <span className="text-sm font-semibold text-white">{architecture.kernel}</span>
                </div>
                <div className="border-l-2 border-indigo-500 pl-4">
                  <span className="text-xs font-bold text-slate-400 block">Supported Platforms</span>
                  <span className="text-sm font-semibold text-white">{architecture.platforms}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-96 bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl space-y-4">
              <div className="flex items-center gap-3 text-indigo-400 border-b border-slate-800 pb-4">
                <Terminal className="h-6 w-6" />
                <span className="font-bold text-sm">System Footprint Metrics</span>
              </div>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>RAM Usage:</span>
                  <span className="font-mono text-emerald-400 font-bold">&lt; 40MB</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Startup Latency:</span>
                  <span className="font-mono text-emerald-400 font-bold">&lt; 1 Second</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Database Engine:</span>
                  <span className="font-mono text-white font-bold">SQLite3 WAL</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Network Isolation:</span>
                  <span className="font-mono text-white font-bold">100% Offline</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Cloud Dependency:</span>
                  <span className="font-mono text-white font-bold">Zero</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Pricing / AppSumo Section ── */}
      <section id="pricing" className="py-20 bg-muted/20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              {pricing.title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              {pricing.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-amber-500 shadow-xl overflow-hidden">
              <div className="bg-amber-500 text-amber-950 font-bold text-center py-2 text-xs uppercase tracking-wider">
                Limited Time Founder Lifetime Deal
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-border bg-card flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{pricing.planName}</h3>
                    <p className="text-xs text-muted-foreground mb-6">{pricing.desc}</p>
                    <div className="flex items-end gap-2 mb-8">
                      <span className="text-5xl font-extrabold">{pricing.price}</span>
                      <span className="text-sm text-muted-foreground line-through pb-1">{pricing.originalPrice}</span>
                      <span className="text-xs font-semibold text-muted-foreground pb-2">One-Time Payment</span>
                    </div>
                  </div>

                  <Button size="lg" className="w-full h-12 text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
                    <a href={pricing.ctaHref} target="_blank" rel="noopener noreferrer">
                      {pricing.cta}
                    </a>
                  </Button>
                  <p className="text-center text-xs text-muted-foreground mt-4">{pricing.guarantee}</p>
                </div>

                <div className="p-8 md:p-12 bg-muted/30">
                  <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">What&apos;s Included:</h4>
                  <ul className="space-y-3">
                    {pricing.features.map((f, idx) => (
                      <li key={idx} className="flex items-start text-xs text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 mr-3 text-indigo-500 shrink-0 mt-0.5" />
                        <span className="font-medium text-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
}
