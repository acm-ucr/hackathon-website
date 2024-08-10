"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Ideas";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";
import { useSession } from "next-auth/react";
import { ideaSchema } from "@/schemas/idea.ts";

const Ideas = () => {
  const { data: session } = useSession();
  const [idea, setIdea] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    email: session.user.email,
    roles: session.user.roles,
    form: "idea",
  });

  const onSubmit = async (setLoading, setState) => {
    setLoading(true);
    const result = ideaSchema.safeParse(idea);

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
        url: "/api/dashboard/ideas",
        body: idea,
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
      object={idea}
      setObject={setIdea}
      header="TEAM IDEA APPLICATION"
      onSubmit={onSubmit}
      bypass={true}
    />
  );
};

export default Ideas;
