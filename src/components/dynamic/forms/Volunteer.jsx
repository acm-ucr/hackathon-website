"use client";

import { useState } from "react";
import Form from "@/components/dynamic/forms/Form.jsx";
import { FIELDS } from "../../../data/dynamic/forms/Volunteers.js";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";

const volunteer = () => {
  const { data: session } = useSession();
  const [volunteer, setVolunteer] = useState({
    name: session.user.name,
    email: session.user.email,
  });

  const handleSubmit = (setLoading) => {
    const data = {
      ...volunteer,
      availability: Object.keys(volunteer.availability),
    };

    axios.post("/api/volunteers", data).then(() => {
      setLoading(false);
      toast(`✅ Submitted successfully!`);
    });
  };
  return (
    <Form
      fields={FIELDS}
      object={volunteer}
      setObject={setVolunteer}
      header="VOLUNTEER APPLICATION"
      onSubmit={handleSubmit}
    />
  );
};

export default volunteer;
