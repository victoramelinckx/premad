import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Privacidad = () => {
  return (
    <>
      <Navbar displayMode="no" />
      <section className="flex flex-col w-full justify-center items-center mt-16 sm:mt-20 mb-14">
        <div className="flex flex-col w-full lg:w-11/12 max-w-6xl pt-6 lg:pt-12 max-md:px-5 md:max-lg:px-12">
          <p className="text-primary-500 font-bold text-base ">
            Política de Privacidad
          </p>

          <h2 className="lg:text-[48px] md:text-[32px] text-[28px] leading-tight font-bold">
            Políticas de Privacidad de Campos & Lagos
          </h2>

          <p className="text-sm md:text-base text-gray-900/60 font-semibold mt-2 ">
            <strong>1. Información General</strong>
            <br />
            En Campos & Lagos consideramos que su privacidad es de suma
            importancia. Esta Política de Privacidad describe cómo recopilamos,
            utilizamos, protegemos y compartimos su información cuando utiliza
            nuestro sitio web y servicios.
            <br />
            <br />
            <strong>2. Información que Recopilamos</strong>
            <br />
            <strong>2.1 Información proporcionada voluntariamente:</strong>
            <ul>
              <li>Nombre y apellidos</li>
              <li>
                Información de contacto (correo electrónico, número de teléfono)
              </li>
              <li>Información de la empresa que representa</li>
              <li>
                Cualquier otra información que usted nos proporcione
                voluntariamente
              </li>
            </ul>
            <br />
            <strong>2.2 Información recopilada automáticamente:</strong>
            <ul>
              <li>Dirección IP</li>
              <li>Tipo de navegador</li>
              <li>Tipo de dispositivo</li>
              <li>Páginas visitadas en nuestro sitio</li>
              <li>Tiempo de permanencia en el sitio</li>
              <li>Ubicación geográfica general</li>
            </ul>
            <br />
            <strong>3. Uso de la Información</strong>
            <ul>
              <li>Responder a sus consultas y solicitudes</li>
              <li>Proporcionar los servicios solicitados</li>
              <li>Mejorar nuestro sitio web y servicios</li>
              <li>Enviar información relevante sobre nuestros servicios</li>
              <li>Cumplir con obligaciones legales</li>
              <li>Prevenir fraudes y actividades ilícitas</li>
            </ul>
            <br />
            <strong>4. Protección de la Información</strong>
            <br />
            Implementamos medidas de seguridad técnicas y organizativas
            apropiadas para proteger su información personal contra el acceso no
            autorizado, pérdida o alteración.
            <br />
            <br />
            <strong>5. Compartir Información</strong>
            <br />
            No vendemos ni alquilamos su información personal a terceros. Sin
            embargo, podemos compartir su información con:
            <ul>
              <li>
                Proveedores de servicios que nos ayudan a operar nuestro negocio
              </li>
              <li>Autoridades competentes cuando sea requerido por ley</li>
              <li>
                Terceros en caso de una fusión, adquisición o venta de activos
              </li>
            </ul>
            <br />
            <strong>6. Sus Derechos</strong>
            <ul>
              <li>Acceder a su información personal</li>
              <li>Rectificar información inexacta</li>
              <li>Solicitar la eliminación de su información</li>
              <li>Oponerse al procesamiento de su información</li>
              <li>Retirar su consentimiento en cualquier momento</li>
            </ul>
            <br />
            <strong>7. Cookies</strong>
            <br />
            Utilizamos cookies y tecnologías similares para mejorar su
            experiencia en nuestro sitio web. Puede configurar su navegador para
            rechazar todas las cookies o para recibir una notificación cuando se
            envíe una cookie.
            <br />
            <br />
            <strong>8. Cambios en la Política de Privacidad</strong>
            <br />
            Nos reservamos el derecho de modificar esta política de privacidad
            en cualquier momento. Los cambios entrarán en vigor inmediatamente
            después de su publicación en el sitio web.
            <br />
            <br />
            <strong>9. Contacto</strong>
            <br />
            Si tiene preguntas sobre esta Política de Privacidad, puede
            contactarnos a través de:
            <ul>
              <li>Correo electrónico: [dirección de correo electrónico]</li>
              <li>Teléfono: [número de teléfono]</li>
              <li>Dirección: [dirección física]</li>
            </ul>
            <br />
            <strong>10. Consentimiento</strong>
            <br />
            Al utilizar nuestro sitio web y servicios, usted acepta esta
            Política de Privacidad y consiente el tratamiento de su información
            personal según lo descrito en este documento.
            <br />
            <br />
            Última actualización: [Fecha]
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Privacidad;
