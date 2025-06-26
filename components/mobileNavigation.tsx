import Logo from "@public/template/logo-1.png";
import Image from "next/image";
import Link from "next/link";
import { HeaderNavbar, headerNavigation } from "../routes/navigation";
import MenuButton from "./menuButton";

const MobileNavigation = ({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setIsOpen: any;
}) => {
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
          <Link href="/" className="flex items-center mb-10 px-7">
            <Image src={Logo} alt="Logo" className="w-[100px] h-auto" />
          </Link>

          {/* Navigation Items */}
          <ul className=" w-full ">
            {headerNavigation.map((nav: HeaderNavbar, index: number) => (
              <li key={index} className="w-full ">
                <Link
                  href={nav.path}
                  className="block font-medium text-secondary hover:text-primary px-[12px] py-[10px] transition-colors border-t border-dashed border-[rgba(0,0,0,0.1)] h-12 "
                  onClick={() => setIsOpen(false)}
                >
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
