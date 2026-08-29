"use client";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Clock, Download, ExternalLink } from "lucide-react";
import pricingData from "@/content/pricing.json";

export default function PricingPage() {
  const { hero, wordpressPlugin, desktopApp, assurance } = pricingData;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Hero Block */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-16 md:py-24 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-16 space-y-20">
        
        {/* 1. WordPress Plugin Pricing Hub (Smart Affiliate Link Cloaker) */}
        <section>
          <div className="mb-10 text-center md:text-left">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-1">
              WordPress Plugin Pricing Hub
            </span>
            <h2 className="text-3xl font-extrabold text-foreground mb-2">
              {wordpressPlugin.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {wordpressPlugin.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wordpressPlugin.tiers.map((tier, idx) => (
              <Card key={idx} className="flex flex-col border-border shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">{tier.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-extrabold">{tier.price || tier.priceYearly}</span>
                    <span className="text-xs text-muted-foreground ml-1">{tier.period || (tier.priceLifetime ? `/yr or ${tier.priceLifetime}` : "")}</span>
                  </div>
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
                  <Button className="w-full text-xs font-bold" variant="outline" asChild>
                    <a href={tier.href} target="_blank" rel="noopener noreferrer">
                      {tier.cta} <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* 2. Desktop Application Pricing Hub (ShelfMaster) */}
        <section>
          <div className="mb-10 text-center md:text-left">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block mb-1">
              Desktop Application Pricing Hub
            </span>
            <h2 className="text-3xl font-extrabold text-foreground mb-2">
              {desktopApp.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {desktopApp.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {desktopApp.tiers.map((tier, idx) => (
              <Card key={idx} className={`flex flex-col shadow-sm ${idx === 2 ? "border-amber-500 shadow-md" : "border-border"}`}>
                <CardHeader>
                  <CardTitle className="text-lg font-bold">{tier.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-extrabold">{tier.price}</span>
                    <span className="text-xs text-muted-foreground ml-1">{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2.5">
                    {tier.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full text-xs font-bold" variant={idx === 2 ? "default" : "outline"} asChild>
                    {tier.href.startsWith("http") ? (
                      <a href={tier.href} target="_blank" rel="noopener noreferrer">
                        {tier.cta} <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <Link href={tier.href}>
                        {tier.cta}
                      </Link>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* 3. Customer Assurance & SLA Standards */}
        <section className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            {assurance.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-foreground mb-1">
                  {assurance.items[0].title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {assurance.items[0].desc}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl shrink-0">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-foreground mb-1">
                  {assurance.items[1].title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {assurance.items[1].desc}
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
