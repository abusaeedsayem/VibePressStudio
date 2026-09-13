
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

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    return;
  }

  let transporter: any;
  try {
    const dynamicRequire = eval("require");
    const nodemailer = dynamicRequire("nodemailer");
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT || "587", 10),
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });
  } catch {
    console.warn("nodemailer not available. Admin notification skipped.");
    return;
  }

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
      to: ADMIN_NOTIFICATION_RECIPIENT || "vibepress.studio@proton.me",
      subject: `VibePress Studio New Subscriber Alert: ${payload.name}`,
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

export interface SupportTicketNotificationPayload {
  name: string;
  email: string;
  product: string;
  category: string;
  license?: string;
  message: string;
  createdAt: Date | string;
}

export async function sendAdminSupportTicketNotification(
  payload: SupportTicketNotificationPayload
) {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASSWORD,
    NOTIFICATION_FROM_EMAIL,
    ADMIN_NOTIFICATION_RECIPIENT,
  } = process.env;

  const recipient = ADMIN_NOTIFICATION_RECIPIENT || process.env.NOTIFICATION_EMAIL || "vibepress.studio@proton.me";

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    return;
  }

  let transporter: any;
  try {
    const dynamicRequire = eval("require");
    const nodemailer = dynamicRequire("nodemailer");
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT || "587", 10),
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });
  } catch {
    console.warn("nodemailer not available. Support notification skipped.");
    return;
  }

  const createdDateStr = payload.createdAt instanceof Date 
    ? payload.createdAt.toISOString() 
    : new Date(payload.createdAt).toISOString();

  const html = `
    <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #2a2e3d; border-radius: 12px; overflow: hidden; background: #0B1120;">
      <div style="background: linear-gradient(135deg, #0058be 0%, #2170e4 100%); padding: 30px 20px; text-align: center;">
        <h1 style="color: #ffffff; font-size: 22px; font-weight: 700; margin: 0; letter-spacing: -0.5px;">
          🔔 New Support &amp; Helpdesk Inquiry
        </h1>
        <p style="color: #e0e7ff; font-size: 13px; margin: 8px 0 0 0;">
          VibePress Studio Support Desk
        </p>
      </div>
      <div style="padding: 24px; color: #f1f5f9; line-height: 1.6; font-size: 14px;">
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; width: 140px;"><strong>Requester Name:</strong></td>
            <td style="padding: 8px 0; color: #ffffff; font-weight: 600;">${payload.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;"><strong>Requester Email:</strong></td>
            <td style="padding: 8px 0; color: #38bdf8; font-family: monospace;">${payload.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;"><strong>Selected Product:</strong></td>
            <td style="padding: 8px 0; color: #ffffff; font-weight: 600;">${payload.product}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;"><strong>Inquiry Category:</strong></td>
            <td style="padding: 8px 0; color: #ffffff;">${payload.category}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;"><strong>License / Reference:</strong></td>
            <td style="padding: 8px 0; color: #ffffff; font-family: monospace;">${payload.license || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;"><strong>Timestamp (UTC):</strong></td>
            <td style="padding: 8px 0; color: #94a3b8;">${createdDateStr}</td>
          </tr>
        </table>

        <div style="background: #1e293b; border-left: 4px solid #38bdf8; padding: 16px; border-radius: 6px; margin: 20px 0;">
          <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: #94a3b8; margin-bottom: 8px;">Inquiry / Message Details:</div>
          <div style="white-space: pre-wrap; color: #f8fafc; font-size: 14px; line-height: 1.6;">${payload.message}</div>
        </div>

        <div style="text-align: center; margin-top: 24px;">
          <a href="mailto:${payload.email}?subject=Re:%20Support%20Request%20-%20VibePress%20Studio" style="display: inline-block; background: #0058be; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px;">
            Reply to Requester Directly &rarr;
          </a>
        </div>

        <hr style="border: 0; border-top: 1px solid #334155; margin: 24px 0 16px 0;" />
        <p style="font-size: 11px; color: #64748b; text-align: center; margin: 0;">
          This is an automated dispatch from the VibePress Studio Helpdesk Infrastructure.
        </p>
      </div>
    </div>
  `;

  const text = `
🔔 New Support & Helpdesk Inquiry — VibePress Studio

Requester Name: ${payload.name}
Requester Email: ${payload.email}
Product: ${payload.product}
Category: ${payload.category}
License/Ref: ${payload.license || "N/A"}
Timestamp (UTC): ${createdDateStr}

Message:
${payload.message}

---
Reply directly: mailto:${payload.email}?subject=Re:%20Support%20Request%20-%20VibePress%20Studio
`;

  try {
    await transporter.sendMail({
      from: `"VibePress Studio Helpdesk" <${NOTIFICATION_FROM_EMAIL || "support@vibepress.studio"}>`,
      to: recipient,
      replyTo: payload.email,
      subject: `[Support Ticket] ${payload.category} from ${payload.name} (${payload.product})`,
      text,
      html,
    });
  } catch (error) {
    console.error("Admin support ticket notification failed (non-blocking):", error);
  } finally {
    await transporter.close();
  }
}