"use client";

import { useState } from "react";
import Form from "@/components/dynamic/form/Form.jsx";
import { FIELDS, ATTRIBUTES } from "../../../data/dynamic/form/Participant.js";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";
import { STATUSES } from "@/data/dynamic/admin/Participants.js";

const Participant = () => {
  const { data: session } = useSession();
  const [participant, setParticipant] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    email: session.user.email,
    roles: session.user.roles,
    form: "participants",
  });

  const handleSubmit = (setLoading) => {
    axios
      .post("/api/participants", participant)
      .then(() => toast(`✅ Submitted successfully!`))
      .catch(() => toast(`❌ Internal Server Error`))
      .finally(() => {
        setLoading(false);
        setState(2);
      });
  };

  return (
    <Form
      fields={FIELDS}
      object={participant}
      setObject={setParticipant}
      header="HACKER APPLICATION"
      onSubmit={handleSubmit}
      statuses={STATUSES}
    />
  );
};

export default Participant;
