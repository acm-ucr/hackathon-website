"use client";

import { useState } from "react";
import Form from "@/app/forms/Form.jsx";
import { FIELDS } from "../../data/forms/Judge.js";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";

const judge = () => {
  const { data: session } = useSession();
  const [judge, setJudge] = useState({
    name: session.user.name,
    email: session.user.email,
  });

  const handleSubmit = async () => {
    const data = {
      ...judge,
    };

    await axios
      .post("/api/judges", data)
      .then(() => toast(`✅ Submitted successfully!`));
  };

  return (
    <Form
      fields={FIELDS}
      object={judge}
      setObject={setJudge}
      header="JUDGE APPLICATION"
      submit={handleSubmit}
    />
  );
};

export default judge;
