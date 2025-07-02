import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Heading from "@components/common/heading";
import Paragraph from "@components/common/paragraph";
import Container from "@components/container";
import Logo from "@public/template/logo.png";
import Image from "next/image";
import Link from "next/link";
import { footerSections } from "../routes/navigation";

export default function Footer() {
  return (
    <footer className="bg-dark-background w-full ">
      {/* <div className="max-w-full mx-auto px-10 max-md:px-4 py-12 border-b border-neutral-800">
        <div className="flex flex-col lg:flex-row justify-between max-md:py-6  items-center gap-6">
          <div>
            <Heading className="text-white text-[44px] ">
              Our Newsletter
            </Heading>
            <Paragraph className="text-[18px] text-grey mt-2">
              Get instant news by subscribe to our newsletter
            </Paragraph>
          </div>

          <div className="w-auto max-md:w-full">
            <div className="relative w-[400px] max-md:w-full  ">
              <input
                type="email"
                placeholder="Email address"
                className="w-full py-5 pl-6 pr-[20px] bg-white text-secondary  focus:outline-none"
              />
              <button className="cursor-pointer text-[16px] absolute top-1/2 right-2 -translate-y-1/2 bg-primary hover:bg-[#e6b800] text-white px-5 py-3  font-semibold">
                Get Started
              </button>
            </div>

            <Paragraph className="text-grey mt-2 text-left">
              Already a Agent?{" "}
              <a href="#" className=" text-primary underline">
                Sign in.
              </a>
            </Paragraph>
          </div>
        </div>
      </div> */}

      <Container className="max-w-full mx-auto px-8 max-md:px-6 py-16 grid grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="mb-7">
            <Link href="/">
              <Image src={Logo} alt="Logo" className="w-[110px]  h-auto" />
            </Link>
          </div>
          <Paragraph className="opacity-75 leading-relaxed  mb-[40px] text-white">
            25 B1 31 Street Off Khayaban e Shamsheer DHA Phase V Ext<br/> karachi
            Pakistan
          </Paragraph>
          <div className="flex space-x-4 mt-4">
            <Link
              href={"/"}
              className="bg-[#ffffff17] text-white transition-all duration-400 ease-in-out cursor-pointer w-10 h-10 hover:text-primary hover:bg-white flex items-center justify-center rounded-full"
            >
              <FaFacebookF />
            </Link>
            <Link
              href={"/"}
              className="bg-[#ffffff17] text-white transition-all duration-400 ease-in-out cursor-pointer w-10 h-10 hover:text-primary hover:bg-white flex items-center justify-center rounded-full"
            >
              <FaTwitter />
            </Link>
            <Link
              href={"/"}
              className="bg-[#ffffff17] text-white transition-all duration-400 ease-in-out cursor-pointer w-10 h-10 hover:text-primary hover:bg-white flex items-center justify-center rounded-full"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
        <>
          {footerSections.map((section, index) => (
            <div key={index} className="">
              <Paragraph className="font-semibold text-white mb-4 text-[24px] max-md:text-[18px] max-sm:text-[18px]">
                {section.title}
              </Paragraph>
              <ul className="space-y-2 text-grey">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-[18px] max-md:text-[14px] my-5 hover:text-primary transition-colors duration-200"
                  >
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
      </Container>

      <div className="text-center text-grey border-t border-neutral-800 py-4">
        Copyright @2025 Listclusion.
      </div>
    </footer>
  );
}
