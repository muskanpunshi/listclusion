"use client";

import Heading from "./heading";
import Paragraph from "./paragraph";
import Button from "./Button";
import { FaArrowUpLong } from "react-icons/fa6";

const HeroBanner = () => {
  return (
    <div
      className="relative min-h-[100vh] flex items-center   bg-top bg-cover bg-no-repeat
 bg-[url(/template/conwood_banner.jpg)] px-4 max-md:px-4
 "
    >
      <div className="max-w-[1440px]  px-0 ">
        <div className="flex flex-wrap items-center justify-between ">
          <div className="w-full  lg:w-[60%]  fade-in-left">
            <Heading className="sm:text-[48px] md:text-[58px] lg:text-[72px] xl:text-[90px] font-medium text-black leading-[1.25] capitalize pr-6">
              Welcome to ListClusion - your ultimate partner.
            </Heading>
          </div>
          <div className="w-full lg:w-[40%] mt-10 lg:mt-0 fade-in-right  h-full">
            <Paragraph className=" sm:text-[18px] md:text-[24px]   text-black font-normal mb-10 lg:mb-5 leading-[1.6]">
              We connect importers, exporters, local manufacturers, and
              customers, providing a seamless and reliable sourcing experience
              on this platform.
            </Paragraph>
            <Button className="hover:bg-primary mt-8 max-sm:mt-0" href="#">
              {" "}
              Contact us <FaArrowUpLong className="rotate-45" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
