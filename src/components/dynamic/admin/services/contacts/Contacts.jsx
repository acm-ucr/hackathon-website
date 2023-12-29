import Title from "../../Title";
import Contact from "./Contact";

const contacts = [
  {
    role: "participants",
    status: 1,
  },
  {
    role: "participants",
    status: 1,
  },
  {
    role: "participants",
    status: 1,
  },
  {
    role: "participants",
    status: 1,
  },
];

const Contacts = () => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Contacts" />
      <div className="grid grid-cols-6">
        {contacts.map(({ role, status }, index) => (
          <Contact key={index} role={role} status={status} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
