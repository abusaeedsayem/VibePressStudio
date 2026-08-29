"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, ShieldCheck, Zap, Database, Download, CheckCircle2, 
  Link as LinkIcon, Globe, Highlighter, ArrowRightLeft,
  Search, ShieldAlert, Scale, Clock, Share2, Layout
} from "lucide-react";
import cloakerData from "@/content/cloaker.json";

export default function SmartAffiliateLinkCloakerPage() {
  const [billingCycle, setBillingCycle] = useState<"yearly" | "lifetime">("yearly");

  const { eyebrow, hero, bottlenecks, features, userGuide, pricing } = cloakerData;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* ── 1. Hero Section ── */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 border-b border-border bg-gradient-to-b from-blue-500/10 via-background to-background">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 text-center relative z-10">
          
          <span className="inline-block mb-6 px-4 py-1.5 text-xs md:text-sm font-semibold border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full">
            {eyebrow}
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight text-foreground mb-6">
            {hero.title}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            {hero.subtitle}
          </p>
          
          {/* 3 CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto mb-12">
            <a
              href={hero.ctaPrimaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-primary text-primary-foreground text-sm font-bold py-4 px-7 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <Download className="h-4 w-4" /> {hero.ctaPrimary}
            </a>
            <Link
              href={hero.ctaSecondaryHref}
              className="w-full sm:w-auto bg-background text-foreground border border-input text-sm font-bold py-4 px-7 rounded-lg hover:bg-muted transition-all flex items-center justify-center gap-2"
            >
              {hero.ctaSecondary}
            </Link>
            <a
              href={hero.ctaTertiaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-amber-500 text-amber-950 text-sm font-bold py-4 px-7 rounded-lg hover:bg-amber-400 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              {hero.ctaTertiary}
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm font-medium text-muted-foreground pt-6 border-t border-border/60 max-w-3xl mx-auto">
            {hero.badges.map((b, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span>{b.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 2. Core Operational Bottlenecks Solved ── */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              {bottlenecks.title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              {bottlenecks.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bottlenecks.items.map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-8 shadow-sm flex flex-col">
                <div className="p-3 bg-red-500/10 text-red-500 rounded-lg w-fit mb-4">
                  {idx === 0 ? <ShieldAlert className="h-6 w-6" /> : idx === 1 ? <Scale className="h-6 w-6" /> : <Database className="h-6 w-6 text-primary" />}
                </div>
                <h3 className="font-bold text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Comprehensive Feature Breakdown ── */}
      <section className="py-20 bg-muted/20 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              {features.title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              {features.subtitle}
            </p>
          </div>

          <div className="space-y-16">
            {/* Core Link Engine */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded">Core Module (Free & Pro)</span>
                <h3 className="text-2xl font-bold text-foreground">Core Link Engine</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.coreEngine.map((f, idx) => (
                  <div key={idx} className="bg-card border border-border rounded-xl p-6">
                    <div className="p-2.5 bg-primary/10 text-primary rounded-md w-fit mb-3">
                      {idx === 0 ? <LinkIcon className="h-5 w-5" /> : idx === 1 ? <Zap className="h-5 w-5" /> : idx === 2 ? <ShieldCheck className="h-5 w-5" /> : <Search className="h-5 w-5" />}
                    </div>
                    <h4 className="font-bold text-base text-foreground mb-2">{f.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Compliance */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded">Compliance (Free & Pro)</span>
                <h3 className="text-2xl font-bold text-foreground">Legal Compliance & Disclosures</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.legalCompliance.map((f, idx) => (
                  <div key={idx} className="bg-card border border-border rounded-xl p-6">
                    <div className="p-2.5 bg-emerald-500/10 text-emerald-500 rounded-md w-fit mb-3">
                      {idx === 0 ? <Scale className="h-5 w-5" /> : idx === 1 ? <Layout className="h-5 w-5" /> : <CheckCircle2 className="h-5 w-5" />}
                    </div>
                    <h4 className="font-bold text-base text-foreground mb-2">{f.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Growth Modules (Pro) */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-amber-500 text-amber-950 text-xs font-bold px-3 py-1 rounded">Pro Tier Exclusive</span>
                <h3 className="text-2xl font-bold text-foreground">Advanced Growth Modules</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.proModules.map((f, idx) => (
                  <div key={idx} className="bg-card border border-amber-500/30 rounded-xl p-6 shadow-sm">
                    <div className="p-2.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-md w-fit mb-3">
                      {idx === 0 ? <Globe className="h-5 w-5" /> : idx === 1 ? <ArrowRightLeft className="h-5 w-5" /> : idx === 2 ? <Share2 className="h-5 w-5" /> : idx === 3 ? <Clock className="h-5 w-5" /> : idx === 4 ? <Highlighter className="h-5 w-5" /> : <Search className="h-5 w-5" />}
                    </div>
                    <h4 className="font-bold text-base text-foreground mb-2">{f.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Practical Step-by-Step User Guide ── */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              {userGuide.title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              {userGuide.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {userGuide.steps.map((step, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 text-center flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-extrabold text-base flex items-center justify-center mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-sm text-foreground mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Pricing & Licensing Tiers ── */}
      <section id="pricing" className="py-20 bg-muted/20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              {pricing.title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-6">
              {pricing.subtitle}
            </p>

            {/* Cycle toggle */}
            <div className="inline-flex bg-muted p-1 rounded-lg border border-border">
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`text-xs font-bold px-4 py-2 rounded-md transition-all ${
                  billingCycle === "yearly" ? "bg-background text-foreground shadow" : "text-muted-foreground"
                }`}
              >
                Annual License
              </button>
              <button
                onClick={() => setBillingCycle("lifetime")}
                className={`text-xs font-bold px-4 py-2 rounded-md transition-all ${
                  billingCycle === "lifetime" ? "bg-background text-foreground shadow" : "text-muted-foreground"
                }`}
              >
                Lifetime Deal
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pricing.tiers.map((tier, idx) => {
              const displayPrice = tier.name === "Free Core Tier" 
                ? tier.price 
                : billingCycle === "yearly" 
                  ? tier.priceYearly 
                  : tier.priceLifetime;
              const displayPeriod = tier.name === "Free Core Tier" 
                ? tier.period 
                : billingCycle === "yearly" 
                  ? tier.periodYearly 
                  : tier.periodLifetime;

              return (
                <Card key={idx} className={`flex flex-col ${tier.isFeatured ? "border-primary shadow-lg relative" : "border-border"}`}>
                  {tier.isFeatured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-extrabold uppercase px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg font-bold">{tier.name}</CardTitle>
                    <div className="mt-2">
                      <span className="text-3xl font-extrabold">{displayPrice}</span>
                      <span className="text-xs text-muted-foreground ml-1">{displayPeriod}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{tier.desc}</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2.5">
                      {tier.features.map((f, fIdx) => (
                        <li key={fIdx} className="flex items-start text-xs text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 mr-2 text-primary shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full text-xs font-bold" 
                      variant={tier.isFeatured ? "default" : "outline"} 
                      asChild
                    >
                      <a href={tier.href} target="_blank" rel="noopener noreferrer">
                        {tier.cta}
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center flex items-center justify-center gap-2 text-sm text-muted-foreground font-medium">
            <ShieldCheck className="h-5 w-5 text-emerald-500" />
            <span>{pricing.guarantee}</span>
          </div>
        </div>
      </section>

    </div>
  );
}
