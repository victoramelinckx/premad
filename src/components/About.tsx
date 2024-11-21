"use client";

import Acercade from "../../public/imagenes/premad_acerca.png";
import Image from "next/image";
import { Element } from "react-scroll";

export const About = () => {
  return (
    <Element name="acerca" className="w-full flex justify-center">
      <div className="my-20 w-full max-w-6xl px-4">
        <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Contenedor del texto - Ahora con flex y centrado vertical */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div>
              <h3 className="lg:text-[48px] md:text-[32px] text-[28px] leading-tight font-bold">
                ¿Por que elegirnos?
              </h3>
              <p className="pt-5 text-[#555555] leading-normal">
                Somos una empresa con más de 20 años de experiencia en
                construcción industrializada y modular.
                <br />
                <br />
                Nuestro principal objetivo es desarrollar una estrategia
                conjunta con nuestros clientes para el desarrollo de
                los distintos proyectos, apoyados con profesionales de gran
                trayectoria en las áreas de ingeniería, arquitectura,
                consultoría, construcción y montaje.
              </p>
              <button className="mt-10 text-lg flex items-center gap-1 rounded-full bg-primary-500 px-5 py-3 text-white font-semibold w-fit hover:opacity-70">
                Trabajos
              </button>
            </div>
          </div>

          {/* Contenedor de la imagen - Altura automática */}
          <div className="w-full lg:w-1/2">
            <Image
              src={Acercade}
              alt="About us image"
              className="w-full rounded-2xl shadow"
              priority
              placeholder="blur"
            />
          </div>
        </section>
      </div>
    </Element>
  );
};
