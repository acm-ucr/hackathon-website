"use client";
import { User } from "lucide-react";
import Button from "../../Button";
import Select from "@/components/Select";
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
    <div className="lg:text-md grid w-full grid-cols-3 gap-0.5 rounded bg-white p-2 text-sm lg:w-1/2">
      <div className="flex items-center">
        <User className="mx-2" /> {role}
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
