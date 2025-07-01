// components/StatsCounter.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import useElementVisibility from "@hooks/useInView";
import CountUp from "react-countup";
import Paragraph from "./common/paragraph";
import Container from "./container";

type StatItem = {
  id: number;
  end: number;
  suffix: string;
  label: string;
  decimals?: number;
};

const stats: StatItem[] = [
  {
    id: 1,
    end: 720,
    suffix: "k+",
    label: "Project handover"
  },
  {
    id: 2,
    end: 2.3,
    suffix: "%",
    label: "Low Interest",
    decimals: 1
  },
  {
    id: 3,
    end: 2.9,
    suffix: "mil+",
    label: "Happy customers",
    decimals: 1
  }
];

const HomeCounter = () => {
  const ref = useRef(null);
  const isVisible = useElementVisibility(ref);

  return (
    // <div className="relative  w-full bg-[url('/template/shape/shape_28.svg')] bg-no-repeat bg-center bg-cover py-[20px] px-[20px] max-md:p-[12px]  ">
      <div
        ref={ref}
        className="flex  justify-center flex-wrap  md:py-10 pt-4 pb-8  max-md:gap-4 bg-white "
      >
        {stats.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-[20%] text-center mt-6"
          >
            <div className="lg:text-7xl sm:text-6xl text-4xl  font-medium text-secondary">
              {isVisible ? (
                <CountUp
                  end={item.end}
                  suffix={item.suffix}
                  duration={2}
                  delay={0}
                  decimals={item.decimals || 0}
                />
              ) : (
                `0${item.suffix}`
              )}
            </div>
            <Paragraph className="text-lg mt-3 text-secondary">
              {item.label}
            </Paragraph>
          </div>
        ))}
      </div>
    // </div>
  );
};

export default HomeCounter;
