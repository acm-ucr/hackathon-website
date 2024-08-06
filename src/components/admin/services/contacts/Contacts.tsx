"use client";
import { useState } from "react";
import Title from "../../Title";
import Contact from "./Contact";

const contacts = [
  "participants",
  "judges",
  "volunteers",
  "mentors",
  "admins",
  "committees",
];

const Contacts = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="flex h-full flex-col gap-3 py-4 font-poppins">
      <Title title="Contacts" />
      {contacts.map((role, index) => (
        <Contact
          key={index}
          role={role}
          disabled={disabled}
          setDisabled={setDisabled}
        />
      ))}
    </div>
  );
};

export default Contacts;
