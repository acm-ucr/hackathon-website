"use client";
"use client";

import { useState } from "react";
import Form from "@/app/forms/Form.jsx";
import { FIELDS } from "../../data/forms/Register.js";
import { useSession } from "next-auth/react";

const Register = () => {
  const { data: session } = useSession();
  const [register, setregister] = useState({
    name: session.user.name,
    email: session.user.email,
  });

  return (
    <Form
      fields={FIELDS}
      object={register}
      setObject={setregister}
      header="HACKER APPLICATION"
    />
  );
};

export default Register;
