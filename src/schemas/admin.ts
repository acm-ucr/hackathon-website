import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, { message: "Name is invalid" }),
  email: z.string().email({ message: "Invalid email address" }),
  discord: z.string().min(1, { message: "Discord username is invalid" }),
  major: z.string().min(1, { message: "Major is invalid" }),
  grade: z.string().min(1, { message: "Grade is invalid" }),
  gender: z.string().min(1, { message: "Gender is invalid" }),
  shirt: z.string().min(1, { message: "Shirt size is invalid" }),
  affiliation: z.string().min(1, { message: "Affiliation is invalid" }),
  requirements: z
    .array(z.string())
    .min(1, { message: "You must agree to the terms and conditions" }),
});
