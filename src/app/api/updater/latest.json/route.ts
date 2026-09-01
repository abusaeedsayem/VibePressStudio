import { NextResponse } from "next/server";

// Proxy endpoint for Tauri updater — mirrors GitHub Releases latest.json
// Fallback if GitHub is unreachable. In production, this will be populated
// by the build pipeline with signed artifact URLs.

export const dynamic = "force-static";
export const revalidate = 3600; // cache 1 hour

export async function GET() {
  // Attempt to fetch from GitHub primary
  const githubUrl =
    "https://github.com/abusaeedsayem/VibePressStudio/releases/latest/download/latest.json";

  try {
    const res = await fetch(githubUrl, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data, {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      });
    }
  } catch {
    // Fall through to static fallback
  }

  // Static fallback — current version, no update
  return NextResponse.json(
    {
      version: "0.4.0",
      notes: "You are running the latest version of ShelfMaster.",
      pub_date: new Date().toISOString(),
      platforms: {
        "darwin-x86_64": {
          signature: "",
          url: "https://github.com/abusaeedsayem/VibePressStudio/releases/download/v0.4.0/ShelfMaster_0.4.0_x64.app.tar.gz",
        },
        "darwin-aarch64": {
          signature: "",
          url: "https://github.com/abusaeedsayem/VibePressStudio/releases/download/v0.4.0/ShelfMaster_0.4.0_aarch64.app.tar.gz",
        },
        "windows-x86_64": {
          signature: "",
          url: "https://github.com/abusaeedsayem/VibePressStudio/releases/download/v0.4.0/ShelfMaster_0.4.0_x64-setup.nsis.zip",
        },
        "linux-x86_64": {
          signature: "",
          url: "https://github.com/abusaeedsayem/VibePressStudio/releases/download/v0.4.0/ShelfMaster_0.4.0_amd64.AppImage.tar.gz",
        },
      },
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    }
  );
}
