"use client";

import { useState } from "react";
import Form from "@/app/forms/Form.jsx";
import { FIELDS } from "../../data/forms/Admin.js";
import { useSession } from "next-auth/react";

const Admin = () => {
  const { data: session } = useSession();
  const [admin, setAdmin] = useState({
    name: session.user.name,
    email: session.user.email,
  });

  return (
    <Form
      fields={FIELDS}
      object={admin}
      setObject={setAdmin}
      header="ADMIN PORTAL REQUEST"
    />
  );
};

export default Admin;
