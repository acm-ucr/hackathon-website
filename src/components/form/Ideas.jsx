"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form.jsx";
import { FIELDS, ATTRIBUTES } from "@/data/form/Ideas";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";
import { useSession } from "next-auth/react";

const Ideas = () => {
  const { data: session } = useSession();
  const [idea, setIdea] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    email: session.user.email,
    roles: session.user.roles,
    form: "idea",
  });
  const onSubmit = (setLoading, setState) => {
    api({
      method: "POST",
      url: "/api/dashboard/interests",
      body: interest,
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
      object={idea}
      setObject={setIdea}
      header="TEAM IDEA APPLICATION"
      onSubmit={onSubmit}
    />
  );
};

export default Ideas;
