import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vibepress.studio"),
  title: {
    template: "%s | VibePress Studio",
    default: "VibePress Studio | Modern Software Showcase",
  },
  description: "High-performance, robust software solutions for modern creators and businesses. Home to Smart Affiliate Link Cloaker and ShelfMaster.",
  keywords: ["WordPress plugins", "desktop apps", "Tauri", "Next.js", "software studio", "library management", "affiliate cloaker"],
  authors: [{ name: "Abu Saeed Sayem", url: "https://abusaeedsayem.netlify.app" }],
  creator: "Abu Saeed Sayem",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vibepress.studio",
    title: "VibePress Studio | Modern Software Showcase",
    description: "High-performance, robust software solutions for modern creators and businesses.",
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
    title: "VibePress Studio | Modern Software Showcase",
    description: "High-performance, robust software solutions for modern creators and businesses.",
    images: ["/images/og-image.jpg"],
    creator: "@asaeedmsayem",
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
          "min-h-full flex flex-col bg-background font-sans text-foreground",
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
