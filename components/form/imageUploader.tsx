
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import Image from "next/image";
import { FaCloudUploadAlt } from "react-icons/fa";

import { cn } from "@utils/index";

interface singleImageUploaderProps {
  name: string;
  label?: string;
  size?: number;
  className?: string;
  defaultImage?: string;
}

const SingleImageUploader: React.FC<singleImageUploaderProps> = ({
  name,
  label = "Upload Image",
  size = 192,
  className,
  defaultImage
}) => {
  const { control, setValue, getValues, formState } = useFormContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const isSubmitting = formState.isSubmitting;

  const [preview, setPreview] = useState<string | null>(defaultImage ?? null);

  const watch = useWatch();

  useEffect(() => {
    if (!getValues(name)) {
      setPreview(defaultImage ?? null);
    }
  }, [watch]);

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
     

      <div
        style={{ width: size, height: size }}
        className="relative border border-dashed border-primary bg-gray-50 rounded-md flex items-center justify-center overflow-hidden cursor-pointer"
        onClick={handleUploadClick}
      >
        {preview ? (
          <Image src={preview} alt="Uploaded" fill className="object-cover" />
        ) : (
          <FaCloudUploadAlt className="text-primary text-3xl" />
        )}
      </div>

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            ref={inputRef}
            id={name}
            type="file"
            accept="image/*"
            disabled={isSubmitting}
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;

              setValue(name, file);
              field.onChange(file);
              setPreview(URL.createObjectURL(file));
            }}
          />
        )}
      />
       {label && (
        <label htmlFor={name} className="text-md text-secondary font-medium mb-1">
          {label}
        </label>
      )}
    </div>
  );
};

export default SingleImageUploader;
