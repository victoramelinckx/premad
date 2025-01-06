import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Whatsapp } from "@/components/Whatsapp";
import { About } from "@/components/About";
import { Video } from "@/components/Video";
import { Proyectos } from "@/components/Proyectos";
import { Clientes } from "@/components/Clientes";
import { Cta2 } from "@/components/Cta2";
import { Hero1 } from "@/components/Hero1";
import { Areas } from "@/components/Areas";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <Hero1 />
      <About />
      {/* <AfterHero /> */}
      <Areas />
      <Clientes />
      <Proyectos tipo="home" />
      <Services />
      {/* <Beneficios /> */}

      {/* <Video videoId="1U2AL8abSgg" /> */}

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
