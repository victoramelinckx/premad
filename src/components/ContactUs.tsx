"use client";

import { Element } from "react-scroll";
import { Button } from "./Button";
import { sofwareList } from "./Services";
import { FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";

const notifySuccess = () =>
  toast.success(
    "Se han enviado exitosamente tus datos\nTe contactaremos a la brevedad.😁"
  );
const notifyError = () =>
  toast.error(
    "Lo sentimos 😕, hubo un error al enviar tus datos. Por favor intenta más tarde."
  );

export const ContactUs = () => {
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
      <section className="bg-primary-500 w-full flex flex-col justify-center items-center z-20 sm:h-[37rem] py-10">
        <div className="flex gap-6 px-8 rounded-lg w-full max-w-6xl text-white sm:h-[37rem]">
          <div className="flex flex-col justify-center lg:max-xl:w-7/12 gap-4 max-sm:py-10">
            <h2 className="leading-[1.2]">¿Quieres hablar con nosotros?</h2>
            <p>Danos los detalles y un experto se comunicará contigo</p>
            <form
              ref={formRef}
              onSubmit={handleForm}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs"
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Nombre</label>
                <input
                  id="name"
                  ref={nameRef}
                  placeholder="Nombre y apellido"
                  className="py-2 sm:py-3 rounded-lg max-w-96 text-black"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone">Teléfono</label>
                <input
                  id="phone"
                  ref={phoneRef}
                  placeholder="+56912345678"
                  className="py-2 sm:py-3 rounded-lg max-w-96 text-black"
                  type="tel"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="service">Software</label>
                <select
                  id="service"
                  ref={treatmentRef}
                  className="py-2 sm:py-3 rounded-lg max-w-96 text-black"
                >
                  {sofwareList.map((treatment) => (
                    <option key={treatment.name}>{treatment.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  ref={emailRef}
                  placeholder="contacto@email.com"
                  className="py-2 sm:py-3 rounded-lg max-w-96 text-black"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-1 sm:col-span-2">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  ref={mensajeRef}
                  placeholder="Cuentanos acerca de tu negocio"
                  className="py-2 sm:py-3 rounded-lg w-full text-black"
                  rows={2}
                />
              </div>
              <Button
                title={enviando ? "Cargando..." : "Enviar Mensaje"}
                className="sm:col-span-2 xs:max-w-56 mt-4 text-base"
              />
            </form>
          </div>
          <div className="flex grow justify-end items-end h-[37rem] max-lg:hidden">
            <img
              src="imagenes/map2.png"
              alt="Location map"
              className="h-[95%] w-auto rounded-2xl"
            />
          </div>
        </div>
      </section>
    </Element>
  );
};
