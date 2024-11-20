"use client";
import { Button } from "./Button";
import { Link } from "react-scroll";

export const Cta = () => {
  return (
    <section className="w-full text-white py-6 flex justify-center">
      <div className="flex flex-col p-16 rounded-[30px] shadow bg-primary-500 max-w-6xl w-full">
        <h2 className="lg:text-[48px] md:text-[32px] text-[28px] leading-tight font-bold mb-14">
          Ready To Get Started? <br /> Let’s Talk To Us Today
        </h2>
        <Link to="contacto" smooth>
          <Button
            title="Contactanos ahora"
            className="px-5 py-3 text-black bg-white rounded-full font-semibold lg:font-bold"
          />
        </Link>
      </div>
    </section>
  );
};
