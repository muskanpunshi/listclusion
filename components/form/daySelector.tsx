"use client";
import { Controller } from "react-hook-form";
import { Checkbox } from "@radix-ui/react-checkbox";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const DaysSelector = ({
  control,
  name,
}: {
  control: any;
  name: string;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[]}
      render={({ field }) => (
        <div className="flex flex-wrap gap-4 mt-2">
          {DAYS.map((day) => (
            <div key={day} className="flex items-center gap-2">
              <Checkbox
                id={`${name}-${day}`}
                checked={field.value.includes(day)}
                onCheckedChange={(checked) => {
                  const newValue = checked
                    ? [...field.value, day]
                    : field.value.filter((d: string) => d !== day);
                  field.onChange(newValue);
                }}
                className="w-5 h-5 rounded border border-gray-300 data-[state=checked]:bg-primary"
              />
              <label
                htmlFor={`${name}-${day}`}
                className="text-sm cursor-pointer"
              >
                {day}
              </label>
            </div>
          ))}
        </div>
      )}
    />
  );
};
