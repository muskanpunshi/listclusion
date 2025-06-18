"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import UseSticky from "@hooks/UseSticky";
import { FaLock } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Logo from "@public/template/logo-1.png";
import { HeaderNavbar, headerNavigation } from "../routes/navigation";

const HeaderFour = () => {
  const { sticky } = UseSticky();
  const [isSearch, setIsSearch] = useState<boolean>(false);

  return (
    <>
      <header
        className={`z-[999] w-full transition-all duration-400 ease-in-out ${
          sticky ? "fixed top-0 bg-white shadow-md" : "relative"
        }`}
      >
        <div className="flex items-center justify-between py-5 px-8 md:px-10">
          {/* Logo */}
          <div className="flex items-center space-x-10">
            <Link href="/">
              <Image src={Logo} alt="Logo" className="w-[130px] h-auto" />
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:block ml-16">
              <ul className="flex items-center space-x-14 lg:space-x-10">
                {headerNavigation.map((nav: HeaderNavbar, index: number) => (
                  <li key={index}>
                    <Link
                      href={nav.path}
                      className="text-[18px] font-medium text-gray-800 hover:text-yellow-500 transition-colors"
                    >
                      {nav.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Icons */}
          <div className="flex items-center ">
            <button
              onClick={(e) => {
                e.preventDefault();
                const modal = document.getElementById("loginModal");
                modal?.classList.remove("hidden");
              }}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-black text-white hover:bg-yellow-500  transition-all duration-300 ease-in-out
"
            >
              <FaLock />
            </button>
            <button className="group w-14 h-14 flex items-center justify-center bg-black text-white text-[1.3em] relative z-[1] overflow-hidden ml-[-10px] rounded-full transition-all duration-300 ease-in-out hover:bg-yellow-500">
              <span className="absolute top-0 left-[-45px] w-full h-full bg-white rounded-full transition-all duration-300 ease-in-out group-hover:bg-yellow-500"></span>
              <span className="relative z-10">
                <FaSearch />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Uncomment when modal is ready */}
      {/* <LoginModal /> */}
      {/* <HeaderSearchbar isSearch={isSearch} setIsSearch={setIsSearch} /> */}
    </>
  );
};

export default HeaderFour;
