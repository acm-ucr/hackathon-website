"use client";

import { useState } from "react";
import Form from "@/components/dynamic/form/form/Form.jsx";
import { FIELDS, ATTRIBUTES } from "@/data/dynamic/form/Panels.js";
import { useSession } from "next-auth/react";
import { api } from "@/utils/api";
import toast from "react-hot-toast";
import { STATUSES } from "@/data/dynamic/admin/Panels";

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
      .then(() => toast(`✅ Submitted successfully!`))
      .catch(() => toast(`❌ Internal Server Error`))
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
