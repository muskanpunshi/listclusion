import { cn } from "@utils/index";
import React from "react";
import { FieldError } from "react-hook-form";

function ErrorText({
  message,
  errorClassName,
}: {
  message?: any;
  errorClassName?: string;
}) {
  return (
    <span
      className={cn([
        "text-red-500 text-xs pt-1 block  absolute left-0  -bottom-[17px] font-normal ",
        errorClassName,
      ])}
    >
      {message}
    </span>
  );
}

export default ErrorText;
