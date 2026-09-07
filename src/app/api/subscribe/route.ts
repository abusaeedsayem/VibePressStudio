import { NextResponse } from "next/server";
import { subscriberInputSchema } from "@/lib/validations/subscriber";
import { saveSubscriber } from "@/lib/db/subscribers";
import { sendAdminSubscriberNotification } from "@/lib/email/notifications";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    // Bot mitigation: check honeypot field
    if (payload.honeypot && payload.honeypot.trim() !== "") {
      return NextResponse.json({
        success: true,
        message: "Subscription processed.",
      });
    }

    // Validate payload
    const parsed = subscriberInputSchema.safeParse(payload);

    if (!parsed.success) {
      const errors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        errors[issue.path.join(".")] = issue.message;
      });
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    const { name, email, source } = parsed.data;

    // Save subscriber (upsert keyed on email — idempotent)
    const subscriber = await saveSubscriber(name, email, source);

    // Notify admin asynchronously (do not delay or fail the client response)
    sendAdminSubscriberNotification({
      name,
      email,
      source,
      createdAt: subscriber.createdAt,
    }).catch((err) => {
      console.error("Notification send failed (non-blocking):", err);
    });

    return NextResponse.json({
      success: true,
      message: "Subscription registered successfully.",
    }, { status: 201 });
  } catch (error) {
    console.error("Subscription API error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to process subscription at this time, please try again later." },
      { status: 500 }
    );
  }
}