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
          <div className={`fade-in-left`}>
            <div className="lg:me-16">
              {/* Title */}
              <div className="mb-[60px] lg:mb-[40px]">
                <Paragraph className=" font-medium uppercase text-primary mb-2 tracking-widest">
                  About us
                </Paragraph>
                <Heading className="font-bold leading-tight">
                  Secure your {""}
                  <span className="relative inline-block">
                    family&apos;s 
                    <Image
                      src={titleShape}
                      alt=""
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2"
                    />
                  </span>
                  {""}  Dream home.
                </Heading>
                <Paragraph className="text-lg mt-4">
                  Our founders Dustin Moskovitz and Justin Rosenstein met while
                  leading Engineering.
                </Paragraph>
              </div>

              {/* Button */}
              <Button href="/contact"
              className=" mt-8 bg-primary hover:bg-[#d1af32] text-white font-medium py-3 rounded uppercase"
              >
                Contact Us
              </Button>

              {/* Counters */}
              <div className="border-t pt-10 mt-[65px] md:pt-[10px] md:mt-[40px]">
                <div className="flex flex-wrap">
                  <div className="w-1/2 mt-5">
                    <div>
                      <div className="text-2xl font-medium text-gray-900">
                        1.2%
                      </div>
                      <span className="text-sm text-gray-700">
                        Low interest rate
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 mt-5">
                    <div>
                      <div className="text-2xl font-medium text-gray-900">
                        $1.3b+
                      </div>
                      <span className="text-sm text-gray-700">
                        Cumulative trading volume
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full px-4 animate-fadeInRight">
            <div className="bg-gray-100 p-8 md:mt-10 rounded-lg">
              <h5 className="text-xl font-semibold">Who we are?</h5>
              <p className="text-lg leading-relaxed mt-5">
                Our founders Dustin Moskovitz &amp; Justin Rosenstein met
                leading Engineering teams at Facebook. As operations scaled,
                they grew frustrated by how difficult coordinate
              </p>
              <h5 className="text-xl font-semibold mt-8 border-t pt-6">
                Our Mission
              </h5>
              <p className="text-lg leading-relaxed mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod incididunt ut labore et dolore aliqua.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Introduction;
