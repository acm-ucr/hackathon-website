"use client";

import { useState } from "react";
import Form from "@/components/dynamic/form/Form.jsx";
import { FIELDS, ATTRIBUTES } from "@/data/dynamic/form/Committees";
import { useSession } from "next-auth/react";
import { api } from "@/utils/api";
import toast from "react-hot-toast";
import { STATUSES } from "@/data/dynamic/admin/Committees";

const Committee = () => {
  const { data: session } = useSession();
  const [committee, setCommittee] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    email: session.user.email,
    roles: session.user.roles,
    form: "committees",
  });

  const handleSubmit = (setLoading, setState) => {
    api({
      method: "POST",
      url: "/api/dashboard/committees",
      body: committee,
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
      object={committee}
      setObject={setCommittee}
      header="COMMITTEE PORTAL REQUEST"
      onSubmit={handleSubmit}
      statuses={STATUSES}
    />
  );
};

export default Committee;
