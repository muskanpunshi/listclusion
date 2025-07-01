"use client";
import React, { useState } from "react";
import { cn } from "@utils/index";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import Paragraph from "@components/common/paragraph";
import Heading from "@components/heading";
import Button from "@components/common/Button";
import Input from "@components/form/input";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { ContactInput, ContactSchema } from "@lib/validations/form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import TextArea from "@components/form/textArea";
import MultiCheckboxGroup from "@components/radix/ui/checkbox";
import ImageUploader from "@components/form/imageUploader";
import MultiImageUploader from "@components/form/multiImageUploader";

const RegisterForm = () => {
  const methods = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
    mode: "onBlur"
  });

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [companyLogo, setCompanyLogo] = useState<File | null>(null);

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

  return (
    <section className="w-full bg-white lg:p-10 p-4">
      <div className="py-6">
        <FormProvider {...methods}>
          <div className="">
            <h3 className="text-2xl text-primary font-medium mb-4 max-md:text-center ">
              Company Details
            </h3>
            <ImageUploader
              name="company-logo"
              label="Company Logo"
              size={150}
              defaultImage=""
            />
          </div>
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
                name="working-hours"
                label="Working hours*"
                placeholder="Working Hours"
              />
              <Input
                name="phone-number"
                type="number"
                placeholder="Phone Number"
                label="Phone Number*"
              />
            </div>
            <div className="mb-6">
              <Input
                name="expertise"
                label="expertise"
                placeholder=" Company's Expertise"
              />
            </div>
            <div className="mb-6">
              <Input
                name="projects"
                label="projects"
                placeholder=" Company's Projects"
              />
            </div>

            <div className="bg-white rounded-[20px] py-6">
              <h4 className="text-xl font-medium text-secondary pb-5">
                Select Categories
              </h4>
              <MultiCheckboxGroup
                name="categories"
                options={[
                  "Engineering Consultants",
                  "Architects Consultants",
                  "Civil Contractors",
                  "Interior Contractors",
                  "Electrical Consultants"
                ]}
                selectedValues={selectedCategory}
                onChange={(value) => setSelectedCategory(value)}
              />
            </div>
            <div className="bg-white rounded-[20px] py-6">
              <h4 className="text-xl font-medium text-secondary pb-5">
                File Attachment<span className="text-primary">*</span>{" "}
              </h4>
               <MultiImageUploader name="banner" label="Upload Company's images" />
            </div>

            <div className="text-center">
              {" "}
              <Button className="mt-8 " buttonType="submit">
                Submit
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default RegisterForm;
