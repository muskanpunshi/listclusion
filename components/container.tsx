import { cn } from "@utils/index";
import React, { JSX } from "react";

function Container({
  children,
  className,
}: {
  children: JSX.Element | JSX.Element[];
  className?: string;
}) {
  return (
    <div
      className={cn([
        "w-full max-w-[1440px]  grid mx-auto max-sm:w-[90%] max-sm:px-0",
        className,
      ])}
    >
      {children}
    </div>
  );
}

export default Container;
