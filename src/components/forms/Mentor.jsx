"use client";

import { useState } from "react";
import Form from "@/app/forms/Form.jsx";
import { FIELDS } from "../../data/forms/Mentors.js";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";
const Mentor = () => {
  const { data: session } = useSession();
  const [mentor, setMentor] = useState({
    name: session.user.name,
    email: session.user.email,
  });

  const handleSubmit = async () => {
    const data = {
      ...mentor,
      availability: Object.entries(mentor.availability)
        .filter(([_, value]) => value.state === true)
        .map(([key]) => key),
    };

    await axios
      .post("/api/mentors", data)
      .then(() => toast(`✅ Submitted successfully!`));
  };
  return (
    <Form
      fields={FIELDS}
      object={mentor}
      setObject={setMentor}
      header="MENTOR APPLICATION"
      submit={handleSubmit}
    />
  );
};

export default Mentor;
