"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Committees";
import { useSession } from "next-auth/react";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";
import { STATUSES } from "@/data/Statuses";
import { schema } from "@/schemas/committee";

const Committee = () => {
  const { data: session } = useSession();
  const [committee, setCommittee] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    email: session.user.email,
    roles: session.user.roles,
    form: "committees",
  });

  const handleSubmit = async (setLoading, setState) => {
    setLoading(true);
    const result = schema.safeParse(committee);

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
        url: "/api/dashboard/committees",
        body: committee,
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
      object={committee}
      setObject={setCommittee}
      header="COMMITTEE PORTAL REQUEST"
      onSubmit={handleSubmit}
      statuses={STATUSES}
    />
  );
};

export default Committee;
