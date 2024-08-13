"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Feedback.js";
import { useSession } from "next-auth/react";
import { schema } from "@/schemas/feedback";
import { handleSubmit } from "@/utils/handlesubmit";

const Feedback = () => {
  const { data: session } = useSession();
  const [feedback, setFeedback] = useState({
    ...ATTRIBUTES,
    roles: session.user.roles,
    form: "feedback",
  });

  const onSubmit = async (setLoading, setState) => {
    await handleSubmit({
      data: feedback,
      schema,
      url: "/api/dashboard/feedback",
      setLoading,
      setState,
    });
  };

  return (
    <Form
      fields={FIELDS}
      object={feedback}
      setObject={setFeedback}
      header="FEEDBACK APPLICATION"
      onSubmit={onSubmit}
      bypass={true}
    />
  );
};

export default Feedback;
