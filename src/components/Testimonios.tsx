"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import Autoplay from "embla-carousel-autoplay";

type CarouselDataType = {
  imagen: string;
  testimonio: string;
  nombre: string;
  puesto: string;
};

export const Testimonios = () => {
  return (
    <section className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-col w-full lg:w-11/12 max-w-6xl pb-10 md:pt-10 max-md:px-5 md:max-lg:px-12 gap-6">
        <p className=" text-primary-500 font-bold text-base -mb-5">
          TESTIMONIOS
        </p>
        <div className="flex flex-col md:flex-row">
          <h2 className="lg:text-[48px] md:text-[32px] text-[28px] leading-tight font-bold md:w-7/12">
            Historias de éxito de <br className="max-md:hidden" /> nuestros
            clientes
          </h2>
          <p className="text-sm md:text-base text-gray-900/60 font-semibold mt-2 md:w-5/12">
            Descubre historias reales de nuestros clientes y conoce los
            resultados impactantes de nuestras soluciones tecnológicas.
          </p>
        </div>
        <div className={`w-full mt-6`}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="cursor-grab active:cursor-grabbing max-md:w-11/12 m-auto"
          >
            <CarouselContent>
              {data.map((item) => (
                <CarouselItem
                  key={item.nombre}
                  className="min-w-0 shrink-0 grow-0 basis-full pl-4 "
                >
                  <div className="flex flex-col justify-center items-center h-[424px] py-4 px-3 md:py-6 md:px-5 lg:py-8 sm:px-7 bg-[#F3F3F3] rounded-[30px]">
                    <div className="flex mb-4">
                      <img
                        src={item.imagen}
                        alt={`Antes ${item.puesto}`}
                        className="rounded-md w-20 h-auto"
                      />
                    </div>

                    <p className="text-lg md:text-xl font-semibold max-w-lg text-[#1C1C1C] mb-4 text-center">
                      "{item.testimonio}"
                    </p>
                    <div className="flex flex-row gap-2">
                      <div className="w-14 h-auto flex justify-center items-center">
                        <img
                          src={item.imagen}
                          alt={`Antes ${item.puesto}`}
                          className="rounded-md w-full"
                        />
                      </div>
                      <div className="flex flex-col  mt-2">
                        <span className="inline-block text-black text-lg md:text-xl font-semibold px-3 tracking-wider">
                          {item.nombre}
                        </span>
                        <span className="inline-block text-black text-xs md:text-sm px-3 tracking-wide">
                          {item.puesto}
                        </span>
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
      </div>
    </section>
  );
};

const data: CarouselDataType[] = [
  {
    imagen: "/logos_empresas/logo1.svg",
    testimonio:
      "Hemos experimentado resultados extraordinarios con OpenCode, convirtiéndolo en una herramienta esencial para nuestro negocio.",
    nombre: "Juan Pérez",
    puesto: "GERENTE COMERCIAL",
  },
  {
    imagen: "/logos_empresas/logo2.svg",
    testimonio:
      "El software ha transformado completamente la forma en que gestionamos nuestra empresa, mejorando nuestra eficiencia significativamente.",
    nombre: "María González",
    puesto: "DIRECTORA DE OPERACIONES",
  },
  {
    imagen: "/logos_empresas/logo3.svg",
    testimonio:
      "La facilidad de uso y el soporte excepcional han hecho que nuestra transición sea perfecta. Estamos muy satisfechos con los resultados.",
    nombre: "Carlos Rodríguez",
    puesto: "GERENTE GENERAL",
  },
  {
    imagen: "/logos_empresas/logo4.svg",
    testimonio:
      "La implementación fue rápida y el impacto en nuestra productividad ha sido inmediato. Totalmente recomendable.",
    nombre: "Ana Martínez",
    puesto: "JEFA DE ADMINISTRACIÓN",
  },
  {
    imagen: "/logos_empresas/logo5.svg",
    testimonio:
      "La automatización de nuestros procesos ha superado nuestras expectativas. El retorno de inversión fue evidente desde el primer mes.",
    nombre: "Diego Silva",
    puesto: "GERENTE DE FINANZAS",
  },
];
