import { cn } from "@utils/index";
import React, { ReactNode } from "react";

interface CustomParagraph extends React.HTMLAttributes<HTMLElement>{
  className?: string;
  children?: ReactNode;
  htmlText?: string;
}

const Paragraph = ({ className, children, htmlText, ...props  }: CustomParagraph) => {
  return children ? (
    <p
      className={cn([
        "font-primary  text-[16px] text-secondary ",
        className
      ])}
       {...props}
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
