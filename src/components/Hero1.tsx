"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Badget } from "./Badget";
import { Badget2 } from "./Badget2";
import { Link } from "react-scroll";
import { Button } from "./Button";

export const Hero1 = () => {
  return (
    <section className="flex flex-col relative w-full justify-center items-center ">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/70 z-[1]" /> {/* Overlay */}
        <Image
          src="/fondo1.jpg"
          alt="Construction background"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="z-0"
        />
      </div>

      {/* Content Container - Note the z-10 to place it above the background */}
      <div className="relative z-10 flex max-lg:flex-col max-md:pt-36 lg:py-[130px]  w-full lg:w-11/12 max-w-6xl gap-14 lg:gap-6 lg:justify-between">
        <div className="flex flex-col justify-center text-white md:max-lg:items-center gap-3 sm:gap-6 lg:gap-4 max-w-4xl md:max-lg:text-center max-lg:px-6 lg:mr-10">
          <h1 className="leading-[40px] tracking-[.01em] font-dmsans max-md:text-center font-extrabold text-[40px] md:text-5xl md:leading-[48px] lg:text-6xl lg:leading-[64px] ">
            Innovación y experiencia <br className="2xl:flex hidden" /> en
            montaje industrial.
          </h1>
          <p className="max-md:mt-4 md:leading-normal max-md:text-center tracking-[.03em] max-sm:font-medium font-[450]  max-w-lg mt-2 text-white/90 sm:max-lg:w-4/5">
            Más de 20 años transformando la construcción con soluciones
            innovadoras de alta eficiencia para proyectos a gran escala.
          </p>
          <div className="flex flex-col lg:flex-row max-md:items-center md:space-x-6 mt-4">
            {/* <button className="mt-3 text-lg flex items-center gap-1 rounded-full bg-primary-500 px-6 py-3 max-md:w-2/3 max-md:justify-center max-md:text-center text-black font-semibold w-fit hover:opacity-70">
              Nuestros servicios
            </button> */}
            {/* <button className="mt-3 text-lg flex items-center gap-1 rounded-full bg-white/30 blur-xs border-solid max-md:w-2/3 max-md:justify-center max-md:text-center border-2 px-6 py-3 text-white border-white font-semibold w-fit hover:opacity-70">
              Contáctenos
            </button> */}
            <Link
              key="proyecto"
              to="proyectos"
              smooth
              spy
              offset={-72}
              className=""
            >
              <Button
                title="Nuestras áreas"
                className="mt-3  bg-primary-500 px-6 py-3  text-black font-semibold w-fit hover:opacity-70"
              />
            </Link>
            <Link
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
            </Link>
          </div>
        </div>
        <div className="flex flex-col text-white items-start justify-center space-y-4 pb-14 lg:py-20">
          {/* Container for mobile layout */}
          <div className="w-full flex flex-col md:hidden">
            <div className="flex flex-row justify-around w-full mb-6">
              <div className="flex flex-col items-center justify-center">
                <p className="text-4xl font-medium leading-none">10.000+</p>
                <p className=" text-sm self-center text-center">
                  Horas en Proyectos <br /> de Ingenería
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-4xl font-medium leading-none">52.000</p>
                <p className="text-sm self-center text-center">
                  M2 en Obras <br /> Civiles
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center w-full">
              <p className="text-4xl font-medium leading-none">25.000</p>
              <p className="text-sm self-center text-center">
                M2 en Proyectos <br /> Inmobiliarios
              </p>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex md:flex-col md:space-y-12">
            <div className="flex flex-col">
              <p className="text-[78px] font-medium leading-none mb-2">
                10.000+
              </p>
              <p className="tracking-[.03em] max-sm:font-medium font-[450] text-white/90 text-[16px]">
                Horas en Proyectos de Ingenería
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[78px] font-medium leading-none mb-2">
                52.000
              </p>
              <p className="tracking-[.03em] max-sm:font-medium font-[450] text-white/90 text-[16px]">
                M2 en Obras Civiles
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[78px] font-medium leading-none mb-2">
                25.000
              </p>
              <p className="tracking-[.03em] max-sm:font-medium font-[450] text-white/90 text-[16px]">
                M2 en Proyectos Inmobiliarios
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
