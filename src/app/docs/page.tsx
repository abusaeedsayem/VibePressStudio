"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Package, Monitor, CheckCircle2, ChevronRight } from "lucide-react";
import docsDataJson from "@/content/docs.json";

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState("cloaker");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSectionId, setActiveSectionId] = useState("getting-started");

  const { hero, products: docsProducts } = docsDataJson;

  const currentProduct = docsProducts.find(p => p.id === activeTab) || docsProducts[0];

  const filteredSections = currentProduct.index.filter(item =>
    !searchQuery.trim() ||
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeDoc = currentProduct.index.find(i => i.id === activeSectionId) || currentProduct.index[0];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Hero Header */}
      <section className="border-b border-border bg-gradient-to-b from-primary/10 via-background to-background py-14 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            {hero.title}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8">
            {hero.subtitle}
          </p>
          
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder={hero.searchPlaceholder} 
              className="pl-11 h-12 text-sm bg-background border-input shadow-sm rounded-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Main Documentation Viewer */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 w-full flex-1">
        
        {/* Product Selector Tabs */}
        <Tabs 
          value={activeTab} 
          onValueChange={(val) => {
            setActiveTab(val);
            const targetProd = docsProducts.find(p => p.id === val);
            if (targetProd) setActiveSectionId(targetProd.index[0].id);
          }} 
          className="mb-8"
        >
          <TabsList className="bg-muted p-1 rounded-xl">
            <TabsTrigger value="cloaker" className="text-xs font-bold px-6 py-2.5 rounded-lg flex items-center gap-2">
              <Package className="h-4 w-4 text-primary" /> Smart Affiliate Link Cloaker
            </TabsTrigger>
            <TabsTrigger value="shelfmaster" className="text-xs font-bold px-6 py-2.5 rounded-lg flex items-center gap-2">
              <Monitor className="h-4 w-4 text-indigo-500" /> ShelfMaster Desktop
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex flex-col md:flex-row gap-10">
          
          {/* Sidebar Section Index */}
          <aside className="w-full md:w-72 shrink-0 space-y-4">
            <div className="sticky top-24">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-3 mb-3 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" /> Documentation Index
              </h3>
              <nav className="space-y-1">
                {currentProduct.index.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSectionId(item.id);
                      setSearchQuery("");
                    }}
                    className={`w-full text-left px-3.5 py-2.5 text-xs font-semibold rounded-lg transition-colors flex items-center justify-between ${
                      activeSectionId === item.id && !searchQuery
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronRight className={`h-3 w-3 opacity-60 ${activeSectionId === item.id ? "opacity-100" : ""}`} />
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Article Body */}
          <main className="flex-1 min-w-0">
            {searchQuery ? (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-foreground">
                  Search Results for &quot;{searchQuery}&quot;
                </h2>
                {filteredSections.length === 0 ? (
                  <div className="p-8 border border-border rounded-xl text-center bg-card">
                    <p className="text-sm text-muted-foreground">No matching documentation topics found.</p>
                  </div>
                ) : (
                  filteredSections.map((item) => (
                    <div key={item.id} className="p-6 border border-border rounded-xl bg-card space-y-2">
                      <h3 className="font-bold text-base text-primary">{item.title}</h3>
                      <p className="text-xs text-muted-foreground font-medium">{item.summary}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-border/60">{item.content}</p>
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      {currentProduct.name} User Manual
                    </span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-foreground mb-3">
                    {activeDoc.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                    {activeDoc.summary}
                  </p>
                </div>

                <div className="border-t border-border pt-6 space-y-6 text-sm text-foreground leading-relaxed">
                  <p>{activeDoc.content}</p>

                  {activeDoc.steps && (
                    <div className="bg-muted/40 border border-border rounded-xl p-6 space-y-3">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-foreground">
                        Step-by-Step Procedure:
                      </h4>
                      <ol className="space-y-2 text-xs text-muted-foreground list-decimal pl-4">
                        {activeDoc.steps.map((step, sIdx) => (
                          <li key={sIdx} className="leading-relaxed">{step}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>

                <div className="border-t border-border pt-6 flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Verified for product release {activeTab === "cloaker" ? "v1.0.0 Stable" : "v1.0.0 Production Blueprint"}</span>
                </div>
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
}
