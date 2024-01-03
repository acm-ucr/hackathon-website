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
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
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
