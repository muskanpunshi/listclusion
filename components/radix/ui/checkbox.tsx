// components/form/MultiCheckboxGroup.tsx
import * as Checkbox from "@radix-ui/react-checkbox";
import { FaCheck } from "react-icons/fa6";

import React from "react";

interface MultiCheckboxGroupProps {
  label?: string;
  name: string;
  options: string[];
  selectedValues: string[];
  onChange: (selected: string[]) => void;
}

const MultiCheckboxGroup: React.FC<MultiCheckboxGroupProps> = ({
  label,
  name,
  options,
  selectedValues,
  onChange,
}) => {
  const handleChange = (value: string) => {
    const updated = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    onChange(updated);
  };

  return (
    <div>
      <ul className="flex flex-wrap gap-x-6 gap-y-4">
        {options.map((option, index) => {
          const isChecked = selectedValues.includes(option);
          const id = `${name}-${index}`;
          return (
            <li key={option} className="flex items-center gap-2">
              <Checkbox.Root
                id={id}
                className="w-5 h-5 shrink-0 rounded border border-gray-300 bg-white data-[state=checked]:bg-primary data-[state=checked]:border-primary flex items-center justify-center focus:outline-none"
                checked={isChecked}
                onCheckedChange={() => handleChange(option)}
              >
                <Checkbox.Indicator>
                  <FaCheck className="text-white w-4 h-4" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label
                htmlFor={id}
                className="text-base text-secondary cursor-pointer"
              >
                {option}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MultiCheckboxGroup;
