import { EmailTemplate } from "../../../components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_JikSxEJF_5SJEdBAzep3qovdfMMXX2FNB");

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
    return NextResponse.json({ error });
  }
}
