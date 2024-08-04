"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Sponsors";
import { useSession } from "next-auth/react";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";
import { STATUSES } from "@/data/Statuses";

const Sponsor = () => {
  const { data: session } = useSession();
  function extractFirstName(str) {
    return str.trim().split(" ")[0];
  }

  function extractLastName(str) {
    return str.trim().split(" ")[1];
  }

  const [sponsor, setSponsor] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    firstName: extractFirstName(session.user.name),
    lastName: extractLastName(session.user.name),
    email: session.user.email,
    roles: session.user.roles,
    form: "sponsors",
  });

  const handleSubmit = (setLoading, setState) => {
    api({
      method: "POST",
      url: "/api/dashboard/sponsors",
      body: sponsor,
    })
      .then(() => toaster(`Submitted successfully!`, "success"))
      .catch(() => toaster(`Internal Server Error`, "error"))
      .finally(() => {
        setLoading(false);
        setState(2);
      });
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
