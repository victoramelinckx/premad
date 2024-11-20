"use client";

import { Link, animateScroll as scroll } from "react-scroll";
import { Button } from "./Button";
import { NavbarLink } from "./NavbarLink";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import X from "./X";
import Bars from "./Bars";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

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

  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <NavbarTop>
        <NavbarContent
          isScrollNav={false}
          toggleHome={toggleHome}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </NavbarTop>
      <NavbarScroll className={`${scrollNav ? "top-0" : "-top-[4.5rem]"}`}>
        <NavbarContent
          isScrollNav={true}
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
    <nav className="z-50 flex justify-center items-center transition-all duration-700 w-full h-28 -mb-28 bg-transparent text-white">
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
      className={`sticky z-50 flex justify-center items-center transition-all duration-700 w-full bg-black text-white shadow-md h-[4.5rem] -mt-[4.5rem] ${className}`}
    >
      {children}
    </nav>
  );
};

const NavbarContent = ({
  isScrollNav,
  toggleHome,
  isMenuOpen,
  setIsMenuOpen,
}: {
  isScrollNav: boolean;
  toggleHome: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`flex justify-between ${
        isScrollNav ? "h-[4.5rem]" : "h-24"
      } w-full max-w-6xl mx-6 md:mx-14`}
    >
      <div className="flex gap-4">
        <button
          className="self-center flex items-center w-fit"
          onClick={toggleHome}
        >
          <img
            src="/premad_logo.png"
            className={`${
              isScrollNav ? "w-24" : "w-48 max-md:w-36"
            } transition-all duration-700`}
            alt="Plumbing Solutions in Miami. Jdenx Solutions."
          />
        </button>
        <ul
          className={`flex flex-col lg:flex-row max-lg:hidden lg:items-center absolute lg:static opacity-[1] transition-all duration-700 font-medium text-center lg:-mr-5
          ${isScrollNav && "text-sm"}`}
        >
          <NavbarLink
            key="acerca"
            title="About"
            to="acerca"
            smooth
            spy
            offset={-72}
            activeClass="lg:border-b-[3px] lg:border-b-primary-500"
            onClick={() => setIsMenuOpen(false)}
          />
          <NavbarLink
            key="servicios"
            title="Services"
            to="servicios"
            smooth
            spy
            offset={-72}
            activeClass="lg:border-b-[3px] lg:border-b-primary-500"
            onClick={() => setIsMenuOpen(false)}
          />
          <NavbarLink
            key="antes/despues"
            title="Jobs"
            to="antes/despues"
            smooth
            spy
            offset={-72}
            activeClass="lg:border-b-[3px] lg:border-b-primary-500"
            onClick={() => setIsMenuOpen(false)}
          />
        </ul>
      </div>
      <div
        className={`z-[60] lg:hidden max-lg:absolute max-lg:top-0 max-lg:right-0 -translate-x-1/2 transition-all duration-700 ${
          isScrollNav ? "translate-y-[25%]" : "translate-y-[50%]"
        } `}
      >
        <button
          className="text-primary-500 transition-all duration-700"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          {isMenuOpen ? <X /> : <Bars />}
        </button>
      </div>
      <div
        className={`${
          isScrollNav ? "h-[4.5rem]" : "h-24"
        } flex items-center gap-6`}
      >
        <a
          className="flex gap-1 items-center max-xl:hidden font-semibold text-white text-lg transition-all ease-in-out duration-300 hover:-translate-y-1"
          href="https://api.whatsapp.com/send/?phone=7866431006&text=Hi%20I%20would%20like%20to%20get%20a%20quote%F0%9F%98%83"
        >
          <img src="icons/phonewhite.svg" className="w-5 mr-1" />
          786-6431006
        </a>

        <Link
          key="contacto"
          to="contacto"
          smooth
          spy
          offset={-72}
          className="max-lg:hidden"
        >
          <Button title="Contact us!" />
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
      className={`z-50 flex fixed top-24 left w-3/4 lg:hidden text-sm ${
        isMenuOpen
          ? " transition-all duration-700 bg-white rounded-2xl left-1/2 -translate-x-1/2 shadow-2xl"
          : "-left-full duration-500"
      }`}
    >
      <ul
        className={`flex flex-col w-full self-center my-8
    ${!scrollNav ? "transition-all duration-700" : "duration-500"}
        `}
      >
        <NavbarLink
          key="servicios"
          title="Servicios"
          to="servicios"
          smooth
          className="h-14"
          onClick={() => setIsMenuOpen(false)}
        />

        <NavbarLink
          key="antes/despues"
          title="Resultados"
          to="antes/despues"
          smooth
          offset={-72}
          className="h-14"
          onClick={() => setIsMenuOpen(false)}
        />

        <NavbarLink
          key="testimonios"
          title="Testimonios"
          to="testimonios"
          smooth
          className="h-14"
          onClick={() => setIsMenuOpen(false)}
        />
      </ul>
    </div>
  );
};
