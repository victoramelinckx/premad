"use client";
import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Servicios = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedServices = showAll
    ? serviciosLista
    : serviciosLista.slice(0, 4);
  return (
    <section className="bg-[#1D2024] flex flex-col w-full justify-center items-center">
      <div className="flex flex-col w-full lg:w-11/12 max-w-5xl py-10 lg:py-20 max-md:px-5 md:max-lg:px-12 gap-6">
        <div className="flex flex-col items-center text-white">
          <h2 className=" lg:text-[48px]  text-[36px] leading-tight font-bold text-start w-full lg:text-center">
            Nuestros servicios.
          </h2>
          <p className="lg:text-center text-white font-medium max-w-lg mt-2  ">
            Soluciones integrales en construcción industrial y modular,
            respaldadas por más de 20 años de experiencia.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-6 lg:gap-y-8 lg:mt-4">
          {displayedServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        {serviciosLista.length > 4 && (
          <div className=" mt-2 ml-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className=" text-white font-semibold hover:text-primary-500 transition-all duration-300  ease-linear"
            >
              {showAll ? "Ver menos" : "Ver más"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

interface Service extends ServiceCardProps {}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className=" w-full h-full flex flex-col lg:flex-row border bg-[#292d314f]  border-gray-200/50 p-8 lg:px-16 lg:py-10 rounded-lg overflow-hidden space-x-6 lg:space-x-8 text-white">
    {/* Background Image Container */}
    <img src={icon} alt={`${title} icon`} className="w-20 h-20 z-10 " />
    <div className="flex flex-col w-full justify-start gap-4">
      <h3 className="z-10 font-semibold text-3xl text-start">{title}</h3>
      <p className="z-10 text-base max-w-2xl">{description}</p>
    </div>
  </div>
);

{
  /* Services Content */
}
const serviciosLista = [
  {
    icon: "/icons/house.svg",
    title: "Obras Civiles",
    description:
      "Desarrollo y ejecución de proyectos de infraestructura civil con los más altos estándares de calidad y seguridad.",
  },
  {
    icon: "/icons/house.svg",
    title: "Proyectos Inmobiliarios",
    description:
      "Gestión integral de proyectos inmobiliarios, desde la planificación hasta la entrega final, garantizando excelencia en cada etapa.",
  },
  {
    icon: "/icons/house.svg",
    title: "Proyectos Industriales",
    description:
      "Soluciones completas para el sector industrial, incluyendo diseño, construcción y mantenimiento de instalaciones.",
  },
  {
    icon: "/icons/house.svg",
    title: "Construcción Retail",
    description:
      "Especialistas en construcción y remodelación de espacios comerciales, adaptándonos a las necesidades específicas del retail.",
  },
  {
    icon: "/icons/house.svg",
    title: "Refinación",
    description:
      "Servicios especializados para la industria de refinación, garantizando eficiencia y cumplimiento de normativas.",
  },
  {
    icon: "/icons/house.svg",
    title: "Energía",
    description:
      "Desarrollo de proyectos energéticos, enfocados en la eficiencia y sostenibilidad del sector.",
  },
  {
    icon: "/icons/house.svg",
    title: "Minería",
    description:
      "Servicios integrales para el sector minero, desde infraestructura hasta mantenimiento especializado.",
  },
  {
    icon: "/icons/house.svg",
    title: "Terminales Marítimos",
    description:
      "Construcción y mantenimiento de infraestructura portuaria y terminales marítimos.",
  },
  {
    icon: "/icons/house.svg",
    title: "Industria Pesquera",
    description:
      "Soluciones especializadas para el sector pesquero, incluyendo instalaciones y equipamiento industrial.",
  },
  {
    icon: "/icons/house.svg",
    title: "Manufactura",
    description:
      "Servicios completos para el sector manufacturero, optimizando procesos y espacios industriales.",
  },
  {
    icon: "/icons/house.svg",
    title: "Celulosa y Papel",
    description:
      "Experiencia en proyectos para la industria de celulosa y papel, garantizando eficiencia operativa.",
  },
  {
    icon: "/icons/house.svg",
    title: "Combustibles",
    description:
      "Desarrollo de infraestructura y servicios especializados para el sector de combustibles.",
  },
];
