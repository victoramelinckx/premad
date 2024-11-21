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

const notifySuccess = () =>
  toast.success(
    "Se han enviado exitosamente tus datos\nTe contactaremos a la brevedad.😁"
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
      <section className=" w-full flex flex-col justify-center items-center z-20 py-10">
        <div className="flex flex-row gap-12 px-8 rounded-lg w-full max-w-6xl ">
          <div className="flex flex-col justify-center w-full lg:w-1/2 gap-4 py-14 px-10 bg-primary-500/10">
            <form
              ref={formRef}
              onSubmit={handleForm}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs border-0 boder-b border-gray-300"
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
              <div className="flex flex-col gap-1">
                <select
                  id="service"
                  ref={treatmentRef}
                  className="py-2 sm:py-3  max-w-96 bg-transparent border-0 border-b border-gray-300 focus:border-b-2 focus:border-primary-500 focus:ring-0 px-0 transition-all text-black"
                >
                  {sofwareList.map((treatment) => (
                    <option key={treatment.name}>{treatment.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <input
                  id="email"
                  ref={emailRef}
                  placeholder="contacto@email.com"
                  className="py-2 sm:py-3  max-w-96 bg-transparent border-0 border-b border-gray-300 focus:border-b-2 focus:border-primary-500 focus:ring-0 px-0 transition-all text-black"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-1 sm:col-span-2">
                <textarea
                  id="mensaje"
                  ref={mensajeRef}
                  placeholder="Cuentanos acerca de tu negocio"
                  className="py-2 sm:py-3  max-w-96 bg-transparent border-0 border-b border-gray-300 focus:border-b-2 focus:border-primary-500 focus:ring-0 px-0 transition-all text-black"
                  rows={2}
                />
              </div>
              <Button
                title={enviando ? "Cargando..." : "Enviar Mensaje"}
                className="sm:col-span-2 xs:max-w-56 mt-4 text-base"
              />
            </form>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 text-black">
            <h3 className=" text-4xl font-bold">Get A Free Appoinment</h3>
            <div className="flex flex-row space-x-2 mt-8">
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
            </div>
            <div className="grid grid-cols-2 mt-6 space-y-4 font-medium">
              <div className="flex flex-row space-x-1 items-center">
                <div>
                  <TfiFacebook className="w-6 h-auto text-primary-500" />
                </div>
                <p>buildy@example.com</p>
              </div>
              <div className="flex flex-row space-x-1  items-center">
                <div>
                  <TfiFacebook className="w-6 h-auto text-primary-500" />
                </div>{" "}
                <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
              </div>
              <div className="flex flex-row space-x-1 items-center">
                <div>
                  <TfiFacebook className="w-6 h-auto text-primary-500" />
                </div>{" "}
                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
              </div>
              <div className="flex flex-row space-x-1 items-center">
                <div>
                  <TfiFacebook className="w-6 h-auto text-primary-500" />
                </div>{" "}
                <p>(225) 555-0118</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
