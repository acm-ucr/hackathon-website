"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Ideas";
import { useSession } from "next-auth/react";
import { schema } from "@/schemas/idea";
import { handleSubmit } from "@/utils/handlesubmit";

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
    await handleSubmit({
      data: idea,
      schema,
      url: "/api/dashboard/ideas",
      setLoading,
      setState,
    });
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
