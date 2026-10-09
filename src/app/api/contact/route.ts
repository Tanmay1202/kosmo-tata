import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, type, ...rest } = body;

    // Determine the subject based on the submission type
    let subject = 'New Lead Submission';
    if (type === 'contact') {
      subject = `New Contact Message from ${name}`;
    } else if (type === 'test_drive') {
      subject = `New Test Drive Request from ${name}`;
    } else if (type === 'lead_capture') {
      subject = `New Lead Capture from ${name}`;
    }

    // Format the email body
    const emailHtml = `
      <h2>${subject}</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
      ${
        Object.keys(rest).length > 0
          ? `<h3>Additional Details</h3><ul>${Object.entries(rest)
              .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
              .join('')}</ul>`
          : ''
      }
    `;

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      if (process.env.NODE_ENV === 'production') {
        console.error('SMTP configuration is missing; contact form email cannot be sent.');
        return NextResponse.json(
          { success: false, error: 'Email delivery is temporarily unavailable.' },
          { status: 503 }
        );
      }

      console.info('SMTP is not configured; skipping email delivery in development.');
      return NextResponse.json({ success: true, message: 'Development submission received.' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Kosmo Tata Website" <${process.env.SMTP_USER}>`,
      to: 'customercare@kosmotata.in',
      subject: subject,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email.' }, { status: 500 });
  }
}
