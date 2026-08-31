import Link from "next/link";
import footerData from "@/content/footer.json";

export function Footer() {
  const { brand, description, accreditation, copyright, columns } = footerData;

  return (
    <footer className="bg-muted/40 border-t border-border mt-auto">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Column 1: VibePress Studio */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <img src="/logo-dark.svg" alt="VibePress Studio" className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
            <div className="pt-2 border-t border-border/60">
              <p className="text-xs font-semibold text-foreground">
                Engineering Accreditation:
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {accreditation}
              </p>
            </div>
          </div>

          {/* Columns 2, 3, 4 */}
          {columns.map((col, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <h4 className="font-bold text-sm text-foreground uppercase tracking-wider">
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

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-muted-foreground">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
