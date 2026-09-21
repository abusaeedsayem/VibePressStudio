import { NextResponse } from "next/server";

export async function GET() {
  const lemonSqueezyUrl = "https://vibepressstudio.lemonsqueezy.com/checkout";
  
  const response = NextResponse.redirect(lemonSqueezyUrl, { status: 307 });

  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  response.headers.set("Cache-Control", "no-store, max-age=0");

  return response;
}
