"use client";

import { useState } from "react";
import Form from "@/components/form/form/Form";
import { FIELDS, ATTRIBUTES } from "@/data/form/Volunteers";
import { useSession } from "next-auth/react";
import { STATUSES } from "@/data/Statuses";
import { schema } from "@/schemas/volunteer";
import { submit } from "@/utils/form";

const Volunteer = () => {
  const { data: session } = useSession();

  const [volunteer, setVolunteer] = useState({
    ...ATTRIBUTES,
    name: session.user.name,
    email: session.user.email,
    roles: session.user.roles,
    form: "volunteers",
  });

  const onSubmit = async (setLoading, setState) => {
    await submit({
      data: volunteer,
      schema,
      url: "/api/dashboard/volunteers",
      setLoading,
      setState,
    });
  };

  return (
    <Form
      fields={FIELDS}
      object={volunteer}
      setObject={setVolunteer}
      header="VOLUNTEER APPLICATION"
      onSubmit={onSubmit}
      statuses={STATUSES}
    />
  );
};

export default Volunteer;
