"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Interest";
import { useSession } from "next-auth/react";
import { STATUSES } from "@/data/Statuses";
import { schema } from "@/schemas/interest";
import { submit } from "@/utils/form";

const Interest = () => {
  const { data: session } = useSession();
  const [interest, setInterest] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    email: session.user.email,
    roles: session.user.roles,
    form: "interests",
  });

  const onSubmit = async (setLoading, setState) => {
    await submit({
      data: interest,
      schema,
      url: "/api/dashboard/interests",
      setLoading,
      setState,
    });
  };

  return (
    <Form
      fields={FIELDS}
      object={interest}
      setObject={setInterest}
      header="INTEREST APPLICATION"
      onSubmit={onSubmit}
      statuses={STATUSES}
    />
  );
};

export default Interest;
