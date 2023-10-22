"use client";
import { useState } from "react";
import {
  DROPDOWN,
  FILTERS,
  HEADERS,
  STATUSES,
  TAGS,
} from "@/data/dynamic/admin/Feedback.js";
import Dashboard from "../Dashboard.jsx";

const Feedback = () => {
  const [feedback, setFeedback] = useState(null);

  return (
    <Dashboard
      objects={feedback}
      setObjects={setFeedback}
      title="Feedback"
      page="feedback"
      empty="No Feedback Available"
      filter={FILTERS}
      header={HEADERS}
      statuses={STATUSES}
      tags={TAGS}
      dropdown={DROPDOWN}
    />
  );
};
export default Feedback;
