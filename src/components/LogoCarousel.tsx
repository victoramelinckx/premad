"use client";
import React from "react";

interface LogoCarouselProps {
  logos?: {
    src: string;
    alt: string;
  }[];
  isWhiteGradient?: boolean;
}

const defaultLogos = [
  {
    src: "/logos_empresas/asmar.png",
    alt: "Company 1",
  },
  {
    src: "/logos_empresas/gasco.png",
    alt: "Company 5",
  },
  {
    src: "/logos_empresas/sodimac.png",
    alt: "Company 1",
  },
  {
    src: "/logos_empresas/abastible.png",
    alt: "Company 5",
  },
  {
    src: "/logos_empresas/ministerio.png",
    alt: "Company 1",
  },
  {
    src: "/logos_empresas/sweethomes.png",
    alt: "Company 5",
  },
  {
    src: "/logos_empresas/linde.png",
    alt: "Company 5",
  },
  {
    src: "/logos_empresas/socovesa.png",
    alt: "Company 5",
  },
  {
    src: "/logos_empresas/carran.png",
    alt: "Company 5",
  },
  {
    src: "/logos_empresas/py.png",
    alt: "Company 5",
  },
  {
    src: "/logos_empresas/salfa.png",
    alt: "Company 5",
  },
];

const LogoCarousel = ({
  logos = defaultLogos,
  isWhiteGradient = false,
}: LogoCarouselProps) => {
  // Duplicamos los logos para crear el efecto infinito
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden px-8 ">
      {/* Gradientes a los lados */}
      <div
        className={`absolute left-0 top-0 w-24 h-full z-10 bg-gradient-to-r to-transparent ${
          isWhiteGradient ? "from-primary-500" : "from-primary-500/80"
        }`}
      />
      <div
        className={`absolute right-0 top-0 w-24 h-full z-10 bg-gradient-to-l to-transparent ${
          isWhiteGradient ? "from-primary" : "from-primary-500/80"
        }`}
      />

      {/* Contenedor del carrusel con animación */}
      <div
        className="flex py-4"
        style={{
          animation: "scroll 18s linear infinite",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              height: "40px",
              display: "flex",
              alignItems: "center",
              padding: "0 20px",
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-200%);
          }
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel;
