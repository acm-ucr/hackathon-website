import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, { message: "Name is invalid" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^\d{3} \d{3} \d{4}$/, {
    message: "Invalid phone number. Expected format: 123 456 7890",
  }),
  panelist: z.string().min(1, { message: "Panelist role is invalid" }),
  company: z.string().min(1, { message: "Company name is invalid" }),
  title: z.string().min(1, { message: "Title is invalid" }),
  gender: z.string().min(1, { message: "Gender is invalid" }),
  shirt: z.enum(["XS", "S", "M", "L", "XL", "XXL"], {
    required_error: "Please select your shirt size",
  }),
  photo: z.string().min(1, { message: "Photo is required" }), // Photo validation assumes a string path is used. Adjust if using file types directly.
  requirements: z
    .array(z.string())
    .min(1, { message: "You must agree to the terms and conditions" }),
});
