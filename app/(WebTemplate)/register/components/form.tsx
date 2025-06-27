"use client";
import React, { useState } from "react";
import { cn } from "@utils/index";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import Paragraph from "@components/common/paragraph";
import Heading from "@components/heading";
import Button from "@components/common/Button";
import Input from "@components/common/input";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { ContactInput, ContactSchema } from "@lib/validations/form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import TextArea from "@components/common/textArea";

const RegisterForm = () => {
  const methods = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
    mode: "onBlur"
  });

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [images, setImages] = useState<File[]>([]);

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful }
  } = methods;
  const onSubmitHandler: SubmitHandler<ContactInput> = async (
    values: any,
    e
  ) => {
    e?.preventDefault();

    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }
    executeRecaptcha("contactForm").then(async (gReCaptchaToken: string) => {
      console.log("reCAPTCHA token:", gReCaptchaToken);
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setImages((prev) => [...prev, ...filesArray]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <section className="w-full">
      <h3 className="text-2xl text-secondary font-medium mb-6">
        Company Registration
      </h3>

      <div className="py-6">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="mb-6">
              <Input name="name" label="Name*" placeholder="Company Name" />
            </div>
            <div className="mb-6">
              <TextArea
                name="description"
                label="description*"
                placeholder="Write about your Company..."
                rows={4}
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 space-x-4 mb-6">
              <Input
                name="address"
                label="address*"
                placeholder="Company's Address"
              />
              <Input
                name="email"
                type="email"
                placeholder="Company's Email Address"
                label="Email*"
              />
            </div>
             <div className="grid grid-cols-1 lg:grid-cols-2 space-x-4 mb-6">
              <Input
                name="address"
                label="address*"
                placeholder="Company's Address"
              />
              <Input
                name="email"
                type="email"
                placeholder="Company's Email Address"
                label="Email*"
              />
            </div>
            <div className="mb-6">
              <Input
                name="expertise"
                label="expertise"
                placeholder="Your Company's expertise"
              />
            </div>
          </form>
        </FormProvider>
      </div>

      {/* <div className="mb-4">
        <label className="block font-medium mb-1">Company Logo</label>
        <input type="file" accept="image/*" className="block w-full" />
      </div> */}

      {/* <div className="mb-4">
        <label className="block font-medium mb-1">
          Upload Company Pictures (3-4)
        </label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="block w-full"
        />
        <div className="mt-2 space-y-2">
          {images.map((file, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded"
            >
              <span>{file.name}</span>
              <button onClick={() => removeImage(index)}>
                <FaTimes className="text-red-500" />
              </button>
            </div>
          ))}
        </div>
      </div> */}

      {/* Company Details */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">
            Company Description / Profile*
          </label>
          <textarea
            className="w-full p-2 border rounded-md"
            rows={4}
            placeholder="Describe your company..."
          ></textarea>
        </div>
        <div>
          <label className="block font-medium mb-1">Company Expertise*</label>
          <textarea
            className="w-full p-2 border rounded-md"
            rows={4}
            placeholder="List your expertise..."
          ></textarea>
        </div>
        <div>
          <label className="block font-medium mb-1">Company Address*</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="Street, City, Country"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Telephone Numbers*</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="e.g. +92-300-1234567"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Email Address*</label>
          <input
            type="email"
            className="w-full p-2 border rounded-md"
            placeholder="e.g. contact@company.com"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Working Hours*</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="e.g. Mon-Fri, 9am - 6pm"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block font-medium mb-1">
            Company Portfolio / Projects*
          </label>
          <textarea
            className="w-full p-2 border rounded-md"
            rows={4}
            placeholder="Mention past projects or portfolio..."
          ></textarea>
        </div>
      </div>     */}

      {/* Categories */}
      {/* <div className="mt-6">
        <label className="block font-medium mb-2">Categories*</label>
        <div className="flex flex-wrap gap-4">
          {[
            "Construction",
            "Real Estate",
            "Architecture",
            "Interior Design"
          ].map((category) => (
            <label key={category} className="flex items-center gap-2">
              <input type="checkbox" className="accent-primary" />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div> */}

      {/* Submit Button */}
      <Button className="mt-8  ">Submit</Button>
    </section>
  );
};

export default RegisterForm;
