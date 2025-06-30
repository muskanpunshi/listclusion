/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import upload from "@public/template/upload-image.png";
import Image from "next/image";

import { Controller, useFormContext, useWatch } from "react-hook-form";

import { IoClose } from "react-icons/io5";
import ErrorText from "@components/form/errorText";

interface ImageUploaderProps {
  name: string;
  label?: string;
  multiple?: boolean;
}

function UniversalImageUploader({ name, label = "Upload File", multiple = false }: ImageUploaderProps) {
  const {
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  const [previews, setPreviews] = useState<any[]>([]);
  const watch = useWatch({ name });

  useEffect(() => {
    const currentVal = getValues(name);
    setPreviews(multiple ? currentVal || [] : currentVal ? [currentVal] : []);
  }, [watch]);

  const removeImage = (index: number) => {
    const current = getValues(name);
    if (multiple) {
      const updated = current.filter((_: any, i: number) => i !== index);
      setValue(name, updated);
      setPreviews(updated);
    } else {
      setValue(name, null);
      setPreviews([]);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="rounded">
        <label className="block text-sm font-medium mb-2 text-white">{label}</label>

        <Controller
          control={control}
          name={name}
          render={({ field: { onChange } }) => (
            <div className="relative inline-block me-3">
              <div className="dash-btn-one inline-block relative cursor-pointer text-white bg-primary py-2 px-4 rounded">
                <i className="bi bi-plus mr-2"></i>
                {label}
                <input
                  type="file"
                  id={name}
                  name={name}
                  multiple={multiple}
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => {
                    const files = Array.from(e.target.files || []);
                    if (multiple) {
                      const current = getValues(name) || [];
                      const newFiles = [...current, ...files];
                      setValue(name, newFiles);
                      setPreviews(newFiles);
                    } else {
                      setValue(name, files[0]);
                      setPreviews([files[0]]);
                    }
                    e.target.value = "";
                  }}
                />
              </div>
            </div>
          )}
        />

        {previews && previews.length > 0 && (
          <div className="mt-4 grid grid-cols-4 gap-4">
            {previews.map((file: any, i: number) => (
              <div key={i} className="relative w-full">
                <img
                  src={typeof file === "string" ? file : URL.createObjectURL(file)}
                  className="w-full h-[200px] object-contain rounded"
                  alt={`Preview ${i}`}
                />
                <button
                  type="button"
                  onClick={() => removeImage(i)}
                  className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1 hover:bg-black/80"
                >
                  <IoClose size={16} />
                </button>
              </div>
            ))}
          </div>
        )}

        {errors[name] && <ErrorText message={errors[name]?.message as string} />}
      </div>
    </div>
  );
}

export default UniversalImageUploader;
