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
  BarChart, Folder, Activity, Shuffle, Bell, Code2, Terminal,
  HelpCircle, BookOpen, Layers, Check, ChevronRight
} from "lucide-react";
import cloakerData from "@/content/cloaker.json";

const featureIcons: Record<string, typeof LinkIcon> = {
  Link: LinkIcon, ShieldCheck, Scale, BarChart, FileSpreadsheet, Folder,
  Sparkles, Activity, Globe, Shuffle, Share2, Clock, ArrowRightLeft
};

export default function SmartAffiliateLinkCloakerPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeGuideTab, setActiveGuideTab] = useState("phase1");

  const { eyebrow, hero, status, whyUseful, useCases, targetAudience, features, userGuide } = cloakerData;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* ── 1. Hero Section ── */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-24 border-b border-border bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 text-center relative z-10">
          
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="px-4 py-1.5 text-xs md:text-sm font-semibold border border-primary/30 bg-primary/10 text-primary rounded-full">
              {eyebrow}
            </span>
            <Badge variant="outline" className="text-xs font-bold px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1 inline" /> {hero.readinessBadge}
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
              className="w-full sm:w-auto bg-primary text-primary-foreground text-sm font-bold py-4 px-8 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Bell className="h-4 w-4" /> {hero.ctaPrimary}
            </Link>
            <Link
              href={hero.ctaSecondaryHref}
              className="w-full sm:w-auto bg-background text-foreground border border-input text-sm font-bold py-4 px-8 rounded-xl hover:bg-muted transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="h-4 w-4" /> {hero.ctaSecondary}
            </Link>
          </div>
          
          {/* Core Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm font-medium text-muted-foreground pt-6 border-t border-border/60 max-w-4xl mx-auto">
            {hero.coreMetrics.map((metric, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-card px-3 py-1.5 rounded-lg border border-border/60">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span>{metric}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 2. Quick Navigation Tabs ── */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur border-b border-border shadow-xs">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            <button
              onClick={() => setActiveTab("overview")}
              className={`text-xs md:text-sm font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                activeTab === "overview" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              Overview & Architecture
            </button>
            <button
              onClick={() => setActiveTab("features")}
              className={`text-xs md:text-sm font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                activeTab === "features" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              Core & PRO Features
            </button>
            <button
              onClick={() => setActiveTab("use-cases")}
              className={`text-xs md:text-sm font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                activeTab === "use-cases" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              All Use Cases
            </button>
            <button
              onClick={() => setActiveTab("guide")}
              className={`text-xs md:text-sm font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                activeTab === "guide" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              Setup & User Guide
            </button>
            <button
              onClick={() => setActiveTab("target")}
              className={`text-xs md:text-sm font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                activeTab === "target" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              Who Needs This
            </button>
          </div>
        </div>
      </div>

      {/* ── 3. Main Product Content ── */}
      <main className="flex-1 py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 space-y-20">

          {/* SECTION: Overview & Before/After */}
          {(activeTab === "overview" || activeTab === "all") && (
            <div className="space-y-16">
              
              {/* What is SALC & Link Transformation Demo */}
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm space-y-8">
                <div>
                  <Badge className="bg-primary/10 text-primary border-primary/30 font-bold text-xs px-3 py-1 mb-3">
                    Product Summary
                  </Badge>
                  <h2 className="text-3xl font-extrabold text-foreground mb-4">
                    1. What is Smart Affiliate Link Cloaker?
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed max-w-4xl">
                    Smart Affiliate Link Cloaker is an enterprise-grade WordPress plugin that turns raw merchant URLs into clean, branded, trackable links hosted on your own domain.
                  </p>
                </div>

                {/* Before / After Box */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-destructive block">
                      Before (Raw Merchant Link)
                    </span>
                    <div className="bg-background p-3.5 rounded-lg border border-border font-mono text-xs text-muted-foreground break-all">
                      https://merchant.com/?aff_id=123&subid=tracking_param&coupon=SUMMER
                    </div>
                  </div>

                  <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
                      After (Clean Branded Link)
                    </span>
                    <div className="bg-background p-3.5 rounded-lg border border-border font-mono text-xs text-foreground font-semibold break-all space-y-1">
                      <div>https://yourdomain.com/go/best-vpn</div>
                      <div className="text-muted-foreground text-[11px]">https://yourdomain.com/go/software/best-vpn <span className="text-primary">(with Category Path)</span></div>
                    </div>
                  </div>
                </div>

                {/* Under The Hood Grid */}
                <div className="pt-6 border-t border-border space-y-4">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-primary" /> Under the Hood Architecture
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-background p-4 rounded-xl border border-border space-y-2">
                      <div className="font-bold text-sm text-foreground">Custom Post Type</div>
                      <code className="text-xs bg-muted px-2 py-0.5 rounded text-primary">salc_link</code>
                      <p className="text-xs text-muted-foreground">Each cloaked link is a WordPress post. Title holds link name; slug becomes URL path.</p>
                    </div>

                    <div className="bg-background p-4 rounded-xl border border-border space-y-2">
                      <div className="font-bold text-sm text-foreground">Rewrite Layer</div>
                      <code className="text-xs bg-muted px-2 py-0.5 rounded text-primary">RewriteEngine.php</code>
                      <p className="text-xs text-muted-foreground">Top-priority rewrite rules <code className="text-[10px]">^go/([^/]+)/?$</code> with 24h transient caching.</p>
                    </div>

                    <div className="bg-background p-4 rounded-xl border border-border space-y-2">
                      <div className="font-bold text-sm text-foreground">Redirect Layer</div>
                      <code className="text-xs bg-muted px-2 py-0.5 rounded text-primary">RedirectEngine.php</code>
                      <p className="text-xs text-muted-foreground">Hooks template_redirect:1, checks expiration, Stripe, 301/302/307/200 iFrame.</p>
                    </div>

                    <div className="bg-background p-4 rounded-xl border border-border space-y-2">
                      <div className="font-bold text-sm text-foreground">Analytics Layer</div>
                      <code className="text-xs bg-muted px-2 py-0.5 rounded text-primary">ClickTracker.php</code>
                      <p className="text-xs text-muted-foreground">Logs to local DB table <code className="text-[10px]">wp_salc_clicks</code> with bot filtering & GDPR anonymization.</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Why Essential */}
              <div>
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl font-extrabold text-foreground mb-4">
                    {whyUseful.title}
                  </h2>
                  <p className="text-muted-foreground text-base">
                    {whyUseful.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {whyUseful.items.map((item, idx) => (
                    <div key={idx} className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                      <div className="p-3 bg-primary/10 text-primary rounded-lg w-fit">
                        {idx === 0 ? <ShieldCheck className="h-6 w-6" /> : idx === 1 ? <Lock className="h-6 w-6" /> : idx === 2 ? <Scale className="h-6 w-6" /> : idx === 3 ? <Database className="h-6 w-6" /> : <Zap className="h-6 w-6" />}
                      </div>
                      <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* SECTION: Features Breakdown */}
          {(activeTab === "features" || activeTab === "all") && (
            <div className="space-y-16">
              
              {/* Core Features */}
              <div>
                <div className="mb-8 flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <Badge className="bg-primary text-primary-foreground font-bold text-xs px-3 py-1 mb-1">
                      Included Core Features
                    </Badge>
                    <h2 className="text-3xl font-extrabold text-foreground">
                      {features.freeTitle}
                    </h2>
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground hidden sm:block">
                    Standard in Free Edition
                  </span>
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
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* PRO Features */}
              <div>
                <div className="mb-8 flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <Badge className="bg-violet-600 text-white font-bold text-xs px-3 py-1 mb-1">
                      Advanced PRO Engine
                    </Badge>
                    <h2 className="text-3xl font-extrabold text-foreground">
                      {features.proTitle}
                    </h2>
                  </div>
                  <span className="text-xs font-semibold text-violet-600 dark:text-violet-400 hidden sm:block">
                    Unlocked with PRO License
                  </span>
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
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          )}

          {/* SECTION: Use Cases */}
          {(activeTab === "use-cases" || activeTab === "all") && (
            <div>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-extrabold text-foreground mb-4">
                  {useCases.title}
                </h2>
                <p className="text-muted-foreground text-base">
                  {useCases.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {useCases.items.map((uc, idx) => (
                  <Card key={idx} className="border-border bg-card shadow-sm hover:border-primary/30 transition-colors">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                          Scenario {idx + 1}
                        </span>
                        <Badge variant="outline" className="text-[10px]">
                          SALC Workflow
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-bold text-foreground mt-1">{uc.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* SECTION: Setup & User Guide */}
          {(activeTab === "guide" || activeTab === "all") && (
            <div>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
                  Technical Walkthrough
                </span>
                <h2 className="text-3xl font-extrabold text-foreground mb-3">
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
                    <TabsTrigger value="phase3" className="text-xs font-bold py-2.5">Phase 3: PRO Engine</TabsTrigger>
                    <TabsTrigger value="phase4" className="text-xs font-bold py-2.5">Phase 4: Compliance</TabsTrigger>
                  </TabsList>

                  {userGuide.phases.map((ph, idx) => {
                    const tabVal = `phase${idx + 1}`;
                    return (
                      <TabsContent key={idx} value={tabVal} className="focus-visible:outline-none">
                        <Card className="border-border shadow-sm p-6 md:p-8 space-y-6 bg-card">
                          <h3 className="text-xl font-bold text-foreground border-b border-border pb-3 flex items-center justify-between">
                            <span>{ph.phase}</span>
                            <Badge className="bg-primary/10 text-primary border-primary/20">Step {idx + 1} of 4</Badge>
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
            </div>
          )}

          {/* SECTION: Who Needs This */}
          {(activeTab === "target" || activeTab === "all") && (
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-extrabold text-foreground mb-4">
                  {targetAudience.title}
                </h2>
                <p className="text-muted-foreground text-base">
                  {targetAudience.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Organizational Focus */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-3">
                    <Building2 className="h-5 w-5 text-primary" /> Organizational Focus (Agencies & Publishers)
                  </h3>
                  <div className="space-y-4">
                    {targetAudience.organizational.map((org, idx) => (
                      <div key={idx} className="p-5 border border-border rounded-xl bg-card">
                        <h4 className="font-bold text-sm text-foreground mb-1">{org.title}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{org.desc}</p>
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
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{per.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Does Not Need It & Decision Checklist */}
              <div className="bg-muted/30 border border-border rounded-2xl p-8 space-y-6">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" /> Decision Checklist: Choose SALC if you answer YES to &ge; 2:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs md:text-sm">
                  <div className="flex items-center gap-2 p-3 bg-background rounded-lg border border-border font-medium">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Do you publish affiliate links?</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-background rounded-lg border border-border font-medium">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Need yourdomain.com/go/ branding?</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-background rounded-lg border border-border font-medium">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Track clicks without 3rd-party SaaS?</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-background rounded-lg border border-border font-medium">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Stay compliant (Amazon/FTC/GDPR)?</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-background rounded-lg border border-border font-medium">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Rotate, expire, or geo-route links?</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-background rounded-lg border border-border font-medium">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Auto-link keywords in blog history?</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Bottom Pre-launch Banner */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center space-y-6">
            <h2 className="text-3xl font-extrabold">Ready to Supercharge Your WordPress Affiliate Engine?</h2>
            <p className="text-white/90 max-w-2xl mx-auto text-base">
              Register for pre-launch notifications to receive instant early access download links as soon as official approval is granted.
            </p>
            <div className="pt-2">
              <Link
                href="/lab"
                className="inline-flex items-center gap-2 bg-background text-foreground hover:bg-muted font-bold text-sm py-4 px-8 rounded-xl shadow-lg transition-all"
              >
                Register for Early Access Updates <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}
