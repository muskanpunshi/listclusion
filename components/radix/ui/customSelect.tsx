"use client";

import * as Select from "@radix-ui/react-select";
import { IoChevronDown } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { cn } from "@utils/index";
import { useFormContext, Controller } from "react-hook-form";
import { FC } from "react";

type DropdownItem = {
  value: string;
  label: string;
};

interface CustomSelectProps {
  name: string;
  mainLabel: string;
  placeHolder: string;
  items: DropdownItem[];
}

const CustomSelect: FC<CustomSelectProps> = ({
  name,
  mainLabel,
  placeHolder,
  items,
}) => {
  const { control, formState } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="w-full">
          {mainLabel && (
            <label className="mb-2 block text-base font-medium text-secondary">
              {mainLabel}
            </label>
          )}

          <Select.Root
            value={field.value}
            onValueChange={(val) => {
              field.onChange(val);
            }}
          >
            <Select.Trigger
              className="inline-flex items-center justify-between w-full rounded-md border border-secondary/40 bg-white text-secondary data-[placeholder]:!text-[#949393] py-4 px-5 text-base focus:outline-none"
              aria-label={placeHolder}
            >
              <Select.Value
                placeholder={placeHolder}
                className="text-secondary"
              />
              <Select.Icon asChild>
                <span className="transition-transform duration-300 ease-in-out data-[state=open]:rotate-180">
                  <IoChevronDown className="h-4 w-4 text-primary" />
                </span>
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content
                className="z-50 min-w-[8rem] overflow-hidden rounded-md border border-secondary/40 bg-white w-full"
                position="popper"
              >
                <Select.Viewport
                  className={cn(
                    "p-1 h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                  )}
                >
                  {items.map((item) => (
                    <Select.Item
                      key={item.value}
                      value={item.value}
                      className="relative flex cursor-pointer select-none outline-none items-center w-full rounded-sm px-4 py-3 text-base text-secondary hover:bg-gray-100 focus:bg-gray-100 hover:text-primary"
                    >
                      <Select.ItemText>{item.label}</Select.ItemText>
                      <Select.ItemIndicator className="absolute right-4">
                        <FaCheck className="h-4 w-4 text-primary" />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>

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

export default CustomSelect;
