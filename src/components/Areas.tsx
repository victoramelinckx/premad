"use client";
import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";
import { Clientes } from "./Clientes";

export const Areas = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <Element name="servicios" className="w-full flex justify-center">
      <section className="bg-[#f3f3f3] flex flex-col w-full justify-center items-center rounded-3xl md:rounded-[4rem]">
        <div className="flex flex-col w-full lg:w-11/12 max-w-6xl py-10 lg:py-20 max-md:px-5 md:max-lg:px-12 gap-6">
          <div className="flex flex-col items-center text-black">
            <h2 className="lg:text-[48px] text-[36px] leading-tight font-bold text-start w-full lg:text-center">
              Nuestras áreas.
            </h2>
            <p className="lg:text-center self-start lg:self-center text-gray-700 font-medium max-w-lg mt-2">
              Soluciones integrales en montaje industrial, respaldadas por más
              de 20 años de experiencia.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 lg:gap-y-8 lg:mt-4">
            {displayedServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          {services.length > 6 && (
            <div className=" ml-4">
              <button
                onClick={() => setShowAll(!showAll)}
                className=" text-black text-lg font-semibold hover:text-primary-500 transition-all duration-300  ease-linear"
              >
                {showAll ? "Ver menos" : "Ver más"}
              </button>
            </div>
          )}
        </div>
        <Clientes />
        <div className="mb-10 lg:mb-20" />
      </section>
    </Element>
  );
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

interface Service extends ServiceCardProps {}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="relative w-full h-[320px] bg-[#1D2024] border-solid border-2 border-primary-500 flex flex-col  px-8 rounded-lg overflow-hidden space-y-4 text-white">
    {/* Background Image Container */}

    <div className="flex flex-col w-full justify-start mt-10">
      <img
        src={icon}
        alt={`${title} icon`}
        className="w-16 h-16 z-10 self-start mb-6"
      />
      <h3 className="z-10 font-semibold text-3xl text-start">{title}</h3>
      <p className="z-10 text-base mt-4">{description}</p>
    </div>
  </div>
);

{
  /* Services Content */
}
const services = [
  {
    icon: "/icons/obras_civiles.svg",
    title: "Obras civiles",
    description: "Montaje y construcción para proyectos de infraestructura.",
  },
  {
    icon: "/icons/inmobiliaria.svg",
    title: "Proyectos inmobiliarios",
    description:
      "Construcción modular eficiente para desarrollos residenciales.",
  },
  {
    icon: "/icons/industrial.svg",
    title: "Proyectos industriales",
    description:
      "Proyectos epc, ingenieria y construcción para sectores industriales de alta complejidad.",
  },
  {
    icon: "/icons/retail.svg",
    title: "Construcción industrializada y modular",
    description: "Montaje de espacios funcionales para comercio.",
  },
  {
    icon: "/icons/refinacion.svg",
    title: "Refinación",
    description: "Soluciones integrales para plantas de refinación.",
  },
  {
    icon: "/icons/energia.svg",
    title: "Energía",
    description: "Infraestructura especializada para proyectos energéticos.",
  },
  {
    icon: "/icons/mineria.svg",
    title: "Minería",
    description: "Desarrollo y montaje en operaciones mineras.",
  },
  {
    icon: "/icons/maritimos.svg",
    title: "Terminales marítimos",
    description: "Construcción de instalaciones para operaciones portuarias.",
  },
  {
    icon: "/icons/pesquera.svg",
    title: "Industria pesquera",
    description: "Soluciones para plantas de procesamiento pesquero.",
  },
  {
    icon: "/icons/manufactura.svg",
    title: "Manufactura",
    description: "Montaje y adecuación de instalaciones productivas.",
  },
  {
    icon: "/icons/celulosa.svg",
    title: "Celulosa y papel",
    description: "Infraestructura para plantas de procesamiento.",
  },
  {
    icon: "/icons/combustion.svg",
    title: "Combustibles",
    description: "Montaje de instalaciones para almacenamiento y distribución.",
  },
];
