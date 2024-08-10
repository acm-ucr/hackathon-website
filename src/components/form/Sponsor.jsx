"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Sponsors";
import { useSession } from "next-auth/react";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";
import { STATUSES } from "@/data/Statuses";
import { schema } from "@/schemas/sponsor";

const Sponsor = () => {
  const { data: session } = useSession();
  const [sponsor, setSponsor] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    email: session.user.email,
    roles: session.user.roles,
    form: "sponsors",
  });

  const handleSubmit = async (setLoading, setState) => {
    setLoading(true);
    const result = schema.safeParse(sponsor);

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
        url: "/api/dashboard/sponsors",
        body: sponsor,
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
      object={sponsor}
      setObject={setSponsor}
      header="SPONSORSHIP INQUIRY"
      onSubmit={handleSubmit}
      statuses={STATUSES}
      packet={true}
    />
  );
};

export default Sponsor;
