"use client";

import Image from "next/image";
import { Element } from "react-scroll";

export const Beneficios = () => {
  return (
    <section className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-col w-full lg:w-11/12 max-w-6xl py-20 max-md:px-5 md:max-lg:px-12 gap-6">
        <h2 className="lg:text-[48px] md:text-[32px] text-[28px] leading-tight font-bold text-center">
          ¿Por qué elegir OpenCode?
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 w-full mt-2">
          <div className="flex-1 rounded-[30px] bg-[#f3f3f3] shadow flex flex-col gap-4 text-center justify-start items-center p-8">
            <img
              src="/opencode/clock.svg"
              className="w-16 h-16"
              alt="Implementación"
            />
            <h3 className="text-black md:text-[26px] text-xl text-[32px] font-bold">
              Rápida Implementación <br /> (2 hrs)
            </h3>
            <p className="text-[#1C1C1C99] text-sm md:text-base font-medium">
              Con un NPS de +86 (Net Promotor Score) otorgado por los miles de
              usuarios que califican en tiempo real nuestras herramientas de
              gestión, reflejamos la excelencia en satisfacción del cliente.
            </p>
          </div>

          <div className="flex-1 rounded-[30px] bg-[#f3f3f3] shadow flex flex-col gap-4 text-center justify-start items-center p-8">
            <img
              src="/opencode/costo.svg"
              className="w-16 h-16"
              alt="Seguridad"
            />
            <h3 className="text-black md:text-[26px] text-xl text-[32px] font-bold">
              Seguridad
            </h3>
            <p className="text-sm md:text-base font-medium text-[#1C1C1C99]">
              Nos tomamos en serio la seguridad de nuestros clientes y su
              información, por esto, trabajamos con los principales partners de
              seguridad, disponibilidad y almacenamiento del mundo.
            </p>
          </div>

          <div className="flex-1 rounded-[30px] bg-[#f3f3f3] shadow flex flex-col gap-4 text-center justify-start items-center p-8">
            <img
              src="/opencode/atencion.svg"
              className="w-16 h-16"
              alt="Soporte"
            />
            <h3 className="text-black md:text-[26px] text-xl text-[32px] font-bold">
              Soporte de excelencia
            </h3>
            <p className="text-sm md:text-base font-medium text-[#1C1C1C99]">
              Nos preocupa mucho la continuidad operacional de nuestros
              clientes, no vendemos planes telefónicos de soporte. Lo que
              hacemos es: si se repite la consulta; nosotros los llamamos.
              Gracias a esto nuestro tiempo promedio de respuesta es de 5
              minutos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
