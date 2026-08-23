"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, Search, GitBranch, ExternalLink, ChevronDown, Package, Code } from "lucide-react";
import { products } from "@/data/products";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tight">VibePress Studio</span>
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">Beta</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors focus:outline-none">
                Products <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">WordPress Plugins</div>
                {products.filter(p => p.category === "wordpress-plugin").map(p => (
                  <DropdownMenuItem key={p.id} asChild>
                    <Link href={`/products/${p.slug}`} className="cursor-pointer flex items-center w-full">
                      <Package className="mr-2 h-4 w-4" />
                      <span>{p.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
                
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground mt-2">Desktop Apps</div>
                {products.filter(p => p.category === "desktop-app").map(p => (
                  <DropdownMenuItem key={p.id} asChild>
                    <Link href={`/products/${p.slug}`} className="cursor-pointer flex items-center w-full">
                      <Code className="mr-2 h-4 w-4" />
                      <span>{p.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link href="/docs" className="transition-colors hover:text-primary">Documentation</Link>
            <Link href="/pricing" className="transition-colors hover:text-primary">Pricing & Marketplace</Link>
            <Link href="/about" className="transition-colors hover:text-primary">About Studio</Link>
            <Link href="/support" className="transition-colors hover:text-primary">Support</Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="hidden md:flex relative h-9 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
            onClick={() => setOpen(true)}
          >
            <span className="hidden lg:inline-flex">Search catalog...</span>
            <span className="inline-flex lg:hidden">Search...</span>
            <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(true)}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" rel="noreferrer">
                <GitBranch className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://abusaeedsayem.netlify.app" target="_blank" rel="noreferrer">
                <ExternalLink className="h-5 w-5" />
                <span className="sr-only">Developer Portfolio</span>
              </Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/products" className="text-lg font-semibold hover:text-primary">Products</Link>
                <Link href="/docs" className="text-lg font-semibold hover:text-primary">Documentation</Link>
                <Link href="/pricing" className="text-lg font-semibold hover:text-primary">Pricing & Marketplace</Link>
                <Link href="/about" className="text-lg font-semibold hover:text-primary">About Studio</Link>
                <Link href="/support" className="text-lg font-semibold hover:text-primary">Support</Link>
                <div className="mt-4 flex gap-4">
                  <Link href="https://github.com" className="text-muted-foreground hover:text-primary" target="_blank">
                    <GitBranch className="h-6 w-6" />
                  </Link>
                  <Link href="https://abusaeedsayem.netlify.app" className="text-muted-foreground hover:text-primary" target="_blank">
                    <ExternalLink className="h-6 w-6" />
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search products, features, docs..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Products">
            {products.map(p => (
              <CommandItem key={p.id} onSelect={() => { setOpen(false); /* Router push could go here */ }}>
                <Package className="mr-2 h-4 w-4" />
                <span>{p.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
}
