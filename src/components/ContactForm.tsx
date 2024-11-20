import React from "react";

export const ContactForm = () => {
  return (
    <div className="sticky top-24 flex flex-col px-8 gap-8 py-10 bg-primary-500 rounded-[30px] w-full">
      <h4 className="font-bold text-lg lg:text-2xl text-center text-white">
        ¿Necesitas más información?
      </h4>
      <form className="grid grid-flow-row gap-4">
        <input
          type="text"
          name="nombre"
          className="p-3 rounded-lg border-none bg-primary-200/40 text-white/70 placeholder:text-white/70 font-semibold"
          placeholder="Nombre"
          required
        />
        <input
          type="email"
          name="email"
          className="p-3 rounded-lg border-none bg-primary-200/40 text-white/70 placeholder:text-white/70 font-semibold"
          placeholder="E-mail"
          required
        />
        <input
          type="tel"
          name="telefono"
          className="p-3 rounded-lg border-none bg-primary-200/40 text-white/70 placeholder:text-white/70 font-semibold"
          placeholder="Teléfono"
          required
        />
        <textarea
          name="mensaje"
          className="p-3 rounded-lg border-none bg-primary-200/40 text-white/70 placeholder:text-white/70 font-semibold"
          placeholder="¿Cómo te podemos ayudar?"
          rows={4}
          required
        />
        <button
          type="submit"
          className="p-3 bg-white rounded-lg font-semibold text-primary-500 hover:bg-white/90 transition-colors duration-300"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
