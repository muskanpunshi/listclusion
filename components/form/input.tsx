import { cn } from "@utils/index";
import React from "react";
import { useFormContext } from "react-hook-form";

type inputType = {
  placeholder?: string;
  value?: string;
  type?: string;
  classes?: string;
  defaultValue?: string;
  name: string;
  label?: string;

  onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
};

function Input({
  placeholder,
  value,
  type,
  classes,
  defaultValue = "",
  name,
  label,

  onFocus
}: inputType) {
  const {
    register,
    formState: { errors, touchedFields }
  } = useFormContext();
  return (
    <>
      <div className="relative">
        {label && <label className="block mb-1 text-secondary capitalize font-medium">{label}</label>}

        <input
          type={type ?? "text"}
          className={cn([
            `bg-white text-base text-secondary block w-full border border-secondary/40  rounded-md py-4 px-5  focus:outline-none focus:shadow-none placeholder:text-[#949393] 
              `,
            classes
          ])}
          onFocus={onFocus}
          defaultValue={defaultValue}
          placeholder={placeholder}
          value={value}
          {...register(name)}
        />
        {errors[name] && (
          <span className="text-red-500 text-xs pt-1 block  absolute -bottom-[17px]">
            {errors[name]?.message as string}
          </span>
        )}
      </div>
    </>
  );
}

export default Input;
