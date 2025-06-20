"use client";

import Image from "next/image";
import React, { useRef } from "react";

import { FaArrowUpLong } from "react-icons/fa6";
import { featureData } from "@utils/data";
import Heading from "@components/heading";
import Button from "@components/Button";
import useElementVisibility from "@hooks/useInView";
import Container from "@components/container";


const BlockFeature = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isVisible = useElementVisibility(ref);

  return (
    <section
      className={`py-10 lg:py-20  overflow-y-hidden `}
      ref={ref}
    >
      <Container className={` ${isVisible ? "fade-in-up " : ""}`}>
        <div className="flex items-center justify-between flex-wrap gap-4 mb-14">
          <div>
            <Heading className="text-text-primary ">Most Popular</Heading>
          </div>
          <Button
            className=" border border-black text-black bg-white hover:bg-primary hover:border-primary"
            href="#"
          >
            {" "}
            Explore All <FaArrowUpLong className="rotate-45" />
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featureData.map((item) => (
            <div key={item.id} className="text-center">
              <div className="relative group w-full  max-w-[280px] aspect-square mx-auto rounded-full mb-4 ">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={260}
                  height={260}
                  className="object-cover w-full h-full rounded-full"
                />
                <div
                  className="absolute inset-0 rounded-full z-0 
                 bg-black/25 opacity-0 scale-50 
                 transition-all duration-400 
                 group-hover:opacity-100 group-hover:scale-100"
                ></div>
              </div>
              <h5 className="text-lg font-medium font-primary">{item.title}</h5>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BlockFeature;
