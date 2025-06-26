"use client";
import Input from "@components/common/input";
import TextArea from "@components/common/textArea";
import Button from "@components/common/Button";
import { zodResolver } from "@hookform/resolvers/zod";

import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { ContactInput, ContactSchema } from "@lib/validations/form.schema";


function Form() {
  const methods = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
    mode: "onBlur"
  });

  const { executeRecaptcha } = useGoogleReCaptcha();

  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="space-y-4">
            <div className="mt-8">
              <label className="block mb-1 font-medium">Name*</label>
              <Input type="text" name="name" placeholder="Your Name*" />
            </div>
            <div className="flex gap-3 max-sm:flex-col max-sm:gap-0 mt-8">
              <div className="w-1/2 max-sm:w-full">
                <label className="block mb-1 font-medium">Email*</label>

                <Input name="email" placeholder="Email Address" />
              </div>
              <div className="w-1/2 max-sm:w-full">
                <label className="block mb-1 font-medium">Phone*</label>

                <Input name="phone" placeholder="Phone Number" />
              </div>
            </div>
            <div className="mt-8">
              <label className="block mb-1 font-medium">Message*</label>
              <TextArea name="message" placeholder="Your Message" />
            </div>
            <Button
              buttonType="submit"
              className="w-full mt-8 bg-primary hover:bg-[#d1af32] text-white font-medium py-3 rounded uppercase"
            >
              Send Message
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}

export default Form;
