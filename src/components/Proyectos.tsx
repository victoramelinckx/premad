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
import { Element } from "react-scroll";

type CarouselDataType = {
  Image: string;
  nombre: string;
  tratamiento: string;
};

export const Proyectos = () => {
  return (
    <Element
      name="antes/despues"
      className="w-full overflow-hidden bg-[#0a0d14] pb-8 "
    >
      <section className="flex flex-col py-10 lg:py-20 justify-center items-center">
        <div className="flex flex-col w-full mb-10 max-w-6xl px-4">
          <h3 className="lg:text-[48px] md:text-[36px] text-[32px] leading-tight font-bold text-white">
            Algunos de nuestros proyectos
          </h3>
          <p className=" font-medium text-white mt-4">
            A selection of projects around the world featuring Florim surfaces.
          </p>
        </div>
        <div className="w-full max-md:px-4 max-w-7xl overflow-visible relative ">
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
            <CarouselContent className=" gap-3">
              {data.map((item) => (
                <CarouselItem
                  key={item.tratamiento}
                  className="pl-4 basis-1  md:basis-[450px] min-w-[350px]"
                >
                  <div className="relative h-[450px] rounded-2xl overflow-hidden bg-black/5 group">
                    <Image
                      src={item.Image}
                      alt={`Antes ${item.tratamiento}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 350px"
                    />
                  </div>
                  <div className="mt-4 flex flex-col">
                    <p className="text-white text-xl font-semibold transform transition-all duration-300 group-hover:translate-y-[-4px]">
                      {item.nombre}
                    </p>
                    <p className="text-white text-base mt-2 font-normal transform transition-all duration-300 group-hover:translate-y-[-4px]">
                      {item.tratamiento}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="absolute top-0 right-0 h-full w-1/4 bg-gradient-to-l from-[#0a0d14] to-transparent pointer-events-none" />
        </div>
      </section>
    </Element>
  );
};

const data: CarouselDataType[] = [
  {
    Image: "/proyectos.png",
    nombre: "Centro Logístico Industrial",
    tratamiento: "25,000 m² - Lampa, Santiago",
  },
  {
    Image: "/proyectos.png",
    nombre: "Complejo Habitacional Modular",
    tratamiento: "180 unidades - Concepción",
  },
  {
    Image: "/proyectos.png",
    nombre: "Planta Industrial Prefabricada",
    tratamiento: "15,000 m² - Antofagasta",
  },
  {
    Image: "/proyectos.png",
    nombre: "Centro de Distribución",
    tratamiento: "32,000 m² - Quilicura",
  },
];
