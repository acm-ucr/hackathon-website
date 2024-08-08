"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Panelists";
import { useSession } from "next-auth/react";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";
import { STATUSES } from "@/data/Statuses";

const Panel = () => {
  const { data: session } = useSession();
  const [panel, setPanel] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    email: session.user.email,
    roles: session.user.roles,
    photo: session.user.photo ?? null,
    form: "panels",
  });

  const handleSubmit = (setLoading, setState) => {
    api({
      method: "POST",
      url: "/api/dashboard/panels",
      body: panel,
    })
      .then(() => toaster(`✅ Submitted successfully!`))
      .catch(() => toaster(`❌ Internal Server Error`))
      .finally(() => {
        setLoading(false);
        setState(2);
      });
  };

  return (
    <Form
      fields={FIELDS}
      object={panel}
      setObject={setPanel}
      header="PANEL APPLICATIONS"
      onSubmit={handleSubmit}
      statuses={STATUSES}
    />
  );
};

export default Panel;
