"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Judge.js";
import { useSession } from "next-auth/react";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";
import { STATUSES } from "@/data/Statuses";
import { schema } from "@/schemas/judge";

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

  const handleSubmit = async (setLoading, setState) => {
    setLoading(true);
    const result = schema.safeParse(judge);

    if (!result.success) {
      result.error.errors.forEach((err) => {
        toaster(err.message, "error");
      });
      setLoading(false);
      return;
    }

    try {
      await api({
        method: "POST",
        url: "/api/dashboard/judges",
        body: judge,
      });
      toaster(`Submitted successfully!`, "success");
      setState(2);
    } catch (error) {
      toaster(`Internal Server Error`, "error");
      setState(0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      fields={FIELDS}
      object={judge}
      setObject={setJudge}
      header="JUDGE APPLICATION"
      onSubmit={handleSubmit}
      statuses={STATUSES}
    />
  );
};

export default Judge;
