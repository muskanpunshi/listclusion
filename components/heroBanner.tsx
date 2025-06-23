"use client";

import Heading from "@components/heading";
import Paragraph from "@components/paragraph";
import Button from "@components/Button";
import Container from "@components/container";
import { FaArrowUpLong } from "react-icons/fa6";

const HeroBanner = () => {
  return (
    <div
      className="relative min-h-[100vh] flex items-center justify-center   bg-top bg-cover bg-no-repeat w-full
 bg-[url(/template/hero-banner.jpg)] px-4 
 "
    >
      <Container className="">
        <div className="flex flex-wrap items-center justify-between max-md:justify-center  ">
          <div className="w-full  lg:w-[50%]  fade-in-left">
            <Heading
              isHeadingH1={true}
              className="font-medium text-text-primary  pr-6 max-xl:pr-4"
            >
              Welcome to LISTCLUSION - your ultimate partner.
            </Heading>
          </div>
          <div className="w-full lg:w-[40%] mt-10 lg:mt-0 fade-in-right  h-full">
            <Paragraph className=" sm:text-[18px] md:text-[24px] lg:text-[28px]  text-text-primary font-normal mb-10 lg:mb-5 leading-[1.6]">
              We connect importers, exporters, local manufacturers, and
              customers, providing a seamless and reliable sourcing experience
              on this platform.
            </Paragraph>
            <Button
              className="hover:bg-primary mt-8 px-8 py-4 max-sm:mt-0 bg-black text-white"
              href="#"
            >
              {" "}
              Contact us <FaArrowUpLong className="rotate-45" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroBanner;
