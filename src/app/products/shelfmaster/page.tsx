"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { 
  Library, ArrowRight, Download, Eye, Zap, Database, CloudOff, MemoryStick,
  BookOpen, ShoppingCart, Gift, Users, Calendar, Banknote, Receipt, BarChart, Printer,
  Building2, GraduationCap, Landmark, Command, Terminal, Monitor, CheckCircle2,
  HardDrive
} from "lucide-react";
import { motion } from "framer-motion";

export default function ShelfMasterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b bg-gradient-to-br from-indigo-500/10 via-background to-background">
        <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium border border-indigo-500/20 bg-indigo-500/10 text-indigo-500">
            Desktop Application
          </Badge>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto"
          >
            Next-Gen Offline-First <br className="hidden md:block" />
            <span className="text-indigo-500">Library Operating System</span> <br className="hidden md:block" />
            Powered by Tauri v2, React & SQLite
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A lightning-fast, zero-cloud desktop operating system for institutional cataloging, circulation, payroll, and financial tracking.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto"
          >
            <Button size="lg" className="h-14 px-8 text-base font-semibold bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
              <Link href="#pricing">
                Get Desktop License (AppSumo LTD) <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold bg-background" asChild>
              <Link href="/download/trial">
                <Download className="mr-2 h-5 w-5" /> Download Free Trial
              </Link>
            </Button>
            <Button size="lg" variant="secondary" className="h-14 px-8 text-base font-semibold bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500/20 border border-indigo-500/30" asChild>
              <Link href="#blueprint">
                <Eye className="mr-2 h-5 w-5" /> View System Blueprint
              </Link>
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-12 font-medium"
          >
            <div className="flex items-center gap-2"><Zap className="h-5 w-5 text-yellow-500" /> &lt;1s Startup Time</div>
            <div className="flex items-center gap-2"><HardDrive className="h-5 w-5 text-blue-500" /> &lt;40MB RAM Usage</div>
            <div className="flex items-center gap-2"><Database className="h-5 w-5 text-emerald-500" /> 100% Offline ACID Database</div>
            <div className="flex items-center gap-2"><CloudOff className="h-5 w-5 text-rose-500" /> Zero Monthly Cloud Fees</div>
          </motion.div>
        </div>
      </section>

      {/* 9 Core Modules Tour */}
      <section id="blueprint" className="py-24 bg-muted/20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">9 Core Modules Architecture</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to run a large-scale institutional library, completely disconnected from the internet.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-indigo-500/20 hover:border-indigo-500 transition-colors shadow-sm">
              <CardHeader>
                <div className="p-3 bg-indigo-500/10 rounded-xl w-fit mb-3">
                  <BookOpen className="h-6 w-6 text-indigo-500" />
                </div>
                <CardTitle className="text-xl">Cataloging Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Manage Books & Physical Copies with precision. Track ISBNs, physical shelves, and generate unique accession barcodes instantly.</p>
              </CardContent>
            </Card>

            <Card className="border-indigo-500/20 hover:border-indigo-500 transition-colors shadow-sm">
              <CardHeader>
                <div className="p-3 bg-indigo-500/10 rounded-xl w-fit mb-3">
                  <ShoppingCart className="h-6 w-6 text-indigo-500" />
                </div>
                <CardTitle className="text-xl">Circulation Desk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">3-Second Checkout workflows. Includes a built-in Overdue Auto-Fine Calculator that applies precise penalty rules natively.</p>
              </CardContent>
            </Card>

            <Card className="border-indigo-500/20 hover:border-indigo-500 transition-colors shadow-sm">
              <CardHeader>
                <div className="p-3 bg-indigo-500/10 rounded-xl w-fit mb-3">
                  <Gift className="h-6 w-6 text-indigo-500" />
                </div>
                <CardTitle className="text-xl">Donors Registry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Track institutional endowments and book gifts. Features an Automated Appreciation Certificate Generator ready for A4 printing.</p>
              </CardContent>
            </Card>

            <Card className="border-indigo-500/20 hover:border-indigo-500 transition-colors shadow-sm">
              <CardHeader>
                <div className="p-3 bg-indigo-500/10 rounded-xl w-fit mb-3">
                  <Users className="h-6 w-6 text-indigo-500" />
                </div>
                <CardTitle className="text-xl">Dual Membership KYC</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Manage both standard Paid members and Special Waived Privilege accounts with secure, on-device KYC profile logging.</p>
              </CardContent>
            </Card>

            <Card className="border-indigo-500/20 hover:border-indigo-500 transition-colors shadow-sm">
              <CardHeader>
                <div className="p-3 bg-indigo-500/10 rounded-xl w-fit mb-3">
                  <Calendar className="h-6 w-6 text-indigo-500" />
                </div>
                <CardTitle className="text-xl">HR & Shift Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Comprehensive Staff HR module handling Weekly Duty Shift Scheduling Rosters and attendance validation directly from the POS.</p>
              </CardContent>
            </Card>

            <Card className="border-indigo-500/20 hover:border-indigo-500 transition-colors shadow-sm">
              <CardHeader>
                <div className="p-3 bg-indigo-500/10 rounded-xl w-fit mb-3">
                  <Banknote className="h-6 w-6 text-indigo-500" />
                </div>
                <CardTitle className="text-xl">Automated Payroll</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Process staff salaries based on shifts logged. Includes an Official Pay-Slip Generator customized to your local accounting standards.</p>
              </CardContent>
            </Card>

            <Card className="border-indigo-500/20 hover:border-indigo-500 transition-colors shadow-sm">
              <CardHeader>
                <div className="p-3 bg-indigo-500/10 rounded-xl w-fit mb-3">
                  <Receipt className="h-6 w-6 text-indigo-500" />
                </div>
                <CardTitle className="text-xl">Expense Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Log daily Operating Expenses natively. Features a full Voucher Ledger system to keep your library's budget compliant.</p>
              </CardContent>
            </Card>

            <Card className="border-indigo-500/20 hover:border-indigo-500 transition-colors shadow-sm">
              <CardHeader>
                <div className="p-3 bg-indigo-500/10 rounded-xl w-fit mb-3">
                  <BarChart className="h-6 w-6 text-indigo-500" />
                </div>
                <CardTitle className="text-xl">Cash-Flow Ledger</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">A Unified Cash-Flow ledger combining fines, membership fees, and expenses for comprehensive Administrative Audit Reports.</p>
              </CardContent>
            </Card>

            <Card className="border-indigo-500/20 hover:border-indigo-500 transition-colors shadow-sm">
              <CardHeader>
                <div className="p-3 bg-indigo-500/10 rounded-xl w-fit mb-3">
                  <Printer className="h-6 w-6 text-indigo-500" />
                </div>
                <CardTitle className="text-xl">Hardware Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Native drivers for Dual Hardware setups: 58mm/80mm Thermal Receipt Printing, Standard A4 Document Printing, and USB Barcode Scanners.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real-World Use Case Scenarios */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Trusted Across Sectors</h2>
            <p className="text-lg text-muted-foreground">Designed for rigorous daily operations in environments where data privacy and uptime are non-negotiable.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8 rounded-2xl border bg-muted/10 shadow-sm">
              <Building2 className="h-12 w-12 text-slate-700 mb-6" />
              <h3 className="text-xl font-bold mb-3">Municipal & Community</h3>
              <p className="text-muted-foreground">Handle thousands of community members safely offline without exposing local resident data to cloud servers.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl border bg-muted/10 shadow-sm">
              <GraduationCap className="h-12 w-12 text-slate-700 mb-6" />
              <h3 className="text-xl font-bold mb-3">Academic Institutions</h3>
              <p className="text-muted-foreground">Perfect for School, College, and University libraries managing high-turnover circulation and strict overdue fining policies.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl border bg-muted/10 shadow-sm">
              <Landmark className="h-12 w-12 text-slate-700 mb-6" />
              <h3 className="text-xl font-bold mb-3">Research & Private</h3>
              <p className="text-muted-foreground">Ensure the absolute privacy of specialized research foundation catalogs and high-value private collections.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OS Matrix */}
      <section className="py-24 bg-indigo-950 text-white border-y border-indigo-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Cross-Platform Native Execution</h2>
              <p className="text-lg text-indigo-200">
                ShelfMaster compiles to true native binaries for your operating system using Rust. No bloated Electron wrappers, no local web servers. Just pure, low-level performance.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-indigo-900/50 px-4 py-2 rounded-lg border border-indigo-700">
                  <Monitor className="h-5 w-5" /> <span>Windows (.exe / .msi)</span>
                </div>
                <div className="flex items-center gap-2 bg-indigo-900/50 px-4 py-2 rounded-lg border border-indigo-700">
                  <Command className="h-5 w-5" /> <span>macOS (.dmg Universal)</span>
                </div>
                <div className="flex items-center gap-2 bg-indigo-900/50 px-4 py-2 rounded-lg border border-indigo-700">
                  <Terminal className="h-5 w-5" /> <span>Linux (.deb / AppImage)</span>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full max-w-sm bg-indigo-900/30 p-8 rounded-2xl border border-indigo-800 shadow-2xl backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-indigo-800 pb-2">
                  <span className="text-indigo-300">Framework</span>
                  <span className="font-mono font-bold">Tauri v2</span>
                </div>
                <div className="flex justify-between items-center border-b border-indigo-800 pb-2">
                  <span className="text-indigo-300">UI Thread</span>
                  <span className="font-mono font-bold">React 18</span>
                </div>
                <div className="flex justify-between items-center border-b border-indigo-800 pb-2">
                  <span className="text-indigo-300">Core Logic</span>
                  <span className="font-mono font-bold">Rust (Native)</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-indigo-300">Database</span>
                  <span className="font-mono font-bold">SQLite 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / AppSumo Section */}
      <section id="pricing" className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">AppSumo Exclusive Lifetime Deal</h2>
            <p className="text-lg text-muted-foreground">
              For a strictly limited time, get absolute ownership of ShelfMaster for a single, one-time payment. Never pay SaaS fees to manage your own library again.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-yellow-500 shadow-xl overflow-hidden">
              <div className="bg-yellow-500 text-yellow-950 font-bold text-center py-2 text-sm uppercase tracking-wider">
                Partner Exclusive Offer
              </div>
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r bg-muted/10">
                  <h3 className="text-2xl font-bold mb-2">ShelfMaster Pro License</h3>
                  <p className="text-muted-foreground mb-6">Commercial lifetime license for standard organizational deployment.</p>
                  <div className="flex items-end gap-2 mb-8">
                    <span className="text-5xl font-extrabold">$149</span>
                    <span className="text-muted-foreground line-through pb-1">$499</span>
                    <span className="text-sm font-medium text-muted-foreground pb-2">/ One-time</span>
                  </div>
                  <Button size="lg" className="w-full h-14 text-lg bg-indigo-600 hover:bg-indigo-700" asChild>
                    <Link href="https://appsumo.com" target="_blank">
                      Get Lifetime Access Now
                    </Link>
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mt-4">60-Day Money Back Guarantee</p>
                </div>
                <div className="p-8 md:p-12">
                  <h4 className="font-bold mb-6 text-lg">What's Included:</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-3 text-indigo-500 shrink-0" />
                      <span className="text-sm font-medium">Full offline cataloging & circulation capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-3 text-indigo-500 shrink-0" />
                      <span className="text-sm font-medium">Unlimited Members, Books & Records</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-3 text-indigo-500 shrink-0" />
                      <span className="text-sm font-medium">All 9 Core HR, Payroll & Ledger Modules</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-3 text-indigo-500 shrink-0" />
                      <span className="text-sm font-medium">Thermal & A4 printing integration enabled</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-3 text-indigo-500 shrink-0" />
                      <span className="text-sm font-medium">All future minor & major updates for version 1.x</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-3 text-indigo-500 shrink-0" />
                      <span className="text-sm font-medium">Download links for Windows, macOS & Linux</span>
                    </li>
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
