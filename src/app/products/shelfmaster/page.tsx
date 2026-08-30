"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  ArrowRight, Download, Zap, Database, CloudOff,
  BookOpen, ShoppingCart, Gift, Users, Calendar, Banknote, Receipt, BarChart, Printer,
  Building2, GraduationCap, Landmark, Command, Terminal, Monitor, CheckCircle2,
  FileSpreadsheet, ShieldCheck, Clock, Key, Sparkles, BookMarked, UserCheck, HelpCircle
} from "lucide-react";
import shelfData from "@/content/shelfmaster.json";

const moduleIcons: Record<string, typeof BookOpen> = {
  Monitor, ShoppingCart, BookOpen, Users, Gift, Calendar, Banknote, Receipt, BarChart
};

export default function ShelfMasterPage() {
  const [activeGuideTab, setActiveGuideTab] = useState("part1");

  const { eyebrow, hero, readiness, whyUseful, modules, targetAudience, licensing, roadmap, userGuide } = shelfData;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* ── 1. Hero Section ── */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 border-b border-border bg-gradient-to-br from-indigo-500/10 via-background to-background">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 text-center relative z-10">
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="px-4 py-1.5 text-xs md:text-sm font-semibold border border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full">
              {eyebrow}
            </span>
            <Badge variant="outline" className="text-xs font-bold px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30">
              <Clock className="w-3 h-3 mr-1 inline" /> {hero.readinessBadge}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight text-foreground mb-6">
            {hero.title}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            {hero.subtitle}
          </p>
          
          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto mb-12">
            <Link
              href={hero.ctaPrimaryHref}
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold py-4 px-8 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md"
            >
              {hero.ctaPrimary} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={hero.ctaSecondaryHref}
              className="w-full sm:w-auto bg-background text-foreground border border-input text-sm font-bold py-4 px-8 rounded-lg hover:bg-muted transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="h-4 w-4 text-primary" /> {hero.ctaSecondary}
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

      {/* ── 2. Development Readiness Status (80% Complete) ── */}
      <section className="py-16 bg-muted/30 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="bg-card border border-indigo-500/30 rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-6 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 block mb-1">
                  Status Audit Report
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
                  {readiness.title}
                </h2>
              </div>
              <Badge className="bg-indigo-600 text-white font-bold text-sm px-4 py-2 self-start md:self-auto">
                80% Production-Ready
              </Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 100% Complete */}
              <div className="space-y-4">
                <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" /> {readiness.completeTitle}
                </h3>
                <ul className="space-y-2.5 text-xs md:text-sm text-muted-foreground">
                  {readiness.completeItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 bg-background p-3 rounded-lg border border-border">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Remaining 20% */}
              <div className="space-y-4">
                <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                  <Clock className="h-5 w-5 text-amber-500" /> {readiness.remainingTitle}
                </h3>
                <ul className="space-y-2.5 text-xs md:text-sm text-muted-foreground">
                  {readiness.remainingItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 bg-background p-3 rounded-lg border border-border">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Why ShelfMaster is Useful ── */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              {whyUseful.title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              {whyUseful.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUseful.items.map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-lg w-fit mb-4">
                  {idx === 0 ? <Zap className="h-6 w-6" /> : idx === 1 ? <ShieldCheck className="h-6 w-6" /> : idx === 2 ? <Database className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. The 9 Built Core Modules ── */}
      <section className="py-20 bg-muted/20 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest block mb-2">
              Architecture Breakdown
            </span>
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
                <Card key={idx} className="border-border hover:border-indigo-500/50 transition-colors shadow-sm bg-card">
                  <CardHeader className="pb-3">
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

      {/* ── 5. Target Audience & Use Cases ── */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              {targetAudience.title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              {targetAudience.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Organizational Focus */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-3">
                <Building2 className="h-5 w-5 text-indigo-500" /> Organizational Focus
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {targetAudience.organizational.map((org, idx) => (
                  <div key={idx} className="p-5 border border-border rounded-xl bg-card">
                    <h4 className="font-bold text-sm text-foreground mb-1">{org.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{org.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Focus & Specific Use Cases */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-3">
                <Users className="h-5 w-5 text-indigo-500" /> Personal Focus & Specialized Workflows
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {targetAudience.personal.map((per, idx) => (
                    <div key={idx} className="p-5 border border-border rounded-xl bg-card">
                      <h4 className="font-bold text-sm text-foreground mb-1">{per.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{per.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="p-5 border border-indigo-500/30 rounded-xl bg-indigo-500/5 space-y-2">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Additional Primary Use Cases:</h4>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {targetAudience.otherCases.map((uc, uIdx) => (
                      <li key={uIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
                        <span>{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Security, Licensing, & Lemon Squeezy ── */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-2">
              Enterprise Licensing Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {licensing.title}
            </h2>
            <p className="text-slate-300 text-base mt-3">
              {licensing.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {licensing.features.map((feat, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-4">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl w-fit">
                  {idx === 0 ? <Key className="h-6 w-6" /> : idx === 1 ? <ShieldCheck className="h-6 w-6" /> : <Monitor className="h-6 w-6" />}
                </div>
                <h3 className="font-bold text-lg text-white">{feat.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Launch Roadmap (3 to 4 Weeks) ── */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-2 text-xs font-bold px-3 py-1 border-indigo-500/30 text-indigo-500">
              Release Schedule
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              {roadmap.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {roadmap.weeks.map((w, idx) => (
              <div key={idx} className="border border-border rounded-xl p-6 bg-card flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="font-extrabold text-base text-indigo-500">{w.week}</span>
                  <span className="text-[10px] font-mono bg-muted px-2 py-0.5 rounded text-muted-foreground">Phase {idx + 1}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{w.task}</p>
                {idx === 3 && (
                  <Badge className="bg-emerald-600 text-white text-[10px] font-bold w-fit">Public Launch</Badge>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. End-User Guide: Getting Started ── */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
              Documentation Walkthrough
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              {userGuide.title}
            </h2>
            <p className="text-muted-foreground text-base">
              {userGuide.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs value={activeGuideTab} onValueChange={setActiveGuideTab} className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-muted p-1 rounded-xl mb-8">
                <TabsTrigger value="part1" className="text-xs font-bold py-2.5">Part 1: Installation</TabsTrigger>
                <TabsTrigger value="part2" className="text-xs font-bold py-2.5">Part 2: Library Setup</TabsTrigger>
                <TabsTrigger value="part3" className="text-xs font-bold py-2.5">Part 3: Books & Members</TabsTrigger>
                <TabsTrigger value="part4" className="text-xs font-bold py-2.5">Part 4: Circulation Desk</TabsTrigger>
              </TabsList>

              {userGuide.parts.map((part, idx) => {
                const tabVal = `part${idx + 1}`;
                return (
                  <TabsContent key={idx} value={tabVal} className="focus-visible:outline-none">
                    <Card className="border-border shadow-sm p-6 md:p-8 space-y-6 bg-card">
                      <h3 className="text-xl font-bold text-foreground border-b border-border pb-3">
                        {part.part}
                      </h3>
                      <ol className="space-y-4">
                        {part.steps.map((step, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-4 text-sm text-foreground">
                            <span className="w-7 h-7 rounded-full bg-indigo-500/10 text-indigo-500 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                              {sIdx + 1}
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </Card>
                  </TabsContent>
                );
              })}
            </Tabs>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm py-4 px-8 rounded-xl shadow-lg transition-all"
            >
              Register for ShelfMaster Launch Updates <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
