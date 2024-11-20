"use client";

import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { CartaPrecio } from "./CartaPrecio";

interface PricingFeature {
  name: string;
  included: boolean;
}
export interface PricingTier {
  name: string;
  subtitle: string;
  price: string;
  period?: string;
  buttonText: string;
  features: PricingFeature[];
  popular?: boolean;
}

const pricingData: PricingTier[] = [
  {
    name: "ERP",
    subtitle: "Para PYMES",
    price: "12 UF",
    period: "ANUAL",
    buttonText: "Contratar plan",
    features: [
      { name: "Hasta 2 usuarios", included: true },
      { name: "1 empresa", included: true },
      { name: "6 hrs capacitacion", included: true },
      { name: "Soporte", included: true },
      { name: "Panel de control", included: true },
      { name: "Sincronizacion SII", included: true },
      { name: "Inventario y mas", included: true },
    ],
  },
  {
    name: "POS",
    subtitle: "Para PYMES",
    price: "40 UF",
    period: "ANUAL",
    buttonText: "Contratar plan",
    popular: true,
    features: [
      { name: "Usuarios ilimitados", included: true },
      { name: "Control de inventario", included: true },
      { name: "Gestión de turnos", included: true },
      { name: "Facturación electrónica", included: true },
      { name: "Reportes en tiempo real", included: true },
      { name: "Integración con boletas SII", included: true },
      { name: "Soporte prioritario", included: true },
    ],
  },
  {
    name: "Contabilidad",
    subtitle: "Para PYMES",
    price: "36 UF",
    period: "ANUAL",
    buttonText: "Contratar plan",
    features: [
      { name: "Libros contables electrónicos", included: true },
      { name: "Balance y EERR automáticos", included: true },
      { name: "Declaración de IVA (F29)", included: true },
      { name: "Centralización contable", included: true },
      { name: "Integración con SII", included: true },
      { name: "Hasta 3 usuarios", included: true },
      { name: "Soporte prioritario", included: true },
    ],
  },
];

const Precios = () => {
  return (
    <section className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-col w-full lg:w-11/12 max-w-6xl  pt-20 pb-10 max-md:px-5 md:max-lg:px-12 gap-6">
        <div className="text-center mb-12">
          <p className="text-primary-500 font-bold text-base">PRECIOS</p>
          <h2 className="lg:text-[48px] md:text-[32px] text-[28px] leading-tight font-bold  mb-8">
            Impulsa tu crecimiento
            <br />
            con OpenCode
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            <CartaPrecio className="hidden sm:max-lg:flex sm:max-lg:col-span-2" tier={pricingData[1]} />
            {pricingData.map((tier) => (
              <CartaPrecio className={`${tier.popular && "sm:max-lg:hidden"}`} key={tier.name} tier={tier} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Precios;
