"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Badget } from "./Badget";
import { Badget2 } from "./Badget2";

export const Hero = () => {
  return (
    <section className="flex flex-col relative w-full justify-center items-center ">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/60 z-[1]" /> {/* Overlay */}
        <Image
          src="/background.png"
          alt="Construction background"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="z-0"
        />
      </div>

      {/* Content Container - Note the z-10 to place it above the background */}
      <div className="relative z-10 flex max-lg:flex-col lg:py-[150px] w-full lg:w-11/12 max-w-6xl lg:pb-6 gap-14 lg:gap-6 lg:justify-between">
        <div className="flex flex-col justify-center text-white md:max-lg:items-center gap-3 sm:gap-6 lg:gap-4 lg:min-w-2/3 md:max-lg:text-center max-lg:px-6">
          <h1 className="leading-tight tracking-[.01em] font-dmsans font-bold text-[44px] md:text-5xl lg:text-6xl xl:text-7xl">
            Construction <br /> solutions for everyone
          </h1>
          <p className="md:leading-loose tracking-[.03em] max-sm:font-medium font-[450] text-lg xl:text-xl text-white sm:max-lg:w-4/5">
            We provide the best architectural design, contruction, and building
            maintance services for you.
          </p>
          <div className="flex flex-row space-x-2 mt-4">
            <button className="mt-3 text-lg flex items-center gap-1 rounded-full bg-primary-500 px-5 py-3 text-white font-semibold w-fit hover:opacity-70">
              Our services
            </button>
            <button className="mt-3 text-lg flex items-center gap-1 rounded-full bg-white/30 blur-xs border-solid border-2 px-5 py-3 text-white border-white font-semibold w-fit hover:opacity-70">
              Get in touch
            </button>
          </div>
        </div>
        <div className="flex flex-col text-white items-center justify-center space-y-4 w-1/3 py-24">
          <div className="flex flex-col ">
            <p className="text-[78px] font-medium">690+</p>
            <span className=""> Projects completed</span>
          </div>
          <div className="flex flex-col">
            <p className="text-[78px] font-medium">500+</p>
            <p> Happy clients</p>
          </div>
          <div className="flex flex-col ">
            <p className="text-[78px] font-medium">1200</p>
            <p> Worker employed</p>
          </div>
        </div>
      </div>
    </section>
  );
};
