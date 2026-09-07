import Link from "next/link";
import footerData from "@/content/footer.json";

export function Footer() {
  const { description, copyright, columns } = footerData;

  return (
    <footer className="bg-muted/40 border-t border-border mt-auto">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Column 1: VibePress Studio */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <img src="/logo-dark.svg" alt="VibePress Studio" className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {/* Link Columns: Software Suite, Documentation & Help, Legal & Standards */}
          {columns.map((col, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <h4 className="font-bold text-xs text-foreground uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Copyright Bar with Small Admin Link on Right */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-muted-foreground">
            {copyright}
          </p>
          <Link
            href="/admin/login"
            className="text-[11px] text-muted-foreground/40 hover:text-muted-foreground transition-colors font-medium"
            title="Admin Portal Login"
          >
            Admin Portal
          </Link>
        </div>
      </div>
    </footer>
  );
}