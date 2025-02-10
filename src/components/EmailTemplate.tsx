import * as React from "react";

interface EmailTemplateProps {
  name: string;
  phone: string;
  email: string;
  mensaje: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  phone,
  email,
  mensaje,
}) => (
  <div>
    <h1>Solicitud de Contacto</h1>
    <h3>
      Nombre: <span style={{ fontWeight: 400 }}>{name}</span>
    </h3>
    <h3>
      Teléfono: <span style={{ fontWeight: 400 }}>{phone}</span>
    </h3>
    <h3>
      Email: <span style={{ fontWeight: 400 }}>{email}</span>
    </h3>
    <h3>
      Mensaje: <span style={{ fontWeight: 400 }}>{mensaje}</span>
    </h3>
  </div>
);
