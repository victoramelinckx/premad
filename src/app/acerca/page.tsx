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

const Acerca = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col w-full justify-center items-center mt-16 sm:mt-20 mb-14">
        <div className="flex flex-col w-full lg:w-11/12 max-w-6xl pt-6 lg:pt-12 max-md:px-5 md:max-lg:px-12">
          <p className=" text-primary-500 font-bold text-base ">
            Acerca de nosotros
          </p>
          <div className="flex flex-col md:flex-row md:gap-4 mb-6">
            <h2 className="lg:text-[48px] md:text-[32px] text-[28px] leading-tight font-bold lg:w-1/2">
              Software que impulsa el éxito empresarial
            </h2>

            <p className="text-sm md:text-base text-gray-900/60 font-semibold mt-2 lg:w-1/2">
              En OpenCode nos especializamos en crear soluciones tecnológicas
              que potencian el crecimiento de las empresas chilenas. Con más de
              15 años en el mercado, hemos ayudado a miles de empresas a
              optimizar sus procesos y alcanzar sus objetivos de negocio.
              <br />
              <br />
              Muchas empresas aún dependen de software obsoleto que no se adapta
              a las necesidades actuales de velocidad, escalabilidad y gestión
              de datos. En OpenCode, nos dedicamos a revolucionar la gestión
              empresarial con un enfoque completamente nuevo y adaptado a la
              realidad local.
              <br />
              <br />
              Nuestras soluciones están construidas con tecnología de última
              generación, son totalmente personalizables y diseñadas para una
              integración perfecta con tu negocio. Con OpenCode, las empresas
              pueden implementar y adaptar el software exactamente según sus
              necesidades específicas.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 mt-4">
            <div className="w-full lg:w-1/2">
              <Image
                src="/opencode/acercade.jpg"
                alt="First image description"
                width={1200}
                height={800}
                className="w-full h-full object-cover rounded-[30px]"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/opencode/acercade.jpg"
                alt="Second image description"
                width={1200}
                height={800}
                className="w-full h-full object-cover rounded-[30px]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-8 mt-20">
            <p className="text-black text-xl font-semibold text-center">
              Empresas chilenas que confian en OpenCode
            </p>
            <div className="mt-8">
              <LogoCarousel isWhiteGradient={true} />
            </div>

            <p className="text-sm text-[#1C1C1C99] font-semibold  text-center mt-6">
              OpenCode ha trabajado con mas 300+ empresas en sus 15 anos.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#f3f3f3] flex flex-col w-full justify-center items-center rounded-3xl md:rounded-[4rem] mb-10">
        <div className="flex flex-col w-full lg:w-11/12 max-w-6xl py-12 lg:py-20 max-md:px-5 md:max-lg:px-12">
          <p className=" text-primary-500 font-bold text-base ">OpenCode</p>
          <div className="flex flex-col md:flex-row mb-6">
            <h2 className="lg:text-[48px] md:text-[32px] text-[28px] leading-tight font-bold">
              Impulsando el crecimiento empresarial
            </h2>
            <p className="text-sm md:text-base text-gray-900/60 font-semibold mt-2 md:max-w-lg">
              En OpenCode, nuestra misión es clara: crear software que
              transforme la gestión empresarial en Chile. Con más de 15 años de
              experiencia, hemos ayudado a decenas de empresas a optimizar sus
              operaciones y alcanzar sus objetivos de negocio.
            </p>
          </div>
          <div className="flex flex-col max-md:items-center md:flex-row max-md:gap-6 justify-between p-6 rounded-3xl md:rounded-full mt-6 border-2 border-primary-500/50">
            <div className="flex flex-row items-center justify-start gap-4 ml-12">
              <FaDownload className="w-6 h-6 text-primary-500" />
              <div className="flex flex-col">
                <span className="font-semibold text-sm text-gray-900/40">
                  Implementaciones
                </span>
                <span className="font-bold text-2xl text-gray-900">10,845</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-4 ml-12">
              <FiThumbsUp className="w-6 h-6 text-primary-500" />
              <div className="flex flex-col">
                <span className="font-semibold text-sm text-gray-900/40">
                  Clientes activos
                </span>
                <span className="font-bold text-2xl text-gray-900">8,493</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-4 ml-12">
              <GoPeople className="w-7 h-7 text-primary-500" />
              <div className="flex flex-col">
                <span className="font-semibold text-sm text-gray-900/40">
                  Usuarios diarios
                </span>
                <span className="font-bold text-2xl text-gray-900">45,432</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonios />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
};
export default Acerca;
