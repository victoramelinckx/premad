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
    <section
      id="servicios"
      className="bg-[#1D2024] flex flex-col w-full justify-center items-center min-h-0"
    >
      <div className="flex flex-col w-full lg:w-11/12 max-w-5xl py-10 lg:py-20 max-md:px-5 md:max-lg:px-12 gap-6">
        <div className="flex flex-col items-center text-white">
          <h2 className=" lg:text-[48px]  text-[36px] leading-tight font-bold text-start w-full lg:text-center">
            Nuestros servicios <br /> industriales en acción.
          </h2>
          <p className="lg:text-center self-start lg:self-center text-white font-medium max-w-lg mt-2  ">
            Servicios de ingeniería especializados con soluciones técnicas
            innovadoras y eficientes para proyectos industriales.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:mt-4 w-full">
          {displayedServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        {serviciosLista.length > 4 && (
          <div className=" ml-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className=" text-white text-lg font-semibold hover:text-primary-500 transition-all duration-300  ease-linear"
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
  <div className="w-full flex flex-col lg:flex-row border bg-[#292d314f] border-gray-200/50 rounded-lg text-white">
    <div className="flex flex-col lg:flex-row w-full p-8 lg:px-16 lg:py-10 gap-6 lg:gap-8">
      <img
        src={icon}
        alt={`${title} icon`}
        className="w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0"
      />
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-3xl">{title}</h3>
        <p className="text-base lg:max-w-2xl">{description}</p>
      </div>
    </div>
  </div>
);

{
  /* Services Content */
}

const serviciosLista = [
  {
    icon: "/icons/ingeneria.svg",
    title: "FEED",
    description:
      "Front End Engineering Design: Desarrollo detallado de ingeniería preliminar para optimizar la viabilidad y eficiencia de proyectos.",
  },
  {
    icon: "/icons/epc.svg",
    title: "EPC",
    description:
      "Engineering, Procurement and Construction: Gestión integral de proyectos desde el diseño hasta la construcción final.",
  },
  {
    icon: "/icons/opc.svg",
    title: "OP&M",
    description:
      "Operation and Maintenance: Servicios especializados de operación y mantenimiento para garantizar la continuidad operativa.",
  },
  {
    icon: "/icons/idm.svg",
    title: "I+D+i",
    description:
      "Investigación, Desarrollo e Innovación: Desarrollo de soluciones tecnológicas avanzadas para optimizar procesos industriales.",
  },
  {
    icon: "/icons/consultoria.svg",
    title: "Consultoría LONCURA",
    description:
      "Servicios integrales de consultoría incluyendo: gestión ambiental, sistemas de gestión integral, análisis de riesgos, auditorías, servicios temporarios, capacitaciones, selección de personal y coaching empresarial.",
  },
];

// const serviciosLista = [
//   {
//     icon: "/icons/civiles.svg",
//     title: "Obras Civiles",
//     description:
//       "Desarrollo y ejecución de proyectos de infraestructura civil con los más altos estándares de calidad y seguridad.",
//   },
//   {
//     icon: "/icons/building.svg",
//     title: "Proyectos Inmobiliarios",
//     description:
//       "Gestión integral de proyectos inmobiliarios, desde la planificación hasta la entrega final, garantizando excelencia en cada etapa.",
//   },
//   {
//     icon: "/icons/industry.svg",
//     title: "Proyectos Industriales",
//     description:
//       "Soluciones completas para el sector industrial, incluyendo diseño, construcción y mantenimiento de instalaciones.",
//   },
//   {
//     icon: "/icons/home.svg",
//     title: "Construcción Retail",
//     description:
//       "Especialistas en construcción y remodelación de espacios comerciales, adaptándonos a las necesidades específicas del retail.",
//   },
//   {
//     icon: "/icons/refinacioon.svg",
//     title: "Refinación",
//     description:
//       "Servicios especializados para la industria de refinación, garantizando eficiencia y cumplimiento de normativas.",
//   },
//   {
//     icon: "/icons/house.svg",
//     title: "Energía",
//     description:
//       "Desarrollo de proyectos energéticos, enfocados en la eficiencia y sostenibilidad del sector.",
//   },
//   {
//     icon: "/icons/house.svg",
//     title: "Minería",
//     description:
//       "Servicios integrales para el sector minero, desde infraestructura hasta mantenimiento especializado.",
//   },
//   {
//     icon: "/icons/house.svg",
//     title: "Terminales Marítimos",
//     description:
//       "Construcción y mantenimiento de infraestructura portuaria y terminales marítimos.",
//   },
//   {
//     icon: "/icons/house.svg",
//     title: "Industria Pesquera",
//     description:
//       "Soluciones especializadas para el sector pesquero, incluyendo instalaciones y equipamiento industrial.",
//   },
//   {
//     icon: "/icons/house.svg",
//     title: "Manufactura",
//     description:
//       "Servicios completos para el sector manufacturero, optimizando procesos y espacios industriales.",
//   },
//   {
//     icon: "/icons/house.svg",
//     title: "Celulosa y Papel",
//     description:
//       "Experiencia en proyectos para la industria de celulosa y papel, garantizando eficiencia operativa.",
//   },
//   {
//     icon: "/icons/house.svg",
//     title: "Combustibles",
//     description:
//       "Desarrollo de infraestructura y servicios especializados para el sector de combustibles.",
//   },
// ];
