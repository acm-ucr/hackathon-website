"use client";

import { useState } from "react";
import Form from "@/components/dynamic/forms/Form.jsx";
import { FIELDS } from "../../../data/dynamic/forms/Mentors.js";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";

const Mentor = () => {
  const { data: session } = useSession();

  const [mentor, setMentor] = useState({
    name: session.user.name,
    email: session.user.email,
  });

  const handleSubmit = (setLoading) => {
    const data = {
      ...mentor,
      availability: Object.keys(mentor.availability),
    };

    axios.post("/api/mentors", data).then(() => {
      setLoading(false);
      toast(`✅ Submitted successfully!`);
    });
  };
  return (
    <Form
      fields={FIELDS}
      object={mentor}
      setObject={setMentor}
      header="MENTOR APPLICATION"
      onSubmit={handleSubmit}
    />
  );
};

export default Mentor;
