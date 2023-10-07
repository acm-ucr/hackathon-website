"use client";

import { useState } from "react";
import Form from "@/components/dynamic/forms/Form.jsx";
import { FIELDS } from "../../../data/dynamic/forms/Judge.js";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";

const judge = () => {
  const { data: session } = useSession();
  const [judge, setJudge] = useState({
    name: session.user.name,
    email: session.user.email,
  });

  const handleSubmit = (setLoading) => {
    const data = {
      ...judge,
    };

    axios.post("/api/judges", data).then(() => {
      setLoading(false);
      toast(`✅ Submitted successfully!`);
    });
  };

  return (
    <Form
      fields={FIELDS}
      object={judge}
      setObject={setJudge}
      header="JUDGE APPLICATION"
      onSubmit={handleSubmit}
    />
  );
};

export default judge;
