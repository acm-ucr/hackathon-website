import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: string[]) => twMerge(clsx(inputs));
