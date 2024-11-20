"use client";

import { Button } from "./Button";
import { Link } from "react-scroll";
import LogoCarousel from "./LogoCarousel";

export const AfterHero = () => {
  return (
    <section className="bg-[#f3f3f3] flex flex-col w-full justify-center items-center lg:rounded-t-[4rem] rounded-b-3xl md:rounded-b-[4rem]">
      <div className="flex flex-col w-full lg:w-11/12 max-w-6xl lg:pt-20 pb-20 max-md:px-5 md:max-lg:px-12">
        <p className="text-primary-500 font-bold text-base">BENEFICIOS</p>
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <h2 className="lg:text-[48px] md:text-[32px] text-[28px] leading-tight font-bold md:w-3/5 lg:w-7/12">
            Soluciones personalizadas <br /> a tu empresa
          </h2>
          <p className="text-sm md:text-base text-[#1C1C1C99] font-medium mt-2 md:w-2/5 lg:w-5/12 xl:pl-8">
            Optimiza tus procesos, toma decisiones inteligentes y potencia el
            crecimiento de tu empresa con software integral y personalizado.
          </p>
        </div>
        <div className="flex flex-row max-md:flex-col gap-4">
          <div className="flex flex-col bg-primary-500 p-8 rounded-[30px] h-full lg:w-1/2 min-h-[300px] relative w-full">
            {/* Content Section */}
            <div className="flex flex-col gap-2">
              <h3 className="text-white md:text-[26px] text-xl text-[32px] font-bold">
                Conectividad de datos
              </h3>
              <p className="text-white text-sm md:text-base font-medium">
                Mantén tus datos de productos, facturación y relaciones
                perfectamente sincronizados en tu espacio de trabajo en todo
                momento.
              </p>
            </div>

            {/* Images Section */}
            <div className="relative h-[300px] w-full my-8">
              <div className="absolute h-[298px] w-[369px]">
                <img
                  src="/opencode/prueba.png"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute h-[231px] w-[147px] left-[355px] top-10">
                <img
                  src="/opencode/prueba2.png"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Button Section */}
            <div className="">
              <Link to="contacto" smooth>
                <Button
                  title="Comenzar"
                  className="px-5 py-3 text-black bg-white rounded-full font-semibold lg:font-bold"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col lg:w-1/2 gap-4">
            <div className=" p-8 flex flex-col bg-[rgba(28,28,28,0.08)] rounded-[30px] gap-2 h-full overflow-hidden">
              <h3 className="text-black md:text-[26px] text-xl text-[32px] font-bold">
                Seguridad y servicio experto
              </h3>
              <p className="text-[#1C1C1C99] text-sm md:text-base font-medium">
                15 años protegiendo datos y atendiendo empresas con los más
                altos estándares.
              </p>
              <div className="relative  ">
                <div className="absolute h-[411px] w-[690px]  left-6 top-14 overflow-visible">
                  <img src="/opencode/prueba3.png" className="w-full h-full " />
                </div>
              </div>
              <div></div>
            </div>
            <div className=" relative bg-[rgba(28,28,28,0.08)] rounded-[30px] overflow-hidden pb-20">
              <div className="flex flex-col p-8 gap-2">
                <h3 className="text-black md:text-[26px] text-xl text-[32px] font-bold">
                  Integraciones
                </h3>
                <p className="text-[#1C1C1C99] text-sm md:text-base font-medium">
                  Conecta todos tus sistemas y <br /> documentos de manera
                  simple y <br />
                  sin complicaciones.
                </p>
              </div>
              <div className="flex flex-col absolute right-[114px] -top-14 gap-2">
                <div className=" border border-solid border-black rounded-[20px] p-4 ">
                  <img
                    src="/opencode/typeform.svg"
                    className="w-[41.97px] h-[39.97px] "
                  />
                </div>
                <div className=" border border-solid border-black rounded-[20px] p-4">
                  <img
                    src="/opencode/typeform.svg"
                    className="w-[41.97px] h-[39.97px] "
                  />
                </div>
                <div className=" border border-solid border-black rounded-[20px] p-4">
                  <img
                    src="/opencode/notion.svg"
                    className="w-[41.97px] h-[39.97px] "
                  />
                </div>
              </div>
              <div className="flex flex-col absolute right-[24px] -top-6 gap-2">
                <div className=" border border-solid border-black rounded-[20px] p-4 ">
                  <img
                    src="/opencode/gmail.svg"
                    className="w-[41.97px] h-[39.97px] "
                  />
                </div>
                <div className=" border border-solid border-black rounded-[20px] p-4">
                  <img
                    src="/opencode/outlook.svg"
                    className="w-[41.97px] h-[39.97px] "
                  />
                </div>
                <div className=" border border-solid border-black rounded-[20px] p-4">
                  <img
                    src="/opencode/raro.svg"
                    className="w-[41.97px] h-[39.97px] "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //Carousel con empresas */}
        <div className="felx flex-col justify-center items-center gap-8 mt-14">
          <p className="text-black text-xl font-semibold text-center">
            Empresas chilenas que confían en OpenCode
          </p>
          <div className="mt-8">
            <LogoCarousel />
          </div>

          <p className="text-[#1C1C1C99] text-sm md:text-base font-medium  text-center mt-6">
            OpenCode ha trabajado con mas 300+ empresas en sus 15 anos.
          </p>
        </div>
      </div>
    </section>
  );
};
