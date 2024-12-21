"use client";

import Acercade from "../../public/imagenes/premad_acerca.png";
import Image from "next/image";
import { Element } from "react-scroll";

export const About = () => {
  return (
    <Element name="acerca" className="w-full flex justify-center">
      <div className=" my-10 lg:my-20 w-full max-w-6xl px-8 md:px-4">
        <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Contenedor del texto - Ahora con flex y centrado vertical */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center">
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
              <button className=" mt-[30px] lg:mt-10 text-lg flex items-center gap-1 rounded-full bg-white/30 blur-xs border-solid border-2  px-6 py-3 text-black border-black font-semibold w-fit hover:opacity-70">
                Nuestros proyectos
              </button>
              {/* <Link
                key="contacto"
                to="contacto"
                smooth
                spy
                offset={-72}
                className=""
              >
                <Button
                  title="Contáctenos"
                  className="mt-3  bg-white/30 blur-xs border-solid  border-2 px-6 py-3 text-white border-white font-semibold w-fit hover:opacity-70"
                />
              </Link> */}
            </div>
          </div>

          {/* Contenedor de la imagen - Altura automática */}
          <div className="w-full lg:w-[55%]">
            <Image
              src={Acercade}
              alt="About us image"
              className="w-full rounded-2xl shadow-xl"
              priority
              placeholder="blur"
            />
          </div>
        </section>
      </div>
    </Element>
  );
};
