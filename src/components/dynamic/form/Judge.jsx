"use client";

import { useState } from "react";
import Form from "@/components/dynamic/form/form/Form.jsx";
import { FIELDS, ATTRIBUTES } from "@/data/dynamic/form/Judge.js";
import { useSession } from "next-auth/react";
import { api } from "@/utils/api";
import toast from "react-hot-toast";
import { STATUSES } from "@/data/dynamic/admin/Judges.js";

const Judge = () => {
  const { data: session } = useSession();
  const [judge, setJudge] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    preferredName: session.user.name,
    email: session.user.email,
    roles: session.user.roles,
    form: "judges",
  });

  const handleSubmit = (setLoading, setState) => {
    api({
      method: "POST",
      url: "/api/dashboard/judges",
      body: judge,
    })
      .then(() => toast(`✅ Submitted successfully!`))
      .catch(() => toast(`❌ Internal Server Error`))
      .finally(() => {
        setLoading(false);
        setState(2);
      });
  };

  return (
    <Form
      fields={FIELDS}
      object={judge}
      setObject={setJudge}
      header="JUDGE APPLICATION"
      onSubmit={handleSubmit}
      statuses={STATUSES}
    />
  );
};

export default Judge;
