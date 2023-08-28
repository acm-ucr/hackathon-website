"use client";

import { useState } from "react";
import Title from "./Title";
import Filters from "./Filters.jsx";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import toast from "react-hot-toast";
import Upload from "./Upload";
import { messengerFilters } from "@/data/Filters";

const Messenger = () => {
  const [email, setEmail] = useState({
    sendto: [],
    subject: "Rosehack Application Status Update",
    body: "Hello! \n\nWe've got good news! Your application to participate in Rose Hack 2024 has been accepted!\n\nStay tuned for more updates from us via email.\n\nIn the meantime, join our discord, the main platform that we will use on the day of the hackathon. Please don't share this invite with anyone else who wasn't approved. Thank you!\n\nThe Rose Hack Team",
    files: [],
  });
  const [filters, setFilters] = useState(messengerFilters);
  const clickHandler = () => {
    if (email.subject === "") {
      toast("❌ Please add a subject!");
      return;
    }
    if (email.body === "") {
      toast("❌ Please add a body!");
      return;
    }
    toast(`✅ Email sent successfully!`);
    console.log(email);
  };
  return (
    <div className="w-full font-poppins h-full flex flex-col justify-between">
      <div className="flex flex-col pb-3 pt-4 h-full items-stretch justify-between">
        <Title title="Messenger" />
        <div className="flex items-center my-1">
          <p className="text-lg font-extrabold mr-5 my-0">to:</p>
          <Filters
            filters={filters}
            setFilters={setFilters}
            setObjects={() => {}}
            objects={[]}
            input=""
          />
        </div>
        <Input
          setObject={setEmail}
          object={email}
          clear={true}
          label="subject"
          placeholder="subject"
        />
        <div className="w-full h-full bg-white rounded-2xl my-2 flex flex-col p-4 pt-2">
          <p className="text-lg font-extrabold mb-1">body:</p>
          <Textarea setObject={setEmail} object={email} label="body" />
          <div className="flex w-full justify-between mt-3 items-end">
            <Upload
              setObjects={setEmail}
              objects={email}
              size={[1, "MB"]}
              types={["pdf", "jpg", "jpeg", "png"]}
            />
            <Button
              text="send"
              onClick={clickHandler}
              color="green"
              size="md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
