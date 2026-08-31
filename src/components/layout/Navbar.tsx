"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import {
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  Command,
} from "@/components/ui/command";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { products } from "@/data/products";
import { Search, Menu, Package, Monitor, ChevronDown, BookOpen, Compass } from "lucide-react";
import navigationData from "@/content/navigation.json";

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const brand = navigationData.brand ?? "VibePress Studio";
  const tagline = navigationData.tagline ?? "High-Performance Digital Tools & Desktop Application";
  const searchPlaceholder = navigationData.searchPlaceholder ?? "Search catalog...";
  const searchDialogPlaceholder = navigationData.searchDialogPlaceholder ?? "Search products, docs, features...";
  const actions = navigationData.actions;

  return (
    <>
      {/* Search Dialog */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="p-0 max-w-xl overflow-hidden">
          <Command className="rounded-xl border-0">
            <CommandInput placeholder={searchDialogPlaceholder} />
            <CommandList className="max-h-80">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Products">
                {products.map((p) => (
                  <CommandItem key={p.id} asChild>
                    <Link href={`/products/${p.slug}`} onClick={() => setSearchOpen(false)}>
                      {p.category === "wordpress-plugin" ? (
                        <Package className="mr-2 h-4 w-4 text-primary" />
                      ) : (
                        <Monitor className="mr-2 h-4 w-4 text-primary" />
                      )}
                      <div>
                        <div className="font-medium text-sm">{p.name}</div>
                        <div className="text-xs text-muted-foreground">{p.tagline}</div>
                      </div>
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandGroup heading="Pages & Channels">
                <CommandItem asChild><Link href="/products" onClick={() => setSearchOpen(false)}>Products Directory</Link></CommandItem>
                <CommandItem asChild><Link href="/lab" onClick={() => setSearchOpen(false)}>Studio Lab</Link></CommandItem>
                <CommandItem asChild><Link href="/docs" onClick={() => setSearchOpen(false)}>Documentation & User Manuals</Link></CommandItem>
                <CommandItem asChild><Link href="/about" onClick={() => setSearchOpen(false)}>About & Engineering Standards</Link></CommandItem>
                <CommandItem asChild><Link href="/contact" onClick={() => setSearchOpen(false)}>Support & Licensing Validation</Link></CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>

      {/* Header Shell */}
      <nav className="bg-background/95 sticky top-0 z-50 shadow-sm backdrop-blur border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-4">
          
          {/* Brand Element */}
          <Link href="/" className="flex items-center group">
            <img src="/logo-dark.svg" alt="VibePress Studio" className="h-8 md:h-10 w-auto group-hover:opacity-90 transition-opacity" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="text-sm font-semibold text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors flex items-center gap-1"
              >
                Products <ChevronDown className="h-4 w-4" />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-0 w-80 bg-popover border border-border rounded-xl shadow-xl overflow-hidden p-3 z-50">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-3 py-1 mb-1">
                    Software Suite
                  </div>
                  <Link 
                    href="/products/smart-affiliate-link-cloaker" 
                    onClick={() => setProductsOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <Package className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold text-sm group-hover:text-primary transition-colors">
                        Smart Affiliate Link Cloaker
                      </div>
                      <div className="text-xs text-muted-foreground">
                        WordPress Performance Plugin
                      </div>
                    </div>
                  </Link>

                  <Link 
                    href="/products/shelfmaster" 
                    onClick={() => setProductsOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <Monitor className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold text-sm group-hover:text-primary transition-colors">
                        ShelfMaster
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Desktop Application (Win/macOS)
                      </div>
                    </div>
                  </Link>

                  <div className="border-t border-border mt-2 pt-2 text-center">
                    <Link href="/products" onClick={() => setProductsOpen(false)} className="text-xs font-semibold text-primary hover:underline">
                      View All Products Directory →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/lab" className="text-sm font-semibold text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors">
              Studio
            </Link>
            <Link href="/docs" className="text-sm font-semibold text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors">
              Documentation
            </Link>
            <Link href="/about" className="text-sm font-semibold text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors">
              Support
            </Link>
          </div>

          {/* Action Buttons & Search */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center justify-between w-48 sm:w-64 md:w-72 bg-muted/60 border border-input rounded-full px-4 py-2 hover:bg-muted transition-colors gap-2 text-muted-foreground text-xs"
            >
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 shrink-0" />
                <span className="truncate">{searchPlaceholder}</span>
              </div>
              <kbd className="hidden sm:inline-block bg-background border border-border rounded px-1.5 py-0.5 text-[10px] font-mono shrink-0">
                ⌘K
              </kbd>
            </button>

            {/* Mobile Sheet Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button className="lg:hidden text-foreground p-2 rounded-md hover:bg-muted">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-border">
                    <Link href="/" className="flex items-center">
                      <img src="/logo-dark.svg" alt={brand} className="h-8 w-auto" />
                    </Link>
                  </div>

                  <nav className="flex flex-col p-4 gap-1 flex-1 overflow-y-auto">
                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-3 py-2">
                      Products
                    </div>
                    <Link
                      href="/products/smart-affiliate-link-cloaker"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted"
                    >
                      <Package className="h-4 w-4 text-primary" />
                      Smart Affiliate Link Cloaker
                    </Link>
                    <Link
                      href="/products/shelfmaster"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted"
                    >
                      <Monitor className="h-4 w-4 text-indigo-500" />
                      ShelfMaster
                    </Link>
                    <Link
                      href="/products"
                      onClick={() => setMobileOpen(false)}
                      className="px-3 py-2 text-xs font-semibold text-primary hover:underline"
                    >
                      View All Products Directory →
                    </Link>

                    <div className="border-t border-border my-3" />
                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-3 py-1">
                      Navigation
                    </div>
                    <Link href="/lab" onClick={() => setMobileOpen(false)} className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted">
                      Studio Lab
                    </Link>
                    <Link href="/docs" onClick={() => setMobileOpen(false)} className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted">
                      Documentation & Manuals
                    </Link>
                    <Link href="/about" onClick={() => setMobileOpen(false)} className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted">
                      About & Engineering Standards
                    </Link>
                    <Link href="/contact" onClick={() => setMobileOpen(false)} className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted">
                      Support & Helpdesk
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}
