import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, { message: "Name is invalid" }),
  email: z.string().email({ message: "Invalid email address" }),
  discord: z.string().min(1, { message: "Discord username is invalid" }),
  major: z.string().min(1, { message: "Major is invalid" }),
  grade: z.string().min(1, { message: "Grade is invalid" }),
  gender: z.enum(["Male", "Female", "Transgender", "Non-binary", "Other"], {
    required_error: "Please select your gender",
  }),
  shirt: z.enum(["XS", "S", "M", "L", "XL", "XXL"], {
    required_error: "Please select your shirt size",
  }),
  affiliation: z.string().min(1, { message: "Affiliation is invalid" }),
  requirements: z
    .array(z.string())
    .min(1, { message: "You must agree to the terms and conditions" }),
});
