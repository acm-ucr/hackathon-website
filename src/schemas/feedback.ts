import { z } from "zod";

export const schema = z.object({
  eventSource: z
    .string()
    .min(1, { message: "Please select how you found the event" }),
  helpful: z.string().min(1, { message: `Response Invalid` }),
  improvements: z.string().min(1, { message: `Response Invalid` }),
  notBenficial: z.string().min(1, { message: `Response Invalid` }),
  rating: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], {
    required_error: "Please provide a rating",
  }),
  additionalComments: z.string().min(1, { message: `Response Invalid` }),
});
