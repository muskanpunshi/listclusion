import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useFormContext, Controller } from "react-hook-form";
import ErrorText from "@components/form/errorText";
import { cn } from "@utils/index";
import { useState } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";

interface InputProps {
  placeholder: string;
  type?: string;
  label: string;
  name: string;
  defaultValue?: string;
  classes?: string;
}

const CustomPhoneInput = ({
  placeholder,
  label,
  name,
  classes,
}: InputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [country, setCountry] = useState("PK");

  return (
    <div className="w-full relative">
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-base font-medium text-secondary"
        >
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        rules={{
          validate: (value) => {
            if (!value) return true; // Skip validation if empty
            return isValidPhoneNumber(value) || "Invalid phone number";
          },
        }}
        render={({ field }) => (
          <>
            <PhoneInput
              {...field}
              defaultCountry="PK"
              id={name}
              placeholder={placeholder}
              className={cn(
                "bg-white text-base text-secondary block w-full border border-secondary/40 rounded-md py-4 px-5 focus:!outline-none [&_:focus-visible]:!outline-none focus:!ring-0 placeholder:text-[#949393]",
                classes
              )}
              onChange={(value) => {
                field.onChange(value);
              }}
              onCountryChange={(country) => {
                if (country) setCountry(country);
              }}
              countrySelectProps={{
                className: "!py-3",
              }}
              international
              withCountryCallingCode
              countryCallingCodeEditable={false}
            />
          </>
        )}
      />
      {errors[name] && (
        <ErrorText message={(errors[name]?.message || "") as string} />
      )}
    </div>
  );
};

export default CustomPhoneInput;
