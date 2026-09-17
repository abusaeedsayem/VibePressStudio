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
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSectionId, setActiveSectionId] = useState<string>("");
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const { hero, products: docsProducts } = docsDataJson;
  const currentProduct = docsProducts[selectedProductIndex] || docsProducts[0];
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
          
          {/* Product Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {docsProducts.map((prod, pIdx) => (
              <button
                key={prod.id}
                onClick={() => {
                  setSelectedProductIndex(pIdx);
                  setActiveSectionId(prod.index[0].id);
                }}
                className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer border ${
                  selectedProductIndex === pIdx
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-card text-muted-foreground border-border hover:bg-muted"
                }`}
              >
                <img src={prod.logoImage} alt={prod.name} className="h-5 w-5 object-contain rounded shrink-0 bg-white p-0.5" />
                <span>{prod.name}</span>
                <span className="text-[10px] opacity-80 font-mono">({prod.version})</span>
              </button>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4 max-w-4xl">
            {currentProduct.name} — Technical Manual &amp; Guides
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
                    onClick={() => setActiveSectionId(item.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between group cursor-pointer ${
                      activeDoc.id === item.id 
                        ? "bg-primary text-primary-foreground font-bold shadow-xs" 
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <span className="truncate">{item.title}</span>
                    <ChevronRight className={`h-3.5 w-3.5 shrink-0 transition-transform ${activeDoc.id === item.id ? "rotate-90 text-primary-foreground" : "opacity-0 group-hover:opacity-100"}`} />
                  </button>
                ))}
              </nav>

              <div className="mt-4 pt-4 border-t border-border space-y-2">
                <Link
                  href={`/products/${currentProduct.id === "blueprnt" ? "blueprnt" : "vibepress-affiliate-link-cloaker"}`}
                  className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground text-xs font-bold py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Product Showcase Page
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Reading Area */}
          <main className="flex-1 min-w-0 space-y-8">
            
            {/* Active Topic Header Card */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-sm space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary px-3 py-0.5 rounded-full border border-primary/20">
                      {activeDoc.badge || "Guide"}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      {currentProduct.name} ({currentProduct.version})
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">
                    {activeDoc.title}
                  </h2>
                </div>

                <button
                  onClick={() => handleCopySection(activeDoc.content, activeDoc.id)}
                  className="bg-muted hover:bg-muted/80 text-foreground text-xs font-bold py-2 px-4 rounded-lg transition-colors flex items-center gap-1.5 border border-border cursor-pointer"
                  title="Copy Section Content"
                >
                  {copiedSection === activeDoc.id ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedSection === activeDoc.id ? "Copied Content" : "Copy Section"}</span>
                </button>
              </div>

              <div className="p-4 bg-muted/40 border border-border rounded-xl text-xs md:text-sm text-foreground font-medium leading-relaxed">
                <strong>Executive Summary:</strong> {activeDoc.summary}
              </div>

              {/* Main Markdown Body Content */}
              <div className="prose dark:prose-invert max-w-none text-sm md:text-base leading-relaxed text-muted-foreground whitespace-pre-wrap font-sans">
                {activeDoc.content}
              </div>

            </div>

            {/* Quick Navigation Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <Link
                href="/contact"
                className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1.5"
              >
                <HelpCircle className="h-4 w-4 text-primary" /> Have technical questions? Contact Support
              </Link>
              <Link
                href="/lab"
                className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
              >
                Pre-Launch Registration <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </main>

        </div>

      </div>

    </div>
  );
}
