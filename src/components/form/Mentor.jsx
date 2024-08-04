"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Mentors.js";
import { useSession } from "next-auth/react";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";
import { STATUSES } from "@/data/Statuses";

const Mentor = () => {
  const { data: session } = useSession();

  function extractFirstName(str) {
    return str.trim().split(" ")[0];
  }

  function extractLastName(str) {
    return str.trim().split(" ")[1];
  }

  const [mentor, setMentor] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    firstName: extractFirstName(session.user.name),
    lastName: extractLastName(session.user.name),
    email: session.user.email,
    roles: session.user.roles,
    form: "mentors",
  });

  const handleSubmit = (setLoading, setState) => {
    api({
      method: "POST",
      url: "/api/dashboard/mentors",
      body: mentor,
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
      object={mentor}
      setObject={setMentor}
      header="MENTOR APPLICATION"
      onSubmit={handleSubmit}
      statuses={STATUSES}
    />
  );
};

export default Mentor;
