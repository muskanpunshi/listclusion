"use client";
import React, { useEffect, useState } from "react";
import Button from "@components/common/Button";
import Input from "@components/form/input";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { zodResolver } from "@hookform/resolvers/zod";
import TextArea from "@components/form/textArea";
import MultiCheckboxGroup from "@components/radix/ui/checkbox";
import ImageUploader from "@components/form/imageUploader";

import { DaysSelector } from "@components/form/daySelector";
import { CompanyInput, CompanySchema } from "@lib/validations/form.schema";
import TimePicker from "@components/form/timePicker";
import CustomPhoneInput from "@components/common/phoneInput";
import { companyPostService } from "services/register";
import Swal from "sweetalert2";
import categoryDetails from "data/categoryDetail";
import { Country, State, City } from "country-state-city";
import { MultiImageUploader } from "@components/form/multiImageUploader";

const RegisterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [availableCities, setAvailableCities] = useState<any[]>([]);
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

  const { reset, watch, setValue } = methods;
  const selectedCountry = watch("company_address.country");

  const countryList = Country.getAllCountries();

  useEffect(() => {
    if (selectedCountry) {
      // Find country code from country name
      const country = countryList.find((c) => c.name === selectedCountry);

      if (country) {
        // Get cities for this country
        const cities = City.getCitiesOfCountry(country.isoCode);
        setAvailableCities(cities || []);
        // Reset city field when country changes
        setValue("company_address.city", "");
      }
    } else {
      setAvailableCities([]);
    }
  }, [selectedCountry, countryList, setValue]);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmitHandler: SubmitHandler<CompanyInput> = async (values, e) => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }
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
            const response: any = await companyPostService({
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
                placeholder="Company Name"
              />
            </div>

            <div className="mb-6">
              <TextArea
                name="company_description"
                label="Company Description"
                placeholder=""
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
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-secondary mb-1"
                >
                  Country*
                </label>
                <select
                  id="country"
                  {...methods.register("company_address.country")}
                  className="w-full px-5 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a country</option>
                  {countryList.map((country) => (
                    <option key={country.isoCode} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-secondary mb-1"
                >
                  City*
                </label>
                <select
                  id="city"
                  {...methods.register("company_address.city")}
                  className="w-full px-5 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  disabled={!selectedCountry}
                >
                  <option value="">Select a city</option>
                  {availableCities.map((city) => (
                    <option
                      key={`${city.name}-${city.latitude}-${city.longitude}`}
                      value={city.name}
                    >
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
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
                placeholder="info@listclusion.com"
              />
            </div>

            <div className="mb-6">
              <Input
                name="company_expertise"
                label="Expertise*"
                placeholder=""
              />
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-medium text-secondary mb-2">
                Working Days & Hours*
              </h4>

              <div className="my-6">
                <label className="block text-md font-medium text-secondary my-3">
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
