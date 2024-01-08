"use client";

import { useState } from "react";
import Form from "@/components/dynamic/form/Form.jsx";
import { api } from "@/utils/api";
import toast from "react-hot-toast";
import { FIELDS, ATTRIBUTES } from "@/data/dynamic/form/Interest";
import { useSession } from "next-auth/react";
import { STATUSES } from "@/data/dynamic/admin/Interests";

const Interest = () => {
  const { data: session } = useSession();
  const [interest, setInterest] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    email: session.user.email,
    roles: session.user.roles,
    form: "interests",
  });

  const onSubmit = (setLoading, setState) => {
    api({
      method: "POST",
      url: "/api/dashboard/interests",
      body: interest,
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
      object={interest}
      setObject={setInterest}
      header="INTEREST APPLICATION"
      onSubmit={onSubmit}
      statuses={STATUSES}
    />
  );
};

export default Interest;
