"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Leads";
import { useSession } from "next-auth/react";
import { STATUSES } from "@/data/Statuses";
import { schema } from "@/schemas/lead";
import { submit } from "@/utils/form";

const Lead = () => {
  const { data: session } = useSession();
  const [lead, setLead] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    roles: session.user.roles,
    email: session.user.email,
    form: "leads",
  });

  const onSubmit = async (setLoading, setState) => {
    await submit({
      data: lead,
      schema,
      url: "/api/dashboard/leads",
      setLoading,
      setState,
    });
  };
  return (
    <Form
      fields={FIELDS}
      object={lead}
      setObject={setLead}
      header="LEAD APPLICATION"
      onSubmit={onSubmit}
      statuses={STATUSES}
    />
  );
};

export default Lead;
