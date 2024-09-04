"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Mentors";
import { useSession } from "next-auth/react";
import { STATUSES } from "@/data/Statuses";
import { schema } from "@/schemas/mentor";
import { submit } from "@/utils/form";

const Mentor = () => {
  const { data: session } = useSession();

  const [mentor, setMentor] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    email: session.user.email,
    roles: session.user.roles,
    form: "mentors",
  });

  const onSubmit = async (setLoading, setState) => {
    await submit({
      data: mentor,
      schema,
      url: "/api/dashboard/mentors",
      setLoading,
      setState,
    });
  };
  return (
    <Form
      fields={FIELDS}
      object={mentor}
      setObject={setMentor}
      header="MENTOR APPLICATION"
      onSubmit={onSubmit}
      statuses={STATUSES}
    />
  );
};

export default Mentor;
