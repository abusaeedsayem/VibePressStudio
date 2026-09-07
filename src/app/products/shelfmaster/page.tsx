"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, CheckCircle2, Monitor, ShieldCheck, Zap, Database, 
  Cpu, HardDrive, Lock, ShoppingCart, BookOpen, Users, Gift, Calendar, 
  Banknote, Receipt, BarChart, Bell
} from "lucide-react";
import shelfmasterData from "@/content/shelfmaster.json";

export default function ShelfMasterPage() {
  const { 
    eyebrow, hero, coreMetrics 
  } = shelfmasterData;

  const modules = [
    { title: "Real-Time Command Dashboard", desc: "Central command center displaying active member counts, total books, overdue loans, and quick action buttons.", icon: Monitor },
    { title: "POS Circulation Desk", desc: "Issue books via Member Code & Barcode, process returns, and calculate overdue fines ($0.50/day default rate).", icon: ShoppingCart },
    { title: "Inventory Catalog", desc: "Full inventory management with multi-author/ISBN tracking and auto-generated sequential barcodes (e.g. BK-001).", icon: BookOpen },
    { title: "Patron Directory & KYC", desc: "Register patrons with auto-generated Member IDs (MBR-TIMESTAMP) and colored active vs. expired status badges.", icon: Users },
    { title: "Donors & Gift Registry", desc: "Dual-tab system to register philanthropic Donors and track their specific book or monetary donations over time.", icon: Gift },
    { title: "Staff & Roster Directory", desc: "Employee management module to track library staff, maintain contact info, and monitor active staff status.", icon: Calendar },
    { title: "Automated Payroll Engine", desc: "Generate dynamic payslips with net pay calculation (Base + Bonus - Deductions) and monthly payment tracking.", icon: Banknote },
    { title: "Expenses & Financial Tracking", desc: "Track daily operational expenses (utilities, maintenance, supplies) with monthly/yearly summary progress bars.", icon: Receipt },
    { title: "Settings & Policy Reports", desc: "Configure library name & address, adjust loan policies (days, fine rates), and view visual book popularity bars.", icon: BarChart }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* ── 1. Hero Section ── */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-24 border-b border-border bg-gradient-to-b from-indigo-500/10 via-background to-background overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 text-center relative z-10">
          
          {/* App Icon Badge */}
          <div className="inline-block p-3 rounded-2xl bg-white border border-indigo-500/20 shadow-2xl mb-6 hover:scale-105 transition-transform">
            <img src="/ShelfMaster-icon-1024.png" alt="ShelfMaster App Icon" className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-xl" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="px-4 py-1.5 text-xs md:text-sm font-semibold border border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full shadow-xs">
              {eyebrow}
            </span>
            <Badge variant="outline" className="text-xs font-bold px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30">
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
              href="/lab"
              className="w-full sm:w-auto bg-primary text-primary-foreground text-sm font-bold py-4 px-8 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <Bell className="h-4 w-4" /> {hero.ctaPrimary}
            </Link>
            <Link
              href="/docs"
              className="w-full sm:w-auto bg-background text-foreground border border-input text-sm font-bold py-4 px-8 rounded-lg hover:bg-muted transition-all flex items-center justify-center gap-2"
            >
              {hero.ctaSecondary}
            </Link>
          </div>
          
          {/* Core Specs Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm font-medium text-muted-foreground pt-6 border-t border-border/60 max-w-4xl mx-auto">
            {coreMetrics.map((metric: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span>{metric}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Architecture & Modules ── */}
      <section className="py-20 px-4 md:px-6 max-w-[1280px] mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
            System Modules & Architecture
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            9 Native Operating Modules Built for Speed
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            ShelfMaster eliminates web portal latency by rendering UI natively on host operating systems backed by local SQLite persistence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((mod, idx) => {
            const IconComp = mod.icon;
            return (
              <Card key={idx} className="border border-border bg-card hover:shadow-lg transition-all">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">{mod.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{mod.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* ── 3. Bottom CTA ── */}
      <section className="py-20 px-4 md:px-6 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <Badge variant="outline" className="bg-white/10 text-white border-white/20 px-4 py-1 text-xs">
            Pre-Release Registration Open
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Ready for Data Sovereignty in Your Library?
          </h2>
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto">
            Register your email to receive early developer builds and launch notifications when ShelfMaster binaries release for macOS and Windows.
          </p>
          <div className="pt-4">
            <Link
              href="/lab"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold text-sm py-4 px-8 rounded-xl shadow-xl hover:bg-slate-50 transition-colors"
            >
              Register for Launch Updates <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
