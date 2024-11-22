import LogoCarousel from "./LogoCarousel";

export const Clientes = () => {
  return (
    <section className="w-full flex justify-center max-w-6xl">
      <div className="flex p-16 rounded-[30px] shadow bg-primary-500  overflow-hidden w-full">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 my-10">
          <p className="text-white text-4xl font-bold max-lg:text-center">
            Más de 200 empresas confían en nosotros
          </p>
          <LogoCarousel />
        </div>
      </div>
    </section>
  );
};
