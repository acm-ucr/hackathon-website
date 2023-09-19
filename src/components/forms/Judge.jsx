"use client";

import { useState } from "react";
import Form from "@/app/forms/Form.jsx";
import { FIELDS } from "../../data/forms/Judge.js";
import { useSession } from "next-auth/react";

const judge = () => {
  const { data: session } = useSession();
  const [judge, setJudge] = useState({
    name: session.user.name,
    email: session.user.email,
  });
  console.log(judge);
  return (
    <Form
      fields={FIELDS}
      object={judge}
      setObject={setJudge}
      header="JUDGE APPLICATION"
    />
  );
};

export default judge;
