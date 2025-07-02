import { z } from "zod";

export const ContactSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(1, "Name is required"),
  phone: z
    .string({
      required_error: "Phone Number is required",
    })
    .min(1, "Phone Number is required"),
  message: z
    .string({
      required_error: "Message is required",
    })
    .min(1, "Message is required"),
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(1, "Email is required")
    .email("Email is invalid"),
});

export type ContactInput = z.infer<typeof ContactSchema>;

export const CustomerRegisterSchema = z.object({
  firstName: z
    .string({
      required_error: "First name is required",
    })
    .min(1, "First name is required"),

  lastName: z
    .string({
      required_error: "Last name is required",
    })
    .min(1, "Last name is required"),

  email: z
    .string({
      required_error: "Email is required",
    })
    .min(1, "Email is required")
    .email("Email is invalid"),

  phoneNumber: z
    .string({
      required_error: "Phone number is required",
    })
    .min(1, "Phone number is required"),

  category: z
    .string({
      required_error: "Category is required",
    })
    .min(1, "Category is required"),

  customerType: z
    .string({
      required_error: "Please select atleast one type",
    })
    .min(1, "Please select atleast one type"),
});

export type CustomerRegisterInput = z.infer<typeof CustomerRegisterSchema>;
