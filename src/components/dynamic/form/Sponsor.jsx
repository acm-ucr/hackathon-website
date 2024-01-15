"use client";

import { useState } from "react";
import Form from "@/components/dynamic/form/form/Form.jsx";
import { FIELDS, ATTRIBUTES } from "@/data/dynamic/form/Sponsors";
import { useSession } from "next-auth/react";
import { api } from "@/utils/api";
import toast from "react-hot-toast";
import { STATUSES } from "@/data/dynamic/admin/Sponsors";

const Sponsor = () => {
  const { data: session } = useSession();
  const [sponsor, setSponsor] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
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
      object={sponsor}
      setObject={setSponsor}
      header="SPONSORSHIP INTEREST FORM"
      onSubmit={handleSubmit}
      statuses={STATUSES}
      packet={true}
    />
  );
};

export default Sponsor;
