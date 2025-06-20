import { cn } from "@utils/index";
import React, { ReactNode } from "react";

export default function Heading({
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
      className={`font-primary text-[70px] max-lg:text-[40px] max-sm:text-[36px] leading-[1.25] capitalize text-text-primary font-medium ${className}`}
    >
      {children}
    </h1>
  ) : (
    <h2
      className={cn([
        "font-primary  text-text-primary text-[64px] max-xl:text-[48px]  max-lg:text-[36px] max-sm:[24px] font-medium ",
        className
      ])}
    >
      {children}
    </h2>
  );
}
