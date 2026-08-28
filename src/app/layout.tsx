import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
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
  metadataBase: new URL("https://vibepress.studio"),
  title: {
    template: "%s | VibePress Studio",
    default: "VibePress Studio | Engineered for Performance. Built for Growth.",
  },
  description: "High-performance WordPress Plugins, Offline-First Desktop Systems, and Creator Tools crafted by Abu Saeed Sayem.",
  keywords: ["WordPress plugins", "desktop apps", "Tauri", "Next.js", "software studio", "library management", "affiliate cloaker"],
  authors: [{ name: "Abu Saeed Sayem", url: "https://abusaeedsayem.netlify.app" }],
  creator: "Abu Saeed Sayem",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vibepress.studio",
    title: "VibePress Studio | Engineered for Performance. Built for Growth.",
    description: "High-performance WordPress Plugins, Offline-First Desktop Systems, and Creator Tools crafted by Abu Saeed Sayem.",
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
    title: "VibePress Studio | Engineered for Performance. Built for Growth.",
    description: "High-performance WordPress Plugins, Offline-First Desktop Systems, and Creator Tools crafted by Abu Saeed Sayem.",
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
          "min-h-full flex flex-col bg-background text-on-background",
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
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
