import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  discord: z.string().min(1, { message: "Discord username is required" }),
  major: z.string().min(1, { message: "Please select your major" }),
  grade: z.string().min(1, { message: "Please select your grade" }),
  gender: z.enum(["Male", "Female", "Transgender", "Non-binary", "Other"], {
    required_error: "Please select your gender",
  }),
  shirt: z.enum(["XS", "S", "M", "L", "XL", "XXL"], {
    required_error: "Please select your shirt size",
  }),
  affiliation: z.enum(
    [
      "director",
      "marketing",
      "sponsorship",
      "recruitment",
      "software",
      "uiux",
      "operations",
    ],
    {
      required_error: "Please select your affiliation",
    },
  ),
  requirements: z
    .array(z.string())
    .min(1, { message: "You must agree to the terms and conditions" }),
});
