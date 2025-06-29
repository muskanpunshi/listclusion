"use client";

import Heading from "@components/common/heading";
import Paragraph from "@components/common/paragraph";
import Container from "@components/container";
import Image from "next/image";
import Link from "next/link";
import titleShape from "@public/template/shape/title_shape_03.svg";
import Button from "@components/common/Button";

const Introduction = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className={`fade-in-left h-full`}>
            <div className="lg:me-16 flex flex-col justify-around h-full">
              <div className="mb-[60px] lg:mb-[40px]">
                <Paragraph className=" font-medium uppercase text-primary mb-2 tracking-widest">
                  About us
                </Paragraph>
                <Heading className=" leading-tight">
                  Secure your {""}
                  <span className="relative inline-block">
                    family&apos;s
                    <Image
                      src={titleShape}
                      alt=""
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2"
                    />
                  </span>
                  {""} Dream home.
                </Heading>
                <Paragraph className="text-lg mt-4">
                  Our founders Dustin Moskovitz and Justin Rosenstein met while
                  leading Engineering.
                </Paragraph>
                <Button
                  href="/contact"
                  className=" mt-14 bg-primary hover:bg-[#d1af32] text-white font-medium  rounded uppercase"
                >
                  Contact Us
                </Button>
              </div>

             
              <div className="border-t pt-10  ">
                <div className="flex flex-wrap">
                  <div className="w-1/2 mt-5">
                    <div>
                      <Paragraph className="text-6xl font-medium text-secondary">
                        1.2%
                      </Paragraph>
                      <Paragraph className="text-lg text-secondary my-2">
                        Low interest rate
                      </Paragraph>
                    </div>
                  </div>
                  <div className="w-1/2 mt-5">
                    <div>
                      <Paragraph className="text-6xl font-medium text-secondary">
                        $1.3b+
                      </Paragraph>

                      <Paragraph className="text-lg text-secondary my-2">
                        Cumulative trading volume
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        
          <div className="relative h-full w-full bg-[url('/template/shape/shape_28.svg')] bg-no-repeat bg-center bg-cover py-[40px] px-[36px] max-md:p-[12px]  ">
            <div className="py-5 px-8 bg-white rounded-md">
              <div className="pt-5 pb-3">
                <Paragraph className="text-3xl my-2 font-medium">
                  Who we are?
                </Paragraph>
                <Paragraph className="text-lg my-4 leading-relaxed">
                  Our founders Dustin Moskovitz & Justin Rosenstein met leading
                  Engineering teams at Facebook. As operations scaled, they grew
                  frustrated by how difficult coordinate
                </Paragraph>
              </div>

              <div className="py-3 border-t">
                <Paragraph className="text-3xl my-2 font-medium">
                  Our Mission
                </Paragraph>
                <Paragraph className="text-lg my-4 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod incididunt ut labore et dolore aliqua.
                </Paragraph>
              </div>
              <div className="py-3 border-t">
                <Paragraph className="text-3xl my-2 font-medium">
                  Our vision
                </Paragraph>
                <Paragraph className="text-lg my-4 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod incididunt ut labore et dolore aliqua.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Introduction;
