"use client";

import { useState } from "react";
import Form from "@/app/forms/Form.jsx";
import { FIELDS } from "../../data/forms/Admin.js";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";

const Admin = () => {
  const { data: session } = useSession();
  const [admin, setAdmin] = useState({
    name: session.user.name,
    email: session.user.email,
  });

  const handleSubmit = async () => {
    await axios
      .post("/api/admins", admin)
      .then(() => toast(`✅ Submitted successfully!`));
  };
  return (
    <Form
      fields={FIELDS}
      object={admin}
      setObject={setAdmin}
      header="ADMIN PORTAL REQUEST"
      submit={handleSubmit}
    />
  );
};

export default Admin;
