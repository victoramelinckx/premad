"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Badget } from "./Badget";
import { Badget2 } from "./Badget2";

export const Hero = () => {
  return (
    <section className="flex flex-col relative w-full justify-center items-center ">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/70 z-[1]" /> {/* Overlay */}
        <Image
          src="/background.png"
          alt="Construction background"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="z-0"
        />
      </div>

      {/* Content Container - Note the z-10 to place it above the background */}
      <div className="relative z-10 flex max-lg:flex-col max-md:pt-28 lg:py-[140px]  w-full lg:w-11/12 max-w-6xl gap-14 lg:gap-6 lg:justify-between">
        <div className="flex flex-col justify-center text-white md:max-lg:items-center gap-3 sm:gap-6 lg:gap-4 max-w-4xl md:max-lg:text-center max-lg:px-6 lg:mr-10">
          <h1 className="leading-[44px] tracking-[.01em] font-dmsans max-md:text-center font-bold text-[44px] md:text-5xl lg:text-6xl ">
            Innovación y experiencia en construcción industrial.
          </h1>
          <p className="max-md:mt-4 md:leading-normal max-md:text-center tracking-[.03em] max-sm:font-medium font-[450] text-base max-w-lg  text-white sm:max-lg:w-4/5">
            Más de 20 años transformando la construcción modular con soluciones
            industrializadas de alto rendimiento para proyectos a gran escala.
          </p>
          <div className="flex flex-col lg:flex-row max-md:items-center  space-x-2 mt-4">
            <button className="mt-3 text-lg flex items-center gap-1 rounded-full bg-primary-500 px-5 py-3 max-md:w-2/3 max-md:justify-center max-md:text-center text-white font-semibold w-fit hover:opacity-70">
              Nuestros servicios
            </button>
            <button className="mt-3 text-lg flex items-center gap-1 rounded-full bg-white/30 blur-xs border-solid max-md:w-2/3 max-md:justify-center max-md:text-center border-2 px-5 py-3 text-white border-white font-semibold w-fit hover:opacity-70">
              Contáctanos
            </button>
          </div>
        </div>
        <div className="flex flex-col text-white items-start justify-center space-y-4 pb-14 lg:py-24">
          {/* Container for mobile layout */}
          <div className="w-full flex flex-col md:hidden">
            <div className="flex flex-row justify-around w-full mb-6">
              <div className="flex flex-col items-center">
                <p className="text-4xl lg:text-5xl font-medium leading-none">
                  200+
                </p>
                <span>Proyectos completados</span>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-4xl lg:text-5xl font-medium leading-none">
                  500+
                </p>
                <p>Clientes felices</p>
              </div>
            </div>
            <div className="flex flex-col items-center w-full">
              <p className="text-4xl lg:text-5xl font-medium leading-none">
                1200
              </p>
              <p>Profesionales especializados</p>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex md:flex-col md:space-y-4">
            <div className="flex flex-col">
              <p className="text-[78px] font-medium leading-none">200+</p>
              <span>Proyectos completados</span>
            </div>
            <div className="flex flex-col">
              <p className="text-[78px] font-medium leading-none">500+</p>
              <p>Clientes felices</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[78px] font-medium leading-none">1200</p>
              <p>Profesionales especializados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
