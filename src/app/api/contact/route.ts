import { NextResponse } from "next/server";
import { saveSupportTicket } from "@/lib/db/tickets";
import { saveSubscriber } from "@/lib/db/subscribers";
import { sendAdminSupportTicketNotification } from "@/lib/email/notifications";

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

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Inquiry message is required." },
        { status: 400 }
      );
    }

    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim();
    const sanitizedProduct = product || "vibepress-affiliate-link-cloaker";
    const sanitizedCategory = category || "general-inquiry";
    const sanitizedLicense = license?.trim() || "N/A";
    const sanitizedMessage = message.trim();
    const now = new Date();

    // 1. Save Support Ticket to Database & In-Memory Store
    const savedTicket = await saveSupportTicket({
      name: sanitizedName,
      email: sanitizedEmail,
      product: sanitizedProduct,
      category: sanitizedCategory,
      license: sanitizedLicense,
      message: sanitizedMessage,
    });

    // 2. Also record/upsert customer as active subscriber
    await saveSubscriber(
      sanitizedName,
      sanitizedEmail,
      `Support Helpdesk: ${sanitizedProduct}`
    ).catch((err) => console.warn("Failed to auto-subscribe support requester:", err));

    // 3. Send email notification at once to VibePress.Studio@proton.me
    sendAdminSupportTicketNotification({
      name: sanitizedName,
      email: sanitizedEmail,
      product: sanitizedProduct,
      category: sanitizedCategory,
      license: sanitizedLicense,
      message: sanitizedMessage,
      createdAt: now,
    }).catch((err) => {
      console.error("Direct SMTP support ticket notification failed (non-blocking):", err);
    });

    const payload = {
      formType: "Contact Support Request",
      type: "contact",
      ticketId: savedTicket.id,
      name: sanitizedName,
      email: sanitizedEmail,
      product: sanitizedProduct,
      category: sanitizedCategory,
      license: sanitizedLicense,
      message: sanitizedMessage,
      timestamp: now.toISOString(),
      recipientEmail: process.env.NOTIFICATION_EMAIL || "vibepress.studio@proton.me",
    };

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL || process.env.GOOGLE_SCRIPT_WEBHOOK_URL;
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;

    // 4. Send to Google Sheets Webhook (saves row to Sheet & triggers email notification)
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

    // 5. Optional: Forward to Web3Forms for direct inbox delivery
    if (web3formsKey) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: `[Support Ticket] ${payload.category} from ${payload.name} (${payload.product})`,
            from_name: payload.name,
            email: payload.email,
            message: `Product: ${payload.product}\nCategory: ${payload.category}\nLicense/Reference: ${payload.license}\nTicket ID: ${payload.ticketId}\n\nMessage:\n${payload.message}`,
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
        "[VibePress Contact Form Submission - Dev Mode Saved]:",
        JSON.stringify(payload, null, 2)
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your support request has been delivered and saved successfully.",
      data: {
        ticketId: savedTicket.id,
        name: payload.name,
        email: payload.email,
        product: payload.product,
      },
    });
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
