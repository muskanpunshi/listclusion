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
import {
  CustomerRegisterInput,
  CustomerRegisterSchema,
} from "@lib/validations/customer.schema";
import { zodResolver } from "@hookform/resolvers/zod";

import CustomSelect from "@components/radix/ui/customSelect";
import SingleCheckbox from "@components/radix/ui/singleCheckbox";
import CustomPhoneInput from "@components/common/phoneInput";

const RegisterCustomerForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [customerType, setCustomerType] = useState<string | null>(null);

  const dropdownItems = [
    { value: "tech", label: "Technology" },
    { value: "health", label: "Health" },
    { value: "finance", label: "Finance" },
  ];

  const methods = useForm<CustomerRegisterInput>({
    resolver: zodResolver(CustomerRegisterSchema),
    mode: "onBlur",
  });

  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;
  const onSubmitHandler: SubmitHandler<CustomerRegisterInput> = async (
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
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 space-x-4 mb-6">
                <Input
                  name="firstName"
                  label="First Name*"
                  placeholder="First Name"
                />
                <Input
                  name="lastName"
                  label="Last Name*"
                  placeholder="Last Name"
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 space-x-4 mb-6">
                <Input
                  name="email"
                  label="Email Address*"
                  type="email"
                  placeholder="Email Address"
                />
                <CustomPhoneInput
                  name="phoneNumber"
                  label="Phone Number*"
                  placeholder="Phone Number"
                />
              </div>

              <div className="w-[49%]  mb-6">
                <CustomSelect
                  mainLabel="Category"
                  name="category"
                
                  placeHolder="Please Select A Category"
                  items={dropdownItems}
                />
              </div>

              <div className="mb-6">
                <SingleCheckbox
                  label="Customer Type*"
                  name="customerType"
                  options={["Residential", "Commercial"]}
                 
                />
              </div>

              <div className="text-center">
                {" "}
                <Button className="mt-8 " buttonType="submit">
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default RegisterCustomerForm;
