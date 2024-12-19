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
import Montaje from "../../../public/imagenes/montaje_Industrial.png";
import { Proyectos } from "@/components/Proyectos";
import Fondo from "../../../public/imagenes/image_10.png";

const Viviendas = () => {
  return (
    <>
      <div className="w-full flex flex-col p-0">
        <Navbar />
        <main>
          <header className="relative w-full h-[26rem] sm:h-[27rem] lg:h-[30rem] overflow-hidden">
            <div className="w-full absolute flex flex-col items-center justify-center gap-6 left-1/2 -translate-x-1/2 top-[55%] lg:top-1/2 -translate-y-1/2 text-center z-10 text-white  ">
              <h1
                className="leading-tight tracking-[.01em] font-bold text-5xl md:text-5xl xl:text-7xl mt-16 md:mt-10 max-md:mx-8"
                itemProp="name"
              >
                Viviendas Industrializadas
              </h1>
              <p
                className=" md:leading-loose tracking-[.03em] font-[450]  md:text-md xl:text-xl text-zinc-300  max-w-xl self-center max-md:mx-8"
                itemProp="description"
              >
                Fabricación y montaje de elementos constructivos estandarizados
                que garantizan precisión y rapidez en la ejecución de proyectos.
              </p>
            </div>
            <Image
              src={Montaje}
              alt={`Montake Industrial Premad`}
              width={0}
              height={0}
              sizes="100vw"
              className="absolute w-full h-full sm:h-auto object-cover"
              priority
            />
            <div className="absolute top-0 left-0 bg-black opacity-70 w-full h-[30rem]" />
          </header>

          <Proyectos tipo="montaje" />

          <section className="relative flex w-full items-center justify-center  py-16 md:py-48 overflow-hidden bg-black/5">
            <div className="z-10 flex max-md:flex-col max-md:gap-10 items-center w-11/12 md:justify-between max-w-5xl">
              <div className="max-w-2xl">
                <h3 className="lg:text-[48px] md:text-[36px] text-[30px] leading-tight font-bold text-white text-left">
                  Listo para impulsar tu <br /> crecimiento con OpenCode?
                </h3>
                <p
                  className={`font-medium mt-4 text-white 
                  `}
                >
                  Un vistazo a algunos de nuestros proyectos destacados,
                  construidos con precisión y dedicación.
                </p>
              </div>
              <button className="px-5 py-3 bg-primary-500 text-white rounded-lg font-semibold">
                Contáctanos
              </button>
            </div>
            <Image
              src={Fondo}
              alt={`Montake Industrial Premad`}
              width={0}
              height={0}
              sizes="100vw"
              className="absolute w-full h-full sm:h-auto object-cover"
              priority
            />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};
export default Viviendas;
