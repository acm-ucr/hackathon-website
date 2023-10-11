"use client";

import { useState } from "react";
import Form from "@/components/dynamic/forms/Form.jsx";
import { FIELDS, ATTRIBUTES } from "@/data/dynamic/forms/Committees";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";

const Committee = () => {
  const { data: session } = useSession();
  const [committee, setCommittee] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    email: session.user.email,
  });

  const handleSubmit = (setLoading) => {
    axios
      .post("/api/committees", committee)
      .then(() => toast(`✅ Submitted successfully!`))
      .catch(() => toast(`❌ Internal Server Error`))
      .finally(() => setLoading(false));
  };
  return (
    <Form
      fields={FIELDS}
      object={committee}
      setObject={setCommittee}
      header="COMMITTEE PORTAL REQUEST"
      onSubmit={handleSubmit}
    />
  );
};

export default Committee;
