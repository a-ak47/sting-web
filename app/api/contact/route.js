import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json(); // Parse the request body

    // Configure Nodemailer transport
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_TRANSPORTER_EMAIL,
        pass: process.env.NEXT_PUBLIC_TRANSPORTER_PASSWORD,
      },
    });

    // Email options
    let mailOptions = {
      from: data.email,
      to: "admin@stingrai.io",
      subject: `Request from ${data.name}. From page ${data.page}`,
      text: `Full Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        Role: ${data.role}
        Start Date: ${data.startDate}
        End Date: ${data.endDate}
        Compliance: ${data.compliance}
        Service: ${data.services}
        Additional Information: ${JSON.stringify(data.serviceOptions)}
        `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Error sending email" }), {
      status: 500,
    });
  }
}

export async function GET() {
  return new Response(JSON.stringify({ message: "GET method not allowed" }), {
    status: 405,
  });
}
