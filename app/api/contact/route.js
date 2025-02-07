import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields are required!" }), { status: 400 });
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use any other service like Outlook, Yahoo, etc.
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // App password or email password
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Your email
      subject: `New Contact Form Message from ${name}`,
      text: `From: ${name} (${email})\n\nMessage:\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email." }), { status: 500 });
  }
}
