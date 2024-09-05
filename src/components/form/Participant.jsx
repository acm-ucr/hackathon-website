"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Participant";
import { useSession } from "next-auth/react";
import { STATUSES } from "@/data/Statuses";
import { schema } from "@/schemas/participant";
import { submit } from "@/utils/form";

const Participant = () => {
  const { data: session } = useSession();
  const [participant, setParticipant] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    email: session.user.email,
    roles: session.user.roles,
    form: "participants",
  });

  const onSubmit = async (setLoading, setState) => {
    await submit({
      data: participant,
      schema,
      url: "/api/dashboard/participants",
      setLoading,
      setState,
    });
  };

  return (
    <Form
      fields={FIELDS}
      object={participant}
      setObject={setParticipant}
      header="HACKER APPLICATION"
      onSubmit={onSubmit}
      statuses={STATUSES}
    />
  );
};

export default Participant;
