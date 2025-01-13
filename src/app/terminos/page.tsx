import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const TerminosServicios = () => {
  return (
    <>
      <Navbar displayMode="no" />
      <section className="flex flex-col w-full justify-center items-center mt-16 sm:mt-20 mb-14">
        <div className="flex flex-col w-full lg:w-11/12 max-w-6xl pt-6 lg:pt-12 max-md:px-5 md:max-lg:px-12">
          <p className="text-primary-500 font-bold text-base ">
            Términos de Servicios
          </p>

          <h2 className="lg:text-[48px] md:text-[32px] text-[28px] leading-tight font-bold">
            Términos de Servicios de Campos & Lagos
          </h2>

          <p className="text-sm md:text-base text-gray-900/60 font-semibold mt-2 ">
            <strong>1. Introducción</strong>
            <br />
            Al utilizar nuestros servicios, usted acepta cumplir con estos
            términos de servicio. Lea detenidamente este documento.
            <br />
            <br />
            <strong>2. Uso del Servicio</strong>
            <br />
            Usted se compromete a utilizar nuestros servicios de manera legal y
            ética.
            <br />
            <br />
            <strong>3. Propiedad Intelectual</strong>
            <br />
            Todo el contenido proporcionado es propiedad de Campos & Lagos y
            está protegido por derechos de autor.
            <br />
            <br />
            <strong>4. Limitación de Responsabilidad</strong>
            <br />
            No somos responsables por daños indirectos derivados del uso de
            nuestros servicios.
            <br />
            <br />
            <strong>5. Modificaciones a los Términos</strong>
            <br />
            Nos reservamos el derecho de modificar estos términos en cualquier
            momento. Los cambios entrarán en vigor al ser publicados en nuestro
            sitio web.
            <br />
            <br />
            <strong>6. Contacto</strong>
            <br />
            Para cualquier duda sobre estos términos, puede contactarnos a
            través de:
            <ul>
              <li>Correo electrónico: [dirección de correo electrónico]</li>
              <li>Teléfono: [número de teléfono]</li>
              <li>Dirección: [dirección física]</li>
            </ul>
            <br />
            Última actualización: [Fecha]
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TerminosServicios;
