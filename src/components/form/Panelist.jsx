"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form.jsx";
import { FIELDS, ATTRIBUTES } from "@/data/form/Panelists.js";
import { useSession } from "next-auth/react";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";
import { STATUSES } from "@/data/admin/Panelists";

const Panel = () => {
  const { data: session } = useSession();
  function extractFirstName(str) {
    return str.trim().split(" ")[0];
  }

  function extractLastName(str) {
    return str.trim().split(" ")[1];
  }

  const [panel, setPanel] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    firstName: extractFirstName(session.user.name),
    lastName: extractLastName(session.user.name),
    email: session.user.email,
    roles: session.user.roles,
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
