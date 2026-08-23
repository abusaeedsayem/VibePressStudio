"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  ArrowRight, ShieldCheck, Zap, Database, Download, CheckCircle2, 
  Settings, Link as LinkIcon, Globe, Highlighter, XCircle, ArrowRightLeft,
  Search, ShieldAlert, BadgeCent
} from "lucide-react";
import { motion } from "framer-motion";

export default function SmartAffiliateLinkCloakerPage() {
  const [billingCycle, setBillingCycle] = useState<"yearly" | "lifetime">("yearly");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b bg-gradient-to-b from-primary/5 to-background">
        <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium border border-primary/20 bg-primary/10 text-primary">
            WordPress Plugin
          </Badge>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto"
          >
            The Ultimate <span className="text-primary">Commission Protection</span>,<br className="hidden md:block" /> Branded Link Cloaking & FTC Engine
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Maximize your affiliate revenue, automate FTC compliance, and prevent commission hijacking on your WordPress site without bloating your database.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto"
          >
            <Button size="lg" className="h-14 px-8 text-base font-semibold" asChild>
              <Link href="#pricing">
                Buy Pro License (Freemius) <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold bg-background" asChild>
              <Link href="https://wordpress.org" target="_blank">
                <Download className="mr-2 h-5 w-5" /> Download Free from WP.org
              </Link>
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-muted-foreground font-medium"
          >
            <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-green-500" /> GPLv2 Licensed</div>
            <div className="flex items-center gap-2"><Database className="h-5 w-5 text-blue-500" /> Zero Database Bloat</div>
            <div className="flex items-center gap-2"><Zap className="h-5 w-5 text-amber-500" /> Instant HTTP 301/307 Redirects</div>
          </motion.div>
        </div>
      </section>

      {/* Core Problem & Solution */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Stop Losing Commissions to Ugly Links</h2>
            <p className="text-lg text-muted-foreground">
              Naked affiliate links look spammy, leak SEO juice, and leave you vulnerable to commission hijacking. We solve this instantly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold flex items-center gap-2 text-destructive"><XCircle className="h-5 w-5" /> The Raw Link (Ugly & Unsafe)</h3>
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg font-mono text-sm break-all text-destructive">
                  https://www.affiliate-network.com/product/1923?aff_id=987654321&campaign=blog
                </div>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                  <li>• Triggers ad-blockers</li>
                  <li>• Users hesitate to click</li>
                  <li>• Competitors can swap your ID</li>
                </ul>
              </div>
              
              <div className="flex justify-center">
                <ArrowRightLeft className="h-8 w-8 text-muted-foreground rotate-90 md:rotate-0" />
              </div>
              
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold flex items-center gap-2 text-primary"><ShieldCheck className="h-5 w-5" /> The Cloaked Link (Clean & Secure)</h3>
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg font-mono text-sm text-primary flex items-center justify-between">
                  <span>yourdomain.com/go/product-name</span>
                  <Badge variant="default" className="ml-2">Protected</Badge>
                </div>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                  <li>• Passes 100% of link equity (if desired)</li>
                  <li>• Trusted by your audience</li>
                  <li>• Tracks clicks & conversions locally</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6 bg-muted/40 p-8 rounded-2xl border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-500/10 rounded-full"><ShieldAlert className="h-6 w-6 text-red-500" /></div>
                <div>
                  <h4 className="text-xl font-bold">Commission Hijacking Protection</h4>
                  <p className="text-muted-foreground mt-2">Hides your unique affiliate IDs from malware and malicious browser extensions that attempt to overwrite them before checkout.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-full"><Settings className="h-6 w-6 text-blue-500" /></div>
                <div>
                  <h4 className="text-xl font-bold">Automated FTC Auto-Disclosure Injector</h4>
                  <p className="text-muted-foreground mt-2">Dynamically injects FTC-compliant disclosure notices before or after any post containing a cloaked affiliate link. Never worry about manual disclaimers again.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Feature Breakdown */}
      <section className="py-24 bg-muted/20 border-y">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Powerful Features for Serious Marketers</h2>
            <p className="text-lg text-muted-foreground">Built to scale with your traffic, offering everything from basic redirection to enterprise-grade split testing.</p>
          </div>
          
          <Tabs defaultValue="management" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 h-auto">
              <TabsTrigger value="management" className="py-3 text-base">Link Management & Engine</TabsTrigger>
              <TabsTrigger value="advanced" className="py-3 text-base">Advanced Pro Features</TabsTrigger>
            </TabsList>
            
            <TabsContent value="management" className="pt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <LinkIcon className="h-8 w-8 text-primary mb-4" />
                    <CardTitle>Custom SEO Slugs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Create memorable, branded shortlinks (/go/, /recommends/) that users trust and want to click. Group links into categories for easy management.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Zap className="h-8 w-8 text-primary mb-4" />
                    <CardTitle>301/302/307 Redirect Codes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Full control over HTTP headers. Use 301 for permanent changes, 302/307 for temporary affiliate offers, preserving your SEO health.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Search className="h-8 w-8 text-primary mb-4" />
                    <CardTitle>Dynamic "rel" Attributes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Automatically append nofollow, sponsored, and ugc attributes to comply with Google's strict affiliate linking guidelines.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <ShieldCheck className="h-8 w-8 text-primary mb-4" />
                    <CardTitle>Zero Database Bloat</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">We use custom tables rather than bloating the wp_posts table, ensuring your site remains lightning fast even with 10,000+ links.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="advanced" className="pt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-primary/50 shadow-md">
                  <CardHeader>
                    <Globe className="h-8 w-8 text-primary mb-4" />
                    <CardTitle>Dynamic Geo-Routing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Send US visitors to Amazon.com, UK visitors to Amazon.co.uk. Maximize international commissions automatically.</p>
                  </CardContent>
                </Card>
                <Card className="border-primary/50 shadow-md">
                  <CardHeader>
                    <ArrowRightLeft className="h-8 w-8 text-primary mb-4" />
                    <CardTitle>A/B Split Testing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Rotate traffic between two different affiliate networks to scientifically prove which offer converts better.</p>
                  </CardContent>
                </Card>
                <Card className="border-primary/50 shadow-md">
                  <CardHeader>
                    <Highlighter className="h-8 w-8 text-primary mb-4" />
                    <CardTitle>DOM-Safe Auto-Linker</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Specify keywords. We'll safely convert them into affiliate links across your entire site without breaking HTML tags.</p>
                  </CardContent>
                </Card>
                <Card className="border-primary/50 shadow-md">
                  <CardHeader>
                    <Search className="h-8 w-8 text-primary mb-4" />
                    <CardTitle>Dynamic UTM Forwarding</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Pass UTM parameters from the referring URL directly to the affiliate network for pristine end-to-end tracking.</p>
                  </CardContent>
                </Card>
                <Card className="border-primary/50 shadow-md lg:col-span-2">
                  <CardHeader>
                    <XCircle className="h-8 w-8 text-primary mb-4" />
                    <CardTitle>Automated Deal Expiration & 404 Health Scanner</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Never send traffic to a dead offer. Set expiration dates to redirect to a fallback URL, and get alerted when an affiliate network link goes 404 dead.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Interactive Pricing */}
      <section id="pricing" className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground mb-8">Choose the license that fits your business. Upgrade or downgrade at any time.</p>
            
            <div className="inline-flex bg-muted p-1 rounded-lg">
              <Button 
                variant={billingCycle === "yearly" ? "default" : "ghost"} 
                onClick={() => setBillingCycle("yearly")}
                className="rounded-md"
              >
                Yearly Billing
              </Button>
              <Button 
                variant={billingCycle === "lifetime" ? "default" : "ghost"} 
                onClick={() => setBillingCycle("lifetime")}
                className="rounded-md"
              >
                Lifetime (One-Time)
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Free */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">Free Tier</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground ml-1">Forever Free</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-muted-foreground" /> Standard Cloaking</li>
                  <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-muted-foreground" /> Click Tracking</li>
                  <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-muted-foreground" /> Basic FTC Disclosures</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="https://wordpress.org/plugins/smart-affiliate-link-cloaker/">Download from WP.org</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Single */}
            <Card className="flex flex-col border-primary shadow-lg relative">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
              <CardHeader>
                <CardTitle className="text-xl">Pro Single Site</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${billingCycle === "yearly" ? "49" : "149"}</span>
                  <span className="text-muted-foreground ml-1">{billingCycle === "yearly" ? "/year" : "lifetime"}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Everything in Free</li>
                  <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Geo-Targeting</li>
                  <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Auto-Linker</li>
                  <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> 1 Site License</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Single Site</Button>
              </CardFooter>
            </Card>

            {/* Pro Multi */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">Pro Multi-Site</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${billingCycle === "yearly" ? "99" : "299"}</span>
                  <span className="text-muted-foreground ml-1">{billingCycle === "yearly" ? "/year" : "lifetime"}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> All Pro Features</li>
                  <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> A/B Split Testing</li>
                  <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> 404 Scanner</li>
                  <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> 5 Site Licenses</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Get Multi-Site</Button>
              </CardFooter>
            </Card>

            {/* Developer */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">Developer / Agency</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${billingCycle === "yearly" ? "199" : "499"}</span>
                  <span className="text-muted-foreground ml-1">{billingCycle === "yearly" ? "/year" : "lifetime"}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> All Pro Features</li>
                  <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Priority Support</li>
                  <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> White Labeling</li>
                  <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Unlimited Sites</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Get Unlimited</Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-12 text-center flex items-center justify-center gap-2 text-muted-foreground">
            <ShieldCheck className="h-5 w-5 text-green-500" />
            <span className="font-medium">14-Day No-Questions-Asked Money Back Guarantee</span>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-24 bg-muted/20 border-t">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Up and Running in 3 Minutes</h2>
            <p className="text-lg text-muted-foreground">It's designed to be completely plug-and-play.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2">Install & Activate</h3>
              <p className="text-sm text-muted-foreground">Upload the zip file via WordPress dashboard and enter your license key.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2">Configure Settings</h3>
              <p className="text-sm text-muted-foreground">Set your global slug (e.g., /go/) and customize your FTC disclosure text.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2">Add Your Links</h3>
              <p className="text-sm text-muted-foreground">Add your raw affiliate links and configure geo-targets if needed.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold mb-2">Let Auto-Linker Work</h3>
              <p className="text-sm text-muted-foreground">Specify keywords and watch the plugin instantly monetize your archives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Will this slow down my WordPress site?</AccordionTrigger>
              <AccordionContent>
                Not at all. Unlike other plugins that store link data in the bloated <code>wp_posts</code> table, we use custom optimized database tables. Redirects happen instantly at the HTTP level before the full WordPress theme even loads.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is the Auto-Linker safe for my SEO?</AccordionTrigger>
              <AccordionContent>
                Yes. Our DOM-safe parsing engine ensures that keywords inside headings (H1, H2), existing links (A tags), or image alt texts are completely ignored. It only links safe paragraph text.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you track my affiliate data?</AccordionTrigger>
              <AccordionContent>
                No. All click data, affiliate links, and analytics are stored 100% locally on your own server. We have zero access to your traffic or revenue metrics.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What happens if my Pro license expires?</AccordionTrigger>
              <AccordionContent>
                Your existing cloaked links will continue to redirect perfectly forever. You will simply lose access to premium features (like updating Geo-targets, Auto-linking new posts), plugin updates, and premium support.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
