"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Feedback.js";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";
import { useSession } from "next-auth/react";
import { feedbackSchema } from "@/schemas/feedback.ts";

const Feedback = () => {
  const { data: session } = useSession();
  const [feedback, setFeedback] = useState({
    ...ATTRIBUTES,
    roles: session.user.roles,
    form: "feedback",
  });

  const handleSubmit = async (setLoading, setState) => {
    setLoading(true);
    const result = feedbackSchema.safeParse(feedback);

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
        url: "/api/dashboard/feedback",
        body: feedback,
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

  return (
    <Form
      fields={FIELDS}
      object={feedback}
      setObject={setFeedback}
      header="FEEDBACK APPLICATION"
      onSubmit={handleSubmit}
      bypass={true}
    />
  );
};

export default Feedback;
