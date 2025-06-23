import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, phone, jobs, description } = await request.json();

    if (
      !name ||
      !email ||
      !phone ||
      !Array.isArray(jobs) ||
      jobs.length === 0 ||
      !description
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
          from: process.env.FROM_EMAIL,
          to: process.env.TO_EMAIL,
          subject: `Nueva solicitud de presupuesto de ${name}`,
          text:
            `Nombre: ${name}\n` +
            `Correo electrónico: ${email}\n` +
            `Teléfono: ${phone}\n\n` +
            `Servicios solicitados:\n  • ${jobs.join('\n  • ')}\n\n` +
            `Descripción:\n${description}`,
        };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Estimate request sent!' });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { success: false, message: 'Error sending message. Please try again later.' },
      { status: 500 }
    );
  }
}
