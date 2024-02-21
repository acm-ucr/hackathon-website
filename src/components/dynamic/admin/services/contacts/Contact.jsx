"use client";
import { BsFillPersonFill } from "react-icons/bs";
import Button from "../../Button";
import Select from "@/components/dynamic/Select";
import { useState } from "react";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";

const STATUSES = ["confirmed", "pending", "not attending"];

const MAPPINGS = {
  confirmed: 1,
  pending: 0,
  "not attending": -1,
};

const Contact = ({ role, disabled, setDisabled }) => {
  const [status, setStatus] = useState({
    status: "confirmed",
  });

  const onClick = async () => {
    setDisabled(true);
    const number = MAPPINGS[status.status];

    const { items } = await api({
      method: "GET",
      url: `/api/contacts?role=${role}&status=${number}`,
    });

    if (items.length === 0) {
      toaster("The email list is empty!", "error");
      return;
    }

    navigator.clipboard.writeText(items);
    toaster("Copied all email addresses!", "success");

    setDisabled(false);
  };

  return (
    <div className="grid grid-cols-3 w-1/2 gap-3 text-lg bg-white p-4 rounded">
      <div className="flex items-center">
        <BsFillPersonFill className="mx-2" /> {role}
      </div>

      <Select
        items={STATUSES}
        placeholder="Status"
        field="status"
        user={status}
        setUser={setStatus}
      />

      <Button text="copy" color="green" onClick={onClick} disabled={disabled} />
    </div>
  );
};

export default Contact;
