"use client";
import { Button } from "@/components/Button";
import Footer from "@/components/Footer";
import LogoCarousel from "@/components/LogoCarousel";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
import { FiThumbsUp } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Testimonios } from "@/components/Testimonios";
import { Stats } from "@/components/Stats";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { GiBandit } from "react-icons/gi";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

type CarouselDataType = {
  imagen: string;
  testimonio: string;
  nombre: string;
  puesto: string;
};

const Acerca = () => {
  return (
    <>
      <Navbar displayMode="no" />
      <section className="flex flex-col mx-auto max-w-6xl justify-center items-center mt-16 sm:mt-20 mb-16">
        <div className="flex flex-col w-full lg:w-11/12  pt-6 lg:pt-12 max-md:px-5 md:max-lg:px-12">
          <div className="flex flex-col md:flex-row md:gap-4 mb-6 lg:items-stretch">
            {/* <h2 className="lg:text-[48px] md:text-[32px] text-[28px] leading-tight font-bold lg:w-1/2">
              Proyecto Montaje Industrial
            </h2>

            <p className="text-sm md:text-base text-gray-900/60 font-semibold mt-2 lg:w-1/2 mb-4">
              En PreMad nos especializamos en crear soluciones tecnológicas que
              potencian el crecimiento de las empresas chilenas. Con más de 15
              años en el mercado, hemos ayudado a miles de empresas a optimizar
              sus procesos y alcanzar sus objetivos de negocio.
              <br />
              <br />
              Muchas empresas aún dependen de software obsoleto que no se adapta
              a las necesidades actuales de velocidad, escalabilidad y gestión
              de datos. En OpenCode, nos dedicamos a revolucionar la gestión
              empresarial con un enfoque completamente nuevo y adaptado a la
              realidad local.
              <br />
              <br />
              Nuestras soluciones están construidas con tecnología de última
              generación, son totalmente personalizables y diseñadas para una
              integración perfecta con tu negocio. Con OpenCode, las empresas
              pueden implementar y adaptar el software exactamente según sus
              necesidades específicas.
            </p> */}
            <div className="w-full max-md:my-4  h-full flex flex-col lg:sticky lg:top-24">
              <p className=" text-primary-500 font-bold text-base my-0 py-0">
                Montaje Industrial
              </p>
              <h2 className="lg:text-[48px] md:text-[32px] text-[28px] leading-tight font-bold my-0 py-0">
                Proyecto Montaje Industrial
              </h2>
            </div>
            <div className="w-full flex">
              <p className="text-sm md:text-base text-gray-900/60 font-semibold mt-2  mb-4">
                En PreMad nos especializamos en crear soluciones tecnológicas
                que potencian el crecimiento de las empresas chilenas. Con más
                de 15 años en el mercado, hemos ayudado a miles de empresas a
                optimizar sus procesos y alcanzar sus objetivos de negocio.
                <br />
                <br />
                Muchas empresas aún dependen de software obsoleto que no se
                adapta a las necesidades actuales de velocidad, escalabilidad y
                gestión de datos. En OpenCode, nos dedicamos a revolucionar la
                gestión empresarial con un enfoque completamente nuevo y
                adaptado a la realidad local.
                <br />
                <br />
                Nuestras soluciones están construidas con tecnología de última
                generación, son totalmente personalizables y diseñadas para una
                integración perfecta con tu negocio. Con OpenCode, las empresas
                pueden implementar y adaptar el software exactamente según sus
                necesidades específicas.
              </p>
            </div>
          </div>
        </div>
        {/* Carrusel imagenes */}

        <div className="w-full flex justify-center">
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
            className="w-11/12 md:w-full max-w-6xl cursor-grab active:cursor-grabbing"
          >
            <CarouselContent>
              {imagenes.map((item) => (
                <CarouselItem
                  key={item.nombre}
                  className="min-w-0 shrink-0 grow-0 basis-full"
                >
                  <div className="relative w-full aspect-video md:aspect-[16/9] bg-[#F3F3F3] rounded-[30px] overflow-hidden">
                    <Image
                      src="/imagenes/industria.png"
                      alt="Construction background"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      priority
                      className="z-0"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className={"bg-black"} />
            <CarouselNext className={"bg-black"} />
          </Carousel>
        </div>
      </section>
      <section className="flex flex-col md:flex-row max-md:space-y-4 max-md:mx-8 mx-auto max-w-5xl my-8 md:y-32 md:space-x-16 text-black ">
        <div className=" w-full space-y-2 md:w-1/2">
          <div className="flex flex-row space-x-2 items-center border-b border-black  justify-start pb-2">
            <IoLocationOutline className="text-black w-6 h-auto" />
            <p>Ubicacion</p>
          </div>
          <div className="flex flex-row space-x-2 items-center justify-start border-b border-black pb-2">
            <CiCalendarDate className="text-black w-6 h-auto" />
            <p>Fecha de realizacion</p>
          </div>
          <div className="flex flex-row space-x-2 items-center justify-start border-b border-black pb-2">
            <GiBandit className="text-black w-6 h-auto" />
            <p>Cliente</p>
          </div>
          <div className="flex flex-row space-x-2 items-center justify-start border-b border-black pb-2">
            <IoLocationOutline className="text-black w-6 h-auto" />
            <p>Cualquier otro dato importante</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2 w-full md:w-1/2 max-md:mt-8">
          <p className=" font-semibold text-2xl max-md:mt-6">
            Titulo Proyecto mas detallado: "Bridge River" - A residential or
            commercial project in New York City, US that is expected to be
            completed in 2021 for a client named Raal Estate.
          </p>
          <p className="text-lg">
            Titulo Proyecto mas detallado: "Bridge River" - A residential or
            commercial project in New York City, US that is expected to be
            completed in 2021 for a client named Raal Estate.
          </p>
        </div>
      </section>

      <Stats />
      <Cta />
      <Footer />
    </>
  );
};
export default Acerca;

const imagenes: CarouselDataType[] = [
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
