"use client";

import { useState } from "react";
import Form from "@/components/dynamic/form/form/Form.jsx";
import { FIELDS, ATTRIBUTES } from "@/data/dynamic/form/Feedback.js";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";
import { useSession } from "next-auth/react";

const Feedback = () => {
  const { data: session } = useSession();
  const [feedback, setfeedback] = useState({
    ...ATTRIBUTES,
    roles: session.user.roles,
    form: "feedback",
  });

  const handleSubmit = (setLoading, setState) => {
    api({
      method: "POST",
      url: "/api/dashboard/feedback",
      body: feedback,
    })
      .then(() => toaster(`Submitted successfully!`, "success"))
      .catch(() => toaster(`Internal Server Error`, "error"))
      .finally(() => {
        setLoading(false);
        setState(2);
      });
  };

  return (
    <Form
      fields={FIELDS}
      object={feedback}
      setObject={setfeedback}
      header="FEEDBACK APPLICATION"
      onSubmit={handleSubmit}
      bypass={true}
    />
  );
};

export default Feedback;
