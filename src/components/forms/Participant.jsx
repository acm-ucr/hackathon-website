"use client";
"use client";

import { useState } from "react";
import Form from "@/app/forms/Form.jsx";
import { FIELDS } from "../../data/forms/Participant.js";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";

const Participant = () => {
  const { data: session } = useSession();
  const [participant, setParticipant] = useState({
    name: session.user.name,
    email: session.user.email,
  });

  const handleSubmit = () => {
    const data = {
      ...participant,
      diet: Object.keys(participant.diet),
    };

    axios
      .post("/api/participants", data)
      .then(() => toast(`✅ Submitted successfully!`));
  };

  return (
    <Form
      fields={FIELDS}
      object={participant}
      setObject={setParticipant}
      header="HACKER APPLICATION"
      submit={handleSubmit}
    />
  );
};

export default Participant;
