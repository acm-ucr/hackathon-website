import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, { message: "Name is invalid" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^\d{3} \d{3} \d{4}$/, {
    message: "Invalid phone number. Expected format: 123 456 7890",
  }),
  discord: z.string().min(1, { message: "Discord username is invalid" }),
  major: z.string().min(1, { message: "Major is invalid" }),
  age: z.string().min(1, { message: "Age is invalid" }),
  school: z.string().min(1, { message: "School is invalid" }),
  grade: z.string().min(1, { message: "Grade is invalid" }),
  gender: z.string().min(1, { message: "Gender is invalid" }),
  shirt: z.string().min(1, { message: "Shirt size is invalid" }),
  diet: z.array(z.string()),
  resume: z.string().optional(),
  requirements: z
    .array(z.string())
    .min(1, { message: "You must agree to the terms and conditions" }),
});
