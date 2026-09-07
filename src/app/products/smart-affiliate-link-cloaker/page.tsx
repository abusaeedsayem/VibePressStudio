"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, ShieldCheck, Zap, Database, CheckCircle2, 
  Link as LinkIcon, Globe, ArrowRightLeft, Scale, Clock, 
  Share2, Lock, Sparkles, Building2, Users, FileSpreadsheet, 
  BarChart, Folder, Activity, Shuffle, Bell, Code2, Terminal,
  HelpCircle, BookOpen, Layers, Check, ChevronRight, Copy,
  Search, ExternalLink, TrendingUp, AlertCircle, RefreshCw,
  Sliders, Tag, Settings, FileText
} from "lucide-react";
import cloakerData from "@/content/cloaker.json";

export default function SmartAffiliateLinkCloakerPage() {
  const [activeNavTab, setActiveNavTab] = useState("overview");
  const [featureFilter, setFeatureFilter] = useState("all");
  const [featureSearch, setFeatureSearch] = useState("");
  const [activeUseCaseId, setActiveUseCaseId] = useState("mobile-arbitrage");
  const [activeAdminSubmenu, setActiveAdminSubmenu] = useState(0);
  const [activeGuidePhase, setActiveGuidePhase] = useState(0);
  const [glossarySearch, setGlossarySearch] = useState("");
  const [faqCategory, setFaqCategory] = useState("All");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const [copiedDemo, setCopiedDemo] = useState(false);

  const { 
    eyebrow, hero, status, whyUseful, useCases, 
    targetAudience, coreFeatures24, navigation, 
    glossary, faq, userGuide 
  } = cloakerData;

  const handleCopyDemo = () => {
    navigator.clipboard.writeText("https://yoursite.com/go/best-vpn");
    setCopiedDemo(true);
    setTimeout(() => setCopiedDemo(false), 2000);
  };

  // Filter 24 features
  const filteredFeatures = coreFeatures24.filter((feat) => {
    const matchesCategory = featureFilter === "all" || feat.category === featureFilter;
    const matchesSearch = !featureSearch.trim() || 
      feat.title.toLowerCase().includes(featureSearch.toLowerCase()) ||
      feat.description.toLowerCase().includes(featureSearch.toLowerCase()) ||
      feat.location.toLowerCase().includes(featureSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Filter glossary
  const filteredGlossary = glossary.filter((item) =>
    !glossarySearch.trim() ||
    item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
    item.definition.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  // Filter FAQ
  const faqCategories = ["All", "General & Setup", "Redirects & Performance", "SEO & Compliance", "Link Management & Automation", "Migration & Integrations"];
  const filteredFaq = faq.filter((q) =>
    faqCategory === "All" || q.category === faqCategory
  );

  const activeUseCase = useCases.items.find(u => u.id === activeUseCaseId) || useCases.items[0];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* ── 1. Hero Section ── */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-24 border-b border-border bg-gradient-to-b from-primary/10 via-background to-background overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 text-center relative z-10">
          
          {/* Plugin Icon Badge */}
          <div className="inline-block p-3 rounded-2xl bg-white border border-primary/20 shadow-2xl mb-6 hover:scale-105 transition-transform">
            <img src="/Smart-Affiliate-Link-Cloaker-icon.svg" alt="Smart Affiliate Link Cloaker Icon" className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-xl" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="px-4 py-1.5 text-xs md:text-sm font-semibold border border-primary/30 bg-primary/10 text-primary rounded-full shadow-xs">
              {eyebrow}
            </span>
            <Badge variant="outline" className="text-xs font-bold px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1 inline" /> {hero.readinessBadge}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight text-foreground mb-6">
            {hero.title}
          </h1>

          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            {hero.subtitle}
          </p>
          
          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto mb-12">
            <Link
              href={hero.ctaPrimaryHref}
              className="w-full sm:w-auto bg-primary text-primary-foreground text-sm font-bold py-4 px-8 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Bell className="h-4 w-4" /> {hero.ctaPrimary}
            </Link>
            <Link
              href={hero.ctaSecondaryHref}
              className="w-full sm:w-auto bg-background text-foreground border border-input text-sm font-bold py-4 px-8 rounded-xl hover:bg-muted transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="h-4 w-4 text-primary" /> {hero.ctaSecondary}
            </Link>
          </div>
          
          {/* Core Metrics Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm font-medium text-muted-foreground pt-6 border-t border-border/60 max-w-4xl mx-auto">
            {hero.coreMetrics.map((metric, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-card px-3.5 py-1.5 rounded-lg border border-border/70 shadow-xs">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="font-semibold text-foreground">{metric}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 2. Sticky Sub-Navigation Tabs ── */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur border-b border-border shadow-xs">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="flex items-center gap-1.5 overflow-x-auto py-3 no-scrollbar text-xs md:text-sm">
            {[
              { id: "overview", label: "Overview & Essential Pillars" },
              { id: "features", label: "24 Core Features Catalog" },
              { id: "use-cases", label: "Real-World Scenarios" },
              { id: "navigation", label: "WordPress Admin Tour" },
              { id: "guide", label: "Setup & User Guide" },
              { id: "target", label: "Who Needs This" },
              { id: "glossary", label: "Master Glossary" },
              { id: "faq", label: "FAQ Guide" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveNavTab(tab.id)}
                className={`font-bold px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeNavTab === tab.id 
                    ? "bg-primary text-primary-foreground shadow-xs" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. Main Product Content Container ── */}
      <main className="flex-1 py-14 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 space-y-24">

          {/* ════════════════ SECTION: Overview & Essential Pillars ════════════════ */}
          {(activeNavTab === "overview" || activeNavTab === "all") && (
            <div className="space-y-16">
              
              {/* Product Summary & Link Transformation Box */}
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
                  <div>
                    <Badge className="bg-primary/10 text-primary border-primary/30 font-bold text-xs px-3 py-1 mb-2">
                      Architecture Deep Dive
                    </Badge>
                    <h2 className="text-3xl font-extrabold text-foreground">
                      1. What is Smart Affiliate Link Cloaker?
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-muted px-3 py-1.5 rounded-lg border">
                    <span>DB Schema: wp_posts + wp_postmeta</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-4xl">
                  Smart Affiliate Link Cloaker is an enterprise-grade, performance-optimized WordPress affiliate link management and cloaking suite. Rather than acting merely as a basic URL redirect script, it operates as a complete affiliate infrastructure and monetization engine built natively upon WordPress standard database architecture.
                </p>

                {/* Before / After Transformation Visual */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold text-foreground uppercase tracking-wider block">
                    Live Permalinks Transformation:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-destructive flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-destructive" /> Raw Third-Party Merchant Link (Before)
                      </span>
                      <div className="bg-background p-3.5 rounded-lg border border-border font-mono text-xs text-muted-foreground break-all">
                        https://network.com/aff_c?offer_id=892&amp;aff_id=99281&amp;custom=campaign_1
                      </div>
                      <p className="text-[11px] text-muted-foreground">
                        Exposes your affiliate ID, risks scraper theft, looks suspicious to buyers, and fails Amazon ToS if cloaked blindly.
                      </p>
                    </div>

                    <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" /> Clean Branded Cloaked Link (After)
                        </span>
                        <button
                          onClick={handleCopyDemo}
                          className="text-xs text-primary font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          {copiedDemo ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                          {copiedDemo ? "Copied!" : "Copy"}
                        </button>
                      </div>
                      <div className="bg-background p-3.5 rounded-lg border border-border font-mono text-xs text-foreground font-semibold break-all space-y-1">
                        <div className="text-primary font-bold">https://yoursite.com/go/best-vpn</div>
                        <div className="text-muted-foreground text-[11px]">https://yoursite.com/go/software/best-vpn <span className="text-primary font-sans font-medium">(with Dynamic Category Path)</span></div>
                      </div>
                      <p className="text-[11px] text-muted-foreground">
                        Hosted on your primary domain, yields +25% to 40% CTR lift, protected by rel=&quot;nofollow sponsored&quot;, with sub-millisecond execution.
                      </p>
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
                      <p className="text-xs text-muted-foreground">Native WordPress post type. Ensures full compatibility with WP backups, WP-CLI, and caching engines.</p>
                    </div>

                    <div className="bg-background p-4 rounded-xl border border-border space-y-2">
                      <div className="font-bold text-sm text-foreground">Rewrite Engine</div>
                      <code className="text-xs bg-muted px-2 py-0.5 rounded text-primary">RewriteEngine.php</code>
                      <p className="text-xs text-muted-foreground">Top-priority rewrite rules <code className="text-[10px]">^go/([^/]+)/?$</code> accelerated with 24h transient caching.</p>
                    </div>

                    <div className="bg-background p-4 rounded-xl border border-border space-y-2">
                      <div className="font-bold text-sm text-foreground">Redirect Engine</div>
                      <code className="text-xs bg-muted px-2 py-0.5 rounded text-primary">RedirectEngine.php</code>
                      <p className="text-xs text-muted-foreground">Hooks <code className="text-[10px]">template_redirect:1</code>. Handles 301, 302, 307 uncached default, or 200 iFrame mask.</p>
                    </div>

                    <div className="bg-background p-4 rounded-xl border border-border space-y-2">
                      <div className="font-bold text-sm text-foreground">Analytics Engine</div>
                      <code className="text-xs bg-muted px-2 py-0.5 rounded text-primary">ClickTracker.php</code>
                      <p className="text-xs text-muted-foreground">Local DB table <code className="text-[10px]">wp_salc_clicks</code> with bot filtering (30+ signatures) &amp; GDPR IP masking.</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* 5 Essential Operational Pillars */}
              <div>
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <Badge className="bg-primary/10 text-primary border-primary/30 font-bold text-xs px-3 py-1 mb-2">
                    Commercial Value
                  </Badge>
                  <h2 className="text-3xl font-extrabold text-foreground mb-4">
                    {whyUseful.title}
                  </h2>
                  <p className="text-muted-foreground text-base">
                    {whyUseful.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {whyUseful.items.map((item, idx) => (
                    <div key={idx} className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all space-y-3 flex flex-col">
                      <div className="flex items-center justify-between">
                        <div className="p-3 bg-primary/10 text-primary rounded-lg">
                          {idx === 0 ? <TrendingUp className="h-6 w-6" /> : idx === 1 ? <ShieldCheck className="h-6 w-6" /> : idx === 2 ? <Scale className="h-6 w-6" /> : idx === 3 ? <Lock className="h-6 w-6" /> : <Activity className="h-6 w-6" />}
                        </div>
                        <span className="text-xs font-extrabold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                          {item.stat}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* ════════════════ SECTION: 24 Core Features Catalog ════════════════ */}
          {(activeNavTab === "features" || activeNavTab === "all") && (
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto">
                <Badge className="bg-primary/10 text-primary border-primary/30 font-bold text-xs px-3 py-1 mb-2">
                  Complete Technical Reference
                </Badge>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                  Master Feature Catalog (All 24 Features)
                </h2>
                <p className="text-muted-foreground text-base">
                  Every core feature is engineered natively into WordPress, complete with exact admin menu locations, operational mechanisms, and expected outcomes.
                </p>
              </div>

              {/* Interactive Filter & Search Controls */}
              <div className="bg-card border border-border rounded-xl p-5 shadow-xs space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {[
                      { id: "all", label: "All Features (24)" },
                      { id: "redirection", label: "Redirection & Routing (6)" },
                      { id: "compliance", label: "Compliance & SEO (5)" },
                      { id: "automation", label: "Automation (5)" },
                      { id: "monetization", label: "Monetization (4)" },
                      { id: "analytics", label: "Analytics & Architecture (4)" }
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        onClick={() => setFeatureFilter(btn.id)}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                          featureFilter === btn.id
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>

                  <div className="relative w-full md:w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search 24 features..."
                      value={featureSearch}
                      onChange={(e) => setFeatureSearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-1.5 text-xs bg-background border border-input rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Feature Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredFeatures.map((feat) => {
                  const isExpanded = expandedFeature === feat.id;
                  return (
                    <div
                      key={feat.id}
                      className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-primary/40 transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                              Feature #{feat.id}
                            </span>
                            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                              {feat.badge}
                            </span>
                          </div>
                          <span className="text-[11px] font-mono capitalize text-muted-foreground bg-muted px-2 py-0.5 rounded">
                            {feat.category}
                          </span>
                        </div>

                        <h3 className="font-extrabold text-lg text-foreground">
                          {feat.title}
                        </h3>

                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {feat.description}
                        </p>

                        {/* Location Pill */}
                        <div className="bg-muted/50 border border-border rounded-lg p-2.5 text-xs text-muted-foreground font-medium">
                          <strong className="text-foreground">Admin Location:</strong> {feat.location}
                        </div>

                        {/* Expandable Step-by-Step & How it works */}
                        {isExpanded && (
                          <div className="pt-4 border-t border-border/80 space-y-3 text-xs">
                            <div>
                              <strong className="text-foreground block mb-1">How it Works:</strong>
                              <p className="text-muted-foreground leading-relaxed">{feat.howItWorks}</p>
                            </div>

                            <div>
                              <strong className="text-foreground block mb-1">How to Use:</strong>
                              <ol className="space-y-1 text-muted-foreground list-decimal pl-4">
                                {feat.howToUse.map((step, sIdx) => (
                                  <li key={sIdx} className="leading-relaxed">{step}</li>
                                ))}
                              </ol>
                            </div>

                            <div className="bg-emerald-500/5 border border-emerald-500/20 p-2.5 rounded-lg text-emerald-700 dark:text-emerald-400">
                              <strong className="font-bold">Expected Result:</strong> {feat.result}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="pt-4 mt-4 border-t border-border flex items-center justify-between">
                        <button
                          onClick={() => setExpandedFeature(isExpanded ? null : feat.id)}
                          className="text-xs font-bold text-primary hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          {isExpanded ? "Show Less Details" : "View Operational Logic & How-To"}
                          <ChevronRight className={`h-3 w-3 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          )}

          {/* ════════════════ SECTION: Real-World Scenarios ════════════════ */}
          {(activeNavTab === "use-cases" || activeNavTab === "all") && (
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto">
                <Badge className="bg-primary/10 text-primary border-primary/30 font-bold text-xs px-3 py-1 mb-2">
                  Practical Scenarios
                </Badge>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                  {useCases.title}
                </h2>
                <p className="text-muted-foreground text-base">
                  {useCases.subtitle}
                </p>
              </div>

              {/* Scenario Selector Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {useCases.items.map((uc) => (
                  <button
                    key={uc.id}
                    onClick={() => setActiveUseCaseId(uc.id)}
                    className={`text-xs md:text-sm font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 border ${
                      activeUseCaseId === uc.id
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-card text-muted-foreground border-border hover:bg-muted"
                    }`}
                  >
                    <span>{uc.emoji}</span>
                    <span>{uc.title.split(":")[0]}</span>
                  </button>
                ))}
              </div>

              {/* Interactive Scenario Card: Without Plugin vs With Plugin */}
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto space-y-8">
                <div className="border-b border-border pb-6">
                  <div className="flex items-center gap-2 text-2xl font-bold text-foreground mb-2">
                    <span>{activeUseCase.emoji}</span>
                    <h3>{activeUseCase.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Scenario Context:</strong> {activeUseCase.scenario}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-destructive flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" /> Without The Plugin
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {activeUseCase.withoutPlugin}
                    </p>
                  </div>

                  <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" /> With Smart Affiliate Link Cloaker
                    </div>
                    <p className="text-xs md:text-sm text-foreground font-medium leading-relaxed">
                      {activeUseCase.withPlugin}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ════════════════ SECTION: WordPress Admin Navigation Tour ════════════════ */}
          {(activeNavTab === "navigation" || activeNavTab === "all") && (
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto">
                <Badge className="bg-primary/10 text-primary border-primary/30 font-bold text-xs px-3 py-1 mb-2">
                  Admin Interface
                </Badge>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                  WordPress Admin Navigation Architecture
                </h2>
                <p className="text-muted-foreground text-base">
                  The primary menu item is named <strong className="text-foreground">Link Cloaker</strong> in your WordPress sidebar with 8 dedicated submenus.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Simulated WordPress Admin Sidebar */}
                <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 shadow-xl space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                    <Layers className="h-4 w-4 text-primary" />
                    <span className="font-bold text-xs uppercase tracking-wider text-slate-400">WP Admin Sidebar</span>
                  </div>

                  <div className="space-y-1">
                    <div className="px-3 py-2 text-sm font-bold bg-primary text-white rounded-lg flex items-center justify-between">
                      <span>🔗 {navigation.menuName}</span>
                      <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded">Active</span>
                    </div>

                    <div className="pl-4 pt-2 space-y-1 border-l-2 border-slate-700 ml-2">
                      {navigation.submenus.map((sub, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => setActiveAdminSubmenu(sIdx)}
                          className={`w-full text-left px-3 py-2 rounded text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${
                            activeAdminSubmenu === sIdx
                              ? "bg-slate-800 text-white font-bold"
                              : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                          }`}
                        >
                          <span>{sIdx + 1}. {sub.name}</span>
                          <ChevronRight className={`h-3 w-3 ${activeAdminSubmenu === sIdx ? "text-primary" : "opacity-0"}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Submenu Inspector Card */}
                <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <div>
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                          Submenu Inspector #{activeAdminSubmenu + 1}
                        </span>
                        <h3 className="text-2xl font-extrabold text-foreground mt-1">
                          {navigation.submenus[activeAdminSubmenu].name}
                        </h3>
                      </div>
                      <code className="text-xs bg-muted px-2.5 py-1 rounded border font-mono text-muted-foreground">
                        {navigation.submenus[activeAdminSubmenu].path}
                      </code>
                    </div>

                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {navigation.submenus[activeAdminSubmenu].description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                    <span>{navigation.legacyMenuNote}</span>
                    <Link href="/docs" className="text-primary font-bold hover:underline flex items-center gap-1">
                      Read full manual <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ════════════════ SECTION: Step-by-Step User Guide ════════════════ */}
          {(activeNavTab === "guide" || activeNavTab === "all") && (
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto">
                <Badge className="bg-primary/10 text-primary border-primary/30 font-bold text-xs px-3 py-1 mb-2">
                  Technical Walkthrough
                </Badge>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
                  {userGuide.title}
                </h2>
                <p className="text-muted-foreground text-base">
                  {userGuide.subtitle}
                </p>
              </div>

              {/* Phase Switcher */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {userGuide.phases.map((ph, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveGuidePhase(idx)}
                    className={`text-xs md:text-sm font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer ${
                      activeGuidePhase === idx
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                    }`}
                  >
                    Phase {idx + 1}: {ph.phase.split(":")[1] || ph.phase}
                  </button>
                ))}
              </div>

              <div className="max-w-4xl mx-auto">
                <Card className="border-border shadow-sm p-8 bg-card space-y-6">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <h3 className="text-xl font-bold text-foreground">
                      {userGuide.phases[activeGuidePhase].phase}
                    </h3>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      Step {activeGuidePhase + 1} of 4
                    </Badge>
                  </div>

                  <ol className="space-y-4">
                    {userGuide.phases[activeGuidePhase].steps.map((step, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-4 text-sm text-foreground">
                        <span className="w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-primary/20">
                          {sIdx + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </Card>
              </div>
            </div>
          )}

          {/* ════════════════ SECTION: Target Audience Matrix ════════════════ */}
          {(activeNavTab === "target" || activeNavTab === "all") && (
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto">
                <Badge className="bg-primary/10 text-primary border-primary/30 font-bold text-xs px-3 py-1 mb-2">
                  Audience Segmentation
                </Badge>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
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
                    <Building2 className="h-5 w-5 text-primary" /> Organizational Focus: Agencies, Media Houses &amp; Enterprise
                  </h3>
                  <div className="space-y-4">
                    {targetAudience.organizational.map((org, idx) => (
                      <div key={idx} className="p-5 border border-border rounded-xl bg-card space-y-1.5">
                        <h4 className="font-bold text-sm text-foreground">{org.title}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{org.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Personal Focus */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-3">
                    <Users className="h-5 w-5 text-primary" /> Personal Focus: Creators, Bloggers &amp; Solopreneurs
                  </h3>
                  <div className="space-y-4">
                    {targetAudience.personal.map((per, idx) => (
                      <div key={idx} className="p-5 border border-border rounded-xl bg-card space-y-1.5">
                        <h4 className="font-bold text-sm text-foreground">{per.title}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{per.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decision Checklist */}
              <div className="bg-muted/30 border border-border rounded-2xl p-8 space-y-6">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" /> Decision Checklist: Choose Smart Affiliate Link Cloaker if you answer YES to &ge; 2:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs md:text-sm">
                  {[
                    "Do you publish affiliate links or sponsored promotions?",
                    "Do you want yourdomain.com/go/ branding to lift CTR by +25-40%?",
                    "Need local click analytics without 3rd-party SaaS pixel fees?",
                    "Must comply with Amazon Associates §6 and FTC rules?",
                    "Want automated broken link monitoring and deal expirations?",
                    "Need to auto-link keywords in your existing blog archives?"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3.5 bg-background rounded-xl border border-border font-medium">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* ════════════════ SECTION: Master Glossary (18 Terms) ════════════════ */}
          {(activeNavTab === "glossary" || activeNavTab === "all") && (
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto">
                <Badge className="bg-primary/10 text-primary border-primary/30 font-bold text-xs px-3 py-1 mb-2">
                  Terminology Guide
                </Badge>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                  Glossary of Key Terms (18 Core Concepts)
                </h2>
                <p className="text-muted-foreground text-base">
                  Clear explanations of foundational terminology across link cloaking, HTTP redirects, and compliance.
                </p>
              </div>

              <div className="max-w-md mx-auto relative mb-8">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search 18 glossary terms..."
                  value={glossarySearch}
                  onChange={(e) => setGlossarySearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs md:text-sm bg-card border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredGlossary.map((item, idx) => (
                  <div key={idx} className="bg-card border border-border rounded-xl p-5 shadow-xs space-y-2 hover:border-primary/40 transition-colors">
                    <h4 className="font-extrabold text-sm text-foreground flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {item.term}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ════════════════ SECTION: FAQ Accordion ════════════════ */}
          {(activeNavTab === "faq" || activeNavTab === "all") && (
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto">
                <Badge className="bg-primary/10 text-primary border-primary/30 font-bold text-xs px-3 py-1 mb-2">
                  Answers &amp; Solutions
                </Badge>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                  Frequently Asked Questions (FAQ Guide)
                </h2>
                <p className="text-muted-foreground text-base">
                  15 in-depth answers across installation, redirects, Google rankings, Amazon compliance, and migrations.
                </p>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {faqCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFaqCategory(cat)}
                    className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      faqCategory === cat
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="max-w-4xl mx-auto space-y-3">
                {filteredFaq.map((q, idx) => {
                  const isOpen = expandedFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-card border border-border rounded-xl overflow-hidden shadow-xs"
                    >
                      <button
                        onClick={() => setExpandedFaq(isOpen ? null : idx)}
                        className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm md:text-base text-foreground cursor-pointer hover:bg-muted/40 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-muted text-muted-foreground border">
                            {q.category}
                          </span>
                          <span>{q.question}</span>
                        </div>
                        <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-90 text-primary" : "text-muted-foreground"}`} />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-2 text-xs md:text-sm text-muted-foreground leading-relaxed border-t border-border/60 whitespace-pre-line bg-muted/20">
                          {q.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ════════════════ Bottom Pre-Launch Registration CTA ════════════════ */}
          <div className="bg-gradient-to-r from-primary via-indigo-600 to-violet-600 text-white rounded-2xl p-8 md:p-12 text-center space-y-6 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Ready to Supercharge Your Affiliate Monetization?</h2>
            <p className="text-white/90 max-w-2xl mx-auto text-base leading-relaxed">
              Register for pre-launch notifications to receive instant early access download links as soon as official WordPress.org approval is granted.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/lab"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-slate-50 font-bold text-sm py-4 px-8 rounded-xl shadow-lg transition-all"
              >
                <Bell className="h-4 w-4" /> Register for Early Access Updates
              </Link>
              <Link
                href="/docs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm py-4 px-8 rounded-xl border border-white/20 backdrop-blur-xs transition-all"
              >
                <BookOpen className="h-4 w-4" /> Read Technical Documentation
              </Link>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}
