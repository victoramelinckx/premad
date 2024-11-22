"use client";

import { Element } from "react-scroll";
import { Button } from "./Button";
import { sofwareList } from "./Services";
import { FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import { TfiFacebook } from "react-icons/tfi";
import { GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { RiYoutubeFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const notifySuccess = () =>
  toast.success(
    "Tus datos han sido enviados exitosamente.\nTe contactaremos a la brevedad. 😁"
  );
const notifyError = () =>
  toast.error(
    "Lo sentimos 😕, hubo un error al enviar tus datos. Por favor intenta más tarde."
  );

export const Contacto = () => {
  const [enviando, setEnviando] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const treatmentRef = useRef<HTMLSelectElement>(null);
  const mensajeRef = useRef<HTMLTextAreaElement>(null);

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviando(true);
    const formData = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      treatment: treatmentRef.current?.value,
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
    <Element name="contacto" className="w-full">
      <section className=" w-full flex flex-col justify-center items-center z-20 py-10 overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row-reverse gap-12 px-8 rounded-lg w-full max-w-6xl ">
          <div className="flex flex-col justify-center w-full lg:w-1/2 gap-4 py-8 lg:py-14 px-6 lg:px-10 bg-primary-500/10 rounded-lg">
            <form
              ref={formRef}
              onSubmit={handleForm}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs border-0 boder-b border-gray-300"
            >
              <div className="flex flex-col gap-1">
                <input
                  id="name"
                  ref={nameRef}
                  placeholder="Nombre y apellido"
                  className="py-2 sm:py-3  max-w-96 bg-transparent border-0 border-b border-gray-300 focus:border-b-2 focus:border-primary-500 focus:ring-0 px-0 transition-all text-black"
                />
              </div>
              <div className="flex flex-col gap-1">
                <input
                  id="phone"
                  ref={phoneRef}
                  placeholder="+56912345678"
                  className="py-2 sm:py-3  max-w-96 bg-transparent border-0 border-b border-gray-300 focus:border-b-2 focus:border-primary-500 focus:ring-0 px-0 transition-all text-black"
                  type="tel"
                  required
                />
              </div>
              {/* <div className="flex flex-col gap-1">
                <select
                  id="service"
                  ref={treatmentRef}
                  className="py-2 sm:py-3  max-w-96 bg-transparent border-0 border-b border-gray-300 focus:border-b-2 focus:border-primary-500 focus:ring-0 px-0 transition-all text-black"
                >
                  <option>Viviendas Industrializadas</option>
                  <option>Componentes Prefabricados</option>
                  <option>Construcción Industrial</option>
                </select>
              </div> */}
              <div className="flex flex-col gap-1">
                <input
                  id="email"
                  ref={emailRef}
                  placeholder="correo@empresa.com"
                  className="py-2 sm:py-3  w-full  bg-transparent border-0 border-b border-gray-300 focus:border-b-2 focus:border-primary-500 focus:ring-0 px-0 transition-all text-black"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-1 sm:col-span-2">
                <textarea
                  id="mensaje"
                  ref={mensajeRef}
                  placeholder="Cuéntanos sobre tu proyecto"
                  className="py-2 sm:py-3  max-w-96 bg-transparent border-0 border-b border-gray-300 focus:border-b-2 focus:border-primary-500 focus:ring-0 px-0 transition-all text-black"
                  rows={3}
                />
              </div>
              <Button
                title={enviando ? "Cargando..." : "Enviar Mensaje"}
                className="sm:col-span-2 xs:max-w-56 mt-4 text-base"
              />
            </form>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 text-black">
            <h3 className="text-4xl font-bold">Agenda una reunión sin costo</h3>
            <p className=" text-gray-700 font-medium max-w-lg mt-6">
              Nuestro equipo se pondrá en contacto contigo a la brevedad
            </p>
            {/* <div className="flex flex-row space-x-2 mt-8">
              <div className=" p-4 border border-black rounded-full">
                <TfiFacebook className="w-4 h-auto text-primary-500" />
              </div>
              <div className=" p-4 border border-black rounded-full">
                <GrInstagram className="w-4 h-auto text-primary-500" />
              </div>
              <div className=" p-4 border border-black rounded-full">
                <ImWhatsapp className="w-4 h-auto text-primary-500" />
              </div>
              <div className=" p-4 border border-black rounded-full">
                <RiYoutubeFill className="w-5 h-auto text-primary-500" />
              </div>
            </div> */}
            <div className="grid grid-cols-2 mt-10 gap-6 font-medium max-md:text-[14px] text-gray-700">
              <div className="flex flex-row space-x-1">
                <div>
                  <FaLocationDot className="w-6 h-auto text-primary-500" />
                </div>
                <p>Los Jardines 123, Las Condes, Santiago</p>
              </div>
              <div className="flex flex-row space-x-1">
                <div>
                  <BsFillTelephoneFill className="w-6 h-auto text-primary-500" />
                </div>
                <p>+56 789 456 1914</p>
              </div>
              <div className="flex flex-row space-x-1">
                <div>
                  <MdEmail className="w-6 h-auto text-primary-500" />
                </div>
                <p>premad@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
