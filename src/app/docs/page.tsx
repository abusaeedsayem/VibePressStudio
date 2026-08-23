"use client";

import { useState, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, Book, Code2, AlertCircle, Info, ChevronRight, Terminal, SearchX } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock documentation data structure
const docsData = {
  cloaker: [
    {
      id: "installation",
      title: "Installation & Setup",
      content: "Upload the zip file via your WordPress plugins page. Activate the plugin and navigate to VibePress Cloaker in the sidebar.",
      type: "guide",
    },
    {
      id: "pro-activation",
      title: "Pro License Activation (Freemius)",
      content: "After purchasing, you will receive a license key. Go to the Account tab in the plugin settings, enter the key, and click 'Agree & Activate'.",
      type: "guide",
    },
    {
      id: "config",
      title: "Configuration & Routing",
      content: "Set your global affiliate slug (default is /go/). You can optionally enable 301 permanent redirects for SEO juice or 307 temporary redirects.",
      type: "reference",
    },
    {
      id: "database",
      title: "API & Database Schema",
      content: "We use a custom table `wp_vibepress_links` instead of `wp_posts` to prevent bloat. DO NOT write directly to this table. Use our PHP helper: `vp_create_link($url, $slug)`.",
      type: "api",
    },
  ],
  shelfmaster: [
    {
      id: "installation",
      title: "OS Installation",
      content: "Download the executable for your OS (.exe, .dmg, .deb). Run the installer. On macOS, you may need to allow execution in System Settings > Privacy & Security.",
      type: "guide",
    },
    {
      id: "sqlite",
      title: "SQLite Database Setup",
      content: "ShelfMaster initializes an encrypted SQLite database on first launch in your AppData or Application Support directory. Ensure you back up this `.db` file weekly.",
      type: "reference",
    },
    {
      id: "hardware",
      title: "Hardware Integration (Printers)",
      content: "Connect your ESC/POS thermal printer via USB. In settings, select the COM port (Windows) or dev node (Linux/Mac). Test print using the generic text driver.",
      type: "guide",
    },
    {
      id: "changelog",
      title: "Changelog v1.2.0",
      content: "Added dual membership KYC features. Optimized SQLite query execution resulting in <40MB RAM usage during large catalog searches.",
      type: "changelog",
    },
  ]
};

