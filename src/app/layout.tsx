import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { AutoUpdater } from "@/components/updater/AutoUpdater";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vibepressstudio.vercel.app"),
  title: {
    template: "%s | VibePress Studio",
    default: "VibePress Studio | High-Performance Digital Tools & Desktop Applications",
  },
  description: "High-performance WordPress plugins and offline-first native desktop software engineered for speed, security, and data privacy.",
  keywords: ["WordPress plugins", "desktop apps", "Tauri v2", "Rust", "Next.js", "software studio", "library management", "affiliate cloaker"],
  authors: [{ name: "VibePress Studio", url: "https://vibepressstudio.vercel.app" }],
  creator: "VibePress Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vibepressstudio.vercel.app",
    title: "VibePress Studio | High-Performance Digital Tools & Desktop Applications",
    description: "High-performance WordPress plugins and offline-first native desktop software engineered for speed, security, and data privacy.",
    siteName: "VibePress Studio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VibePress Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VibePress Studio | High-Performance Digital Tools & Desktop Applications",
    description: "High-performance WordPress plugins and offline-first native desktop software engineered for speed, security, and data privacy.",
    images: ["/images/og-image.jpg"],
    creator: "@VibePressStudio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-full flex flex-col bg-background text-foreground",
          inter.variable,
          jetbrainsMono.variable
        )}
        style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <AutoUpdater />
        </ThemeProvider>
      </body>
    </html>
  );
}
