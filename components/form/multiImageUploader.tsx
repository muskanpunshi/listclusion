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

const MultiImageUploader: React.FC<Props> = ({
  name,
  label = "Upload Images",
  defaultImages = [],
  className = "",
  height = "h-[300px]",
  width = "w-full",
  errorClassName,
}) => {
  const {
    control,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useFormContext();

  const inputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<FileOrString[]>([]);

  const getPreviewURL = (file: FileOrString) =>
    typeof file === "string" ? file : URL.createObjectURL(file);

  useEffect(() => {
    const current = getValues(name);
    if (Array.isArray(current)) {
      setImages(current);
    } else if (defaultImages?.length) {
      setImages(defaultImages);
      setValue(name, defaultImages);
    }
  }, []);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (files: File[]) => void
  ) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const updated = [...images, ...files];
    setImages(updated);
    setValue(name, updated);

    e.target.value = "";
  };

  const handleRemove = (index: number) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
    setValue(name, updated);
  };

  useEffect(() => {
    const current = getValues(name);
    if (Array.isArray(current)) {
      setImages(current);
    } else if (defaultImages?.length) {
      setImages(defaultImages);
      setValue(name, defaultImages);
    }
  }, [getValues(name)]);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div
        className={`relative border border-dashed border-primary rounded-md flex flex-col items-center justify-center gap-2 overflow-hidden cursor-pointer bg-gray-50 p-4 ${width} ${height}`}
        onClick={() => inputRef.current?.click()}
      >
        {images.length > 0 ? (
          <div className="grid grid-cols-3 gap-3 w-full h-full overflow-y-auto">
            {images.map((img, idx) => (
              <div key={idx} className="relative group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
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
                  <RxCross2 className="absolute top-1 right-0 bg-primary hover:bg-primary-800 text-white  rounded-full w-5 h-5  " />
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

        <Controller
          control={control}
          name={name}
          render={({ field: { onChange } }) => (
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              multiple
              id={name}
              onChange={(e) => handleImageChange(e, onChange)}
              className="hidden"
            />
          )}
        />
      </div>

      {errors[name] && (
        <ErrorText
          errorClassName={errorClassName}
          message={errors[name]?.message?.toString()}
        />
      )}
    </div>
  );
};

export default MultiImageUploader;
