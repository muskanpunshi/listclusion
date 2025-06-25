import React, { ReactNode } from "react";
import { cn } from "@utils/index";
import Link from "next/link";

type LinkButtonProps = {
  href: string;
  iconOnly?: boolean;
  className?: string;
  children?: ReactNode;
};

const Button: React.FC<LinkButtonProps> = ({
  href,

  iconOnly = false,

  className = "",
  children,
}) => {
 

  if (iconOnly) {
    return (
      <Link
        className={cn(
          "w-full rounded-full bg-black hover:bg-primary text-white flex items-center justify-center transition-all duration-300 ease-in-out ",
          className
        )}
        href={href}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      className={cn(
        "w-fit px-8 py-4  bg-black hover:bg-primary text-white flex items-center justify-center transition-all duration-300 ease-in-out ",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

export default Button;
