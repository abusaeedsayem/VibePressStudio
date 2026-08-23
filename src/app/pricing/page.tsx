import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/10 py-20 border-b">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Transparent, Value-Driven Pricing</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Choose the perfect license for your needs. We offer both annual subscriptions with premium support and AppSumo Lifetime Deals for our flagship products.
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-16 mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Link Cloaker */}
          <Card className="flex flex-col shadow-md border-primary/20">
            <CardHeader className="bg-muted/30 pb-8">
              <CardTitle className="text-2xl">Smart Affiliate Link Cloaker</CardTitle>
              <CardDescription className="text-base mt-2">The ultimate commission protection plugin for WordPress.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pt-8 flex flex-col">
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /><span>Zero Database Bloat Engine</span></div>
                <div className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /><span>Automated FTC Disclosures</span></div>
                <div className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /><span>Geo-Location Routing</span></div>
              </div>
              <div className="flex flex-col gap-3">
                <Button className="w-full h-12" asChild><Link href="/products/smart-affiliate-link-cloaker#pricing">View Pricing Tiers <ArrowRight className="ml-2 h-4 w-4"/></Link></Button>
              </div>
            </CardContent>
          </Card>

          {/* ShelfMaster */}
          <Card className="flex flex-col shadow-md border-indigo-500/20">
            <CardHeader className="bg-indigo-500/5 pb-8">
              <CardTitle className="text-2xl">ShelfMaster Desktop</CardTitle>
              <CardDescription className="text-base mt-2">Next-Gen Offline-First Library Operating System.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pt-8 flex flex-col">
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-indigo-500 shrink-0" /><span>100% Offline ACID Database</span></div>
                <div className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-indigo-500 shrink-0" /><span>9 Core Library Management Modules</span></div>
                <div className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-indigo-500 shrink-0" /><span>Zero Monthly Cloud Fees</span></div>
              </div>
              <div className="flex flex-col gap-3">
                <Button variant="outline" className="w-full h-12 border-indigo-200 hover:bg-indigo-50 dark:hover:bg-indigo-950" asChild><Link href="/products/shelfmaster#pricing">View Lifetime Deals <ArrowRight className="ml-2 h-4 w-4"/></Link></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
