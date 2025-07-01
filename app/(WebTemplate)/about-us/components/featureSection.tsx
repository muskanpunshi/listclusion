"use client";
import React, { useRef } from "react";
import useElementVisibility from "@hooks/useInView";

import Image from "next/image";
import Container from "@components/container";
import Heading from "@components/heading";
import Paragraph from "@components/common/paragraph";

const FeatureSection = () => {
  const ref = useRef(null);
  const isVisible = useElementVisibility(ref);
  return (
    <section ref={ref}>
      <Container className="bg-black/90 px-10 max-sm:!px-4 lg:py-32 py-10 rounded-b-4xl ">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-10">
          <div className={`lg:w-3/5 ${isVisible ? "fade-in-left" : ""}`}>
            <Heading className=" text-white  relative">
              Easily Purchase, Sell, or Lease listings.
              <span className="absolute inline-block  bottom-6">
                <Image
                  src="/template/shape/shape_37.svg"
                  alt=""
                  width={34}
                  height={34}
                  className="max-sm:w-[24px] max-sm:h-[24px] "
                />
              </span>
            </Heading>
          </div>

          <div className={`lg:w-2/5 lg:ml-auto ${isVisible ? "fade-in-right" : ""}`}>
            <Paragraph className="text-white text-2xl leading-normal">
              Your leading real estate advocate, transforming houses into
              dreams. Trust us to expertly guide you home
            </Paragraph>
          </div>
        </div>

        <div className={`md:mt-28 mt-10 ${isVisible?'fade-in-up':''}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
            <div className=" fade-in-up">
              <div className="flex items-center gap-4 ">
                <Image
                  src="/template/icon/icon_40.svg"
                  alt="Property Insurance"
                  width={90}
                  height={90}
                  className="max-sm:w-[50px] max-sm:h-[50px]"
                />
                <div className="text-white">
                  <h5 className="text-lg font-semibold">Property Insurance</h5>
                  <p className="text-sm">
                    Elit esse cillum dol fug nulla tur nos ullamo.
                  </p>
                </div>
              </div>
            </div>

            <div className=" fade-in-up">
              <div className="flex items-center gap-4 ">
                <Image
                  src="/template/icon/icon_41.svg"
                  alt="Easy Payments"
                  width={90}
                  height={90}
                  className="max-sm:w-[50px] max-sm:h-[50px]"
                />
                <div className="text-white">
                  <h5 className="text-lg font-semibold">Easy Payments</h5>
                  <p className="text-sm">
                    quis nostrud exerct ulla security finibus ne derived.
                  </p>
                </div>
              </div>
            </div>

            <div className=" fade-in-up">
              <div className="flex items-center gap-4 ">
                <Image
                  src="/template/icon/icon_42.svg"
                  alt="Quick Process"
                  width={90}
                  height={90}
                  className="max-sm:w-[50px] max-sm:h-[50px]"
                />
                <div className="text-white">
                  <h5 className="text-lg font-semibold">Quick Process</h5>
                  <p className="text-sm">
                    Duis aute irure do reprehe de Cicero&apos;s voluptat velit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default FeatureSection;
