"use client";

import { useState } from "react";
import Form from "@/components/dynamic/form/form/Form.jsx";
import { FIELDS, ATTRIBUTES } from "@/data/dynamic/form/Feedback.js";
import { api } from "@/utils/api";
import toast from "react-hot-toast";
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
      .then(() => toast(`✅ Submitted successfully!`))
      .catch(() => toast(`❌ Internal Server Error`))
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
