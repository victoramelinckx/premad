import LogoCarousel from "./LogoCarousel";

export const Clientes = () => {
  return (
    <section className="w-full  flex justify-center">
      <div className="flex max-w-6xl w-full py-16 px-8 md:p-16 rounded-[30px] shadow bg-primary-500 overflow-hidden">
        <div className="flex flex-col lg:flex-row w-full items-center justify-between gap-8 my-4 lg:my-10">
          <h2 className="text-white text-3xl lg:text-4xl font-bold text-center lg:text-left lg:w-1/2">
            Empresas que confían en nosotros.
          </h2>
          <div className="lg:flex-1 lg:w-1/2">
            <LogoCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};
