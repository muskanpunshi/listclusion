"use client";

import * as Checkbox from "@radix-ui/react-checkbox";
import { FaCheck } from "react-icons/fa6";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface SingleSelectCheckboxProps {
  label?: string;
  name: string;
  options: string[];
}

const SingleSelectCheckbox: React.FC<SingleSelectCheckboxProps> = ({
  label,
  name,
  options,
}) => {
  const { control, formState } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div>
          {label && (
            <p className="mb-4 text-base font-medium text-secondary">
              {label}
            </p>
          )}

          <ul className="flex flex-wrap gap-x-6 gap-y-4">
            {options.map((option, index) => {
              const isChecked = field.value === option;
              const id = `${name}-${index}`;

              return (
                <li key={option} className="flex items-center gap-2">
                  <Checkbox.Root
                    id={id}
                    name={name}
                    checked={isChecked}
                    onCheckedChange={() => field.onChange(option)}
                    className="w-5 h-5 shrink-0 rounded border border-secondary/40 bg-white data-[state=checked]:bg-primary data-[state=checked]:border-primary flex items-center justify-center focus:outline-none"
                  >
                    <Checkbox.Indicator>
                      <FaCheck className="text-white w-4 h-4" />
                    </Checkbox.Indicator>
                  </Checkbox.Root>

                  <label
                    htmlFor={id}
                    className="text-base text-secondary font-medium cursor-pointer"
                  >
                    {option}
                  </label>
                </li>
              );
            })}
          </ul>

          {formState.errors[name] && (
            <p className="text-red-500 text-sm mt-1">
              {formState.errors[name]?.message as string}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default SingleSelectCheckbox;
