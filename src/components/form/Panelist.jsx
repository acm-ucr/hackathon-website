"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Panelists";
import { useSession } from "next-auth/react";
import { STATUSES } from "@/data/Statuses";
import { schema } from "@/schemas/panel";
import { submit } from "@/utils/form";

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

  const onSubmit = async (setLoading, setState) => {
    await submit({
      data: panel,
      schema,
      url: "/api/dashboard/panelists",
      setLoading,
      setState,
    });
  };

  return (
    <Form
      fields={FIELDS}
      object={panel}
      setObject={setPanel}
      header="PANEL APPLICATIONS"
      onSubmit={onSubmit}
      statuses={STATUSES}
    />
  );
};

export default Panel;
