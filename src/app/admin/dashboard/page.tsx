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
  ShieldCheck, RefreshCw, Layers, FileText, Database, Server, Clock, Sparkles,
  ExternalLink, MessageSquare, AlertCircle, Check, Eye, X, Filter
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
  license?: string;
  message: string;
  status: string;
  createdAt: string | Date;
  updatedAt?: string | Date;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"subscribers" | "tickets" | "content">("subscribers");
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  
  const [subscriberSearch, setSubscriberSearch] = useState("");
  const [ticketSearch, setTicketSearch] = useState("");
  const [ticketStatusFilter, setTicketStatusFilter] = useState<"all" | "open" | "resolved">("all");
  
  const [isLoadingSubscribers, setIsLoadingSubscribers] = useState(true);
  const [isLoadingTickets, setIsLoadingTickets] = useState(true);
  const [deletingSubscriberId, setDeletingSubscriberId] = useState<string | null>(null);
  const [deletingTicketId, setDeletingTicketId] = useState<string | null>(null);
  const [updatingTicketId, setUpdatingTicketId] = useState<string | null>(null);
  
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);
  const [selectedPage, setSelectedPage] = useState<string>("home");
  const [pageContents, setPageContents] = useState<Array<{ fieldName: string; fieldValue: string; label: string }>>([]);

  const router = useRouter();

  // Initial sample / database fallback data
  const sampleSubscribers: Subscriber[] = [
    { id: "sub-1", name: "Abu Saeed Sayem", email: "VibePress.Studio@Proton.me", source: "Studio Lab Pre-Launch", createdAt: new Date().toISOString() },
    { id: "sub-2", name: "Lead Architect", email: "asaeedmsayem@gmail.com", source: "VibePress Affiliate Link Cloaker", createdAt: new Date(Date.now() - 86400000 * 2).toISOString() },
  ];

  const sampleTickets: SupportTicket[] = [
    {
      id: "ticket-1",
      name: "Enterprise Publisher Lead",
      email: "publisher@mediahouse.io",
      product: "vibepress-affiliate-link-cloaker",
      category: "technical-support",
      license: "VP-PRELAUNCH-PRO-789",
      message: "Hello VibePress team, we are testing the 307 temporary redirect engine and Amazon ToS uncloaking across our 50k monthly affiliate pageviews. Wanted to inquire about custom rewrite prefix configuration under high concurrency.",
      status: "OPEN",
      createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    },
    {
      id: "ticket-2",
      name: "Affiliate Growth Agency",
      email: "ops@growthtraffic.co",
      product: "vibepress-affiliate-link-cloaker",
      category: "license-activation",
      license: "VP-CORE-FREE-001",
      message: "Can we migrate 1,200 cloaked links from Pretty Links and ThirstyAffiliates in bulk via the built-in CSV competitor migration tool?",
      status: "RESOLVED",
      createdAt: new Date(Date.now() - 86400000 * 1.5).toISOString(),
    },
  ];

  // 1. Fetch real subscribers
  useEffect(() => {
    async function fetchSubscribers() {
      setIsLoadingSubscribers(true);
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
        setIsLoadingSubscribers(false);
      }
    }
    fetchSubscribers();
  }, []);

  // 2. Fetch real support tickets
  useEffect(() => {
    async function fetchTickets() {
      setIsLoadingTickets(true);
      try {
        const res = await fetch("/api/admin/tickets");
        const data = await res.json();
        if (data.tickets && Array.isArray(data.tickets) && data.tickets.length > 0) {
          setTickets(data.tickets);
        } else {
          setTickets(sampleTickets);
        }
      } catch (err) {
        console.error("Failed to fetch tickets:", err);
        setTickets(sampleTickets);
      } finally {
        setIsLoadingTickets(false);
      }
    }
    fetchTickets();
  }, []);

  // 3. Fetch JSON page content when content editor page changes
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
    setDeletingSubscriberId(id);
    try {
      await fetch(`/api/admin/subscribers?id=${id}`, { method: "DELETE" });
      setSubscribers((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      console.error("Error deleting subscriber:", err);
      setSubscribers((prev) => prev.filter((s) => s.id !== id));
    } finally {
      setDeletingSubscriberId(null);
    }
  };

  // Handle Delete Support Ticket
  const handleDeleteTicket = async (id: string) => {
    setDeletingTicketId(id);
    try {
      await fetch(`/api/admin/tickets?id=${id}`, { method: "DELETE" });
      setTickets((prev) => prev.filter((t) => t.id !== id));
      if (selectedTicket?.id === id) {
        setSelectedTicket(null);
      }
    } catch (err) {
      console.error("Error deleting ticket:", err);
      setTickets((prev) => prev.filter((t) => t.id !== id));
    } finally {
      setDeletingTicketId(null);
    }
  };

  // Handle Toggle Ticket Status (OPEN <-> RESOLVED)
  const handleToggleTicketStatus = async (ticket: SupportTicket) => {
    const newStatus = ticket.status === "RESOLVED" ? "OPEN" : "RESOLVED";
    setUpdatingTicketId(ticket.id);

    // Optimistic UI update
    setTickets((prev) =>
      prev.map((t) => (t.id === ticket.id ? { ...t, status: newStatus } : t))
    );
    if (selectedTicket?.id === ticket.id) {
      setSelectedTicket((prev) => (prev ? { ...prev, status: newStatus } : null));
    }

    try {
      await fetch("/api/admin/tickets", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: ticket.id, status: newStatus }),
      });
    } catch (err) {
      console.error("Error updating ticket status:", err);
    } finally {
      setUpdatingTicketId(null);
    }
  };

  // Handle Subscribers CSV Export
  const handleExportSubscribersCSV = () => {
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

  // Handle Support Tickets CSV Export
  const handleExportTicketsCSV = () => {
    const csvRows = tickets.map((t) => {
      const dateStr = t.createdAt ? new Date(t.createdAt).toISOString() : "";
      const cleanMsg = t.message.replace(/"/g, '""');
      return `"${t.id}","${t.name}","${t.email}","${t.product}","${t.category}","${t.license || "N/A"}","${t.status}","${cleanMsg}","${dateStr}"`;
    });
    const csvContent = "TicketID,Name,Email,Product,Category,License,Status,Message,Timestamp\n" + csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `vibepress-support-tickets-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Filtered subscribers
  const filteredSubscribers = subscribers.filter((s) =>
    !subscriberSearch.trim() ||
    s.name.toLowerCase().includes(subscriberSearch.toLowerCase()) ||
    s.email.toLowerCase().includes(subscriberSearch.toLowerCase()) ||
    s.source.toLowerCase().includes(subscriberSearch.toLowerCase())
  );

  // Filtered support tickets
  const filteredTickets = tickets.filter((t) => {
    const matchesSearch =
      !ticketSearch.trim() ||
      t.name.toLowerCase().includes(ticketSearch.toLowerCase()) ||
      t.email.toLowerCase().includes(ticketSearch.toLowerCase()) ||
      t.product.toLowerCase().includes(ticketSearch.toLowerCase()) ||
      t.category.toLowerCase().includes(ticketSearch.toLowerCase()) ||
      (t.license && t.license.toLowerCase().includes(ticketSearch.toLowerCase())) ||
      t.message.toLowerCase().includes(ticketSearch.toLowerCase());

    const matchesStatus =
      ticketStatusFilter === "all" ||
      (ticketStatusFilter === "open" && t.status !== "RESOLVED") ||
      (ticketStatusFilter === "resolved" && t.status === "RESOLVED");

    return matchesSearch && matchesStatus;
  });

  const openTicketsCount = tickets.filter((t) => t.status !== "RESOLVED").length;

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
            {activeTab === "subscribers" ? (
              <Button onClick={handleExportSubscribersCSV} className="bg-primary text-primary-foreground font-bold text-xs px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-xs hover:bg-primary/90 cursor-pointer">
                <Download className="w-4 h-4" /> Export Subscribers CSV
              </Button>
            ) : activeTab === "tickets" ? (
              <Button onClick={handleExportTicketsCSV} className="bg-primary text-primary-foreground font-bold text-xs px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-xs hover:bg-primary/90 cursor-pointer">
                <Download className="w-4 h-4" /> Export Support Tickets CSV
              </Button>
            ) : null}
          </div>
        </div>

        {/* ── Executive Metric Stat Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Subscribers */}
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

          {/* Card 2: Support Tickets */}
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
              <div className="text-2xl font-extrabold text-foreground flex items-baseline gap-2">
                <span>{tickets.length}</span>
                {openTicketsCount > 0 && (
                  <span className="text-xs font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                    {openTicketsCount} Open
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground font-medium mt-1">
                Direct Inquiries &amp; Encrypted Desk
              </p>
            </CardContent>
          </Card>

          {/* Card 3: Flagship Plugin */}
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
              <div className="text-lg font-bold text-foreground truncate">VibePress Affiliate Link Cloaker</div>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">
                v1.0.13 (100% Feature Complete)
              </p>
            </CardContent>
          </Card>

          {/* Card 4: Edge Hosting */}
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
            <Mail className="w-4 h-4" /> Support &amp; Helpdesk Inquiries ({tickets.length})
            {openTicketsCount > 0 && (
              <span className="text-[10px] font-extrabold bg-amber-500 text-white px-1.5 py-0.2 rounded-full">
                {openTicketsCount}
              </span>
            )}
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
                  value={subscriberSearch}
                  onChange={(e) => setSubscriberSearch(e.target.value)}
                  className="pl-9 text-xs py-2 rounded-lg"
                />
              </div>
            </CardHeader>
            <CardContent>
              {isLoadingSubscribers ? (
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
                            disabled={deletingSubscriberId === s.id}
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

        {/* ── TAB 2: Support & Helpdesk Inquiries ── */}
        {activeTab === "tickets" && (
          <div className="space-y-6">
            
            {/* Top Info Strip */}
            <div className="bg-card border border-border rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
              <div className="space-y-1">
                <div className="text-sm font-bold text-foreground flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" /> Live Support Inquiries &amp; Customer Desk
                </div>
                <p className="text-xs text-muted-foreground">
                  All requests submitted via <code className="bg-muted px-1.5 py-0.5 rounded text-primary font-mono text-[11px]">/contact</code> are recorded in the database and dispatched instantly to <code className="bg-muted px-1.5 py-0.5 rounded text-primary font-mono text-[11px]">VibePress.Studio@Proton.me</code>.
                </p>
              </div>
              <a
                href="mailto:VibePress.Studio@Proton.me"
                className="bg-primary text-primary-foreground font-bold text-xs px-4 py-2.5 rounded-lg shrink-0 hover:bg-primary/90 transition-colors flex items-center gap-1.5"
              >
                <Mail className="h-3.5 w-3.5" /> Open Proton Mail
              </a>
            </div>

            {/* Support Tickets Directory Table */}
            <Card className="border-border bg-card shadow-xs">
              <CardHeader className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-lg font-bold">Support Request Directory</CardTitle>
                  <CardDescription>
                    Review customer inquiries, product questions, technical tickets, and activation requests.
                  </CardDescription>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {/* Status Filter Pills */}
                  <div className="inline-flex bg-muted p-1 rounded-lg border border-border">
                    <button
                      onClick={() => setTicketStatusFilter("all")}
                      className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                        ticketStatusFilter === "all" ? "bg-background text-foreground shadow-xs font-bold" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      All ({tickets.length})
                    </button>
                    <button
                      onClick={() => setTicketStatusFilter("open")}
                      className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                        ticketStatusFilter === "open" ? "bg-background text-amber-600 dark:text-amber-400 shadow-xs font-bold" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Open ({openTicketsCount})
                    </button>
                    <button
                      onClick={() => setTicketStatusFilter("resolved")}
                      className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                        ticketStatusFilter === "resolved" ? "bg-background text-emerald-600 dark:text-emerald-400 shadow-xs font-bold" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Resolved ({tickets.length - openTicketsCount})
                    </button>
                  </div>

                  {/* Search Input */}
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search tickets by name, message, product..."
                      value={ticketSearch}
                      onChange={(e) => setTicketSearch(e.target.value)}
                      className="pl-9 text-xs py-2 rounded-lg"
                    />
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                {isLoadingTickets ? (
                  <div className="p-8 text-center text-sm text-muted-foreground">Loading support inquiries...</div>
                ) : filteredTickets.length === 0 ? (
                  <div className="p-12 text-center border border-dashed rounded-xl space-y-2">
                    <p className="text-sm font-semibold text-foreground">No matching support requests found.</p>
                    <p className="text-xs text-muted-foreground">Try adjusting your search terms or status filter.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table className="w-full">
                      <TableHeader>
                        <TableRow>
                          <TableHeaderCell>Requester</TableHeaderCell>
                          <TableHeaderCell>Product &amp; Category</TableHeaderCell>
                          <TableHeaderCell>Message / Inquiry</TableHeaderCell>
                          <TableHeaderCell>Status</TableHeaderCell>
                          <TableHeaderCell>Received</TableHeaderCell>
                          <TableHeaderCell className="text-right">Actions</TableHeaderCell>
                        </TableRow>
                      </TableHeader>
                      {filteredTickets.map((t) => (
                        <TableRow key={t.id} className="hover:bg-muted/40 transition-colors">
                          <TableCell className="align-top">
                            <div className="font-bold text-foreground text-xs">{t.name}</div>
                            <a
                              href={`mailto:${t.email}?subject=Re:%20Support%20Request%20-%20VibePress%20Studio`}
                              className="font-mono text-[11px] text-primary hover:underline block mt-0.5"
                            >
                              {t.email}
                            </a>
                            {t.license && t.license !== "N/A" && (
                              <div className="text-[10px] font-mono text-muted-foreground mt-1 bg-muted px-1.5 py-0.5 rounded inline-block">
                                Ref: {t.license}
                              </div>
                            )}
                          </TableCell>

                          <TableCell className="align-top space-y-1">
                            <div>
                              <Badge variant="outline" className="text-[10px] font-bold bg-primary/10 text-primary border-primary/20">
                                {t.product}
                              </Badge>
                            </div>
                            <div className="text-[11px] text-muted-foreground capitalize font-medium">
                              {t.category.replace(/-/g, " ")}
                            </div>
                          </TableCell>

                          <TableCell className="align-top max-w-xs md:max-w-md">
                            <div className="text-xs text-foreground line-clamp-2 leading-relaxed">
                              {t.message}
                            </div>
                            <button
                              onClick={() => setSelectedTicket(t)}
                              className="text-[11px] text-primary font-bold hover:underline flex items-center gap-1 mt-1 cursor-pointer"
                            >
                              <Eye className="h-3 w-3" /> Read Full Inquiry &rarr;
                            </button>
                          </TableCell>

                          <TableCell className="align-top">
                            <Badge
                              variant="outline"
                              className={`text-[10px] font-bold uppercase tracking-wider ${
                                t.status === "RESOLVED"
                                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
                                  : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30"
                              }`}
                            >
                              {t.status}
                            </Badge>
                          </TableCell>

                          <TableCell className="align-top text-xs text-muted-foreground whitespace-nowrap">
                            {t.createdAt ? new Date(t.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }) : "Recent"}
                          </TableCell>

                          <TableCell className="align-top text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              {/* Reply Button */}
                              <a
                                href={`mailto:${t.email}?subject=Re:%20Support%20Request%20-%20VibePress%20Studio`}
                                className="h-8 w-8 inline-flex items-center justify-center rounded-lg hover:bg-primary/10 text-primary transition-colors cursor-pointer"
                                title="Reply via Email"
                              >
                                <Mail className="h-4 w-4" />
                              </a>

                              {/* Toggle Status Button */}
                              <Button
                                onClick={() => handleToggleTicketStatus(t)}
                                disabled={updatingTicketId === t.id}
                                size="sm"
                                variant="outline"
                                className="h-8 text-[11px] font-bold px-2 cursor-pointer"
                                title={t.status === "RESOLVED" ? "Mark as Open" : "Mark as Resolved"}
                              >
                                {t.status === "RESOLVED" ? (
                                  <span className="text-muted-foreground">Reopen</span>
                                ) : (
                                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                    <Check className="h-3 w-3" /> Resolve
                                  </span>
                                )}
                              </Button>

                              {/* Delete Button */}
                              <Button
                                onClick={() => handleDeleteTicket(t.id)}
                                disabled={deletingTicketId === t.id}
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8 text-destructive hover:bg-destructive/10 cursor-pointer"
                                title="Delete Support Request"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* ── Selected Ticket Detailed Modal / Drawer ── */}
            {selectedTicket && (
              <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-xs flex items-center justify-center p-4">
                <div className="bg-card border border-border rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
                  <button
                    onClick={() => setSelectedTicket(null)}
                    className="absolute top-6 right-6 text-muted-foreground hover:text-foreground h-8 w-8 rounded-full flex items-center justify-center bg-muted cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  <div className="space-y-2 border-b border-border pb-4">
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className={`text-xs font-bold uppercase ${
                          selectedTicket.status === "RESOLVED"
                            ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/30"
                            : "bg-amber-500/10 text-amber-600 border-amber-500/30"
                        }`}
                      >
                        {selectedTicket.status}
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs font-bold">
                        {selectedTicket.product}
                      </Badge>
                    </div>
                    <h2 className="text-xl font-bold text-foreground">
                      Support Request from {selectedTicket.name}
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      Category: <span className="font-semibold text-foreground capitalize">{selectedTicket.category.replace(/-/g, " ")}</span> • Received: {new Date(selectedTicket.createdAt).toLocaleString()}
                    </p>
                  </div>

                  {/* Requester Profile Grid */}
                  <div className="grid sm:grid-cols-2 gap-4 bg-muted/40 p-4 rounded-xl text-xs">
                    <div>
                      <span className="text-muted-foreground block">Customer Email:</span>
                      <a href={`mailto:${selectedTicket.email}`} className="font-mono font-bold text-primary hover:underline">
                        {selectedTicket.email}
                      </a>
                    </div>
                    <div>
                      <span className="text-muted-foreground block">License / Activation Reference:</span>
                      <span className="font-mono font-bold text-foreground">
                        {selectedTicket.license || "None provided"}
                      </span>
                    </div>
                  </div>

                  {/* Message Content Body */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Inquiry &amp; Message Body:
                    </h3>
                    <div className="bg-muted/20 border border-border p-5 rounded-xl text-sm leading-relaxed whitespace-pre-line text-foreground">
                      {selectedTicket.message}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-border">
                    <Button
                      onClick={() => handleToggleTicketStatus(selectedTicket)}
                      variant="outline"
                      className="text-xs font-bold w-full sm:w-auto"
                    >
                      {selectedTicket.status === "RESOLVED" ? "Reopen Inquiry" : "Mark as Resolved"}
                    </Button>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <a
                        href={`mailto:${selectedTicket.email}?subject=Re:%20Support%20Request%20(${selectedTicket.product})%20-%20VibePress%20Studio`}
                        className="bg-primary text-primary-foreground font-bold text-xs px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                      >
                        <Mail className="h-4 w-4" /> Reply to {selectedTicket.name}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
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