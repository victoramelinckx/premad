import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Producto } from "@/types/productos";
import { ProductDescription } from "./ProductDescription";
import { ContactForm } from "./ContactForm";

interface ProductLayoutProps {
  producto: Producto;
}

// components/ProductLayout.tsx
export const ProductLayout = ({ producto }: ProductLayoutProps) => {
  return (
    <div className="w-full flex flex-col p-0">
      <Navbar />
      <main>
        <article itemScope itemType="https://schema.org/SoftwareApplication">
          <header className="relative w-full h-[23rem] sm:h-[27rem] lg:h-[30rem] overflow-hidden">
            <div className="w-11/12 absolute flex flex-col gap-6 left-1/2 -translate-x-1/2 top-[55%] lg:top-1/2 -translate-y-1/2 text-center z-10 text-white">
              <h1
                className="leading-tight tracking-[.01em] font-bold text-3xl md:text-5xl xl:text-7xl"
                itemProp="name"
              >
                {producto.name}
              </h1>
              <p
                className="leading-loose tracking-[.03em] font-[450] text-sm md:text-md xl:text-xl text-zinc-300 sm:whitespace-nowrap"
                itemProp="description"
              >
                {producto.subtitle}
              </p>
            </div>
            <Image
              src={producto.heroImage}
              alt={`${producto.name} - Software empresarial`}
              width={0}
              height={0}
              sizes="100vw"
              className="absolute w-full h-full sm:h-auto object-cover"
              priority
            />
            <div className="absolute top-0 left-0 bg-black opacity-70 w-full h-[30rem]" />
          </header>

          <section className="md:m-auto flex flex-col-reverse max-md:items-center md:flex-row max-w-3xl md:max-w-4xl lg:max-w-6xl md:w-11/12 gap-10 py-20 md:py-28">
            <aside className="w-11/12 max-w-[26rem] md:w-[19rem] lg:w-1/3">
              <ContactForm />
            </aside>

            <div className="flex flex-col w-11/12 max-w-[26rem] md:w-full md:max-w-[65%]">
              <ProductDescription description={producto.description} />
            </div>
          </section>
        </article>

        <section className="flex w-full items-center justify-center bg-primary-500 py-16 md:py-24">
          <div className="flex max-md:flex-col max-md:gap-10 items-center w-11/12 md:justify-between max-w-5xl">
            <h3 className="leading-tight tracking-[.01em] font-semibold text-2xl sm:text-3xl text-white text-center">
              Listo para impulsar tu <br /> crecimiento con OpenCode?
            </h3>
            <button className="p-5 bg-white text-primary-500 rounded-lg font-semibold">
              Llámanos al +56912345678
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};