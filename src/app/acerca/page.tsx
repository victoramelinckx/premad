import { Button } from "@/components/Button";
import Footer from "@/components/Footer";
import LogoCarousel from "@/components/LogoCarousel";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
import { FiThumbsUp } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Testimonios } from "@/components/Testimonios";
import { IoTimeSharp } from "react-icons/io5";
import { FaMapSigns } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";

const Acerca = () => {
  return (
    <>
      <Navbar displayMode="no" />
      <section className="flex flex-col w-full justify-center items-center mt-16 sm:mt-20 mb-14">
        <div className="flex flex-col w-full lg:w-11/12 max-w-6xl pt-6 lg:pt-12 max-md:px-5 md:max-lg:px-12">
          <p className=" text-primary-500 font-bold text-base ">
            Acerca de nosotros
          </p>
          <div className="flex flex-col md:flex-row md:gap-4 mb-6">
            <h2 className="lg:text-[48px] md:text-[32px] text-[28px] leading-tight font-bold lg:w-1/2">
              Empresa constructora
            </h2>

            <p className="text-sm md:text-base text-gray-900/60 font-semibold mt-2 lg:w-1/2">
              Carpos & Lagos es una empresa de servicios con más de 20 años de
              experiencia orientada en satisfacer las necesidades de nuestros
              clientes en las áreas de ingeniería, consultoría, construcción,
              montaje y retail.
              <br />
              <br />
              Desarrollamos cada proyecto en estrecha colaboración con nuestros
              clientes, respaldados por un equipo de élite en ingeniería,
              arquitectura, consultoría y construcción.
              <br />
              <br />
              Nuestra metodología integrada garantiza resultados excepcionales
              desde el diseño hasta la ejecución final.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#f3f3f3] flex flex-col w-full justify-center items-center rounded-3xl md:rounded-[4rem] mb-10">
        <div className="flex flex-col w-full lg:w-11/12 max-w-6xl py-12 lg:py-20 max-md:px-5 md:max-lg:px-12">
          <p className=" text-primary-500 font-bold text-base ">
            Carpos & Lagos
          </p>
          <div className="flex flex-col md:flex-row md:justify-between mb-6">
            <h2 className="lg:text-[48px] md:text-[32px] text-[28px] leading-tight font-bold">
              Ingenería <br />
              en construcción.
            </h2>
            <p className="text-sm md:text-base text-gray-900/60 font-semibold mt-2 md:max-w-lg">
              Nos adecuamos a las políticas de nuestros stakeholders, ofreciendo
              un servicio personalizado que integra los principios de
              eficiencia, calidad, seguridad y respeto por el medio ambiente.{" "}
            </p>
          </div>
          <div className="flex flex-col max-md:items-center md:flex-row max-md:gap-6 justify-between p-6 rounded-3xl md:rounded-full mt-6 border-2 border-primary-500/50">
            <div className="flex flex-row items-center justify-start gap-4 lg:ml-12">
              <IoTimeSharp className="w-10 h-10 text-primary-500" />
              <div className="flex flex-col">
                <span className="font-semibold text-md text-gray-900">
                  Horas en proyectos
                </span>
                <span className="font-bold text-2xl text-gray-900">
                  10,000+
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-4 lg:ml-12">
              <FaMapSigns className="w-9 h-9 text-primary-500" />
              <div className="flex flex-col">
                <span className="font-semibold text-md text-gray-900">
                  Obras civiles
                </span>
                <span className="font-bold text-2xl text-gray-900">
                  52.000 m2
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-4 lg:ml-12">
              <FaHammer className="w-10 h-10 text-primary-500" />
              <div className="flex flex-col">
                <span className="font-semibold text-md text-gray-900">
                  Proyectos Inmobiliarios
                </span>
                <span className="font-bold text-2xl text-gray-900">
                  25.000 m2
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Testimonios /> */}
      <Faq />
      <Cta />
      <Footer />
    </>
  );
};
export default Acerca;
