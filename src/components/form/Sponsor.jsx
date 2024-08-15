"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Sponsors";
import { useSession } from "next-auth/react";
import { STATUSES } from "@/data/Statuses";
import { schema } from "@/schemas/sponsor";
import { submit } from "@/utils/form";

const Sponsor = () => {
  const { data: session } = useSession();
  const [sponsor, setSponsor] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    email: session.user.email,
    roles: session.user.roles,
    form: "sponsors",
  });

  const onSubmit = async (setLoading, setState) => {
    await submit({
      data: sponsor,
      schema,
      url: "/api/dashboard/sponsors",
      setLoading,
      setState,
    });
  };
  return (
    <Form
      fields={FIELDS}
      object={sponsor}
      setObject={setSponsor}
      header="SPONSORSHIP INQUIRY"
      onSubmit={onSubmit}
      statuses={STATUSES}
      packet={true}
    />
  );
};

export default Sponsor;
