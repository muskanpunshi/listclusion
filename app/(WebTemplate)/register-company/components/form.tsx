"use client";
import React, { useState } from "react";
import Button from "@components/common/Button";
import Input from "@components/form/input";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { zodResolver } from "@hookform/resolvers/zod";
import TextArea from "@components/form/textArea";
import MultiCheckboxGroup from "@components/radix/ui/checkbox";
import ImageUploader from "@components/form/imageUploader";
import MultiImageUploader from "@components/form/multiImageUploader";
import { DaysSelector } from "@components/form/daySelector";
import { CompanyInput, CompanySchema } from "@lib/validations/form.schema";
import TimePicker from "@components/form/timePicker";
import CustomPhoneInput from "@components/common/phoneInput";
import { contactPostService } from "services/register";
import Swal from "sweetalert2";
import categoryDetails from "data/categoryDetail";

const RegisterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const methods = useForm<CompanyInput>({
    resolver: zodResolver(CompanySchema),
    defaultValues: {
      name: "",
      email: "",
      company_logo: undefined, // Better than empty File
      company_expertise: "",
      company_categories: [],
      company_address: {
        address1: "",
        city: "",
        country: "",
        state: "",
        zipcode: "",
      },
      company_telephone_numbers: "",
      days: [], // Changed from array to string
      time_from: "2025-07-01T09:00:00", // ISO string from transform()
      time_to: "2025-07-01T18:00:00", // HH:MM format
    },
  });
  const { reset } = methods;

  const { executeRecaptcha } = useGoogleReCaptcha();

  // const onSubmitHandler: SubmitHandler<CompanyInput> = async (values, e) => {
  //   e?.preventDefault();

  //   const fileToBase64 = (file: File): Promise<string> => {
  //     return new Promise((resolve, reject) => {
  //       const reader = new FileReader();
  //       reader.readAsDataURL(file);
  //       reader.onload = () => resolve(reader.result as string);
  //       reader.onerror = (error) => reject(error);
  //     });
  //   };

  //   try {
  //     const payload = {
  //       params: {
  //         ...values,
  //         days: values.days.join(", "),
  //         company_logo: await fileToBase64(values.company_logo),
  //         company_portfolio_images: await Promise.all(
  //           values.company_portfolio_images.map(fileToBase64)
  //         ),
  //       },
  //     };

  //     console.log("Processed payload:", payload);

  //     if (!executeRecaptcha) {
  //       console.log("Execute recaptcha not yet available");
  //       return;
  //     }

  //     const token = await executeRecaptcha("contactForm");
  //     console.log("reCAPTCHA token:", token);

  //     // Submit to your API here
  //     // await submitToApi(payload, token);
  //   } catch (error) {
  //     console.error("Error processing form data:", error);
  //   }
  // };

  const onSubmitHandler: SubmitHandler<CompanyInput> = async (values, e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    const fileToBase64 = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const result = reader.result as string;
          // Split the data URL at the comma and take the second part (the base64 data)
          const base64Data = result.split(",")[1];
          resolve(base64Data);
        };
        reader.onerror = (error) => reject(error);
      });
    };

    try {
      const payload = {
        ...values,
        days: values.days.join(", "),
        company_logo: await fileToBase64(values.company_logo),
        company_portfolio_images: await Promise.all(
          values.company_portfolio_images.map(fileToBase64)
        ),
      };

      executeRecaptcha("enquiryFormSubmit").then(
        async (gReCaptchaToken: string) => {
          console.log(gReCaptchaToken, "response Google reCaptcha server");
          try {
            const response: any = await contactPostService({
              payload,
              gReCaptchaToken,
            });
            if (response.status === "success") {
              Swal.fire({
                icon: "success",
                title: response?.data?.result?.message,
                position: "center",
                timer: 2000,
                showConfirmButton: false,
              });

              setSubmitSuccess(true);
              reset();
            } else {
              setSubmitError(
                response.message || "Something went wrong. Please Try Again"
              );
            }
          } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitError(
              error instanceof Error
                ? error.message
                : "An unexpected error occurred. Please try again."
            );
          } finally {
            setIsSubmitting(false);
          }
        }
      );

      console.log("Processed payload:", payload);

      // if (!executeRecaptcha) {
      //   console.log("Execute recaptcha not yet available");
      //   setIsSubmitting(false);
      //   return;
      // }

      // const token = await executeRecaptcha("contactForm");
      // console.log("reCAPTCHA token:", token);

      // API call to the endpoint
      const response: any = await contactPostService({
        payload,
      });
      console.log(response, "asdasdsd");
      if (response.status === "success") {
        Swal.fire({
          icon: "success",
          title: response?.data?.result?.message,
          position: "center",
          timer: 2000,
          showConfirmButton: false,
        });

        setSubmitSuccess(true);
        reset();
      } else {
        setSubmitError(
          response.message || "Something went wrong. Please Try Again"
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-white lg:p-10 p-4">
      <div className="py-6">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
            <div className="">
              <h3 className="text-2xl text-primary font-medium mb-4 max-md:text-center">
                Company Details
              </h3>
              <ImageUploader
                name="company_logo"
                label="Company Logo"
                size={150}
              />
            </div>

            <div className="mb-6">
              <Input
                name="name"
                label="Company Name*"
                placeholder="TechNova Pvt Ltd"
              />
            </div>

            <div className="mb-6">
              <TextArea
                name="company_description"
                label="Company Description"
                placeholder="We build scalable, intelligent platforms..."
                rows={4}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
              <Input
                name="company_address.address1"
                label="Address Line 1*"
                placeholder="Suite 502, Tech Park"
              />
              <Input
                name="company_address.address2"
                label="Address Line 2"
                placeholder="Block B"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
              <Input
                name="company_address.city"
                label="City*"
                placeholder="Lahore"
              />
              <Input
                name="company_address.country"
                label="Country*"
                placeholder="Pakistan"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
              {/* <Input
                name="company_telephone_numbers"
                label="Phone Number*"
                placeholder="+92-300-1234567"
              /> */}
              <CustomPhoneInput
                name="company_telephone_numbers"
                label="Phone Number*"
                placeholder="Phone Number"
              />
              <Input
                name="email"
                type="email"
                label="Email*"
                placeholder="info@technova.com"
              />
            </div>

            <div className="mb-6">
              <Input
                name="company_expertise"
                label="Expertise*"
                placeholder="AI, Web Development, Cloud Infrastructure"
              />
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">
                Working Days & Hours*
              </h4>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Select Working Days*
                </label>
                <DaysSelector control={methods.control} name="days" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TimePicker
                  name="time_from"
                  control={methods.control}
                  label="Opening Time*"
                />
                <TimePicker
                  name="time_to"
                  control={methods.control}
                  label="Closing Time*"
                />
              </div>
            </div>
            <div className="bg-white rounded-[20px] py-6 mb-6">
              <h4 className="text-xl font-medium text-secondary pb-5">
                Select Categories*
              </h4>
              <MultiCheckboxGroup
                name="company_categories"
                options={categoryDetails.map(
                  (categories: any) => categories.category
                )}
              />
            </div>

            <div className="bg-white rounded-[20px] py-6 mb-6">
              <h4 className="text-xl font-medium text-secondary pb-5">
                Portfolio Images*
              </h4>
              <MultiImageUploader
                errorClassName="bottom-[145px] left-[30px]"
                name="company_portfolio_images"
                label="Upload portfolio images"
              />
            </div>

            <div className="text-center">
              <Button className="mt-8" buttonType="submit">
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
              {submitError && (
                <p className="mt-4 text-red-500">{submitError}</p>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default RegisterForm;
