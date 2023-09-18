"use client";

import { useState } from "react";
import Form from "@/app/forms/Form.jsx";
import { FIELDS } from "../../data/forms/Mentors.js";
import { useSession } from "next-auth/react";

const Mentor = () => {
  const { data: session } = useSession();
  const [mentor, setMentor] = useState({
    name: session.user.name,
    email: session.user.email,
  });
  console.log(mentor);
  return (
    <Form
      fields={FIELDS}
      object={mentor}
      setObject={setMentor}
      header="MENTOR APPLICATION"
    />
  );
};

export default Mentor;
