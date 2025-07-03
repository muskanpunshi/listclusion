"use client";
import Logo from "@public/template/logo1.png";
import Image from "next/image";
import Link from "next/link";
import { HeaderNavbar, headerNavigation } from "../routes/navigation";
import MenuButton from "./menuButton";
import { useState } from "react";
import { ChevronRightIcon } from "@radix-ui/react-icons";

const MobileNavigation = ({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setIsOpen: any;
}) => {
  const NavItem = ({ item, level = 0 }) => {
    const [isChildOpen, setIsChildOpen] = useState(false);
    const hasChildren = item.children && item.children.length > 0;

    const toggle = () => {
      setIsChildOpen((prev) => !prev);
    };

    return (
      <li className="w-full">
        {hasChildren ? (
          <>
            <button
              onClick={toggle}
              className="w-full flex items-center justify-between font-medium text-secondary hover:text-primary px-[12px] py-[10px] transition-colors border-t border-dashed border-[rgba(0,0,0,0.1)]"
            >
              {item.label}
              <ChevronRightIcon
                className={`ml-2 w-4 h-4 text-gray-400 transition-transform ${
                  isChildOpen ? "rotate-90 text-primary" : ""
                }`}
              />
            </button>
            {isChildOpen && (
              <ul className={`ml-${(level + 1) * 2} transition-all`}>
                {item.children.map((child, idx) => (
                  <NavItem key={idx} item={child} level={level + 1} />
                ))}
              </ul>
            )}
          </>
        ) : (
          <Link
            href={item.path ?? ""}
            onClick={() => setIsOpen(false)}
            className="block font-medium text-secondary hover:text-primary px-[12px] py-[10px] transition-colors border-t border-dashed border-[rgba(0,0,0,0.1)]"
          >
            {item.label}
          </Link>
        )}
      </li>
    );
  };

  const normalizeCategories = (items) =>
    items.map((item) => {
      const children = item.children || item.child;
      return {
        ...item,
        children: children ? normalizeCategories(children) : undefined
      };
    });
  const normalizedCategories = normalizeCategories(headerNavigation);

  return (
    <div className="lg:hidden ">
      <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <div
        className={`fixed top-0 left-0 h-screen z-[1000] overflow-y-auto transition-all duration-300 
    bg-white 
    max-w-[calc(100vw-60px)] w-[320px] 
    px-0 py-4 
    ${isOpen ? "translate-x-0" : "-translate-x-full"} 
    lg:hidden`}
      >
        <div className="">
          {/* Logo */}
          <Link href="/" className="flex items-center mb-5 px-2">
            <Image src={Logo} alt="Logo" className="w-[60px] h-auto" />
          </Link>

          {/* Navigation Items */}
          <ul className=" w-full ">
            {/* {headerNavigation.map((nav: HeaderNavbar, index: number) => (
              <li key={index} className="w-full ">
                <Link
                  href={nav?.path??""}
                  className="block font-medium text-secondary hover:text-primary px-[12px] py-[10px] transition-colors border-t border-dashed border-[rgba(0,0,0,0.1)] h-12 "
                  onClick={() => setIsOpen(false)}
                >
                  {nav.label}
                </Link>
              </li>
            ))} */}
            {normalizedCategories.map((nav, index) => (
              <NavItem key={index} item={nav} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
