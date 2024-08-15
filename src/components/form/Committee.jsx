"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Committees";
import { useSession } from "next-auth/react";
import { STATUSES } from "@/data/Statuses";
import { schema } from "@/schemas/committee";
import { submit } from "@/utils/form";

const Committee = () => {
  const { data: session } = useSession();
  const [committee, setCommittee] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    email: session.user.email,
    roles: session.user.roles,
    form: "committees",
  });

  const onSubmit = async (setLoading, setState) => {
    await submit({
      data: committee,
      schema,
      url: "/api/dashboard/committees",
      setLoading,
      setState,
    });
  };

  return (
    <Form
      fields={FIELDS}
      object={committee}
      setObject={setCommittee}
      header="COMMITTEE PORTAL REQUEST"
      onSubmit={onSubmit}
      statuses={STATUSES}
    />
  );
};

export default Committee;
