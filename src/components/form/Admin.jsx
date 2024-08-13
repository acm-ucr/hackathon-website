"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Admins";
import { useSession } from "next-auth/react";
import { STATUSES } from "@/data/Statuses";
import { schema } from "@/schemas/admin";
import { handleSubmit } from "@/utils/handlesubmit";

const Admin = () => {
  const { data: session } = useSession();
  const [admin, setAdmin] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    email: session.user.email,
    roles: session.user.roles,
    form: "admins",
  });

  const onSubmit = async (setLoading, setState) => {
    await handleSubmit({
      data: admin,
      schema,
      url: "/api/dashboard/admins",
      setLoading,
      setState,
    });
  };
  return (
    <Form
      fields={FIELDS}
      object={admin}
      setObject={setAdmin}
      header="ADMIN PORTAL REQUEST"
      onSubmit={onSubmit}
      statuses={STATUSES}
    />
  );
};

export default Admin;
