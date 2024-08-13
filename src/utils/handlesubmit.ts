import { z } from "zod";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";

export const handleSubmit = async ({
  data,
  schema,
  url,
  setLoading,
  setState,
}: {
  data: any;
  schema: z.ZodSchema<any>;
  url: string;
  setLoading: (loading: boolean) => void;
  setState: (state: number) => void;
}) => {
  setLoading(true);

  const result = schema.safeParse(data);

  if (!result.success) {
    result.error.errors.forEach((err) => {
      toaster(err.message, "error");
    });
    setLoading(false);
    return;
  }

  try {
    await api({
      method: "POST",
      url: url,
      body: data,
    });
    toaster(`Submitted successfully!`, "success");
    setState(2);
  } catch (error) {
    toaster(`Internal Server Error`, "error");
    setState(0);
  } finally {
    setLoading(false);
  }
};
