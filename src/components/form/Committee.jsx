"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Committees";
import { useSession } from "next-auth/react";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";
import { STATUSES } from "@/data/Statuses";
const Committee = () => {
  const { data: session } = useSession();
  function extractFirstName(str) {
    return str.trim().split(" ")[0];
  }

  function extractLastName(str) {
    return str.trim().split(" ")[1];
  }

  const [committee, setCommittee] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    firstName: extractFirstName(session.user.name),
    lastName: extractLastName(session.user.name),
    email: session.user.email,
    roles: session.user.roles,
    form: "admins",
  });

  const handleSubmit = (setLoading, setState) => {
    api({
      method: "POST",
      url: "/api/dashboard/committees",
      body: committee,
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
      object={committee}
      setObject={setCommittee}
      header="COMMITTEE PORTAL REQUEST"
      onSubmit={handleSubmit}
      statuses={STATUSES}
    />
  );
};

export default Committee;
