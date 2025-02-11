import { EmailTemplate } from "../../../components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    // @ts-ignore
    const data = await resend.emails.send({
      from: "Contacto Website Premad",
      to: ["vickx2000@gmail.com"],
      subject: `Solicitud de contacto de ${body.name}`,
      react: EmailTemplate({
        name: body.name,
        phone: body.phone,
        email: body.email,
        mensaje: body.mensaje,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
