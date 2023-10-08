"use client";

import { useState } from "react";
import Form from "@/components/dynamic/forms/Form.jsx";
import { FIELDS, HELPER } from "../../../data/dynamic/forms/Feedback.js";

const Feedback = () => {
  const [feedback, setfeedback] = useState({ HELPER });

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
