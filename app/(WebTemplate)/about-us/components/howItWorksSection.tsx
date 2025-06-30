"use client";

import Heading from "@components/common/heading";
import Container from "@components/container";
import Image from "next/image";
import titleShape from "@public/template/shape/title_shape_03.svg";
import step1 from "@public/template/shape/step1.svg";
import step2 from "@public/template/shape/step2.svg";
import step3 from "@public/template/shape/step3.svg";
import arrow from "@public/template/shape/arrow.svg";

import Paragraph from "@components/common/paragraph";

const HowItWorksSection = () => {
  return (
    <section className="relative z-[1]">
      <Container className="container mx-auto !px-4  lg:py-32 py-14 bg-[#e5e5e5]">
        <div className="flex justify-center">
          <div className="xl:w-8/12 text-center mb-[35px] lg:mb-[20px]">
            <Heading className="leading-normal ">
              We’re here to help you get your{" "}
              <span className="relative inline-block">
                dream home
                <Image
                  src={titleShape}
                  alt=""
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2"
                />
              </span>
            </Heading>
            <Paragraph className="text-[24px] mt-4">
              It’s easy to start with us with these simple steps
            </Paragraph>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full ">
            <div className=" fade-in-up relative flex  justify-center flex-wrap">
              {/* Step 1 */}
              <div className="w-full sm:w-1/2 lg:w-1/3 mt-10 text-center">
                <div >
                  <Image
                    src={step1}
                    alt="Create Account"
                    className="mx-auto w-[220px] max-xl:w-[150px]"

                  />
                  <h5 className="mt-[50px] lg:mt-[30px] mb-[15px] font-semibold text-xl">
                    Create Account
                  </h5>
                  <Paragraph className="px-4 xl:px-8 text-gray-600">
                    It’s very easy to open an account and start your journey.
                  </Paragraph>
                </div>
              </div>

              {/* Step 2 */}
              <div className="  w-full sm:w-1/2 lg:w-1/3 mt-10 text-center relative before:absolute before:top-[90px] before:left-[-90px]  before:content-[url('/template/shape/arrow.svg')] after:absolute after:top-[90px] after:left-auto after:right-[-72px]  after:content-[url('/template/shape/arrow.svg')] max-lg:before:content-none max-lg:after:content-none">
                <div className=" relative">
                  <Image
                    src={step2}
                    alt="Find Home"
                    className="mx-auto w-[220px] max-xl:w-[150px]"
                  />
                  <h5 className="mt-[50px] lg:mt-[30px] mb-[15px] font-semibold text-xl">
                    Find Home
                  </h5>
                  <Paragraph className="px-4 xl:px-8 text-gray-600">
                    Complete your profile with all the info to get attention of
                    client.
                  </Paragraph>
                </div>
              </div>

              {/* Step 3 */}
              <div className="w-full sm:w-1/2 lg:w-1/3 mt-10 text-center">
                <div >
                  <Image
                    src={step3}
                    alt="Quick Process"
                    className="mx-auto w-[220px] max-xl:w-[150px]"
                  />
                  <h5 className="mt-[50px] lg:mt-[30px] mb-[15px] font-semibold text-xl">
                    Quick Process
                  </h5>
                  <Paragraph className="px-4 xl:px-8 text-gray-600">
                    Apply &amp; get your preferable jobs with all the
                    requirements and get it.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
