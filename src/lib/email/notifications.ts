import nodemailer from "nodemailer";

interface NotificationPayload {
  name: string;
  email: string;
  source: string;
  createdAt: Date;
}

export async function sendAdminSubscriberNotification(
  payload: NotificationPayload
) {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASSWORD,
    NOTIFICATION_FROM_EMAIL,
    ADMIN_NOTIFICATION_RECIPIENT,
  } = process.env;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT || "587", 10),
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });

  const html = `
    <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #0B1120; padding: 40px 20px; text-align: center;">
        <h2 style="color: #38BDF8; font-size: 24px; font-weight: 600; margin: 0;">
          VibePress Studio Internal Notification
        </h2>
      </div>
      <div style="padding: 20px; background: #1a1a2e; color: #e0e0e0; line-height: 1.6;">
        <p><strong>Full Name:</strong> ${payload.name}</p>
        <p><strong>Registered Email:</strong> ${payload.email}</p>
        <p><strong>Originating Page:</strong> ${payload.source}</p>
        <p><strong>Timestamp (UTC):</strong> ${payload.createdAt.toISOString()}</p>
        <hr style="border: 0; border-top: 1px solid #38BDF8; margin: 30px 0;" />
        <p style="font-size: 12px; color: #666; text-align: center;">
          This is an automated dispatch from the VibePress Studio web core.
        </p>
      </div>
    </div>
  `;

  const text = `
VibePress Studio Internal Notification

Full Name: ${payload.name}
Registered Email: ${payload.email}
Originating Page: ${payload.source}
Timestamp (UTC): ${payload.createdAt.toISOString()}

This is an automated dispatch from the VibePress Studio web core.
`;

  try {
    await transporter.sendMail({
      from: `"VibePress Studio" <${NOTIFICATION_FROM_EMAIL}>`,
      to: ADMIN_NOTIFICATION_RECIPIENT,
      subject: `VibePress Studio New Subscriber Alert ${payload.name}`,
      text,
      html,
    });
  } catch (error) {
    console.error(
      "Admin subscriber notification failed (non-blocking):",
      error
    );
  } finally {
    await transporter.close();
  }
}