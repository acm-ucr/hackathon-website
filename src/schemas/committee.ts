import { z } from "zod";
import {
  GENDERS,
  SHIRTS,
  GRADES,
  MAJORS,
  AFFILIATIONS,
} from "@/data/form/Information";

export const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  discord: z.string().min(1, { message: "Discord username is required" }),
  major: z.enum(MAJORS as [string, ...string[]], {
    required_error: "Please select your major",
  }),
  grade: z.enum(GRADES as [string, ...string[]], {
    required_error: "Please select your grade",
  }),
  gender: z.enum(GENDERS as [string, ...string[]], {
    required_error: "Please select your gender",
  }),
  shirt: z.enum(SHIRTS as [string, ...string[]], {
    required_error: "Please select your shirt size",
  }),
  affiliation: z.enum(Object.values(AFFILIATIONS) as [string, ...string[]], {
    required_error: "Please select your affiliation",
  }),
  requirements: z
    .array(z.string())
    .min(1, { message: "You must agree to the terms and conditions" }),
});
