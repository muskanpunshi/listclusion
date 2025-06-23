"use client";

import Image from "next/image";

import shape1 from "@public/template/shape/shape_51.svg";
import img from "@public/template/img_44.png";
import Heading from "@components/heading";
import Button from "@components/Button";
import Container from "@components/container";

const FooterPromoBanner = () => {
  return (
    <section className=" pt-10  fade-in-up">
      <Container className=" mx-auto px-4">
        <div className="relative z-[1] p-0">
          <div className="flex flex-col md:flex-row  justify-between md:gap-10 gap-1 ">
            <div className="w-full md:w-[50%] py-5 ">
              <Heading className=" font-primary leading-tight">
                Start your Journey <br /> as{" "}
                <span className="font-normal italic">A Consultant.</span>
              </Heading>

              <div className="relative flex flex-wrap items-center gap-4 max-md:gap-1 mt-6  ">
                <Button href="#" className="  mt-2">
                  Become a Consultant
                </Button>
                <Button
                  href="#"
                  className=" border border-primary bg-primary text-white  mt-2"
                >
                  Contact us
                </Button>
                <Image
                  src={shape1}
                  alt=""
                  className="mb-[-30px] w-[80px] hidden lg:block"
                />
              </div>
            </div>

            <div className="w-full md:w-[50%] text-center mt-10 md:mt-0 relative">
              <div className="relative inline-block z-[1] bg-[url('/template/shape/shape_50.svg')] bg-no-repeat bg-cover ]">
                <Image
                  src={img}
                  alt="Consultant Banner"
                  className="mx-auto mt-[-30px]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FooterPromoBanner;