const navigation = ["Installation", "Configuration", "Pro License Activation", "Troubleshooting", "API/Database Schema", "Changelog"];

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState("cloaker");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("Installation");

  const currentDocs = activeTab === "cloaker" ? docsData.cloaker : docsData.shelfmaster;
  
  const filteredDocs = useMemo(() => {
    if (!searchQuery.trim()) return currentDocs;
    return currentDocs.filter(
      doc => doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
             doc.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, currentDocs]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="border-b bg-muted/20">
        <div className="container px-4 md:px-6 py-12 md:py-16 mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Documentation & Knowledgebase</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive guides, API references, and troubleshooting steps for all VibePress Studio products.
          </p>
          
          <div className="relative mt-8 max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search documentation, guides, and FAQs..." 
              className="pl-10 h-14 text-base bg-background shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 mx-auto max-w-7xl flex flex-col md:flex-row gap-8 py-12">
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-24">
            <h3 className="font-semibold mb-4 flex items-center gap-2"><Book className="h-5 w-5 text-primary" /> Topics</h3>
            <nav className="space-y-1">
              {navigation.map((item) => (
                <button
                  key={item}
                  onClick={() => { setActiveSection(item); setSearchQuery(""); }}
                  className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                    activeSection === item && !searchQuery
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="w-full md:w-auto h-auto grid grid-cols-1 md:flex">
              <TabsTrigger value="cloaker" className="py-3 px-6 text-sm">Smart Affiliate Link Cloaker</TabsTrigger>
              <TabsTrigger value="shelfmaster" className="py-3 px-6 text-sm">ShelfMaster Desktop</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="space-y-10">
            {searchQuery ? (
              <div>
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Search className="h-5 w-5" /> Search results for "{searchQuery}"
                </h2>
                {filteredDocs.length === 0 ? (
                  <div className="text-center py-12 border rounded-lg bg-muted/20">
                    <SearchX className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium">No results found</h3>
                    <p className="text-muted-foreground">Try adjusting your search terms.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredDocs.map(doc => (
                      <div key={doc.id} className="p-6 border rounded-xl hover:shadow-md transition-shadow bg-card">
                        <Badge variant="outline" className="mb-3">{doc.type}</Badge>
                        <h3 className="text-lg font-bold mb-2 text-primary">{doc.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{doc.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="prose prose-slate dark:prose-invert max-w-none">
                {activeTab === "cloaker" ? (
                  <>
                    <h2 className="text-3xl font-bold tracking-tight flex items-center gap-3">
                      {activeSection}
                    </h2>
                    
                    <div className="my-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg flex gap-3 text-blue-700 dark:text-blue-400">
                      <Info className="h-6 w-6 shrink-0" />
                      <div>
                        <strong>Pro Tip:</strong> Ensure your permalinks are set to "Post name" in WordPress settings (Settings {'>'} Permalinks) for the URL routing engine to function correctly.
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Welcome to the Smart Affiliate Link Cloaker documentation. This section covers {activeSection.toLowerCase()} to help you get the most out of your license.
                    </p>

                    <div className="my-8">
                      <h3 className="text-xl font-bold mb-4">Step-by-Step Guide</h3>
                      <ol className="space-y-4 list-decimal pl-5">
                        <li className="pl-2">Navigate to the VibePress menu in your WordPress admin panel.</li>
                        <li className="pl-2">Click on <strong>Add New Link</strong> at the top of the dashboard.</li>
                        <li className="pl-2">Paste your raw affiliate URL into the Target URL field.</li>
                        <li className="pl-2">Specify your custom slug (e.g., <code>product-name</code>) which will append to your base prefix.</li>
                      </ol>
                    </div>

                    <div className="my-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg flex gap-3 text-amber-700 dark:text-amber-400">
                      <AlertCircle className="h-6 w-6 shrink-0" />
                      <div>
                        <strong>Warning:</strong> Changing the global prefix after links have been indexed by search engines will result in 404 errors. If you must change it, ensure you set up wild-card redirects at the server level.
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2"><Code2 className="h-5 w-5" /> API Snippet Example</h3>
                    <div className="bg-muted p-4 rounded-lg overflow-x-auto border font-mono text-sm">
                      <pre>
<span className="text-blue-500">{"<?php"}</span>{"\n"}
<span className="text-green-500">{"// Programmatically fetch a cloaked URL by its target"}</span>{"\n"}
$cloaked_url = vp_get_link_by_target(<span className="text-amber-600">'https://appsumo.com/deal'</span>);{"\n"}
{"\n"}
<span className="text-blue-500">if</span> ($cloaked_url) {"{\n"}
{"    "}echo <span className="text-amber-600">'&lt;a href="'</span> . esc_url($cloaked_url) . <span className="text-amber-600">'"&gt;Buy Now&lt;/a&gt;'</span>;{"\n"}
{"}"}
                      </pre>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-3xl font-bold tracking-tight flex items-center gap-3">
                      {activeSection}
                    </h2>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                      Welcome to the ShelfMaster Desktop OS documentation. Our Rust-powered native backend combined with SQLite ensures unparalleled offline performance for your library.
                    </p>

                    <div className="my-8 p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-lg flex gap-3 text-indigo-700 dark:text-indigo-400">
                      <Terminal className="h-6 w-6 shrink-0" />
                      <div>
                        <strong>Architecture Note:</strong> ShelfMaster stores data in <code>~/.shelfmaster/data.db</code> on macOS/Linux and <code>%APPDATA%\ShelfMaster\data.db</code> on Windows. You can safely copy this file to migrate your entire institutional database.
                      </div>
                    </div>
                    
                    <div className="my-8">
                      <h3 className="text-xl font-bold mb-4">Initial Setup Workflow</h3>
                      <div className="border rounded-lg overflow-hidden">
                        <div className="flex items-center p-4 border-b bg-muted/30">
                          <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold mr-4">1</div>
                          <div>
                            <h4 className="font-semibold">Launch Application</h4>
                            <p className="text-sm text-muted-foreground">Open ShelfMaster. Accept the EULA and create your Master Admin account.</p>
                          </div>
                        </div>
                        <div className="flex items-center p-4 border-b bg-background">
                          <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold mr-4">2</div>
                          <div>
                            <h4 className="font-semibold">Configure Tax & Currency</h4>
                            <p className="text-sm text-muted-foreground">Navigate to Settings &gt; Financials to set your local currency symbol and overdue fine structures.</p>
                          </div>
                        </div>
                        <div className="flex items-center p-4 bg-muted/30">
                          <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold mr-4">3</div>
                          <div>
                            <h4 className="font-semibold">Import Legacy Data</h4>
                            <p className="text-sm text-muted-foreground">Use the CSV Importer tool in the Cataloging tab to bulk upload your existing book registry.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
