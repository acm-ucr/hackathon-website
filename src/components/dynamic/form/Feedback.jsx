"use client";

import { useState } from "react";
import Form from "@/components/dynamic/form/Form.jsx";
import { FIELDS, ATTRIBUTES } from "../../../data/dynamic/form/Feedback.js";
import axios from "axios";
import toast from "react-hot-toast";

const Feedback = () => {
  const [feedback, setfeedback] = useState(ATTRIBUTES);

  const onSubmit = (setLoading) => {
    axios
      .post("/api/feedback", feedback)
      .then(() => toast(`✅ Submitted successfully!`))
      .catch(() => toast(`❌ Internal Server Error`))
      .finally(() => setLoading(false));
  };

  return (
    <Form
      fields={FIELDS}
      object={feedback}
      setObject={setfeedback}
      header="FEEDBACK APPLICATION"
      onSubmit={onSubmit}
      bypass={true}
    />
  );
};

export default Feedback;
