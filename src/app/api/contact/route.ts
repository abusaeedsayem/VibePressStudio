import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, product, category, license, message } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Full name is required." },
        { status: 400 }
      );
    }

    const payload = {
      formType: "Contact Support Request",
      type: "contact",
      name: name.trim(),
      email: email.trim(),
      product: product || "smart-affiliate-link-cloaker",
      category: category || "general-inquiry",
      license: license?.trim() || "N/A",
      message: message?.trim() || "N/A",
      timestamp: new Date().toISOString(),
      recipientEmail: process.env.NOTIFICATION_EMAIL || "vibepress.studio@proton.me",
    };

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;

    // 1. Send to Google Sheets Webhook (which saves row to Sheet & sends notification email)
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        console.error("Failed to forward contact request to Google Sheets Webhook:", err);
      }
    }

    // 2. Optional: Forward to Web3Forms if key is provided
    if (web3formsKey) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: `[Contact Support] New Ticket from ${payload.name}`,
            from_name: payload.name,
            email: payload.email,
            message: `Product: ${payload.product}\nCategory: ${payload.category}\nLicense: ${payload.license}\n\nMessage:\n${payload.message}`,
            to_email: payload.recipientEmail,
          }),
        });
      } catch (err) {
        console.error("Failed to forward contact request to Web3Forms:", err);
      }
    }

    // If in development mode and no webhook is configured, log for visibility
    if (!webhookUrl && !web3formsKey) {
      console.log(
        "[VibePress Contact Form Submission - Dev Mode]:",
        JSON.stringify(payload, null, 2)
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your support request has been delivered successfully.",
      data: { name: payload.name, email: payload.email },
    });
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
