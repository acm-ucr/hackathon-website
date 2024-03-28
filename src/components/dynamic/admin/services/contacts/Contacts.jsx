"use client";
import Title from "../../Title";
import Contact from "./Contact";
import { useSearchParams } from "next/navigation";

const contacts = [
  "participants",
  "judges",
  "volunteers",
  "mentors",
  "admins",
  "committees",
];

const Contacts = () => {
  const searchParams = useSearchParams();
  let disabled = searchParams.get("disabled");
  if (disabled == "true") {
    disabled = true;
  } else {
    disabled = false;
  }

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Contacts" />
      {contacts.map((role, index) => (
        <Contact key={index} role={role} disabled={disabled} />
      ))}
    </div>
  );
};

export default Contacts;
