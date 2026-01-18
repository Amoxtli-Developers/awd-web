import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const sendEmail = async (payload: {
  service: string;
  name: string;
  email: string;
  company: string;
  website?: string;
  budget: string;
  timeline: string;
  message: string;
}) => {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    throw new Error("SENDGRID_API_KEY missing");
  }

  sgMail.setApiKey(apiKey);

  const subject = `New pricing inquiry — ${payload.service || "Service"}`;
  const html = `
    <div style="font-family: 'Space Grotesk', Arial, sans-serif; color: #1A1A1A; line-height: 1.6;">
      <h2 style="margin: 0 0 12px;">New pricing inquiry</h2>
      <p style="margin: 0 0 16px;">Service: <strong>${payload.service || "N/A"}</strong></p>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #E7E3E1;">Name</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #E7E3E1;"><strong>${payload.name}</strong></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #E7E3E1;">Email</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #E7E3E1;"><strong>${payload.email}</strong></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #E7E3E1;">Company</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #E7E3E1;"><strong>${payload.company}</strong></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #E7E3E1;">Website</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #E7E3E1;"><strong>${payload.website || "-"}</strong></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #E7E3E1;">Budget</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #E7E3E1;"><strong>${payload.budget}</strong></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #E7E3E1;">Timeline</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #E7E3E1;"><strong>${payload.timeline}</strong></td>
        </tr>
      </table>
      <div style="margin-top: 16px;">
        <p style="margin: 0 0 8px;">Project summary</p>
        <div style="padding: 12px; background: #FBFBFB; border: 1px solid #E7E3E1; border-radius: 12px;">
          ${payload.message}
        </div>
      </div>
      <p style="margin-top: 20px; font-size: 12px; color: #6B6B6B;">
        Sent from Amoxtli pricing form.
      </p>
    </div>
  `;

  await sgMail.send({
    to: "hello@amoxtli.tech",
    from: "amoxtliweb@amoxtli.tech",
    subject,
    html,
    replyTo: payload.email,
  });
};

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as {
      service?: string;
      name?: string;
      email?: string;
      company?: string;
      website?: string;
      budget?: string;
      timeline?: string;
      message?: string;
    };

    if (!payload.name || !payload.email || !payload.company || !payload.budget || !payload.timeline || !payload.message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await sendEmail({
      service: payload.service || "Pricing inquiry",
      name: payload.name,
      email: payload.email,
      company: payload.company,
      website: payload.website,
      budget: payload.budget,
      timeline: payload.timeline,
      message: payload.message,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("SendGrid error", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
