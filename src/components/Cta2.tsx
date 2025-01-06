"use client";
import { motion } from "motion/react";
import { Element } from "react-scroll";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export const Cta2 = () => {
  return (
    <Element
      className="w-full text-white pb-10 flex justify-center"
      name="contacto"
    >
      <motion.div
        className="flex flex-col md:flex-row p-10 lg:p-16 rounded-[30px] shadow bg-primary-500 max-w-6xl w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-full md:w-1/2">
          <h2 className="lg:text-[48px] text-[32px] leading-tight font-bold mb-4 md:mb-8">
            ¿Listo para transformar tu próximo proyecto?
          </h2>
          <p className=" font-medium">
            Danos los detalles y un experto se comunicará contigo.
          </p>
          <div className="grid grid-cols-2 mt-6 md:mt-10 gap-6 max-sm:mb-8 font-medium max-md:text-[14px] text-white">
            <div className="flex flex-row space-x-1">
              <div>
                <FaLocationDot className="w-6 h-auto text-white" />
              </div>
              <p>Jaime Rapullo 2233, Parque Industrial Talcahuano.</p>
            </div>
            <div className="flex flex-row space-x-1">
              <div>
                <BsFillTelephoneFill className="w-6 h-auto text-white" />
              </div>
              <p>+56 413213138</p>
            </div>
            <div className="flex flex-row space-x-1">
              <div>
                <MdEmail className="w-6 h-auto text-white" />
              </div>
              <p>ventas@premad.cl</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <form className="grid grid-flow-row gap-4">
            <input
              className="p-4 rounded-[30px] border-none bg-primary-200/60 text-white/80 placeholder:text-white/80 max-lg:text-sm font-semibold"
              placeholder="Nombre"
            />
            <input
              className="p-4 rounded-[30px] border-none bg-primary-200/60 text-white/80 placeholder:text-white/80 max-lg:text-sm font-semibold"
              placeholder="E-mail"
            />
            <input
              className="p-4 rounded-[30px] border-none bg-primary-200/40 text-white/80 placeholder:text-white/80 max-lg:text-sm font-semibold"
              placeholder="Teléfono"
            />
            <textarea
              className="p-4 rounded-[30px] border-none bg-primary-200/40 text-white/80 placeholder:text-white/80 max-lg:text-sm font-semibold "
              placeholder="Mensaje"
              rows={3}
            />
            <button className="py-4 bg-white rounded-full w-full text-black max-lg:text-sm font-bold">
              Cotiza ahora
            </button>
          </form>
        </div>
      </motion.div>
    </Element>
  );
};
