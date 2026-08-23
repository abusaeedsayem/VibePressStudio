"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/data/products";
import { 
  ArrowRight, Download, Server, ShieldCheck, Zap,
  Link as LinkIcon, Library, Code2, CheckCircle2, Star, ExternalLink, Trophy
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [filter, setFilter] = useState<string>("All Solutions");
  
  const filteredProducts = products.filter(p => {
    if (filter === "All Solutions") return true;
    if (filter === "WordPress Plugins") return p.category === "wordpress-plugin";
    if (filter === "Desktop Software") return p.category === "desktop-app";
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
        <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
          >
            Engineered for <span className="text-primary">Performance</span>.<br className="hidden md:block" /> Built for <span className="text-primary">Growth</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            High-performance WordPress Plugins, Offline-First Desktop Systems, and Creator Tools crafted by Abu Saeed Sayem.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="h-12 px-8 text-base font-semibold" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Products <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold" asChild>
              <Link href="https://appsumo.com" target="_blank">
                View on AppSumo / Freemius <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t pt-10"
          >
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold">100k+</div>
              <div className="text-sm text-muted-foreground mt-2 font-medium">Active Installs</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">3x</div>
              <div className="text-sm text-muted-foreground mt-2 font-medium">Database Speedup</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-green-500">100%</div>
              <div className="text-sm text-muted-foreground mt-2 font-medium">Offline Resilience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-500">0%</div>
              <div className="text-sm text-muted-foreground mt-2 font-medium">Bloat</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flagship Products Section */}
      <section id="products" className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Flagship Solutions</h2>
              <p className="text-muted-foreground mt-2">Discover our ecosystem of robust software products.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["All Solutions", "WordPress Plugins", "Desktop Software"].map(f => (
                <Button 
                  key={f} 
                  variant={filter === f ? "default" : "outline"}
                  onClick={() => setFilter(f)}
                  className="rounded-full"
                >
                  {f}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="flex flex-col h-full overflow-hidden transition-all hover:shadow-lg border-muted">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      {product.icon === "Link" ? <LinkIcon className="h-6 w-6 text-primary" /> : <Library className="h-6 w-6 text-primary" />}
                    </div>
                    <Badge variant="secondary" className="font-medium">
                      {product.category === "wordpress-plugin" ? "WordPress Plugin" : "Desktop App"}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <p className="text-muted-foreground mt-2">{product.tagline}</p>
                </CardHeader>
                <CardContent className="flex-1 space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-muted-foreground">Core Architecture</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.techStack.map(tech => (
                        <Badge key={tech} variant="outline" className="bg-background">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-muted-foreground">Key Highlights</h4>
                    <ul className="space-y-2">
                      {product.keyFeatures.slice(0, 3).map(feature => (
                        <li key={feature.title} className="flex items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 mr-2 text-primary shrink-0 mt-0.5" />
                          <span><span className="font-medium">{feature.title}:</span> {feature.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row items-center justify-between border-t bg-muted/20 p-6 gap-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Starting from</span>
                    <span className="font-bold text-lg">
                      {product.pricingTiers[0].priceYearly === 0 ? "Free" : `$${product.pricingTiers[0].priceYearly || product.pricingTiers[0].priceLifetime}`}
                    </span>
                  </div>
                  <Button asChild className="w-full sm:w-auto">
                    <Link href={`/products/${product.slug}`}>
                      Explore Product & Demo <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution Channels Section */}
      <section className="py-24 border-y">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Available Everywhere</h2>
            <p className="text-muted-foreground mt-4 text-lg">
              We distribute our software through trusted platforms to ensure you get seamless updates, verified security, and top-tier support.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/30">
              <Download className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">WordPress.org</h3>
              <p className="text-muted-foreground">Free core versions hosted on the official repository. Open source and community reviewed.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/30">
              <ShieldCheck className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Freemius</h3>
              <p className="text-muted-foreground">Secure Pro subscriptions, instant activation, and hassle-free license management.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/30">
              <Trophy className="h-10 w-10 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">AppSumo</h3>
              <p className="text-muted-foreground">Exclusive lifetime deals for early adopters and growing startups. Partner verified.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Standards */}
      <section className="py-24 bg-muted/10">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Uncompromising Engineering Standards</h2>
              <p className="text-lg text-muted-foreground">
                We do not cut corners. Our software is built to scale from day one, adhering to the strictest coding guidelines and performance benchmarks in the industry.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full"><Zap className="h-5 w-5 text-primary" /></div>
                  <span className="font-medium text-lg">WordPress VIP Coding Standards</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full"><Code2 className="h-5 w-5 text-primary" /></div>
                  <span className="font-medium text-lg">Strict PSR-4 & PSR-12 Compliance</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full"><Server className="h-5 w-5 text-primary" /></div>
                  <span className="font-medium text-lg">Zero Database Bloat Architecture</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full"><ShieldCheck className="h-5 w-5 text-primary" /></div>
                  <span className="font-medium text-lg">Rust-Powered Native Memory Safety</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden border bg-background shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
              <pre className="p-8 text-sm overflow-x-auto text-muted-foreground font-mono">
                <code className="text-green-500">{"// Zero-bloat query optimization"}</code>{"\n"}
                <code className="text-blue-400">const</code> <code className="text-yellow-300">getOptimizedData</code> = <code className="text-blue-400">async</code> () =&gt; {"{\n"}
                {"  "}try {"{\n"}
                {"    "}<code className="text-blue-400">const</code> db = <code className="text-blue-400">await</code> initSQLite();{"\n"}
                {"    "}<code className="text-blue-400">return</code> db.execute(<code className="text-orange-300">{`\n      SELECT id, title \n      FROM cache \n      WHERE expires_at > ?\n    `}</code>, [Date.now()]);{"\n"}
                {"  "} {"}"} catch (e) {"{\n"}
                {"    "}panic(e);{"\n"}
                {"  "}{"}\n"}
                {"}"}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* About the Architect */}
      <section className="py-24 border-t">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-3xl">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm">The Architect Behind The Code</Badge>
          <h2 className="text-3xl font-bold tracking-tight mb-6">Abu Saeed Sayem</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Lead Software Architect dedicated to solving complex problems through elegant code. With years of experience engineering scalable WordPress plugins and high-performance cross-platform desktop applications, I founded VibePress Studio to empower creators and businesses with robust software they can rely on.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link href="https://abusaeedsayem.netlify.app" target="_blank">
              View Developer Portfolio <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
