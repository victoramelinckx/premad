import { Cta } from "@/components/Cta";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Whatsapp } from "@/components/Whatsapp";
import { Faq } from "@/components/Faq";
import { AfterHero } from "@/components/AfterHero";
import { Beneficios } from "@/components/Beneficios";
import { Testimonios } from "@/components/Testimonios";
import Precios from "@/components/Precios";
import { About } from "@/components/About";
import { Video } from "@/components/Video";
import { Proyectos } from "@/components/Proyectos";
import { Clientes } from "@/components/Clientes";
import { Contacto } from "@/components/Contacto";
import { Cta2 } from "@/components/Cta2";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <Hero />
      {/* <AfterHero /> */}
      <Services />
      {/* <Beneficios /> */}
      <About />
      <Clientes />
      <Video videoId="1U2AL8abSgg" />

      <Proyectos tipo="home" />
      {/* <Precios />
      <Testimonios /> */}

      {/* <Faq /> */}
      <Cta2 />
      {/* <Contacto /> */}

      {/* <Testimonials /> */}
      {/* <ContactUs /> */}
      <Whatsapp />
      <Footer />
    </main>
  );
}
