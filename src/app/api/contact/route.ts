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
      subject = `New Contact Enquiry from ${name}`;
    } else if (type === 'test_drive') {
      subject = `New Test Drive Request from ${name}`;
    } else if (type === 'service_booking') {
      subject = `New Service Appointment Booking from ${name}`;
    } else if (type === 'online_booking') {
      subject = `New Online Car Reservation from ${name}`;
    } else if (type === 'car_exchange') {
      subject = `New Car Exchange Valuation from ${name}`;
    } else if (type === 'lead_capture') {
      subject = `New Lead Capture from ${name}`;
    }

    // Format the email body
    const emailHtml = `
      <h2>${subject}</h2>
      <p><strong>Name:</strong> ${name || 'N/A'}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
      ${message ? `<p><strong>Message / Notes:</strong> ${message}</p>` : ''}
      ${
        Object.keys(rest).length > 0
          ? `<h3>Additional Details</h3><ul>${Object.entries(rest)
              .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
              .join('')}</ul>`
          : ''
      }
    `;

    console.log(`[Lead Received] ${subject}`, { name, phone, email, type, ...rest });

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      // Return success gracefully so client WhatsApp flow is seamless
      return NextResponse.json({ success: true, message: 'Submission logged successfully.' }, { status: 200 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Kosmo Tata Website" <${process.env.SMTP_USER}>`,
      to: 'customercare@kosmotata.in',
      subject: subject,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    // Don't break customer experience
    return NextResponse.json({ success: true, message: 'Lead recorded.' }, { status: 200 });
  }
}
