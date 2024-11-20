import { RiEmotionHappyFill } from "react-icons/ri";

export const Badget2 = () => {
  return (
    <>
      <div className="relative">
        {/* Fondo borroso */}
        <div className="absolute inset-0 rounded-full bg-white/40 blur-xs border border-primary-500/10 shadow" />

        {/* Contenido */}
        <div className="relative flex flex-row  row-span-2 rounded-full p-2">
          <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center">
            <RiEmotionHappyFill className="w-8 h-auto text-black" />
          </div>
          <div className="flex flex-col span-1 items-center justify-center mx-1">
            <p className=" text-black text-xs font-medium">Clientes felices</p>
            <p className=" text-black text-sm font-semibold">+200</p>
          </div>
          <div className="flex items-end mx-1 mb-1">
            <div className="bg-white rounded-full p-[2px]">
              <p className="text-black text-[10px]">+12%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
