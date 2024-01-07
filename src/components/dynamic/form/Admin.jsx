"use client";

import { useState } from "react";
import Form from "@/components/dynamic/form/Form.jsx";
import { FIELDS, ATTRIBUTES } from "../../../data/dynamic/form/Admins";
import { useSession } from "next-auth/react";
import { apiCallWithStatusCode } from "@/utils/api";
import toast from "react-hot-toast";
import { STATUSES } from "@/data/dynamic/admin/Admins";
import Error from "@/components/dynamic/Error";

const Admin = () => {
  const { data: session } = useSession();
  const [errorObj, setErrorObj] = useState(null);
  const [admin, setAdmin] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    email: session.user.email,
    roles: session.user.roles,
    form: "admins",
  });

  const handleSubmit = (setLoading, setState) => {
    apiCallWithStatusCode({
      method: "POST",
      url: "/api/dashboard/admins",
      body: admin,
    })
      .then(({ responseBody, statusCode }) => {
        if (statusCode == 200) {
          toast(`✅ Submitted successfully!`);
        } else if (statusCode == 400) {
          toast(`❌ Invalid input`);
        } else {
          setErrorObj({
            code: statusCode,
            name: "Internal Server Error",
            message: "Please reach out the dev team with the below message",
            dev: responseBody.message,
          });
        }
      })
      .catch((error) => {
        if (!errorObj) {
          setErrorObj({
            code: 500,
            name: "Internal Server Error",
            message: "Please reach out the dev team with the below message",
            dev: `Encountered error while calling API: ${error}`,
          });
        }
      })
      .finally(() => {
        setLoading(false);
        setState(2);
      });
  };
  return (
    <>
      {!errorObj ? (
        <Form
          fields={FIELDS}
          object={admin}
          setObject={setAdmin}
          header="ADMIN PORTAL REQUEST"
          onSubmit={handleSubmit}
          statuses={STATUSES}
        />
      ) : (
        <Error
          code={errorObj.code}
          error={errorObj.name}
          message={errorObj.message}
          dev={errorObj.dev}
        />
      )}
    </>
  );
};

export default Admin;
