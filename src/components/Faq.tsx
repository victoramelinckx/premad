"use client";

import Link from "next/link";
import { Button } from "./Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

const faqData = [
  {
    pregunta: "¿Cuántos años de experiencia tienen en el mercado?",
    respuesta:
      "Contamos con más de 20 años de experiencia en el sector industrial y de construcción, brindando soluciones integrales en montaje industrial.",
  },
  {
    pregunta: "¿En qué áreas tienen experiencia?",
    respuesta:
      "Nuestra experiencia abarca múltiples sectores, incluyendo obras civiles, proyectos inmobiliarios e industriales, retail, refinación, energía, minería, terminales marítimos, industria pesquera, manufactura, celulosa y papel, y combustibles.",
  },
  {
    pregunta: "¿Qué servicios principales ofrecen?",
    respuesta:
      "Ofrecemos servicios especializados de FEED (Front End Engineering Design), EPC (Engineering, Procurement and Construction), OP&M (Operation and Maintenance), I+D+i (Investigación, Desarrollo e Innovación) y Consultoría integral.",
  },
  {
    pregunta: "¿Qué tipo de servicios de consultoría ofrecen?",
    respuesta:
      "Nuestra consultoría abarca gestión ambiental, sistemas de gestión integral, análisis de riesgos, auditorías, servicios temporarios, capacitaciones, selección de personal y coaching empresarial.",
  },
  {
    pregunta: "¿Trabajan en todo Chile?",
    respuesta:
      "Sí, operamos a nivel nacional brindando servicios en distintas regiones del país, adaptándonos a las necesidades específicas de cada zona.",
  },
  {
    pregunta: "¿Qué los diferencia de otras empresas del sector?",
    respuesta:
      "Nos distingue nuestra experiencia de más de dos décadas, nuestro enfoque en innovación y desarrollo, y nuestra capacidad para ofrecer soluciones integrales que abarcan desde el diseño inicial hasta la operación y mantenimiento.",
  },
  {
    pregunta: "¿Cómo puedo solicitar sus servicios?",
    respuesta:
      "Puede contactarnos a través de nuestro formulario en línea, llamando directamente a nuestras oficinas o enviando un correo electrónico. Nuestro equipo le responderá para analizar sus necesidades específicas.",
  },
  {
    pregunta: "¿Ofrecen servicios de mantenimiento post-proyecto?",
    respuesta:
      "Sí, a través de nuestro servicio OP&M (Operation and Maintenance) ofrecemos mantenimiento especializado para garantizar la continuidad operativa de los proyectos.",
  },
];

export const Faq = () => {
  return (
    <section className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-col w-full lg:w-11/12 max-w-6xl lg:py-10 max-md:px-5 md:max-lg:px-12 gap-6">
        <section className="flex flex-col lg:flex-row justify-center lg:items-stretch items-center py-10 max-h-max-[700px] gap-8 lg:gap-12 max-w-6xl">
          <div className="w-full lg:w-1/2 h-full flex flex-col lg:sticky lg:top-24">
            <div className="">
              <h2 className=" lg:text-[48px] md:text-[32px] text-[28px] leading-tight font-bold max-lg:text-center">
                Preguntas frecuentes
              </h2>
              <p className="pt-5 text-sm md:text-base text-gray-900/60 font-semibold max-lg:text-center">
                Resolvemos tus consultas, aclaramos dudas y te orientamos en
                todos nuestros servicios.{" "}
              </p>
            </div>
            <Link className="max-lg:self-center" href="/contacto">
              <button className="mt-10 text-lg flex items-center gap-1 rounded-full bg-primary-500 px-5 py-3 text-black font-semibold w-fit hover:opacity-70">
                Contáctenos
              </button>
            </Link>
          </div>
          <div className="w-full lg:w-1/2 flex">
            <Accordion className="w-full" type="single" collapsible>
              <div className="h-px w-full border-b border-celeste px-8" />
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-semibold text-base text-left md:text-xl p-6">
                    {item.pregunta}
                  </AccordionTrigger>
                  <AccordionContent className="pl-4 pr-8 md:pr-16 tracking-wide text-sm md:text-base font-medium">
                    {item.respuesta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </section>
  );
};
