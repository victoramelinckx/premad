import { EmailTemplate } from "../../../components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    // @ts-ignore
    const data = await resend.emails.send({
      from: "Contacto Website <contacto@jdenxsolutions.com>",
      to: ["jdenxsolutions@gmail.com"],
      subject: `Solicitud de contacto de ${body.name}`,
      react: EmailTemplate({
        name: body.name,
        phone: body.phone,
        email: body.email,
        treatment: body.treatment,
        mensaje: body.mensaje,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
