"use client";

import { useState } from "react";
import Form from "@/components/forms/Form.jsx";
import { FIELDS } from "../../data/forms/Committees";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";

const Committee = () => {
  const { data: session } = useSession();
  const [committee, setCommittee] = useState({
    name: session.user.name,
    email: session.user.email,
  });

  const handleSubmit = (setLoading) => {
    axios.post("/api/committees", committee).then(() => {
      setLoading(false);
      toast(`✅ Submitted successfully!`);
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
