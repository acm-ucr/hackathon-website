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
  "sponsors",
  "interests",
  "feedback",
  "leads",
  "panelists",
  "teams",
];

const Contacts = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="flex h-full flex-col gap-3 py-4 font-poppins">
      <Title title="Contacts" />

      <div className="grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {contacts.map((role, index) => (
          <Contact
            key={index}
            role={role}
            disabled={disabled}
            setDisabled={setDisabled}
          />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
