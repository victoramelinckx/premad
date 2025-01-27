"use client";
import Link from "next/link";
import { Button } from "./Button";

export const Cta = () => {
  return (
    <section className="w-full text-white md:py-6 flex justify-center">
      <div className="flex flex-col p-10 lg:p-16 rounded-[30px] shadow bg-primary-500 max-w-6xl w-full">
        <h2 className="  text-[36px] leading-tight font-bold mb-14">
          ¿Listo para transformar tu próximo proyecto?
          <br />
          Conversemos hoy mismo.
        </h2>
        <Link href={"/contacto"}>
          <Button
            title="Contáctanos ahora"
            className="px-5 py-3 text-black bg-white rounded-full font-semibold lg:font-bold"
          />
        </Link>
      </div>
    </section>
  );
};
