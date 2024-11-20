"use client";

import { animateScroll as scroll } from "react-scroll";
import { Button } from "./Button";
import { NavbarLink } from "./NavbarLink";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPhone } from "react-icons/fa6";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { productos } from "@/data/productos";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const pathname = usePathname();

  const changeNav = () => {
    if (window.scrollY >= 96) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleLogoClick = () => {
    if (pathname === "/") {
      scroll.scrollToTop();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      {/* <NavbarTop>
        <NavbarContent
          isScrollNav={false}
          toggleHome={toggleHome}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </NavbarTop> */}
      <NavbarScroll className={`${scrollNav ? "top-0" : "top-0"}`}>
        <NavbarContent
          isScrollNav={true}
          handleLogoClick={handleLogoClick}
          toggleHome={toggleHome}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </NavbarScroll>
      <MobileNavbarContent
        scrollNav={scrollNav}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </>
  );
};

const NavbarTop = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="z-50 flex justify-center items-center transition-all duration-700 w-full h-28 -mb-28 bg-transparent text-gray-800">
      {children}
    </nav>
  );
};

const NavbarScroll = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <nav
      className={`fixed z-50 flex justify-center items-center transition-all duration-700 w-full text-gray-800 lg:h-[4.5rem] top-0 lg:top-3 ${className}`}
    >
      <div className="flex w-full sm:max-lg:py-2 lg:w-[95%] lg:max-w-[73rem] xl:max-w-[74rem] bg-[#ffffffd0] backdrop-blur-[12px] lg:rounded-full">
        {children}
      </div>
    </nav>
  );
};

const NavbarContent = ({
  isScrollNav,
  handleLogoClick,
  toggleHome,
  isMenuOpen,
  setIsMenuOpen,
}: {
  isScrollNav: boolean;
  handleLogoClick: () => void;
  toggleHome: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`flex justify-between ${
        isScrollNav ? "h-[4.5rem]" : "h-28"
      } w-full mx-4`}
    >
      <div className="flex gap-12">
        <Link
          href="/"
          className="self-center flex items-center w-fit"
          onClick={handleLogoClick}
        >
          <img
            src="/opencode/openLogoTexto.svg"
            className={`${
              isScrollNav ? "w-36" : "w-48 max-md:w-36"
            } transition-all duration-700`}
            alt="OpenCode"
          />
        </Link>
        <ul
          className={`flex flex-col gap-12 lg:flex-row max-lg:hidden lg:items-center lg:static transition-all duration-700 font-medium text-center text-lg`}
        >
          <NavbarLink
            key="productos"
            title="Productos"
            sublinks={productos}
            onClick={() => setIsMenuOpen(false)}
          />
          <NavbarLink
            key="contacto"
            title="Contacto"
            href="/contacto"
            onClick={() => setIsMenuOpen(false)}
          />
          <NavbarLink
            key="acerca"
            title="Acerca"
            href="/acerca"
            onClick={() => setIsMenuOpen(false)}
          />
        </ul>
      </div>
      <div
        className={`flex items-center justify-center h-full lg:hidden max-lg:absolute max-lg:top-0 max-lg:right-0 -translate-x-1/2 transition-all duration-700 `}
      >
        <button
          className="bg-primary-500 transition-all duration-700 rounded-lg aspect-square w-12 flex items-center justify-center"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          {isMenuOpen ? (
            <Cross1Icon className="text-white w-6 h-full" />
          ) : (
            <HamburgerMenuIcon className="text-white w-6 h-full" />
          )}
        </button>
      </div>
      <div
        className={`${
          isScrollNav ? "h-[4.5rem]" : "h-28"
        } flex items-center gap-6`}
      >
        <a
          className="flex gap-1 items-center max-xl:hidden font-semibold text-gray-800 text-lg transition-all ease-in-out duration-300 hover:-translate-y-1"
          href="https://api.whatsapp.com/send/?phone=7866431006&text=Hi%20I%20would%20like%20to%20get%20a%20quote%F0%9F%98%83"
        >
          <FaPhone className="w-5 h-5 mr-1 text-primary-500" />
          +56 9 9591 8598
        </a>

        <Link key="contacto" className="max-lg:hidden" href="">
          <Button
            title="¡Contáctanos!"
            className="bg-primary-500 text-white rounded-full"
          />
        </Link>
      </div>
    </div>
  );
};
const MobileNavbarContent = ({
  scrollNav,
  isMenuOpen,
  setIsMenuOpen,
}: {
  scrollNav: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`z-50 top-0 flex fixed min-h-screen h-screen w-screen lg:hidden text-sm ${
        isMenuOpen
          ? "left-0 transition-all duration-700 bg-white"
          : "-left-full duration-500"
      }`}
    >
      <ul
        className={`flex flex-col w-full self-center
    ${!scrollNav ? "transition-all duration-700" : "duration-500"}
        `}
      >
        <div className="h-[1px] w-3/4 self-center bg-secondary-50 mt-4" />

        <div className="h-[1px] w-3/4 self-center bg-secondary-50" />
        <NavbarLink
          key="productos"
          title="Productos"
          sublinks={productos}
          onClick={() => setIsMenuOpen(false)}
        />
        <div className="h-[1px] w-3/4 self-center bg-secondary-50" />
        <NavbarLink
          key="contacto"
          title="Contacto"
          className="h-14"
          href="/contacto"
          onClick={() => setIsMenuOpen(false)}
        />
        <div className="h-[1px] w-3/4 self-center bg-secondary-50" />
        <NavbarLink
          key="acerca"
          title="Acerca"
          className="h-14"
          href="/acerca"
          onClick={() => setIsMenuOpen(false)}
        />
        <div className="h-[1px] w-3/4 self-center bg-secondary-50" />
        <Link
          className="bg-primary-500 text-white w-3/4 p-4 self-center mt-6 font-semibold rounded-full text-center cursor-pointer hover:opacity-70 active:opacity-70"
          href=""
          onClick={() => setIsMenuOpen(false)}
        >
          Contáctanos
        </Link>
        <div
          className={`mt-10 w-full flex flex-col items-center gap-10 justify-center`}
        >
          <button
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className="transition transitihover:transform hover:-translate-y-1"
          >
            <img src="/opencode/openLogoTexto.svg" className="w-56 z-50" />
          </button>
          {/* <a
            // href="https://www.instagram.com/drfranciscogalindom"
            className="transition transitihover:transform hover:-translate-y-1"
          >
            <FaInstagram className="w-10 h-10 text-[#1C1C1C99] transition-all ease-out hover:text-primary-500" />
          </a> */}
        </div>
      </ul>
      <div
        className={`absolute top-0 right-0 -translate-x-1/2 flex justify-center items-center transition-all duration-700 h-[4.5rem]`}
      >
        <button
          className="transition-all duration-700 rounded-lg aspect-square w-12 flex items-center justify-center"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          {isMenuOpen ? (
            <Cross1Icon className="text-primary-500 w-6 h-full" />
          ) : (
            <HamburgerMenuIcon className="text-primary-500 w-6 h-full" />
          )}
        </button>
      </div>
    </div>
  );
};
