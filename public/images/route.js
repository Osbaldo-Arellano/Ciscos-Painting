// app/api/contact/route.ts  (or pages/api/contact.js)

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // pull out the exact keys your form is sending:
    const { name, email, phone_number, message } = await request.json();

    if (
      !name ||
      !phone_number ||
      !message
    ) {
      return NextResponse.json(
        { success: false, message: 'Please fill out all required fields.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Cisco's GC Painting" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      subject: `Nuevo Contacto: ${name}`,
      text:
        `Nombre: ${name}\n` +
        `Correo electrónico: ${email}\n` +
        `Teléfono: ${phone_number}\n\n` +
        `Mensaje:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent' });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { success: false, message: 'Error sending message. Please try again later.' },
      { status: 500 }
    );
  }
}
