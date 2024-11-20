"use client";

import { cn } from "@/lib/utils";
import { Producto } from "@/types/productos";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";

export interface SubLink {
  title: string;
  href: string;
}

interface NavbarLinkProps {
  title: string;
  href?: string;
  className?: string;
  sublinks?: Producto[];
  onClick?: () => void; // Añadimos la prop onClick
}

export const NavbarLink = ({
  title,
  className = "",
  href,
  sublinks,
  onClick, // Incluimos onClick en la desestructuración
}: NavbarLinkProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className={cn(
        `flex flex-col items-center justify-center relative lg:h-full w-full`,
        className
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {href ? (
        <Link
          className="flex items-center h-full tracking-wide hover:text-primary-500 cursor-pointer justify-center font-medium"
          href={href}
          onClick={onClick}
        >
          {title}
        </Link>
      ) : (
        <>
          {sublinks && (
            <ul className="lg:hidden flex items-center flex-col">
              {sublinks.map((sublink, index) => (
                <li key={index} className="flex justify-center">
                  <Link
                    className="p-2 hover:text-primary-500 w-full"
                    href={`/producto/${sublink.id}`}
                    onClick={onClick}
                  >
                    {sublink.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <span
            className="max-lg:hidden flex items-center h-full tracking-wide hover:text-primary-500 cursor-pointer justify-center font-medium"
            onClick={onClick}
          >
            {title}
            <span>
              <ChevronRightIcon
                className={`ml-1 transition-all duration-300 ${
                  hovered && "rotate-90"
                } `}
              />
            </span>
          </span>
        </>
      )}

      {hovered && sublinks && (
        <ul className="max-lg:hidden absolute bg-[#fffffff4] backdrop-blur-[5px] rounded-lg top-full left-1/2 -translate-x-1/2 w-60 -mt-4 flex flex-col text-sm font-semibold">
          {sublinks.map((sublink, index) => (
            <li key={index} className="flex justify-center">
              <Link
                className="p-2 hover:text-primary-500 w-full"
                href={`/producto/${sublink.id}`}
                onClick={onClick}
              >
                {sublink.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
