"use client";
import Input from "@components/form/input";
import TextArea from "@components/form/textArea";
import Button from "@components/common/Button";
import { zodResolver } from "@hookform/resolvers/zod";

import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { ContactInput, ContactSchema } from "@lib/validations/contact.schema";
import CustomPhoneInput from "@components/common/phoneInput";
import Swal from "sweetalert2";
import { contactPostService } from "services/register";

function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const methods = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
    mode: "onBlur",
  });
  const { handleSubmit, reset } = methods;
  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit: SubmitHandler<ContactInput> = (values) => {
    console.log(values, "values");
    setIsLoading(true);
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    executeRecaptcha("contactFormSubmit").then(
      async (gReCaptchaToken: string) => {
        const response: any = await contactPostService({
          ...values,
          gReCaptchaToken,
        });
        if (response.status === "success") {
          console.log("submit done");
          Swal.fire({
            icon: "success",
            title: response?.data?.result?.message,
            position: "center",
            timer: 2000,
            showConfirmButton: false,
          });

          setIsLoading(false);
          reset();
        } else {
          setIsLoading(false);
        }
      }
    );
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="mt-8">
              <Input
                type="text"
                name="name"
                placeholder="Your Name*"
                label="Name*"
              />
            </div>
            <div className="flex gap-3 max-sm:flex-col max-sm:gap-0 mt-8">
              <div className="w-1/2 max-sm:w-full">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  label="Email*"
                />
              </div>
              <div className="w-1/2 max-sm:w-full">
                <CustomPhoneInput
                  name="phone"
                  placeholder="Phone Number"
                  label="Phone*"
                />
              </div>
            </div>
            <div className="mt-8">
              <TextArea
                name="message"
                placeholder="Your Message"
                label="Message*"
                rows={4}
              />
            </div>
            <Button
              isLoading={isLoading}
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
