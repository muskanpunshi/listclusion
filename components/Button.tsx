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
  children
}) => {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 px-6 py-4  font-medium transition-all duration-300 ease-in-out ";

  if (iconOnly) {
    return (
      <Link href={href}>
        <p
          className={cn(
            "w-10 h-10 rounded-full bg-black text-white flex items-center justify-center",
            className
          )}
        >
          {children}
        </p>
      </Link>
    );
  }

  return (
    <Link href={href}>
      <p className={cn(baseStyle, "bg-black text-white", className)}>
        {children}
      </p>
    </Link>
  );
};

export default Button;
