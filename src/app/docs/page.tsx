"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { 
  Search, BookOpen, Package, CheckCircle2, ChevronRight, 
  Copy, Check, ArrowRight, Layers, ShieldCheck, Zap, 
  ExternalLink, Sparkles, Terminal, FileText, HelpCircle
} from "lucide-react";
import docsDataJson from "@/content/docs.json";

interface DocIndexItem {
  id: string;
  title: string;
  summary: string;
  badge?: string;
  content: string;
}

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSectionId, setActiveSectionId] = useState("what-is-salc");
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const { hero, products: docsProducts } = docsDataJson;
  const currentProduct = docsProducts[0];
  const docIndex: DocIndexItem[] = currentProduct.index as DocIndexItem[];

  const filteredSections = docIndex.filter((item) =>
    !searchQuery.trim() ||
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeDoc = docIndex.find((i) => i.id === activeSectionId) || docIndex[0];

  const handleCopySection = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Hero Header */}
      <section className="border-b border-border bg-gradient-to-b from-primary/10 via-background to-background py-14 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1">
              <Package className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary">Smart Affiliate Link Cloaker v1.0.6</span>
            </div>
            <span className="text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20">
              24 Core Features Documentation
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4 max-w-4xl">
            {hero.title}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8">
            {hero.subtitle}
          </p>
          
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder={hero.searchPlaceholder} 
              className="pl-11 h-12 text-xs md:text-sm bg-background border-input shadow-xs rounded-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Main Documentation Viewer */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 w-full flex-1">
        
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar Section Index */}
          <aside className="w-full lg:w-84 shrink-0 space-y-4">
            <div className="sticky top-24 bg-card border border-border rounded-xl p-4 shadow-xs">
              <div className="flex items-center justify-between px-2 mb-3 pb-2 border-b border-border">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" /> Manual Index
                </h3>
                <span className="text-[11px] font-mono font-semibold text-primary">{docIndex.length} Topics</span>
              </div>

              <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-1">
                {docIndex.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSectionId(item.id);
                      setSearchQuery("");
                      window.scrollTo({ top: 200, behavior: "smooth" });
                    }}
                    className={`w-full text-left px-3 py-2.5 text-xs font-semibold rounded-lg transition-colors flex items-center justify-between gap-2 cursor-pointer ${
                      activeSectionId === item.id && !searchQuery
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <span className="truncate">{item.title}</span>
                    <ChevronRight className={`h-3.5 w-3.5 shrink-0 opacity-60 ${activeSectionId === item.id ? "opacity-100" : ""}`} />
                  </button>
                ))}
              </nav>

              <div className="pt-4 mt-4 border-t border-border">
                <Link
                  href="/products/smart-affiliate-link-cloaker"
                  className="w-full bg-muted hover:bg-muted/80 text-foreground text-xs font-bold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Explore Product Overview</span> <ArrowRight className="h-3.5 w-3.5 text-primary" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Article Body */}
          <main className="flex-1 min-w-0">
            {searchQuery ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <h2 className="text-xl font-bold text-foreground">
                    Search Results for &quot;{searchQuery}&quot;
                  </h2>
                  <span className="text-xs text-muted-foreground font-medium">
                    Found {filteredSections.length} matching sections
                  </span>
                </div>

                {filteredSections.length === 0 ? (
                  <div className="p-12 border border-border rounded-xl text-center bg-card space-y-3">
                    <p className="text-sm font-semibold text-foreground">No matching documentation topics found.</p>
                    <p className="text-xs text-muted-foreground">Try searching with different terms like &quot;Stripe&quot;, &quot;Amazon&quot;, &quot;Redirect&quot;, &quot;24 features&quot;, or &quot;307&quot;.</p>
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-xs text-primary font-bold hover:underline cursor-pointer"
                    >
                      Clear search filter
                    </button>
                  </div>
                ) : (
                  filteredSections.map((item) => (
                    <div key={item.id} className="p-6 border border-border rounded-xl bg-card space-y-3 shadow-xs">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-base text-primary">{item.title}</h3>
                        <button
                          onClick={() => {
                            setActiveSectionId(item.id);
                            setSearchQuery("");
                          }}
                          className="text-xs text-primary font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          View Full Section &rarr;
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground font-medium">{item.summary}</p>
                      <div className="text-xs text-muted-foreground leading-relaxed pt-3 border-t border-border/60 whitespace-pre-line">
                        {item.content}
                      </div>
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm space-y-8">
                <div className="border-b border-border pb-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-2.5 py-0.5 rounded">
                        {activeDoc.badge || "Technical Documentation"}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">
                        {currentProduct.name}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopySection(activeDoc.content, activeDoc.id)}
                      className="text-xs font-medium text-muted-foreground hover:text-foreground flex items-center gap-1.5 bg-muted px-3 py-1.5 rounded-lg transition-colors cursor-pointer border"
                    >
                      {copiedSection === activeDoc.id ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-500" />
                          <span className="text-emerald-500 font-bold">Copied Content!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy Section</span>
                        </>
                      )}
                    </button>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
                    {activeDoc.title}
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-medium">
                    {activeDoc.summary}
                  </p>
                </div>

                <div className="space-y-6 text-sm text-foreground leading-relaxed">
                  <div className="whitespace-pre-line leading-relaxed text-sm md:text-base text-foreground/90 font-sans">
                    {activeDoc.content}
                  </div>
                </div>

                {/* Footer Verification Bar */}
                <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Verified against Smart Affiliate Link Cloaker v1.0.6 (24 Core Features)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link
                      href="/products/smart-affiliate-link-cloaker"
                      className="text-primary font-bold hover:underline"
                    >
                      View Live Product Page &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
}
