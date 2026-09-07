"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHeaderCell, TableCell } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PageContent {
  fieldName: string;
  fieldValue: string;
  label: string;
}

export default function AdminDashboard() {
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const [pageContents, setPageContents] = useState<PageContent[]>([]);
  const [subscribers, setSubscribers] = useState<Array<{
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    source: string;
    updatedAt: Date;
  }>>([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Fetch page contents based on selected page
  useEffect(() => {
    if (!selectedPage) {
      setPageContents([]);
      return;
    }

    const pageMap: Record<string, string> = {
      "/": "home",
      "/lab": "lab",
      "/about": "about",
      "/products": "products",
      "/docs": "docs",
      "/contact": "contact",
      "/legal/terms": "terms",
      "/legal/privacy": "privacy",
    };

    const key = pageMap[selectedPage] || "home";

    import(`@/content/${key}.json`).then((module) => {
      const data = module.default || module;
      const contents: PageContent[] = [];

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
          } else if (Array.isArray(value)) {
            value.forEach((item, idx) => {
              if (typeof item === "object" && item !== null) {
                extractFields(item, `${fullKey}[${idx}]`);
              }
            });
          }
        }
      };

      extractFields(data);
      setPageContents(contents);
    }).catch(() => setPageContents([]));
  }, [selectedPage]);

  // Fetch subscribers from the database
  useEffect(() => {
    async function fetchSubscribers() {
      try {
        const res = await fetch("/api/admin/subscribers");
        const data = await res.json();
        if (data.subscribers) {
          setSubscribers(data.subscribers);
        }
      } catch (err) {
        console.error("Failed to fetch subscribers:", err);
      }
    }
    fetchSubscribers();
  }, []);

  // Handle page selection
  const handlePageChange = (page: string) => {
    setSelectedPage(page);
  };

  // Handle deletion
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/subscribers?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setSubscribers(subscribers.filter((s) => s.id !== id));
      }
    } catch (err) {
      console.error("Failed to delete subscriber:", err);
    } finally {
      setShowDeleteModal(false);
      setDeletingId(null);
    }
  };

  // Handle CSV export
  const handleExport = () => {
    const csvRows = subscribers.map((s) => {
      const dateStr = s.createdAt ? new Date(s.createdAt).toISOString() : "";
      return `"${s.name}","${s.email}","${s.source}","${dateStr}"`;
    });
    const csvContent = "Name,Email,Source,Timestamp\n" + csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "subscribers.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!selectedPage) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Admin Dashboard
        </h2>
        <p className="text-muted-foreground">
          Select a page from the dropdown below to start editing.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <h2 className="text-2xl font-bold text-foreground mb-4">
        Admin Dashboard
      </h2>
      <p className="text-muted-foreground">Select a page to edit</p>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <DropdownMenuItem className="flex items-center rounded-md px-2 py-1.5 text-sm hover:bg-muted">
            Page
            <X className="ml-auto h-4 w-4 text-muted-foreground" />
          </DropdownMenuItem>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="max-w-xs p-2">
          <DropdownMenuItem onSelect={() => handlePageChange("/")}>
            Home
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handlePageChange("/lab")}>
            Studio Lab
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handlePageChange("/about")}>
            About
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handlePageChange("/products")}>
            Products
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {selectedPage && (
        <div className="grid max-w-[1400px] mx-auto grid-cols-1 gap-6 md:grid-cols-2 gap-6 lg:grid-cols-3">
          {/* Page Editor */}
          <Card>
            <CardHeader>
              <CardTitle>Page Editor: {selectedPage}</CardTitle>
            </CardHeader>
            <CardContent>
              {pageContents.length === 0 ? (
                <p className="text-muted-foreground">Loading page content...</p>
              ) : (
                <form>
                  {pageContents.map((content) => (
                    <div key={content.fieldName} className="space-y-2">
                      <span className="block text-sm font-medium text-foreground mb-1">
                        {content.label}
                      </span>
                      <Input
                        value={content.fieldValue}
                        onChange={(e) => {}}
                        className="w-full rounded-md border border-input px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary transition-colors"
                      />
                    </div>
                  ))}
                  <Button className="my-4 w-full rounded-md bg-primary text-primary-foreground font-bold py-3 transition-all hover:bg-primary/90">
                    Save Changes
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Subscriber List */}
          <Card>
            <CardHeader>
              <CardTitle>Subscriber List</CardTitle>
            </CardHeader>
            <CardContent>
              {subscribers.length === 0 ? (
                <p className="text-muted-foreground">No subscribers yet.</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHeaderCell>Name</TableHeaderCell>
                      <TableHeaderCell>Email</TableHeaderCell>
                      <TableHeaderCell>Source</TableHeaderCell>
                      <TableHeaderCell>Joined</TableHeaderCell>
                      <TableHeaderCell></TableHeaderCell>
                    </TableRow>
                  </TableHeader>
                  {subscribers.map((s) => (
                    <TableRow key={s.id}>
                      <TableCell>{s.name}</TableCell>
                      <TableCell>{s.email}</TableCell>
                      <TableCell>{s.source}</TableCell>
                      <TableCell>{s.createdAt.toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Button size="icon" variant="ghost" className="p-1 rounded-md hover:bg-muted">
                          <X className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </Table>
              )}
            </CardContent>
          </Card>

          {/* CSV Export */}
          <Button onClick={handleExport} className="my-4 w-full rounded-md bg-secondary/20 text-secondary hover:bg-secondary/30 py-3 transition-all">
            Download Subscriber List as CSV
          </Button>
        </div>
      )}
    </div>
  );
}