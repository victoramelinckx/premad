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
      className="w-full overflow-hidden bg-[#EDF3FC] pb-8"
    >
      <section className="flex flex-col pt-10 pb-10 justify-center items-center">
        <div className="flex flex-col w-full mb-8 max-w-6xl px-4">
          <h3 className="lg:text-[48px] md:text-[32px] text-[28px] leading-tight font-bold">
            Our Featured Projects
          </h3>
        </div>
        <div className="w-5/6 sm:w-11/12">
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
            <CarouselContent>
              {data.map((item) => (
                <CarouselItem
                  key={item.tratamiento}
                  className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/4"
                >
                  <div className="relative h-[500px] rounded-2xl overflow-hidden bg-black/5 group">
                    <Image
                      src={item.Image}
                      alt={`Antes ${item.tratamiento}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                    />
                    {/* Gradiente sutil superpuesto en toda la imagen */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

                    {/* Gradiente adicional para el texto */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent h-32 transition-all duration-300 group-hover:h-40">
                      <div className="absolute bottom-5 left-0 right-0 p-4">
                        <p className="text-white text-2xl font-semibold text-center transform transition-all duration-300 group-hover:translate-y-[-4px]">
                          {item.nombre}
                        </p>
                        <p className="text-white text-lg mt-6 font-medium text-center transform transition-all duration-300 group-hover:translate-y-[-4px]">
                          {item.tratamiento}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
