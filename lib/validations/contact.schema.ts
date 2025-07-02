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