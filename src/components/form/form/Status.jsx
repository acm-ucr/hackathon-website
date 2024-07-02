import Tag from "../../admin/Tag";
import { COLORS } from "@/data/Tags";
import Button from "@/components/Button.jsx";

const Status = ({ object, statuses, setState }) => {
  return (
    <div
      data-cy="greeting-texts"
      className="flex flex-col items-center justify-center"
    >
      <p>
        Hello <b>{object.name}</b>, your status is currently
      </p>
      <Tag
        color={COLORS[object.roles[object.form]]}
        text={statuses[object.roles[object.form]]}
        classes="mb-2"
      />
      <p data-cy="confirmation-texts" className="text-center">
        You have already filled out the form. If you wish to change any
        information, please fill out the form again. Note that your status will
        change until approved by an admin.
      </p>
      <p data-cy={"if-wrong-status"} className="text-center">
        If you believe that your status is incorrect, please reach out to us
        immediately.
      </p>
      <Button
        text="Apply"
        onClick={() => setState(1)}
        color="green"
        data-cy="button"
      />
    </div>
  );
};

export default Status;
