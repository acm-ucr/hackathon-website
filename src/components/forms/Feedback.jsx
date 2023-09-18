"use client";

import { useState } from "react";
import Form from "@/app/forms/Form.jsx";
import { FIELDS } from "../../data/forms/Feedback.js";

const Feedback = () => {
  const [feedback, setfeedback] = useState({});
  console.log(feedback);
  console.log(feedback);
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
