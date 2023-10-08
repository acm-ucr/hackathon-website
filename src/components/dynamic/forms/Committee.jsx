"use client";

import { useState } from "react";
import Form from "@/components/dynamic/forms/Form.jsx";
import { FIELDS, HELPER } from "../../../data/dynamic/forms/Committees";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";

const Committee = () => {
  const { data: session } = useSession();
  const [committee, setCommittee] = useState({
    ...HELPER,
    name: session.user.name,
    email: session.user.email,
  });

  const handleSubmit = (setLoading) => {
    axios
      .post("/api/committees", committee)
      .then(() => {
        setLoading(false);
        toast(`✅ Submitted successfully!`);
      })
      .catch(() => {
        setLoading(false);
        toast(`❌ Internal Server Error`);
      });
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
