"use client";
import React, { useRef } from "react";

import Heading from "@components/common/heading";
import Paragraph from "@components/common/paragraph";
import Container from "@components/container";
import Image from "next/image";
import Link from "next/link";
import titleShape from "@public/template/shape/title_shape_03.svg";
import Button from "@components/common/Button";
import CountUp from "react-countup";
import useElementVisibility from "@hooks/useInView";

const Introduction = () => {
  const ref = useRef(null);
  const isVisible = useElementVisibility(ref);
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
                <Heading className="text-[56px] leading-tight">
                  Your One-Stop Reliable Source for {""}
                  <span className="relative inline-block">
                   {""} Interior
                    <Image
                      src={titleShape}
                      alt=""
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2"
                    />
                  </span>
                  {""} Solutions
                </Heading>
                <Paragraph className="text-lg mt-4">
                  There’s more to discover as you explore Listclusion. Find the people, products, and partnerships you need to bring your projects to life with confidence.
                </Paragraph>
                <Button
                  href="/contact"
                  className=" mt-14 bg-primary hover:bg-[#d1af32] text-white font-medium  rounded uppercase"
                >
                  Contact Us
                </Button>
              </div>

              <div className="border-t pt-10  ">
                <div className="flex flex-wrap" ref={ref}>
                  <div className="w-1/2 mt-5">
                    <div>
                      <Paragraph className="text-6xl font-medium text-secondary">
                        {isVisible ? (
                          <CountUp
                            end={200}
                            decimals={0}
                            suffix="+"
                            duration={1.5}
                            delay={0}
                          />
                        ) : (
                          "0.0"
                        )}
                      </Paragraph>
                      <Paragraph className="text-lg text-secondary my-2">
                       Categories
                      </Paragraph>
                    </div>
                  </div>
                  <div className="w-1/2 mt-5">
                    <div>
                      <Paragraph className="text-6xl font-medium text-secondary">
                        {isVisible ? (
                          <CountUp
                            end={640}
                            decimals={0}
                            suffix="+"
                            duration={1.5}
                            delay={0}
                          />
                        ) : (
                          "0.0"
                        )}
                      </Paragraph>

                      <Paragraph className="text-lg text-secondary my-2">
                        Listing
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-full w-full bg-[url('/template/shape/shape_28.svg')] bg-no-repeat bg-center bg-cover py-[40px] px-[36px] max-md:p-[12px] fade-in-right  ">
            <div className="py-5 px-8 bg-white rounded-md">
              <div className="pt-5 pb-3">
                <Paragraph className="text-3xl my-2 font-medium">
                  Who we are?
                </Paragraph>
                <Paragraph className="text-lg my-4 leading-relaxed">
                 Your trusted one-stop platform for all things interior and construction. We connect architects, designers, consultants, contractors, and manufacturers with importers, exporters, and customers, making sourcing reliable and effortless for your projects.
                </Paragraph>
              </div>

              <div className="py-3 border-t">
                <Paragraph className="text-3xl my-2 font-medium">
                  Our Mission
                </Paragraph>
                <Paragraph className="text-lg my-4 leading-relaxed">
                 At Listclusion, we aim to simplify and secure sourcing by bringing all your project needs into one trusted, transparent, and easy‑to‑use platform.
                </Paragraph>
              </div>
              <div className="py-3 border-t">
                <Paragraph className="text-3xl my-2 font-medium">
                  Our vision
                </Paragraph>
                <Paragraph className="text-lg my-4 leading-relaxed">
                  To be Pakistan’s go‑to, one‑stop platform where professionals connect, collaborate, and build with confidence.
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
