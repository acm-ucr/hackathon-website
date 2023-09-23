"use client";
"use client";

import { useState } from "react";
import Form from "@/app/forms/Form.jsx";
import { FIELDS } from "../../data/forms/Register.js";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const { data: session } = useSession();
  const [register, setregister] = useState({
    name: session.user.name,
    email: session.user.email,
  });

  const handleSubmit = async () => {
    const data = {
      ...register,
      diet: Object.keys(register.diet),
    };

    await axios
      .post("/api/participants", data)
      .then(() => toast(`✅ Submitted successfully!`));
  };

  return (
    <Form
      fields={FIELDS}
      object={register}
      setObject={setregister}
      header="HACKER APPLICATION"
      submit={handleSubmit}
    />
  );
};

export default Register;
