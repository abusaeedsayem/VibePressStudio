import { NextResponse } from "next/server";

export async function GET() {
  const lemonSqueezyUrl = "https://vibepressstudio.lemonsqueezy.com/checkout";
  
  // Return a secure 307 temporary redirect to the Lemon Squeezy checkout page
  const response = NextResponse.redirect(lemonSqueezyUrl, { status: 307 });

  // Add security & SEO compliance headers so crawler bots do not index the redirect
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  response.headers.set("Cache-Control", "no-store, max-age=0");

  return response;
}
