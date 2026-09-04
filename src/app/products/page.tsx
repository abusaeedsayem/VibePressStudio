"use client";

import Link from "next/link";
import { products } from "@/data/products";
import { 
  Package, ArrowRight, CheckCircle2, Code2, Users, 
  Share2, Sparkles, Bell
} from "lucide-react";

export default function ProductsDirectoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Directory Hero Block */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-16 md:py-24 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
            The VibePress Software Suite
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our complete ecosystem of modular WordPress plugins and high-performance digital tools built for precision and speed.
          </p>
        </div>
      </section>

      {/* Directory Items List */}
      <section className="py-16 px-4 md:px-6 max-w-[1280px] mx-auto w-full">
        <div className="space-y-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-border pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {product.categoryLabel}
                    </span>
                    <span className="text-xs font-mono font-medium text-muted-foreground border border-border px-2.5 py-0.5 rounded">
                      Current Release: {product.version}
                    </span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-foreground">
                    {product.name}
                  </h2>
                </div>

                <Link
                  href={`/products/${product.slug}`}
                  className="bg-primary text-primary-foreground text-sm font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 self-start lg:self-center"
                >
                  View Detailed Specifications <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-4xl">
                {product.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-border/60">
                {/* Technical Foundation */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                    <Code2 className="h-4 w-4 text-primary" /> Technical Foundation
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.techStack.map((tech, idx) => (
                      <span key={idx} className="text-xs font-mono bg-muted text-muted-foreground px-2.5 py-1 rounded border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Target Users */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                    <Users className="h-4 w-4 text-primary" /> Target Users
                  </div>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {product.targetAudience.map((user, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span>{user}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Distribution */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                    <Share2 className="h-4 w-4 text-primary" /> Distribution Channels
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Pre-Launch Registration, WordPress.org Repository, Direct Download & License Activation
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Engineering Roadmap Teaser */}
      <section id="roadmap" className="py-16 px-4 md:px-6 max-w-[1280px] mx-auto w-full">
        <div className="bg-gradient-to-r from-primary to-indigo-600 text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              <Sparkles className="h-3.5 w-3.5" /> Upcoming Software Roadmap
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              In The Studio Pipeline
            </h3>
            <p className="text-sm md:text-base text-white leading-relaxed">
              We are continually architecting new tools, including automated content staging workflows and enterprise WordPress performance utilities.
            </p>
          </div>

          <Link
            href="/lab"
            className="bg-white text-primary text-sm font-bold py-3.5 px-7 rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2 shrink-0 shadow-md"
          >
            <Bell className="h-4 w-4 text-primary" /> Subscribe to Release Notes
          </Link>
        </div>
      </section>

    </div>
  );
}
