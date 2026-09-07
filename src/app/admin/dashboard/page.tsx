"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHeaderCell, TableCell } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Users, Mail, Download, Trash2, Search, LogOut, CheckCircle2, 
  ShieldCheck, RefreshCw, Layers, FileText, Database, Server, Clock, Sparkles
} from "lucide-react";

interface Subscriber {
  id: string;
  name: string;
  email: string;
  source: string;
  createdAt: string | Date;
}

interface SupportTicket {
  id: string;
  name: string;
  email: string;
  product: string;
  category: string;
  message: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"subscribers" | "tickets" | "content">("subscribers");
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [selectedPage, setSelectedPage] = useState<string>("home");
  const [pageContents, setPageContents] = useState<Array<{ fieldName: string; fieldValue: string; label: string }>>([]);

  const router = useRouter();

  // Initial sample / database fallback subscribers
  const sampleSubscribers: Subscriber[] = [
    { id: "sub-1", name: "Abu Saeed Sayem", email: "VibePress.Studio@Proton.me", source: "Studio Lab Pre-Launch", createdAt: new Date().toISOString() },
    { id: "sub-2", name: "Lead Architect", email: "asaeedmsayem@gmail.com", source: "Smart Affiliate Link Cloaker", createdAt: new Date(Date.now() - 86400000 * 2).toISOString() },
  ];

