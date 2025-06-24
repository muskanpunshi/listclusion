import { cn } from "@utils/index";
import React, { ReactNode } from "react";

interface CustomParagraph {
  className?: string;
  children?: ReactNode;
  htmlText?: string;
}

const Paragraph = ({ className, children, htmlText }: CustomParagraph) => {
  return children ? (
    <p
      className={cn([
        "font-primary  text-[16px]  ",
        className
      ])}
    >
      {children}
    </p>
  ) : (
    <div
      dangerouslySetInnerHTML={{ __html: htmlText ?? "" }}
      className={cn([
        "font-primary   text-[16px] max-md:text-[14px]",
        className
      ])}
    ></div>
  );
};

export default Paragraph;
