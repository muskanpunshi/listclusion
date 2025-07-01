import React from "react";
import { FieldError } from "react-hook-form";

function ErrorText({ message }: { message?: any }) {
  return (
    <span className="text-red-500 text-xs pt-1 block  absolute left-0  -bottom-[17px] font-normal">
      {message}
    </span>
  );
}

export default ErrorText;
