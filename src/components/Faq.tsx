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
    pregunta: "¿Cómo es el proceso de implementación?",
    respuesta:
      "La implementación es rápida y guiada. En solo 2 horas configuramos el sistema, capacitamos a tu equipo y dejamos todo funcionando para que puedas comenzar a usar el software de inmediato.",
  },
  {
    pregunta: "¿Qué métodos de pago aceptan?",
    respuesta:
      "Aceptamos transferencias bancarias, tarjetas de crédito/débito y pago mediante WebPay. Las licencias se pueden pagar de forma mensual o anual según tu preferencia.",
  },
  {
    pregunta: "¿Cómo funciona el soporte técnico?",
    respuesta:
      "Brindamos soporte prioritario sin costo adicional, con un tiempo de respuesta promedio de 5 minutos. No vendemos planes de soporte telefónico - si una consulta se repite, nosotros te llamamos.",
  },
  {
    pregunta: "¿El software cumple con las normativas tributarias?",
    respuesta:
      "Sí, nuestros sistemas están certificados y actualizados según las normativas tributarias vigentes, incluyendo facturación electrónica y documentos digitales requeridos por las autoridades fiscales.",
  },
  {
    pregunta: "¿Puedo probar el software antes de comprarlo?",
    respuesta:
      "Sí, ofrecemos una demostración gratuita donde podrás probar todas las funcionalidades del sistema con tus propios datos durante 14 días.",
  },
  {
    pregunta: "¿Qué pasa con mis datos si decido cambiar de sistema?",
    respuesta:
      "Tus datos siempre son tuyos. Facilitamos la exportación de toda tu información en formatos estándar cuando lo necesites, sin costos adicionales.",
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
