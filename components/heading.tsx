import { cn } from "@utils/index";
import React, { ReactNode } from "react";

export default function Heading({
  children,
  className,
  isHeadingH1 = false,
}: {
  isHeadingH1?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return isHeadingH1 ? (
    <h1 className={`font-primary text-[62px] text-white font-[700] ${className}`}>
      {children}
    </h1>
  ) : (
    <h2
      className={cn([
        "font-primary text-[36px] text-white max-md:text-[36px] max-sm:[24px] font-[600] ",
        className,
      ])}
    >
      {children}
    </h2>
  );
}
