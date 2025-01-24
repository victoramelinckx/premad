"use client";

import Acercade from "../../public/imagenes/premad_acerca.png";
import Image from "next/image";
import { Element, Link } from "react-scroll";
import { Button } from "./Button";
import { motion } from "motion/react";

export const About = () => {
  return (
    <Element name="acerca" className="w-full flex justify-center">
      <div className=" my-10 lg:my-20 w-full max-w-6xl px-8 md:px-4">
        <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Contenedor del texto - Ahora con flex y centrado vertical */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="lg:text-[48px]  text-[36px] leading-tight font-bold">
                ¿Quiénes somos?
              </h3>
              <p className="pt-5 text-gray-700 leading-normal font-medium">
                Es una empresa de servicios con más de 20 años de experiencia
                orientada en satisfacer las necesidades de nuestros clientes en
                las áreas de ingeniería, consultoría, construcción, montaje y
                retail.
                <br />
                <br />
                Desarrollamos cada proyecto en estrecha colaboración con
                nuestros clientes, respaldados por un equipo con una vasta
                experiencia en ingeniería, arquitectura, consultoría y
                construcción. Nuestra metodología integrada garantiza resultados
                excepcionales desde el diseño hasta la ejecución final.
              </p>
              {/* <button className=" mt-[30px] lg:mt-10 text-lg flex items-center gap-1 rounded-full bg-white/30 blur-xs border-solid border-2  px-6 py-3 text-black border-black font-semibold w-fit hover:opacity-70">
                Nuestros proyectos
              </button> */}
              <Link
                key="proyecto"
                to="proyectos"
                smooth
                spy
                offset={-72}
                className=""
              >
                <Button
                  title="Nuestras áreas"
                  className="mt-[30px] lg:mt-10 text-lg flex items-center gap-1 rounded-full bg-white/30 blur-xs border-solid border-2  px-6 py-3 text-black border-black font-semibold w-fit hover:opacity-70"
                />
              </Link>
              {/* <Link
                key="contacto"
                to="contacto"
                smooth
                spy
                offset={-72}
                className=""
              >
                <Button
                  title="Contáctenos"
                  className="mt-3  bg-white/30 blur-xs border-solid  border-2 px-6 py-3 text-white border-white font-semibold w-fit hover:opacity-70"
                />
              </Link> */}
            </motion.div>
          </div>

          {/* Contenedor de la imagen - Altura automática */}
          <motion.div
            className="w-full lg:w-[55%]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src={Acercade}
              alt="About us image"
              className="w-full rounded-2xl shadow-xl"
              priority
              placeholder="blur"
            />
          </motion.div>
        </section>
      </div>
    </Element>
  );
};
