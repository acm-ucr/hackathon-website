import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^\d{3} \d{3} \d{4}$/, {
    message: "Invalid phone number. Expected format: 123 456 7890",
  }),
  gender: z.enum(["Male", "Female", "Transgender", "Non-binary", "Other"], {
    required_error: "Please select your gender",
  }),
  shirt: z.enum(["XS", "S", "M", "L", "XL", "XXL"], {
    required_error: "Please select your shirt size",
  }),
  affiliation: z.enum(["Professor", "Student", "Industry"], {
    required_error: "Please select your affiliation",
  }),
  title: z.string().min(1, { message: "Title is required" }),
  photo: z.string().optional(),
  requirements: z
    .array(z.string())
    .min(1, { message: "You must agree to the terms and conditions" }),
});
