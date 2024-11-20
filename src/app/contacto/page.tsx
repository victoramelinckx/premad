import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

const Contacto = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col w-full justify-center items-center mt-16 sm:mt-20">
        <div className="flex flex-col w-full lg:w-11/12 max-w-6xl pt-6 lg:pt-12 max-md:px-5 md:max-lg:px-12">
          <p className=" text-primary-500 font-bold text-base ">Contáctanos</p>
          <div className="flex flex-col md:flex-row mb-6">
            <h2 className="lg:text-[48px] md:text-[32px] text-[28px] leading-tight font-bold md:w-7/12">
              Comunícate con <br className="max-lg:hidden" />
              nuestro equipo
            </h2>
            <p className="text-sm md:text-base text-gray-900/60 font-semibold mt-2 md:w-5/12">
              Accede a nuestro soporte especializado y obtén <br className="max-lg:hidden" />
              respuestas a todas tus consultas sobre nuestros <br className="max-lg:hidden" />
              servicios y soluciones.
            </p>
          </div>
          <div className="flex flex-row max-md:flex-col gap-4">
            <div className="flex flex-col  bg-primary-500 p-8 rounded-[30px] h-full lg:w-1/2 min-h-[300px] relative w-full">
              <h3 className="text-white md:text-[26px] text-xl text-[32px] font-bold mb-8">
                Obtén una respuesta rápida
              </h3>

              <form className="grid grid-flow-row gap-6">
                <input
                  className="p-4 rounded-[30px] border-none bg-primary-200/40 text-white/70 placeholder:text-white/70 max-lg:text-sm font-semibold"
                  placeholder="Nombre"
                />
                <input
                  className="p-4 rounded-[30px] border-none bg-primary-200/40 text-white/70 placeholder:text-white/70 max-lg:text-sm font-semibold"
                  placeholder="E-mail"
                />
                <input
                  className="p-4 rounded-[30px] border-none bg-primary-200/40 text-white/70 placeholder:text-white/70 max-lg:text-sm font-semibold"
                  placeholder="Teléfono"
                />
                <textarea
                  className="p-4 rounded-[30px] border-none bg-primary-200/40 text-white/70 placeholder:text-white/70 max-lg:text-sm font-semibold "
                  placeholder="Mensaje"
                  rows={3}
                />

                <button className="py-4 bg-white rounded-full w-full text-primary-500 max-lg:text-sm font-bold">
                  Enviar
                </button>
              </form>
            </div>

            <div className="flex flex-col lg:w-1/2 gap-4">
              <div className="p-8 flex flex-col gap-8 bg-[#f3f3f3] rounded-[30px]">
                <div className="grid grid-cols-2 gap-8">
                  {/* Careers Section */}

                  {/* Inquiries Section */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-1">
                      <div className="p-1">
                        <BsFillQuestionCircleFill className="w-6 h-6" />
                      </div>
                      <h3 className="md:text-[26px] text-xl text-[32px] font-bold">Consultas</h3>
                    </div>
                    <div className="flex flex-col gap-1 font-semibold">
                      <a
                        href="mailto:support@crm.com"
                        className="text-gray-900/60 hover:underline"
                      >
                        info@opencode.cl
                      </a>
                      <a
                        href="mailto:hello@crm.com"
                        className="text-gray-900/60 hover:underline"
                      >
                        contacto@opencode.cl
                      </a>
                    </div>
                  </div>

                  {/* Support Section */}
                  <div className="flex flex-col gap-4 ">
                    <div className="flex items-center gap-1">
                      <div className="p-1">
                        <MdOutlineSupportAgent className="w-6 h-6" />
                      </div>
                      <h3 className="md:text-[26px] text-xl text-[32px] font-bold">Soporte</h3>
                    </div>
                    <div className="flex flex-col gap-1 font-semibold">
                      <a
                        href="tel:+123456789"
                        className="text-gray-900/60 hover:underline"
                      >
                        +123 456 789
                      </a>
                      <a
                        href="tel:+456123789"
                        className="text-gray-900/60 hover:underline"
                      >
                        +456 123 789
                      </a>
                    </div>
                  </div>

                  {/* Call center Section */}
                </div>
              </div>

              {/* Second Card */}
              <div className="p-8 flex flex-col gap-8 bg-[#f3f3f3] rounded-[30px]">
                <div className="grid grid-cols-2 gap-8">
                  {/* Head office Section */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-1">
                      <div className="p-1">
                        <FaBuilding className="w-6 h-6" />
                      </div>
                      <h3 className="md:text-[26px] text-xl text-[32px] font-bold">Oficina</h3>
                    </div>
                    <p className="text-gray-900/60 font font-semibold">
                      2169 Street Ln. Calle,
                      <br />
                      Chile, Concepcion
                    </p>
                  </div>

                  {/* US office Section */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faq />
      <Cta />
      <Footer />
    </ >
  );
};
export default Contacto;
