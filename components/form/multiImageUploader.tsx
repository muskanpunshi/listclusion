"use client";

import React, { useEffect, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FaCloudUploadAlt } from "react-icons/fa";
import ErrorText from "./errorText";
import { RxCross2 } from "react-icons/rx";

interface Props {
  name: string;
  label?: string;
  defaultImages?: string[];
  className?: string;
  height?: string;
  width?: string;
  errorClassName?: string;
}

type FileOrString = File | string;
export const MultiImageUploader: React.FC<Props> = ({
  name,
  label = "Upload Images",
  className = "",
  height = "h-[300px]",
  width = "w-full",
  errorClassName,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value = [], onChange } }) => {
        const getPreviewURL = (file: FileOrString) =>
          typeof file === "string" ? file : URL.createObjectURL(file);

        const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const files = Array.from(e.target.files || []);
          if (!files.length) return;
          onChange([...value, ...files]);
          e.target.value = "";
        };

        const handleRemove = (index: number) => {
          onChange(value.filter((_, i) => i !== index));
        };

        return (
          <div className={`flex flex-col gap-2 ${className}`}>
            <div
              className={`relative border border-dashed border-primary rounded-md flex flex-col items-center justify-center gap-2 overflow-hidden cursor-pointer bg-gray-50 p-4 ${width} ${height}`}
              onClick={() => inputRef.current?.click()}
            >
              {value.length > 0 ? (
                <div className="grid grid-cols-3 gap-3 w-full h-full overflow-y-auto">
                  {value.map((img, idx) => (
                    <div key={idx} className="relative group">
                      <img
                        src={getPreviewURL(img)}
                        alt={`Preview ${idx}`}
                        className="w-full h-[250px] object-contain rounded"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemove(idx);
                        }}
                      >
                        <RxCross2 className="absolute top-1 right-0 bg-primary hover:bg-primary-800 text-white rounded-full w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center text-primary">
                  <FaCloudUploadAlt className="text-3xl mb-1" />
                  <p className="text-md font-medium">{label}</p>
                </div>
              )}

              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                multiple
                id={name}
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            {errors[name] && (
              <ErrorText
                errorClassName={`${errorClassName}`}
                message={errors[name]?.message?.toString()}
              />
            )}
          </div>
        );
      }}
    />
  );
};
