import { z } from "zod";

export const CompanySchema = z
  .object({
    name: z.string().min(1, "Company name is required"),
    email: z.string().email("Invalid email format"),
    company_logo: z
      .instanceof(File, { message: "Company logo is required" })
      .refine(
        (file) => file.size <= 5 * 1024 * 1024,
        "File size should be less than 5MB"
      ),
    company_expertise: z.string().min(1, "Expertise is required"),
    company_categories: z
      .array(z.string())
      .min(1, "Select at least one category"), // Ensure non-empty array
    company_address: z.object({
      address1: z.string().min(1, "Address is required"),
      address2: z.string().optional(),
      city: z.string().min(1, "City is required"),
      state: z.string().optional(),
      country: z.string().min(1, "Country is required"),
      zipcode: z.string().optional(),
    }),
    company_telephone_numbers: z.string().min(1, "Phone number is required"),
    company_description: z.string().optional(),
    company_portfolio_images: z.array(z.instanceof(File)).optional(),
    days: z.array(z.string()).min(1, "Select at least one working day"),
    time_from: z
      .string()
      .refine((val) => {
        // Accept either HH:MM or your ISO format
        return (
          /^\d{2}:\d{2}$/.test(val) ||
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/.test(val)
        );
      }, "Time must be in HH:MM format")
      .transform((time) => {
        // If already in ISO format, return as-is
        if (time.includes("T")) return time;
        // Convert HH:MM to ISO format
        return `2025-07-01T${time}:00`;
      }),
    time_to: z
      .string()
      .refine((val) => {
        return (
          /^\d{2}:\d{2}$/.test(val) ||
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/.test(val)
        );
      }, "Time must be in HH:MM format")
      .transform((time) => {
        if (time.includes("T")) return time;
        return `2025-07-01T${time}:00`;
      }),
  })
  .superRefine((data, ctx) => {
    const fromTime = new Date(data.time_from);
    const toTime = new Date(data.time_to);
    if (fromTime >= toTime) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["time_to"],
        message: "End time must be after start time",
      });
    }
  });

export type CompanyInput = z.infer<typeof CompanySchema>;
