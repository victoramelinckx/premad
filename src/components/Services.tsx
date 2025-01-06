"use client";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export const Services = () => {
  return (
    <section className="bg-[#f3f3f3] flex flex-col w-full justify-center items-center rounded-3xl md:rounded-[4rem]">
      <div className="flex flex-col w-full lg:w-11/12 max-w-6xl py-10 lg:py-20 max-md:px-5 md:max-lg:px-12 gap-6">
        <div className="flex flex-col items-center text-black">
          <h2 className=" lg:text-[48px]  text-[36px] leading-tight font-bold text-start w-full lg:text-center">
            Nuestros servicios.
          </h2>
          <p className="lg:text-center text-gray-700 font-medium max-w-lg mt-2  ">
            Soluciones integrales en construcción industrial y modular,
            respaldadas por más de 20 años de experiencia.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 lg:gap-y-8 lg:mt-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const sofwareList = [
  {
    name: "Contabilidad",
    icon: "/icons/calculo.svg",
    description:
      "Software especializado para gestionar la contabilidad de manera eficiente y precisa.",
    features: [
      "Balance y estados financieros automáticos",
      "Gestión de libros contables electrónicos",
      "Integración con SII y facturación electrónica",
    ],
    href: "producto/contabilidad",
  },
  {
    name: "Remuneraciones",
    icon: "/icons/remuneraciones.svg",
    description:
      "Optimiza el cálculo y gestión de remuneraciones con tecnología avanzada y segura.",
    features: [
      "Cálculo automático de sueldos y cotizaciones",
      "Gestión de licencias y vacaciones",
      "Libros de remuneraciones y centralización contable",
    ],
    href: "producto/remuneraciones",
  },
  {
    name: "Punto de Venta",
    icon: "/icons/venta.svg",
    description:
      "Solución integral para ventas y gestión de inventario en puntos de venta físicos y en línea.",
    features: [
      "Control de inventario en tiempo real",
      "Gestión de ventas y facturación electrónica",
      "Control de caja y cierre diario",
    ],
    href: "producto/punto_de_venta",
  },
  {
    name: "Gestión de Ventas",
    icon: "/icons/ventas_g.svg",
    description:
      "Herramientas para el control y análisis de ventas que maximizan la eficiencia comercial.",
    features: [
      "Seguimiento de vendedores y metas",
      "Pipeline y gestión de oportunidades",
      "Reportes y análisis de ventas",
    ],
    href: "producto/gestion_de_ventas",
  },
  {
    name: "Restaurantes",
    icon: "/icons/restaurante.svg",
    description:
      "Sistema especializado para la gestión de pedidos, inventario y administración de restaurantes.",
    features: [
      "Control de mesas y comandas digitales",
      "Gestión de inventario y costos",
      "Integración con delivery y pagos online",
    ],
    href: "producto/restaurantes",
  },
  {
    name: "Arriendo de Maquinarias",
    icon: "/icons/maquinarias.svg",
    description:
      "Plataforma para gestionar alquileres, seguimiento de equipos y facturación de maquinarias.",
    features: [
      "Control de disponibilidad y mantenciones",
      "Seguimiento GPS de equipos",
      "Facturación automática por período",
    ],
    href: "producto/arriendo_de_maquinarias",
  },
  {
    name: "Presupuestos de Obras",
    icon: "/opencode/hubspot.svg",
    description:
      "Solución para la creación y gestión de presupuestos de obras de construcción con precisión.",
    features: [
      "Cálculo de materiales y mano de obra",
      "Control de avance y costos reales",
      "Gestión de proveedores y compras",
    ],
    href: "producto/presupuestos_de_obras",
  },
  {
    name: "Administración de Colegios",
    icon: "/opencode/hubspot.svg",
    description:
      "Sistema de administración escolar que simplifica la gestión académica y administrativa.",
    features: [
      "Gestión de matrículas y mensualidades",
      "Control de asistencia y notas",
      "Comunicación con apoderados",
    ],
    href: "producto/administracion_de_colegios",
  },
];

interface ServiceCardProps {
  href: string;
  image: string;
  icon: string;
  title: string;
  description: string;
}

interface Service extends ServiceCardProps {}

const ServiceCard: FC<ServiceCardProps> = ({
  href,
  image,
  icon,
  title,
  description,
}) => (
  <Link href={href}>
    <div className="relative w-full h-[454px] flex flex-col justify-center items-center px-8 rounded-lg overflow-hidden space-y-4 text-white">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/60 z-[1]" />
        <Image
          src={image}
          alt={`${title} background`}
          fill
          style={{ objectFit: "cover" }}
          priority
          className="z-0"
        />
      </div>
      <div className="flex flex-col w-full justify-start gap-4">
        <img
          src={icon}
          alt={`${title} icon`}
          className="w-16 h-16 z-10 self-start"
        />
        <h3 className="z-10 font-bold text-3xl text-start">{title}</h3>
        <p className="z-10 text-base">{description}</p>
      </div>
    </div>
  </Link>
);

{
  /* Services Content */
}
const services = [
  {
    href: "/viviendas_industrializadas",
    image: "/imagenes/industria.png",
    icon: "/icons/house.svg",
    title: "Viviendas Industrilizadas",
    description:
      "Construcción modular de alta eficiencia para proyectos residenciales, optimizando tiempos y recursos sin comprometer la calidad.",
  },
  {
    href: "/montaje_industrial",
    image: "/componentes.png",
    icon: "/icons/roof.svg",
    title: "Montaje Industrial",
    description:
      "Fabricación y montaje de elementos constructivos estandarizados que garantizan precisión y rapidez en la ejecución de proyectos.",
  },
  {
    href: "/constructora",
    image: "/constructora.png",
    icon: "/icons/construction.svg",
    title: "Constructora",
    description:
      "Servicios integrales de construcción industrial con los más altos estándares de calidad y seguridad para proyectos de gran envergadura.",
  },
];
