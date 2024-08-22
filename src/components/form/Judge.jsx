"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Judge";
import { useSession } from "next-auth/react";
import { STATUSES } from "@/data/Statuses";
import { schema } from "@/schemas/judge";
import { submit } from "@/utils/form";

const Judge = () => {
  const { data: session } = useSession();
  const [judge, setJudge] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    email: session.user.email,
    roles: session.user.roles,
    photo: session.user.photo ?? null,
    form: "judges",
  });

  const onSubmit = async (setLoading, setState) => {
    await submit({
      data: judge,
      schema,
      url: "/api/dashboard/judges",
      setLoading,
      setState,
    });
  };

  return (
    <Form
      fields={FIELDS}
      object={judge}
      setObject={setJudge}
      header="JUDGE APPLICATION"
      onSubmit={onSubmit}
      statuses={STATUSES}
    />
  );
};

export default Judge;
