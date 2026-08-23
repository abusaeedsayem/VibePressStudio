import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldCheck, Code, BadgeCheck } from "lucide-react";
import { products } from "@/data/products";

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted/40 pb-8 pt-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Mission & Identity */}
          <div className="md:col-span-1 lg:col-span-2 space-y-4">
            <h3 className="text-xl font-bold tracking-tight">VibePress Studio</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Building high-performance, robust software solutions for modern creators and businesses. From powerful WordPress plugins to offline-first desktop systems.
            </p>
            <div className="pt-2">
              <p className="text-sm font-medium text-foreground">Lead Architect</p>
              <a 
                href="https://abusaeedsayem.netlify.app" 
                target="_blank" 
                rel="noreferrer"
                className="text-sm text-primary hover:underline font-semibold flex items-center gap-1 mt-1"
              >
                Abu Saeed Sayem
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {products.map(p => (
                <li key={p.id}>
                  <Link href={`/products/${p.slug}`} className="hover:text-primary transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="/changelog" className="hover:text-primary transition-colors">Changelog</Link></li>
              <li><Link href="/support" className="hover:text-primary transition-colors">Support Center</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About the Studio</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/legal/terms" className="hover:text-primary transition-colors">Terms of Use</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal/license" className="hover:text-primary transition-colors">GPLv2 License Notice</Link></li>
              <li><Link href="/legal/affiliate-disclosure" className="hover:text-primary transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter & Badges */}
        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t pt-8">
          <div className="flex-1 w-full max-w-md space-y-2">
            <h4 className="text-sm font-semibold text-foreground">Subscribe to new releases</h4>
            <p className="text-xs text-muted-foreground">Get notified about new plugins, apps, and major updates. No spam.</p>
            <form className="flex w-full items-center space-x-2">
              <Input type="email" placeholder="Email address" className="max-w-xs" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-1.5 text-xs font-medium bg-background px-3 py-1.5 rounded-full border shadow-sm">
              <ShieldCheck className="h-4 w-4 text-green-500" />
              <span>Freemius Verified</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium bg-background px-3 py-1.5 rounded-full border shadow-sm">
              <Code className="h-4 w-4 text-blue-500" />
              <span>WordPress.org Open Source</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium bg-background px-3 py-1.5 rounded-full border shadow-sm">
              <BadgeCheck className="h-4 w-4 text-yellow-500" />
              <span>AppSumo Partner</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-muted-foreground flex flex-col items-center justify-center space-y-1">
          <p>&copy; {new Date().getFullYear()} VibePress Studio. All rights reserved.</p>
          <p>Developed by <a href="https://abusaeedsayem.netlify.app" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors font-medium">Abu Saeed Sayem</a></p>
        </div>
      </div>
    </footer>
  );
}
