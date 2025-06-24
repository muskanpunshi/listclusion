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
  const baseStyle =
    "inline-flex items-center justify-center gap-2 px-6 py-3 min-w-[150px]  font-medium transition-all duration-300 ease-in-out ";

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
        "w-fit bg-black hover:bg-primary text-white flex items-center justify-center transition-all duration-300 ease-in-out ",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

export default Button;
