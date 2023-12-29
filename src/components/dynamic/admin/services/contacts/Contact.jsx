import Button from "../../Button";

const Contact = ({ role, status }) => {
  return (
    <div>
      <p>Role: {role.toUpperCase()}</p>
      <p>Status: {status}</p>
      <Button text="copy" color="green" />
    </div>
  );
};

export default Contact;
