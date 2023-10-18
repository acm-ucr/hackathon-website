"use client";

import { useState } from "react";
import Form from "@/components/dynamic/forms/Form.jsx";
import { FIELDS, ATTRIBUTES } from "../../../data/dynamic/forms/Participant.js";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";

const Participant = () => {
  const { data: session } = useSession();
  const [participant, setParticipant] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    email: session.user.email,
  });

  const handleSubmit = (setLoading) => {
    axios
      .post("/api/participants", participant)
      .then(() => toast(`✅ Submitted successfully!`))
      .catch(() => toast(`❌ Internal Server Error`))
      .finally(() => setLoading(false));
  };

  return (
    <Form
      fields={FIELDS}
      object={participant}
      setObject={setParticipant}
      header="HACKER APPLICATION"
      onSubmit={handleSubmit}
    />
  );
};

export default Participant;
