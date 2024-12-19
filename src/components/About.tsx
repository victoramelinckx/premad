"use client";

import Acercade from "../../public/imagenes/premad_acerca.png";
import Image from "next/image";
import { Element } from "react-scroll";

export const About = () => {
  return (
    <Element name="acerca" className="w-full flex justify-center">
      <div className=" my-10 lg:my-20 w-full max-w-6xl px-4">
        <section className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          {/* Contenedor del texto - Ahora con flex y centrado vertical */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div>
              <h3 className="lg:text-[48px]  text-[36px] leading-tight font-bold">
                ¿Quiénes somos?
              </h3>
              <p className="pt-5 text-gray-700 leading-normal font-medium">
                Expertos en construcción industrializada y modular en Chile con
                más de 20 años de trayectoria.
                <br />
                <br />
                Desarrollamos cada proyecto en estrecha colaboración con
                nuestros clientes, respaldados por un equipo de élite en
                ingeniería, arquitectura, consultoría y construcción. Nuestra
                metodología integrada garantiza resultados excepcionales desde
                el diseño hasta la ejecución final.
              </p>
              <button className=" mt-[30px] lg:mt-10 text-lg flex items-center gap-1 rounded-full bg-primary-500 px-5 py-3 text-white font-semibold w-fit hover:opacity-70">
                Nuestros proyectos
              </button>
            </div>
          </div>

          {/* Contenedor de la imagen - Altura automática */}
          <div className="w-full lg:w-1/2">
            <Image
              src={Acercade}
              alt="About us image"
              className="w-full rounded-2xl shadow-lg"
              priority
              placeholder="blur"
            />
          </div>
        </section>
      </div>
    </Element>
  );
};
