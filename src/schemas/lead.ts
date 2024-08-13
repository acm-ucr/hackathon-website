import { z } from "zod";
import {
  GENDERS,
  GRADES,
  MAJORS,
  AGES,
  SOURCES,
} from "@/data/form/Information";
import { SCHOOLS } from "@/data/form/Schools";

export const schema = z.object({
  name: z.string().min(1, { message: "Name is invalid" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^\d{3} \d{3} \d{4}$/, {
    message: "Invalid phone number. Expected format: 123 456 7890",
  }),
  discord: z.string().min(1, { message: "Discord username is invalid" }),
  major: z.enum(MAJORS as [string, ...string[]], {
    required_error: "Please select your major",
  }),
  age: z.enum(AGES as [string, ...string[]], {
    required_error: "Please select your age",
  }),
  school: z.enum(SCHOOLS as [string, ...string[]], {
    required_error: "Please select your school",
  }),
  grade: z.enum(GRADES as [string, ...string[]], {
    required_error: "Please select your grade",
  }),
  gender: z.enum(GENDERS as [string, ...string[]], {
    required_error: "Please select your gender",
  }),
  eventSource: z.enum(SOURCES as [string, ...string[]], {
    required_error: "Please select where you found the event",
  }),
  priorHackathons: z
    .array(z.string())
    .min(1, { message: "Prior hackathons is required" }),
  priorExperience: z
    .string()
    .min(1, { message: "Prior experience is required" }),
  response: z.string().min(1, { message: `Response is required` }),
  resume: z.string().optional(),
  requirements: z
    .array(z.string())
    .min(1, { message: "You must agree to the terms and conditions" }),
});
