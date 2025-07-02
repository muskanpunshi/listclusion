// components/form/TimePicker.tsx
"use client";

import React from "react";
import { Controller } from "react-hook-form";
import TimePickerBase from "react-time-picker";
import { format } from "date-fns";

interface TimePickerProps {
  name: string;
  control: any;
  label: string;
  fixedDate?: string;
}

const TimePicker = ({
  name,
  control,
  label,
  fixedDate = "2025-07-01",
}: TimePickerProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          // Format to HH:mm
          const initialTime = field.value
            ? format(new Date(field.value), "HH:mm")
            : "";

          const handleChange = (time: string | null) => {
            if (!time) {
              field.onChange("");
              return;
            }
            const isoString = `${fixedDate}T${time}:00`;
            field.onChange(isoString);
          };

          return (
            <TimePickerBase
              onChange={handleChange}
              value={initialTime}
              disableClock={false} // show the analog clock like the demo
              clearIcon={true}
              format="HH:mm"
              clockIcon={null} // optional: can add back the clock icon if needed
              className="" // don't override styling
            />
          );
        }}
      />
    </div>
  );
};

export default TimePicker;