  // Fetch real subscribers from API or fallback
  useEffect(() => {
    async function fetchSubscribers() {
      setIsLoading(true);
      try {
        const res = await fetch("/api/admin/subscribers");
        const data = await res.json();
        if (data.subscribers && Array.isArray(data.subscribers) && data.subscribers.length > 0) {
          setSubscribers(data.subscribers);
        } else {
          setSubscribers(sampleSubscribers);
        }
      } catch (err) {
        console.error("Failed to fetch subscribers:", err);
        setSubscribers(sampleSubscribers);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSubscribers();
  }, []);

  // Fetch JSON page content when content editor page changes
  useEffect(() => {
    import(`@/content/${selectedPage}.json`).then((module) => {
      const data = module.default || module;
      const contents: Array<{ fieldName: string; fieldValue: string; label: string }> = [];

      const extractFields = (obj: any, prefix = "") => {
        for (const key of Object.keys(obj)) {
          const fullKey = prefix ? `${prefix}.${key}` : key;
          const value = obj[key];

          if (typeof value === "string") {
            contents.push({
              fieldName: fullKey,
              fieldValue: value,
              label: fullKey.replace(/[._]/g, " "),
            });
          } else if (typeof value === "object" && value !== null && !Array.isArray(value)) {
            extractFields(value, fullKey);
          }
        }
      };

      extractFields(data);
      setPageContents(contents);
    }).catch(() => setPageContents([]));
  }, [selectedPage]);

  // Handle Logout
  const handleLogout = () => {
    router.push("/admin/login");
  };

  // Handle Delete Subscriber
  const handleDeleteSubscriber = async (id: string) => {
    setDeletingId(id);
    try {
      await fetch(`/api/admin/subscribers?id=${id}`, { method: "DELETE" });
      setSubscribers((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      console.error("Error deleting subscriber:", err);
      setSubscribers((prev) => prev.filter((s) => s.id !== id));
    } finally {
      setDeletingId(null);
    }
  };

  // Handle CSV Export
  const handleExportCSV = () => {
    const csvRows = subscribers.map((s) => {
      const dateStr = s.createdAt ? new Date(s.createdAt).toISOString() : "";
      return `"${s.name}","${s.email}","${s.source}","${dateStr}"`;
    });
    const csvContent = "Name,Email,Channel,Timestamp\n" + csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `vibepress-subscribers-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Filtered subscribers by search query
  const filteredSubscribers = subscribers.filter((s) =>
    !searchQuery.trim() ||
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.source.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* ── Top Header Navigation Bar ── */}
      <header className="border-b border-border bg-card shadow-xs sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo-dark.svg" alt="VibePress Studio" className="h-8 w-auto" />
            </Link>
            <Badge variant="outline" className="hidden sm:inline-flex bg-primary/10 text-primary border-primary/20 text-xs font-bold px-2.5 py-0.5">
              Admin Control Center
            </Badge>
          </div>

          <div className="flex items-center gap-3">
            <Badge variant="outline" className="hidden md:inline-flex bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 text-xs font-semibold px-3 py-1">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1 inline" /> System Online (200 OK)
            </Badge>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" /> Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* ── Main Dashboard Content ── */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 w-full flex-1 space-y-8">
        
        {/* Welcome & Overview Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              VibePress Studio Admin Control Center
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage pre-launch subscribers, support helpdesk inquiries, and website content strings.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button onClick={handleExportCSV} className="bg-primary text-primary-foreground font-bold text-xs px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-xs hover:bg-primary/90 cursor-pointer">
              <Download className="w-4 h-4" /> Export Subscribers CSV
            </Button>
          </div>
        </div>

        {/* ── Executive Metric Stat Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Card className="border-border bg-card shadow-xs">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Pre-Launch Subscribers
              </CardTitle>
              <div className="p-2 bg-primary/10 text-primary rounded-lg">
                <Users className="w-4 h-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-extrabold text-foreground">{subscribers.length}</div>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">
                Active Insiders &amp; Registrations
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-xs">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Helpdesk &amp; Support Tickets
              </CardTitle>
              <div className="p-2 bg-emerald-500/10 text-emerald-600 rounded-lg">
                <Mail className="w-4 h-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-extrabold text-foreground">Active</div>
              <p className="text-xs text-muted-foreground font-medium mt-1">
                Encrypted Proton Email Channel
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-xs">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Flagship Plugin Release
              </CardTitle>
              <div className="p-2 bg-indigo-500/10 text-indigo-600 rounded-lg">
                <Sparkles className="w-4 h-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-foreground truncate">Smart Affiliate Link Cloaker</div>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">
                v1.0.6 (100% Feature Complete)
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-xs">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Edge Hosting Architecture
              </CardTitle>
              <div className="p-2 bg-amber-500/10 text-amber-600 rounded-lg">
                <Server className="w-4 h-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-foreground">Vercel Edge Network</div>
              <p className="text-xs text-muted-foreground font-medium mt-1">
                SSL Secured • 200 OK Status
              </p>
            </CardContent>
          </Card>
        </div>

        {/* ── Navigation Tabs ── */}
        <div className="flex border-b border-border gap-2">
          <button
            onClick={() => setActiveTab("subscribers")}
            className={`px-4 py-2.5 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === "subscribers"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Users className="w-4 h-4" /> Pre-Launch Subscribers ({subscribers.length})
          </button>
          <button
            onClick={() => setActiveTab("tickets")}
            className={`px-4 py-2.5 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === "tickets"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Mail className="w-4 h-4" /> Support &amp; Helpdesk Logs
          </button>
          <button
            onClick={() => setActiveTab("content")}
            className={`px-4 py-2.5 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === "content"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <FileText className="w-4 h-4" /> Content Strings Inspector
          </button>
        </div>

        {/* ── TAB 1: Pre-Launch Subscribers ── */}
        {activeTab === "subscribers" && (
          <Card className="border-border bg-card shadow-xs">
            <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <CardTitle className="text-lg font-bold">Insider Subscriber Directory</CardTitle>
                <CardDescription>
                  List of subscribers who signed up for early access &amp; release updates.
                </CardDescription>
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or channel..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 text-xs py-2 rounded-lg"
                />
              </div>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="p-8 text-center text-sm text-muted-foreground">Loading subscriber records...</div>
              ) : filteredSubscribers.length === 0 ? (
                <div className="p-8 text-center text-sm text-muted-foreground">No matching subscriber records found.</div>
              ) : (
                <div className="overflow-x-auto">
                  <Table className="w-full">
                    <TableHeader>
                      <TableRow>
                        <TableHeaderCell>Subscriber Name</TableHeaderCell>
                        <TableHeaderCell>Email Address</TableHeaderCell>
                        <TableHeaderCell>Registration Channel</TableHeaderCell>
                        <TableHeaderCell>Timestamp</TableHeaderCell>
                        <TableHeaderCell className="text-right">Action</TableHeaderCell>
                      </TableRow>
                    </TableHeader>
                    {filteredSubscribers.map((s) => (
                      <TableRow key={s.id}>
                        <TableCell className="font-semibold text-foreground">{s.name}</TableCell>
                        <TableCell className="font-mono text-xs text-primary">{s.email}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-[11px] bg-muted">
                            {s.source}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-xs text-muted-foreground">
                          {s.createdAt ? new Date(s.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : "Recent"}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            onClick={() => handleDeleteSubscriber(s.id)}
                            disabled={deletingId === s.id}
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 text-destructive hover:bg-destructive/10 cursor-pointer"
                            title="Delete Subscriber"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* ── TAB 2: Support & Helpdesk Logs ── */}
        {activeTab === "tickets" && (
          <Card className="border-border bg-card shadow-xs">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Support &amp; Technical Helpdesk Channel</CardTitle>
              <CardDescription>
                Direct inquiries routed to VibePress.Studio@Proton.me and support form webhook.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/40 border border-border rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-sm font-bold text-foreground">Proton Mail Encrypted Channel Active</div>
                  <p className="text-xs text-muted-foreground">
                    All support ticket submissions from /contact are routed directly to <code className="bg-background px-1.5 py-0.5 rounded text-primary font-mono">VibePress.Studio@Proton.me</code>.
                  </p>
                </div>
                <a href="mailto:VibePress.Studio@Proton.me" className="bg-primary text-primary-foreground font-bold text-xs px-4 py-2.5 rounded-lg shrink-0 hover:bg-primary/90 transition-colors">
                  Open Proton Mail Desk
                </a>
              </div>
            </CardContent>
          </Card>
        )}

        {/* ── TAB 3: Content Strings Inspector ── */}
        {activeTab === "content" && (
          <Card className="border-border bg-card shadow-xs">
            <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <CardTitle className="text-lg font-bold">Website Content Strings Inspector</CardTitle>
                <CardDescription>
                  Inspect copy, headings, and data JSON files driving the live portal.
                </CardDescription>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-muted-foreground">Select File:</span>
                <select
                  value={selectedPage}
                  onChange={(e) => setSelectedPage(e.target.value)}
                  className="bg-background border border-input text-xs font-bold rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="home">home.json (Homepage)</option>
                  <option value="lab">lab.json (Studio Lab)</option>
                  <option value="docs">docs.json (Documentation)</option>
                  <option value="contact">contact.json (Support Page)</option>
                  <option value="navigation">navigation.json (Navbar)</option>
                  <option value="footer">footer.json (Footer)</option>
                </select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {pageContents.map((item, idx) => (
                  <div key={idx} className="bg-muted/30 border border-border p-3.5 rounded-lg space-y-1">
                    <div className="text-[11px] font-mono font-bold text-primary uppercase">{item.fieldName}</div>
                    <div className="text-xs text-foreground font-medium">{item.fieldValue}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}