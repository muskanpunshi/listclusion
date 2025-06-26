import React, { ReactNode, MouseEventHandler } from "react";
import { cn } from "@utils/index";
import Link from "next/link";

type LinkButtonProps = {
  href?: string;
  className?: string;
  children?: ReactNode;
  type?: "button" | "link";
  buttonType?: "button" | "submit";
  isLoading?: boolean;

  onClick?:
    | MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>
    | undefined;
};

const Button: React.FC<LinkButtonProps> = ({
  href,
  type = "link",
  className = "",
  buttonType = "button",
  onClick,
  isLoading,

  children
}) => {
  return (
    <>
      {type === "link" ? (
        <Link
          className={cn(
            "w-fit px-8 py-4  bg-black hover:bg-primary text-white font-medium flex items-center justify-center transition-all duration-300 ease-in-out ",
            className
          )}
          href={href}
        >
          {children}
        </Link>
      ) : (
        <button
          type={buttonType}
          onClick={onClick}
          disabled={isLoading}
          className={cn([
            "font-primary  uppercase cursor-pointer w-fit text-secondary font-semibold py-[12px] px-6  inline-flex  2xl:py-[14px] whitespace-nowrap  justify-center items-center gap-2 disabled:bg-opacity-90 disabled:cursor-default relative after:absolute after:w-full after:h-full after:top-0 after:left-0  after:z-[1]",
            className
          ])}
        >
          <span className="relative z-10 leading-[1]">
            {isLoading && (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3d3838" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader-circle-icon lucide-loader-circle h-4 w-4 absolute -left-[22px] -top-[2px] animate-spin transition-all text-primary-color"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
            
            )}
            {children}
          </span>
        </button>
      )}
    </>
  );
};

export default Button;
