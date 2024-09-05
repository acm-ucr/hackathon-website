import { z } from "zod";

export const schema = z.object({
  idea: z.string().min(1, { message: "Title of idea is required" }),
  languages: z
    .array(z.string())
    .min(1, { message: "At least one language must be selected" }),
  details: z.string().min(1, { message: "Description of idea is required" }),
  contact: z.string().min(1, { message: "Contact information is required" }),
});
