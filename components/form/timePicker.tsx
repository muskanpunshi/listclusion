// @/components/form/timePicker.tsx
"use client";

import React from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { cn } from "@utils/index";

type Props<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  className?: string;
  disabled?: boolean;
};

export function TimePickerField<T extends FieldValues>({
  name,
  control,
  label,
  className,
  disabled = false,
}: Props<T>) {
  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label className="block text-sm font-medium mb-2" htmlFor={name}>
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div>
            <TimePicker
              id={name}
              value={
                field.value
                  ? new Date(field.value).toTimeString().substring(0, 5)
                  : null
              }
              onChange={(time) => {
                if (time) {
                  // Convert to ISO string with arbitrary date (as in your schema)
                  const [hours, minutes] = time.split(":");
                  const date = new Date();
                  date.setHours(parseInt(hours, 10));
                  date.setMinutes(parseInt(minutes, 10));
                  field.onChange(`2025-07-01T${time}:00`); // Matching your schema transform
                } else {
                  field.onChange(null);
                }
              }}
              disableClock={true}
              clearIcon={null}
              disabled={disabled}
              className={cn(
                "w-full rounded-lg border border-gray-300 bg-white p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
                {
                  "border-red-500 focus:border-red-500 focus:ring-red-500":
                    error,
                }
              )}
              format="HH:mm"
            />
            {/* <ErrorMessage
              name={name as any}
              render={({ message }) => (
                <p className="mt-1 text-sm text-red-600">{message}</p>
              )}
            /> */}
          </div>
        )}
      />
    </div>
  );
}
