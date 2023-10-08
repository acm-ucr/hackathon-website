"use client";

import { useState } from "react";
import Form from "@/components/dynamic/forms/Form.jsx";
import { FIELDS, HEALPER } from "../../../data/dynamic/forms/Feedback.js";

const Feedback = () => {
  const [feedback, setfeedback] = useState({ HEALPER });

  return (
    <Form
      fields={FIELDS}
      object={feedback}
      setObject={setfeedback}
      header="feedback APPLICATION"
    />
  );
};

export default Feedback;
