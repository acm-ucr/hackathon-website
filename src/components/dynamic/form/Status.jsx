import React from "react";
import Tag from "../admin/Tag";
import { COLORS } from "@/data/dynamic/Tags";
import Button from "@/components/dynamic/Button.jsx";

const Status = ({ object, statuses, setState }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p>
        Hello <b>{object.name}</b>, your status is currently
      </p>
      <Tag
        color={COLORS[object.roles[object.form]]}
        text={statuses[object.roles[object.form]]}
        classes="mb-2"
      />
      <p className="text-center">
        You have already filled out the form. If you wish to change any
        information, please fill out the form again. Note that your status will
        change until approved by an admin.
      </p>
      <p className="text-center">
        If you believe that your status is incorect, please reach out to us
        immediately.
      </p>

      <Button text="Apply" onClick={() => setState(1)} color="green" />
    </div>
  );
};

export default Status;
