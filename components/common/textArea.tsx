import { cn } from "@utils/index";

import React from "react";

import { useFormContext } from "react-hook-form";

function TextArea({
  classes,
  name,
  rows,
  placeholder,
}: {
  classes?: string;
  name: string;
  rows?: number;
  placeholder?: string;
}) {
  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext();
  return (
    <div className="relative">
      <textarea
        rows={rows}
        placeholder={placeholder}
        className={cn([
          "bg-primary-color min-h-36 resize-none text-base  text-secondary bg-white block w-full border border-secondary/40  rounded-md py-4 px-5  focus:outline-none focus:shadow-none placeholder:text-[#949393] ",
          classes,
        ])}
        {...register(name)}
      ></textarea>
      {errors[name] && (
        <span className="text-red-500 text-xs pt-1 block  absolute -bottom-[17px]">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
}

export default TextArea;
