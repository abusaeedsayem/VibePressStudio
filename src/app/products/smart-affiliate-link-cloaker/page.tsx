"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  ArrowRight, ShieldCheck, Zap, Database, CheckCircle2, 
  Link as LinkIcon, Globe, ArrowRightLeft, Scale, Clock, 
  Share2, Lock, Sparkles, Building2, Users, FileSpreadsheet, 
  BarChart, Folder, Activity, Shuffle, Bell
} from "lucide-react";
import cloakerData from "@/content/cloaker.json";

const featureIcons: Record<string, typeof LinkIcon> = {
  Link: LinkIcon, ShieldCheck, Scale, BarChart, FileSpreadsheet, Folder,
  Sparkles, Activity, Globe, Shuffle, Share2, Clock
};

export default function SmartAffiliateLinkCloakerPage() {
  const [activeGuideTab, setActiveGuideTab] = useState("phase1");

  const { eyebrow, hero, status, whyUseful, useCases, targetAudience, features, userGuide } = cloakerData;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* ── 1. Hero Section ── */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 border-b border-border bg-gradient-to-b from-blue-500/10 via-background to-background">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 text-center relative z-10">
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="px-4 py-1.5 text-xs md:text-sm font-semibold border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full">
              {eyebrow}
            </span>
            <Badge variant="outline" className="text-xs font-bold px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30">
              <CheckCircle2 className="w-3 h-3 mr-1 inline" /> {hero.readinessBadge}
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
              className="w-full sm:w-auto bg-primary text-primary-foreground text-sm font-bold py-4 px-8 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <Bell className="h-4 w-4" /> {hero.ctaPrimary}
            </Link>
            <Link
              href={hero.ctaSecondaryHref}
              className="w-full sm:w-auto bg-background text-foreground border border-input text-sm font-bold py-4 px-8 rounded-lg hover:bg-muted transition-all flex items-center justify-center gap-2"
            >
              {hero.ctaSecondary}
            </Link>
          </div>
          
          {/* Core Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm font-medium text-muted-foreground pt-6 border-t border-border/60 max-w-4xl mx-auto">
            {hero.coreMetrics.map((metric, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span>{metric}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 2. Development Status & Launch Roadmap ── */}
      <section className="py-16 bg-muted/30 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="bg-card border border-blue-500/30 rounded-2xl p-8 md:p-12 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                  Engineered & Ready
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
                  {status.title}
                </h2>
              </div>
              <Badge className="bg-emerald-600 text-white font-bold text-xs px-3.5 py-1.5 self-start md:self-auto">
                100% Feature Complete
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {status.description}
            </p>

            <div className="bg-background p-6 rounded-xl border border-border space-y-3">
              <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" /> {status.rolloutTitle}
              </h3>
              <p className="text-xs text-muted-foreground font-medium">
                {status.rolloutStatus}
              </p>
              <div className="space-y-2 pt-2">
                {status.rolloutSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Why is Smart Affiliate Link Cloaker Essential? ── */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUseful.items.map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-primary/10 text-primary rounded-lg w-fit mb-4">
                  {idx === 0 ? <ShieldCheck className="h-6 w-6" /> : idx === 1 ? <Lock className="h-6 w-6" /> : idx === 2 ? <Scale className="h-6 w-6" /> : idx === 3 ? <Database className="h-6 w-6" /> : <Zap className="h-6 w-6" />}
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Use Cases ── */}
      <section className="py-20 bg-muted/20 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              {useCases.title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              {useCases.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.items.map((uc, idx) => (
              <Card key={idx} className="border-border bg-card shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider mb-1">
                    Use Case {idx + 1}
                  </div>
                  <CardTitle className="text-lg font-bold">{uc.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground leading-relaxed">{uc.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Detailed Feature Breakdown (FREE & PRO) ── */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 space-y-16">
          
          {/* FREE / Core Features */}
          <div>
            <div className="mb-10 text-center md:text-left">
              <Badge className="bg-primary text-primary-foreground font-bold text-xs px-3 py-1 mb-2">
                Core Included Features
              </Badge>
              <h2 className="text-3xl font-extrabold text-foreground">
                {features.freeTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.freeItems.map((feat, idx) => {
                const Icon = featureIcons[feat.icon] ?? LinkIcon;
                return (
                  <div key={idx} className="p-6 border border-border rounded-xl bg-card shadow-sm space-y-3">
                    <div className="p-2.5 bg-primary/10 text-primary rounded-lg w-fit">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-base text-foreground">{feat.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* PRO / Premium Features */}
          <div>
            <div className="mb-10 text-center md:text-left">
              <Badge className="bg-violet-600 text-white font-bold text-xs px-3 py-1 mb-2">
                Advanced PRO Engine
              </Badge>
              <h2 className="text-3xl font-extrabold text-foreground">
                {features.proTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.proItems.map((feat, idx) => {
                const Icon = featureIcons[feat.icon] ?? Sparkles;
                return (
                  <div key={idx} className="p-6 border border-violet-500/30 rounded-xl bg-violet-500/5 shadow-sm space-y-3">
                    <div className="p-2.5 bg-violet-500/10 text-violet-600 rounded-lg w-fit">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-base text-foreground">{feat.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ── 6. Target Audience ── */}
      <section className="py-20 bg-muted/20 border-b border-border">
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
                <Building2 className="h-5 w-5 text-primary" /> Organizational Focus (Agencies & Publishers)
              </h3>
              <div className="space-y-4">
                {targetAudience.organizational.map((org, idx) => (
                  <div key={idx} className="p-5 border border-border rounded-xl bg-card">
                    <h4 className="font-bold text-sm text-foreground mb-1">{org.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{org.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Focus */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-3">
                <Users className="h-5 w-5 text-primary" /> Personal Focus (Creators & Solopreneurs)
              </h3>
              <div className="space-y-4">
                {targetAudience.personal.map((per, idx) => (
                  <div key={idx} className="p-5 border border-border rounded-xl bg-card">
                    <h4 className="font-bold text-sm text-foreground mb-1">{per.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{per.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Step-by-Step User Installation & Setup Guide ── */}
      <section className="py-20 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
              User Guide
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
                <TabsTrigger value="phase1" className="text-xs font-bold py-2.5">Phase 1: Installation</TabsTrigger>
                <TabsTrigger value="phase2" className="text-xs font-bold py-2.5">Phase 2: First Link</TabsTrigger>
                <TabsTrigger value="phase3" className="text-xs font-bold py-2.5">Phase 3: Auto-Linker</TabsTrigger>
                <TabsTrigger value="phase4" className="text-xs font-bold py-2.5">Phase 4: FTC Disclosure</TabsTrigger>
              </TabsList>

              {userGuide.phases.map((ph, idx) => {
                const tabVal = `phase${idx + 1}`;
                return (
                  <TabsContent key={idx} value={tabVal} className="focus-visible:outline-none">
                    <Card className="border-border shadow-sm p-6 md:p-8 space-y-6 bg-card">
                      <h3 className="text-xl font-bold text-foreground border-b border-border pb-3">
                        {ph.phase}
                      </h3>
                      <ol className="space-y-4">
                        {ph.steps.map((step, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-4 text-sm text-foreground">
                            <span className="w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
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
              href="/lab"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm py-4 px-8 rounded-xl shadow-lg transition-all"
            >
              Register for Launch Notifications <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
