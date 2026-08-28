import Link from "next/link";

const footerLinks = [
  {
    items: [
      { label: "Smart Affiliate Link Cloaker", href: "/products/smart-affiliate-link-cloaker" },
      { label: "ShelfMaster (LibrisCore Desktop)", href: "/products/shelfmaster" },
      { label: "Documentation", href: "/docs" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    items: [
      { label: "About the Studio", href: "/about" },
      { label: "Support Center", href: "/contact" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Use", href: "/legal/terms" },
    ],
  },
  {
    items: [
      { label: "GPLv2 License Notice", href: "/legal/license" },
      { label: "Affiliate Disclosure", href: "/legal/affiliate-disclosure" },
      { label: "Pricing & Marketplace", href: "/pricing" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-surface-dim border-t border-border-subtle mt-auto">
      <div className="w-full px-4 md:px-6 max-w-[1280px] mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="text-headline-md font-bold text-on-background">
              VibePress Studio
            </Link>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              High-performance software solutions for modern creators and businesses.
            </p>
            <p className="text-sm text-on-surface-variant">
              © 2026 VibePress Studio. All rights reserved.
              <br />
              <span className="font-medium">Developed by Abu Saeed Sayem</span>
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-3">
              {col.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-body-md text-on-surface-variant hover:text-primary-container transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <div className="mt-10 pt-6 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-on-surface-variant">
            Engineered for Performance. Built for Growth.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://abusaeedsayem.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-on-surface-variant hover:text-primary-container transition-colors"
            >
              Developer Portfolio ↗
            </a>
            <a
              href="https://github.com/abusaeedsayem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-on-surface-variant hover:text-primary-container transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
