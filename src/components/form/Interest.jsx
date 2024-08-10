"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";
import { FIELDS, ATTRIBUTES } from "@/data/form/Interest";
import { useSession } from "next-auth/react";
import { STATUSES } from "@/data/Statuses";
import { schema } from "@/schemas/interest";

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
    setLoading(true);
    const result = schema.safeParse(interest);

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
        url: "/api/dashboard/interests",
        body: interest,
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
      object={interest}
      setObject={setInterest}
      header="INTEREST APPLICATION"
      onSubmit={onSubmit}
      statuses={STATUSES}
    />
  );
};

export default Interest;
