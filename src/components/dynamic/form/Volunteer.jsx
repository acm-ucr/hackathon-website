"use client";

import { useState } from "react";
import Form from "@/components/dynamic/form/Form.jsx";
import { FIELDS, ATTRIBUTES } from "../../../data/dynamic/form/Volunteers.js";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";

const Volunteer = () => {
  const { data: session } = useSession();

  const [volunteer, setVolunteer] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    email: session.user.email,
  });

  const handleSubmit = (setLoading) => {
    axios
      .post("/api/volunteers", volunteer)
      .then(() => toast(`✅ Submitted successfully!`))
      .catch(() => toast(`❌ Internal Server Error`))
      .finally(() => setLoading(false));
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

export default Volunteer;
