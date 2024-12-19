import { Button } from "./Button";
import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa6";
import { FiThumbsUp } from "react-icons/fi";
import { GoPeople } from "react-icons/go";

export const Stats = () => {
  return (
    <section className="bg-[#f3f3f3] flex flex-col w-full justify-center items-center rounded-3xl md:rounded-[4rem] mb-10">
      <div className="flex flex-col w-full lg:w-11/12 max-w-6xl py-12 lg:py-20 max-md:px-5 md:max-lg:px-12">
        <p className=" text-primary-500 font-bold text-base ">OpenCode</p>
        <div className="flex flex-col md:flex-row mb-6">
          <h2 className="lg:text-[48px] md:text-[32px] text-[28px] leading-tight font-bold">
            Impulsando el crecimiento empresarial
          </h2>
          <p className="text-sm md:text-base text-gray-900/60 font-semibold mt-2 md:max-w-lg">
            En Premad, nuestra misión es clara: x cosa en Chile. Con más de 15
            años de experiencia, hemos ayudado a lorem ipsun whatever.
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
  );
};
