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
    if (tipo === "home") {
      return data.filter((item) => item.tipo !== "servicio");
    }
    return data.filter((item) => item.tipo === tipo);
  };

  const filteredData = filterProjects();

  return (
    <Element
      name="proyectos"
      className={`w-full overflow-hidden  ${
        tipo != "home" ? "bg-white" : "bg-[#0a0d14]"
      }`}
    >
      <section className="flex flex-col py-10 lg:py-20 justify-center items-center">
        <div className="flex flex-col w-full mb-6 max-w-6xl px-4">
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
            className={`font-medium mt-2 ${
              tipo != "home" ? "text-black" : "text-white"
            }`}
          >
            {tipo === "servicio"
              ? "Experiencia comprobada a través de servicios de ingeniería y consultoría que impulsan el éxito de nuestros clientes."
              : "Algunos de nuestros proyectos destacados, construidos con precisión y dedicación."}
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
                  {/* <Link href="/proyecto"> */}
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
                  {/* </Link> */}
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
    Image: "/imagenes/planta_linde.jpg",
    nombre: "Ampliación Planta Linde",
    tratamiento: "180 días - 1.340 m² - 28.320 UF.",
    tipo: "industrial",
  },
  {
    Image: "/imagenes/abastible.jpg",
    nombre: "Planta Almacenamiento Abastible",
    tratamiento: "150 días - 1.170 m² - 16.250 UF.",
    tipo: "industrial",
  },
  {
    Image: "/imagenes/coronel.jpg",
    nombre: "Parque Industrial Coronel",
    tratamiento: "120 días - 880 m² - 15.470 UF.",
    tipo: "industrial",
  },
  {
    Image: "/imagenes/biobio.jpg",
    nombre: "Parque Industrial Bío Bío",
    tratamiento: "180 días - 780 m² - 4.820 UF.",
    tipo: "industrial",
  },
  {
    Image: "/imagenes/bosque-valle.png",
    nombre: "Condominio Bosque Valle",
    tratamiento: "300 días - 4.820 m² - 54.000 UF.",
    tipo: "industrial",
  },
  {
    Image: "/imagenes/palomares.png",
    nombre: "Condominio Palomares",
    tratamiento: "32 meses - 13.200 m² - 278.000 UF.",
    tipo: "constructora",
  },
  {
    Image: "/imagenes/vista-bahia.jpg",
    nombre: "Condominio Vista Bahia",
    tratamiento: "18 meses - 6.500 m² - 145.000 UF.",
    tipo: "constructora",
  },
  {
    Image: "/imagenes/bosque-laguna.png",
    nombre: "Condominio Bosque Laguna",
    tratamiento: "25 meses - 8.500 m² - 251.000 UF.",
    tipo: "constructora",
  },

  {
    Image: "/imagenes/imagen1.jpeg",
    nombre: "Tratamiento de efluentes.",
    tratamiento: "",
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
    Image: "/imagenes/asmar.jpg",
    nombre: "Centro capacitación A.S.M.A.R",
    tratamiento: "150 dias - 400 m² - 21.000 UF.",
    tipo: "constructora",
  },
];
