"use client";
import { Button } from "./Button";
import { Link } from "react-scroll";
import LogoCarousel from "./LogoCarousel";

export const Clientes = () => {
  return (
    <section className="w-full py-6 flex justify-center">
      <div className="flex p-16 rounded-[30px] shadow bg-primary-500 max-w-6xl overflow-hidden w-full">
        <div className="flex flex-row justify-center items-center gap-8 my-10">
          <p className="text-black text-4xl font-bold">
            500+ Our Trusted Clients
          </p>
          <LogoCarousel />
        </div>
      </div>
    </section>
  );
};
