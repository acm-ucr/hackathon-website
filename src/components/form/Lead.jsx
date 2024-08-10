"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Leads";
import { useSession } from "next-auth/react";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";
import { STATUSES } from "@/data/Statuses";
import { schema } from "@/schemas/lead";

const Lead = () => {
  const { data: session } = useSession();
  const [lead, setLead] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    roles: session.user.roles,
    email: session.user.email,
    form: "leads",
  });

  const handleSubmit = async (setLoading, setState) => {
    setLoading(true);
    const result = schema.safeParse(lead);

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
        url: "/api/dashboard/leads",
        body: lead,
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
      object={lead}
      setObject={setLead}
      header="LEAD APPLICATION"
      onSubmit={handleSubmit}
      statuses={STATUSES}
    />
  );
};

export default Lead;
