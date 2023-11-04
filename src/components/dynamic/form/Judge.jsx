"use client";

import { useState } from "react";
import Form from "@/components/dynamic/form/Form.jsx";
import { FIELDS, ATTRIBUTES } from "../../../data/dynamic/form/Judge.js";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";

const judge = () => {
  const { data: session } = useSession();
  const [judge, setJudge] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    email: session.user.email,
  });

  const handleSubmit = (setLoading) => {
    axios
      .post("/api/judges", judge)
      .then(() => toast(`✅ Submitted successfully!`))
      .catch(() => toast(`❌ Internal Server Error`))
      .finally(() => setLoading(false));
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
