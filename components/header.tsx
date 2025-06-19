"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import UseSticky from "@hooks/UseSticky";
import { FaLock } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Logo from "@public/template/logo-1.png";
import { HeaderNavbar, headerNavigation } from "../routes/navigation";
import MobileNavigation from "./mobileNavigation";

const Header = () => {
  const { sticky } = UseSticky();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <header
  className={`z-[999] w-full transition-all duration-300 ease-in-out ${
    sticky
      ? "fixed top-0 bg-white shadow-md"
      : "absolute top-0 bg-transparent"
  }`}
>
        <div className="flex items-center justify-between py-4 px-10 max-md:px-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                className="w-[130px] max-md:w-[90px] h-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block ml-[90px]">
              <ul className="flex items-center space-x-14 lg:space-x-10">
                {headerNavigation.map((nav: HeaderNavbar, index: number) => (
                  <li key={index}>
                    <Link
                      href={nav.path}
                      className="text-[18px] font-medium  text-text-color hover:text-primary transition-all duration-200 ease-in-out
"
                    >
                      {nav.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* Right Icons */}
          <div className="flex items-center gap-2">
            <button
              className="w-14 h-14 max-md:w-10 max-md:h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-primary  transition-all duration-300 ease-in-out
"
            >
              <FaLock />
            </button>
            <button className="group w-14 h-14 max-md:w-10 max-md:h-10 flex items-center justify-center bg-black text-white text-[1.3em] relative z-[1] overflow-hidden ml-[-18px] rounded-full transition-all duration-300 ease-in-out hover:bg-primary">
              <span className="absolute top-0 left-[-45px] max-md:left-[-35px] w-full h-full bg-white rounded-full transition-all duration-300 ease-in-out group-hover:bg-primary"></span>
              <span className="relative z-10">
                <FaSearch />
              </span>
            </button>

            <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
