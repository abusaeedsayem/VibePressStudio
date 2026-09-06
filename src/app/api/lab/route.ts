import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, selectedProduct } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const payload = {
      formType: "Lab Pre-Launch Registration",
      type: "lab",
      name: fullName?.trim() || "Launch Subscriber",
      fullName: fullName?.trim() || "Launch Subscriber",
      email: email.trim(),
      product: selectedProduct || "all",
      selectedProduct: selectedProduct || "all",
      category: "Pre-Launch Notification",
      license: "N/A",
      message: `User registered for launch notification of: ${selectedProduct || "all"}`,
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
        console.error("Failed to forward lab registration to Google Sheets Webhook:", err);
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
            subject: `[Launch Registration] New Subscriber: ${payload.email}`,
            from_name: payload.fullName,
            email: payload.email,
            message: `Subscriber Name: ${payload.fullName}\nEmail: ${payload.email}\nSelected Product: ${payload.selectedProduct}`,
            to_email: payload.recipientEmail,
          }),
        });
      } catch (err) {
        console.error("Failed to forward lab registration to Web3Forms:", err);
      }
    }

    // If in development mode and no webhook is configured, log for visibility
    if (!webhookUrl && !web3formsKey) {
      console.log(
        "[VibePress Lab Registration - Dev Mode]:",
        JSON.stringify(payload, null, 2)
      );
    }

    return NextResponse.json({
      success: true,
      message: "Launch registration received successfully.",
      data: { fullName: payload.fullName, email: payload.email },
    });
  } catch (error) {
    console.error("Error in /api/lab:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
