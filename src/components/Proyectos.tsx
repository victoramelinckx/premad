"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";

type CarouselDataType = {
  Image: string;
  nombre: string;
  tratamiento: string;
  tipo: "montaje" | "industrial" | "constructora" | "servicio";
};

type ProyectosProps = {
  tipo?: "montaje" | "industrial" | "constructora" | "home" | "servicio";
};

export const Proyectos = ({ tipo }: ProyectosProps) => {
  const filterProjects = () => {
    if (tipo === "home") return data;
    return data.filter((item) => item.tipo === tipo);
  };

  const filteredData = filterProjects();

  return (
    <Element
      name="proyectos"
      className={`w-full overflow-hidden  pb-8 ${
        tipo != "home" ? "bg-white" : "bg-[#0a0d14]"
      }`}
    >
      <section className="flex flex-col py-10 lg:py-20 justify-center items-center">
        <div className="flex flex-col w-full mb-10 max-w-6xl px-4">
          <h3
            className={`lg:text-[48px] md:text-[36px] text-[32px] leading-tight font-bold ${
              tipo != "home" ? "text-black" : "text-white"
            }`}
          >
            {tipo === "servicio"
              ? "Nuestros servicios en acción."
              : "Proyectos que construyen el futuro."}
          </h3>
          <p
            className={`font-medium mt-4 ${
              tipo != "home" ? "text-black" : "text-white"
            }`}
          >
            {tipo === "servicio"
              ? "Experiencia comprobada a través de servicios de ingeniería y consultoría que impulsan el éxito de nuestros clientes."
              : "Un vistazo a algunos de nuestros proyectos destacados, construidos con precisión y dedicación."}
          </p>
        </div>
        <div className="w-full max-md:px-4 max-w-7xl overflow-visible relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="cursor-grab active:cursor-grabbing"
          >
            <CarouselContent className="md:gap-3">
              {filteredData.map((item) => (
                <CarouselItem
                  key={item.tratamiento}
                  className="md:pl-4 basis-1 md:basis-[450px] min-w-[350px]"
                >
                  <Link href="/proyecto">
                    <div
                      className="relative h-[450px] rounded-2xl overflow-hidden bg-black/5 
                    group"
                    >
                      <Image
                        src={item.Image}
                        alt={`Antes ${item.tratamiento}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 350px"
                      />
                    </div>
                    <div
                      className={`mt-4 flex flex-col ${
                        tipo != "home" ? "text-black" : "text-white"
                      }`}
                    >
                      <p className="text-xl font-semibold transform transition-all duration-300 group-hover:translate-y-[-4px]">
                        {item.nombre}
                      </p>
                      <p className="text-base mt-2 font-normal transform transition-all duration-300 group-hover:translate-y-[-4px]">
                        {item.tratamiento}
                      </p>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className={tipo != "home" ? "bg-black" : "bg-transparent"}
            />
            <CarouselNext
              className={tipo != "home" ? "bg-black" : "bg-transparent"}
            />
          </Carousel>
          <div
            className={`absolute top-0 right-0 h-full w-1/4 bg-gradient-to-l pointer-events-none ${
              tipo != "home"
                ? "from-white/50 to-transparent"
                : "from-[#0a0d14] to-transparent"
            }`}
          />
        </div>
      </section>
    </Element>
  );
};

const data: CarouselDataType[] = [
  {
    Image: "/proyectos.png",
    nombre: "Proyecto Santa Cruz",
    tratamiento: "460 días - 7.640 m² - 130.000 UF.",
    tipo: "constructora",
  },
  {
    Image: "/proyectos.png",
    nombre: "Parque Industrial Biobío",
    tratamiento: "180 días - 4.820 m² - 780 UF.",
    tipo: "industrial",
  },
  {
    Image: "/proyectos.png",
    nombre: "Parque Industrial Coronel",
    tratamiento: "120 días - 880 m² - 5.470 UF.",
    tipo: "industrial",
  },
  {
    Image: "/proyectos.png",
    nombre: "Mejoramiento Eje Paicaví",
    tratamiento: "120 días - 2.040 m² - 10.710 UF.",
    tipo: "constructora",
  },
  {
    Image: "/proyectos.png",
    nombre: "Protección Patrimonial Lota",
    tratamiento: "300 días - 5.340 m² - 53.720 UF.",
    tipo: "constructora",
  },
  {
    Image: "/proyectos.png",
    nombre: "Condominio Bosque Valle",
    tratamiento: "300 días - 24.500 m² - 3.500 UF.",
    tipo: "constructora",
  },

  {
    Image: "/proyectos.png",
    nombre: "Proyecto Santa Cruz",
    tratamiento: "460 días - 7.640 m² - 130.000 UF.",
    tipo: "constructora",
  },
  {
    Image: "/proyectos.png",
    nombre: "Montaje Parque Industrial Biobío",
    tratamiento: "180 días - 4.820 m² - 780 UF.",
    tipo: "montaje",
  },
  {
    Image: "/proyectos.png",
    nombre: "Parque Industrial Coronel",
    tratamiento: "120 días - 880 m² - 5.470 UF.",
    tipo: "industrial",
  },
  {
    Image: "/proyectos.png",
    nombre: "Mejoramiento Eje Paicaví",
    tratamiento: "120 días - 2.040 m² - 10.710 UF.",
    tipo: "constructora",
  },
  {
    Image: "/proyectos.png",
    nombre: "Protección Patrimonial Lota",
    tratamiento: "300 días - 5.340 m² - 53.720 UF.",
    tipo: "constructora",
  },
  {
    Image: "/proyectos.png",
    nombre: "Condominio Bosque Valle",
    tratamiento: "300 días - 24.500 m² - 3.500 UF.",
    tipo: "constructora",
  },
  {
    Image: "/proyectos.png",
    nombre: "Proyecto Santa Cruz",
    tratamiento: "460 días - 7.640 m² - 130.000 UF.",
    tipo: "constructora",
  },
  {
    Image: "/proyectos.png",
    nombre: "Montaje Parque Industrial Biobío",
    tratamiento: "180 días - 4.820 m² - 780 UF.",
    tipo: "montaje",
  },
  {
    Image: "/proyectos.png",
    nombre: "Parque Industrial Coronel",
    tratamiento: "120 días - 880 m² - 5.470 UF.",
    tipo: "industrial",
  },
  {
    Image: "/proyectos.png",
    nombre: "Mejoramiento Eje Paicaví",
    tratamiento: "120 días - 2.040 m² - 10.710 UF.",
    tipo: "constructora",
  },
  {
    Image: "/proyectos.png",
    nombre: "Protección Patrimonial Lota",
    tratamiento: "300 días - 5.340 m² - 53.720 UF.",
    tipo: "constructora",
  },
  {
    Image: "/proyectos.png",
    nombre: "Condominio Bosque Valle",
    tratamiento: "300 días - 24.500 m² - 3.500 UF.",
    tipo: "constructora",
  },
  {
    Image: "/imagenes/imagen1.jpeg",
    nombre: "Tratamiento de efluentes.",
    tratamiento: "Concepción.",
    tipo: "servicio",
  },
  {
    Image: "/imagenes/Imagen2.jpg",
    nombre: "Compresión y transporte de GLP, GNL",
    tratamiento: "Gasoductos, gas natural, shael gas, fuel gas.",
    tipo: "servicio",
  },
  {
    Image: "/imagenes/Imagen3.jpg",
    nombre: "Hidráulica y sistemas de bombeo",
    tratamiento: "Analisis de redes hidráulicas.",
    tipo: "servicio",
  },
  {
    Image: "/imagenes/Imagen4.jpg",
    nombre: "Levantamiento de terreno",
    tratamiento: "Levantamiento de piping en terreno, P&ID, Isométricos.",
    tipo: "servicio",
  },
  {
    Image: "/imagenes/imagen5.jpg",
    nombre: "Diseño de estanques y recipientes a presión",
    tratamiento: "Concepción.",
    tipo: "servicio",
  },
];
