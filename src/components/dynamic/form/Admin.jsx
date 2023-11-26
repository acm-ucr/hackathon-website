"use client";

import { useState } from "react";
import Form from "@/components/dynamic/form/Form.jsx";
import { FIELDS, ATTRIBUTES } from "../../../data/dynamic/form/Admins";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";
import { STATUSES } from "@/data/dynamic/admin/Admins";

const Admin = () => {
  const { data: session } = useSession();
  const [admin, setAdmin] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    email: session.user.email,
    roles: session.user.roles,
    form: "admins",
  });

  const handleSubmit = (setLoading, setState) => {
    axios
      .post("/api/admins", admin)
      .then(() => toast(`✅ Submitted successfully!`))
      .catch(() => toast(`❌ Internal Server Error`))
      .finally(() => {
        setLoading(false);
        setState(2);
      });
  };
  return (
    <Form
      fields={FIELDS}
      object={admin}
      setObject={setAdmin}
      header="ADMIN PORTAL REQUEST"
      onSubmit={handleSubmit}
      statuses={STATUSES}
    />
  );
};

export default Admin;
