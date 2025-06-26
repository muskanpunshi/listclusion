import { cn } from "@utils/index";
import React, { ReactNode } from "react";
import Image from "next/image";
import titleShape from "@public/template/shape/title_shape_03.svg";

export default function PatternHeading({
  children,
  className,
  isHeadingH1 = false
}: {
  isHeadingH1?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return isHeadingH1 ? (
    <h1
      className={`relative font-primary text-[70px] max-lg:text-[40px] max-sm:text-[36px] leading-[1.25] capitalize text-secondary font-medium ${className}`}
    >
      {children}
      <Image src={titleShape} alt="" className="absolute -z-[1] bottom-[-2%] left-1/2 translate-x-[-50%] max-w-full h-auto block" />
    </h1>
  ) : (
    <h2
      className={cn([ 
        "relative font-primary  text-secondary text-[64px] max-xl:text-[48px]  max-lg:text-[36px] max-sm:[24px] font-medium ",
        className
      ])}
    >
      {children}
      <Image src={titleShape} alt="" className="absolute -z-[1] bottom-[-2%] left-1/2 translate-x-[-50%] max-w-full h-auto block" />

    </h2>
  );
}
