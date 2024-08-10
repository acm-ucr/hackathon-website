import { z } from "zod";

export const judgeSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^\d{3} \d{3} \d{4}$/, {
    message: "Invalid phone number. Expected format: 123 456 7890",
  }),
  gender: z.string().min(1, { message: "Gender is required" }),
  shirt: z.string().min(1, { message: "Shirt size is required" }),
  affiliation: z.string().min(1, { message: "Affiliation is required" }),
  title: z.string().min(1, { message: "Title is required" }),
  photo: z.string().optional(),
  requirements: z
    .array(z.string())
    .min(1, { message: "You must agree to the terms and conditions" }),
});
