"use client";

import Acercade from "../../public/acerca.png";
import Image from "next/image";
import { Element } from "react-scroll";

export const About = () => {
  return (
    <Element name="acerca" className="w-full flex justify-center">
      <div className="my-20 w-full max-w-6xl px-4">
        <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Contenedor del texto - Ahora con flex y centrado vertical */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div>
              <h3 className="lg:text-[48px] md:text-[32px] text-[28px] leading-tight font-bold">
                Why choose us?
              </h3>
              <p className="pt-5 text-[#555555] leading-normal">
                We have a team of experienced professionals who have been in the
                industry for over 25 years. Our contractors have a wealth of
                knowledge and skills that they have acquired over the years,
                making them experts in their field.
              </p>
              <button className="mt-10 text-lg flex items-center gap-1 rounded-full bg-[#ffb400] px-5 py-3 text-black font-semibold w-fit hover:opacity-70">
                Our services
              </button>
            </div>
          </div>

          {/* Contenedor de la imagen - Altura automática */}
          <div className="w-full lg:w-1/2">
            <Image
              src={Acercade}
              alt="About us image"
              className="w-full rounded-2xl"
              priority
              placeholder="blur"
            />
          </div>
        </section>
      </div>
    </Element>
  );
};
