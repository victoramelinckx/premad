"use client";

import { motion } from "motion/react";
import { Element } from "react-scroll";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";

const notifySuccess = () =>
  toast.success("¡Mensaje enviado exitosamente! Te contactaremos pronto.");
const notifyError = () =>
  toast.error("Error al enviar el mensaje. Por favor intenta nuevamente.");

export const Cta2 = () => {
  const [enviando, setEnviando] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const mensajeRef = useRef<HTMLTextAreaElement>(null);

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviando(true);

    const formData = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      mensaje: mensajeRef.current?.value,
    };

    try {
      const res = await fetch("/api/sendForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.error) {
        notifyError();
      } else {
        formRef.current?.reset();
        notifySuccess();
      }
    } catch (error) {
      notifyError();
    } finally {
      setEnviando(false);
    }
  };

  return (
    <Element
      className="w-full text-white pb-10 flex justify-center"
      name="contacto"
    >
      <motion.div
        className="flex flex-col md:flex-row p-10 lg:p-16 rounded-[30px] shadow bg-primary-500 max-w-6xl w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-full md:w-1/2">
          <h2 className="lg:text-[48px] text-[32px] leading-tight font-bold mb-4 md:mb-8">
            ¿Listo para transformar tu próximo proyecto?
          </h2>
          <p className="font-medium">
            Danos los detalles y un experto se comunicará contigo.
          </p>
          <div className="grid grid-cols-2 mt-6 md:mt-10 gap-6 max-sm:mb-8 font-medium max-md:text-[14px] text-white">
            <div className="flex flex-row space-x-1">
              <FaLocationDot className="w-6 h-auto text-white" />
              <p>Jaime Rapullo 2233, Parque Industrial Talcahuano.</p>
            </div>
            <div className="flex flex-row space-x-1">
              <BsFillTelephoneFill className="w-6 h-auto text-white" />
              <p>+56 413213138</p>
            </div>
            <div className="flex flex-row space-x-1">
              <MdEmail className="w-6 h-auto text-white" />
              <p>ventas@premad.cl</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <form
            ref={formRef}
            onSubmit={handleForm}
            className="grid grid-flow-row gap-4"
          >
            <input
              ref={nameRef}
              className="p-4 rounded-[30px] border-none bg-primary-200/60 text-white/80 placeholder:text-white/80 max-lg:text-sm font-semibold"
              placeholder="Nombre"
              required
            />
            <input
              ref={emailRef}
              type="email"
              className="p-4 rounded-[30px] border-none bg-primary-200/60 text-white/80 placeholder:text-white/80 max-lg:text-sm font-semibold"
              placeholder="E-mail"
              required
            />
            <input
              ref={phoneRef}
              type="tel"
              className="p-4 rounded-[30px] border-none bg-primary-200/60 text-white/80 placeholder:text-white/80 max-lg:text-sm font-semibold"
              placeholder="Teléfono"
              required
            />
            <textarea
              ref={mensajeRef}
              className="p-4 rounded-[30px] border-none bg-primary-200/60 text-white/80 placeholder:text-white/80 max-lg:text-sm font-semibold"
              placeholder="Mensaje"
              rows={3}
              required
            />
            <button
              type="submit"
              disabled={enviando}
              className="py-4 bg-white rounded-full w-full text-black max-lg:text-sm font-bold"
            >
              {enviando ? "Enviando..." : "Cotiza ahora"}
            </button>
          </form>
        </div>
      </motion.div>
    </Element>
  );
};
