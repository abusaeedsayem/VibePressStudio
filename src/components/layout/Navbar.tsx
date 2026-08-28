"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
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
import { products } from "@/data/products";
import { Search, Menu, ExternalLink, Package, Monitor, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Products", href: "#products", hasDropdown: true },
  { label: "Documentation", href: "/docs" },
  { label: "Pricing & Marketplace", href: "/pricing" },
  { label: "About Studio", href: "/about" },
  { label: "Support", href: "/support" },
];

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <>
      {/* Search Dialog */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="p-0 max-w-xl overflow-hidden">
          <Command className="rounded-xl border-0">
            <CommandInput placeholder="Search products, docs, features..." />
            <CommandList className="max-h-80">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Products">
                {products.map((p) => (
                  <CommandItem key={p.id} asChild>
                    <Link href={`/products/${p.slug}`} onClick={() => setSearchOpen(false)}>
                      {p.category === "wordpress-plugin" ? (
                        <Package className="mr-2 h-4 w-4 text-on-surface-variant" />
                      ) : (
                        <Monitor className="mr-2 h-4 w-4 text-on-surface-variant" />
                      )}
                      <div>
                        <div className="font-medium text-sm">{p.name}</div>
                        <div className="text-xs text-on-surface-variant">{p.tagline}</div>
                      </div>
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandGroup heading="Pages">
                <CommandItem asChild><Link href="/docs" onClick={() => setSearchOpen(false)}>Documentation</Link></CommandItem>
                <CommandItem asChild><Link href="/pricing" onClick={() => setSearchOpen(false)}>Pricing & Marketplace</Link></CommandItem>
                <CommandItem asChild><Link href="/about" onClick={() => setSearchOpen(false)}>About Studio</Link></CommandItem>
                <CommandItem asChild><Link href="/contact" onClick={() => setSearchOpen(false)}>Support Center</Link></CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>

      {/* Navbar */}
      <nav className="bg-surface/90 top-0 sticky z-50 shadow-sm backdrop-blur-md">
        <div className="border-b border-border-subtle">
          <div className="flex justify-between items-center w-full px-4 md:px-6 max-w-[1280px] mx-auto h-16">

            {/* Brand */}
            <div className="flex items-center gap-4">
              <Link href="/" className="font-extrabold text-xl text-primary tracking-tight">
                VibePress Studio
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              {/* Products with dropdown */}
              <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
                <Link
                  href="/#products"
                  className="text-label-caps text-primary-container font-bold border-b-2 border-primary-container h-16 flex items-center px-3 hover:bg-surface-container-low transition-all duration-200"
                >
                  Products <ChevronDown className="ml-1 h-3 w-3" />
                </Link>
                {productsOpen && (
                  <div className="absolute top-full left-0 w-64 bg-surface border border-border-subtle rounded-xl shadow-lg overflow-hidden z-50 py-2">
                    <div className="px-3 py-1.5 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">WordPress Plugins</div>
                    {products.filter(p => p.category === "wordpress-plugin").map(p => (
                      <Link key={p.id} href={`/products/${p.slug}`} className="flex items-center gap-2 px-3 py-2 text-sm text-on-surface hover:bg-surface-container-low transition-colors">
                        <Package className="h-4 w-4 text-primary flex-shrink-0" />{p.name}
                      </Link>
                    ))}
                    <div className="px-3 py-1.5 mt-1 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Desktop Apps</div>
                    {products.filter(p => p.category === "desktop-app").map(p => (
                      <Link key={p.id} href={`/products/${p.slug}`} className="flex items-center gap-2 px-3 py-2 text-sm text-on-surface hover:bg-surface-container-low transition-colors">
                        <Monitor className="h-4 w-4 text-primary flex-shrink-0" />{p.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-label-caps text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all duration-200 h-16 flex items-center px-3"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Search Bar */}
              <button
                onClick={() => setSearchOpen(true)}
                className="hidden lg:flex items-center bg-surface-container-lowest border border-border-strong rounded px-3 py-1.5 hover:border-primary-container hover:ring-2 hover:ring-primary-container/20 transition-all gap-2 text-on-surface-variant"
              >
                <Search className="h-4 w-4" />
                <span className="text-sm w-40 text-left">Search catalog...</span>
                <div className="border border-border-strong rounded px-1.5 py-0.5">
                  <span className="text-[10px] text-on-surface-variant">⌘K</span>
                </div>
              </button>

              {/* Mobile search icon */}
              <button
                onClick={() => setSearchOpen(true)}
                className="lg:hidden text-on-surface-variant hover:text-primary hover:bg-surface-container-low p-2 rounded-full transition-all"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* External link */}
              <a
                href="https://abusaeedsayem.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex text-on-surface-variant hover:text-primary-container hover:bg-surface-container-low p-2 rounded-full transition-all"
              >
                <ExternalLink className="h-5 w-5" />
              </a>

              {/* Mobile menu */}
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <button className="md:hidden text-primary p-2">
                    <Menu className="h-6 w-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72 bg-surface p-0">
                  <div className="flex flex-col h-full">
                    <div className="p-6 border-b border-border-subtle">
                      <span className="font-extrabold text-lg text-primary">VibePress Studio</span>
                    </div>
                    <nav className="flex flex-col p-4 gap-1 flex-1">
                      <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest px-3 py-2">Products</div>
                      {products.map(p => (
                        <Link key={p.id} href={`/products/${p.slug}`} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-on-surface hover:bg-surface-container-low transition-colors">
                          {p.category === "wordpress-plugin" ? <Package className="h-4 w-4 text-primary" /> : <Monitor className="h-4 w-4 text-primary" />}
                          {p.name}
                        </Link>
                      ))}
                      <div className="border-t border-border-subtle my-2" />
                      {navLinks.slice(1).map(link => (
                        <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="px-3 py-2.5 rounded-lg text-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors">
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                    <div className="p-4 border-t border-border-subtle">
                      <a href="https://abusaeedsayem.netlify.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2.5 text-sm text-on-surface-variant hover:text-primary">
                        <ExternalLink className="h-4 w-4" /> Developer Portfolio
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
