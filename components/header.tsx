"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import UseSticky from "@hooks/UseSticky";
import { FaLock } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Logo from "@public/template/logo1.png";
import { HeaderNavbar, headerNavigation } from "../routes/navigation";
import MobileNavigation from "./mobileNavigation";
import { usePathname } from "next/navigation";
import { feature_data } from "@utils/data";
import { useSmartSubmenuPosition } from "@hooks/SmartSubmenu";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Button from "./common/Button";
import { FaArrowUpLong } from "react-icons/fa6";

const Header = () => {
  const { sticky } = UseSticky();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { ref, position } = useSmartSubmenuPosition();
  return (
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
            <Image src={Logo} alt="Logo" className="w-[60px]  h-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block ml-[90px]">
            <ul className="flex items-center space-x-14 lg:space-x-10">
              {headerNavigation.map((nav: HeaderNavbar, index: number) => {
                const isActive = pathname === nav.path;
                return (
                  <li key={index} className="group relative">
                    {nav.children ? (
                      <>
                        <button
                          className={`flex text-secondary items-center gap-2 text-[18px] font-medium  hover:text-primary transition`}
                        >
                          {nav.label}
                          <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* Dropdown */}
                        <ul className="absolute  left-0 top-full mt-2 min-w-[220px] bg-white rounded-md shadow-lg z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 [&>li:last-child>a]:pb-3 [&>li:last-child>a]:rounded-md ">
                          {nav.children.map((item, idx) => {
                            return (
                              <li
                                key={idx}
                                className="relative group/item "
                                ref={ref}
                              >
                                <Link
                                  href={item.path ?? ""}
                                  className="flex items-center justify-between px-5 py-3 text-[16px] text-text-primary hover:text-primary hover:bg-gray-100 whitespace-nowrap transition  "
                                >
                                  {item.label}
                                  {item?.child && (
                                    <ChevronRightIcon className="ml-2 w-4 h-4 text-gray-400 group-hover/item:text-primary transition" />
                                  )}
                                </Link>

                                {item?.child?.length > 0 && (
                                  <ul
                                    className={`absolute left-full ml-1 w-[220px] bg-white rounded-md shadow-lg opacity-0 invisible group-hover/item:visible group-hover/item:opacity-100 transition-all duration-300 z-50 ${
                                      position === "top" ? "bottom-0" : "top-0"
                                    } `}
                                  >
                                    {item?.child?.map((sub, subIdx) => (
                                      <li key={subIdx}>
                                        <Link
                                          href={sub?.path}
                                          className="block hover:text-primary px-5 py-3 text-[15px] hover:bg-gray-100 transition"
                                        >
                                          {sub.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </>
                    ) : (
                      <Link
                        href={nav.path || "#"}
                        className={`text-[18px] font-medium hover:text-primary transition ${
                          isActive ? "text-primary" : "text-secondary"
                        }`}
                      >
                        {nav.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Right Icons */}
        <div className="flex items-center  gap-2">
          {/* <Button className="!text-sm font-medium">Register As Company</Button>
          <Button className="!text-sm font-medium">Register As User</Button> */}

          {/* <button className="w-14 h-14 max-md:w-10 max-md:h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-primary transition-all duration-300 ease-in-out">
            <FaLock />
          </button> */}
          {/* <button className="group w-14 h-14 max-md:w-10 max-md:h-10 flex items-center justify-center bg-black text-white text-[1.3em] relative z-[1] overflow-hidden ml-[-18px] rounded-full transition-all duration-300 ease-in-out hover:bg-primary">
            <span className="absolute top-0 left-[-45px] max-md:left-[-35px] w-full h-full bg-white rounded-full transition-all duration-300 ease-in-out group-hover:bg-primary"></span>
            <span className="relative z-10">
              <FaSearch />
            </span>
          </button> */}
          <Button
            className="hover:bg-primary px-5 py-2 bg-black text-white text-[14px] max-sm:text-[12px] max-sm:px-3 rounded-full max-sm:hidden"
            href="/register-company"
          >
            {" "}
            Register Your Company <FaArrowUpLong className="rotate-45 ml-3 max-sm:ml-1" />
          </Button>
          {/* Uncomment when ready */}
          <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
