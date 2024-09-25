"use client";
import { User, Gavel, Handshake, Lock, Heart, HandHeart } from "lucide-react";
import Button from "../../Button";
import Select from "@/components/Select";
import { useState } from "react";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const STATUSES = ["confirmed", "pending", "not attending"] as const;

const MAPPINGS: Record<(typeof STATUSES)[number], number> = {
  confirmed: 1,
  pending: 0,
  "not attending": -1,
};

const roleIcons = {
  participants: <User className="mx-2" />,
  judges: <Gavel className="mx-2" />,
  volunteers: <Heart className="mx-2" />,
  mentors: <HandHeart className="mx-2" />,
  admins: <Lock className="mx-2" />,
  committees: <Handshake className="mx-2" />,
};

interface ContactProps {
  role: keyof typeof roleIcons;
  disabled: boolean;
  setDisabled: (value: boolean) => void;
}

type Status = (typeof STATUSES)[number];

const Contact: React.FC<ContactProps> = ({ role, disabled, setDisabled }) => {
  const [status, setStatus] = useState<Status | "">("");

  const onClick = async () => {
    if (status === "") {
      toaster("Please select a status!", "error");
      return;
    }

    setDisabled(true);
    const number = MAPPINGS[status];

    try {
      const { items }: { items: string[] } = await api({
        method: "GET",
        url: `/api/contacts?role=${role}&status=${number}`,
      });

      if (items.length === 0) {
        toaster("The email list is empty!", "error");
        setDisabled(false);
        return;
      }

      navigator.clipboard.writeText(items.join(", "));
      toaster("Copied all email addresses!", "success");
    } catch (error) {
      toaster("Failed to fetch email addresses!", "error");
    }

    setDisabled(false);
  };

  return (
    <Card key={role} className="flex min-w-[300px] flex-col">
      <CardHeader>
        <CardTitle className="flex items-center">
          {roleIcons[role]} {role}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Select
          items={STATUSES}
          placeholder="Select a status..."
          field="status"
          user={status}
          setUser={setStatus}
          required={false}
          title="Status Selection"
        />
        <Button
          text="copy"
          color="green"
          size="medium"
          onClick={onClick}
          disabled={status === "" || disabled}
        />
      </CardContent>
    </Card>
  );
};

export default Contact;
