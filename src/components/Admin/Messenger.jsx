"use client";

import React, { useState } from "react";
import Title from "./Title";
import Filters from "./Filters.jsx";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import toast from "react-hot-toast";
import Upload from "./Upload";
import { messengerFilters } from "@/data/Filters";

const Messenger = () => {
  const [emails, setEmails] = useState({
    sendto: [],
    subject: "",
    body: "",
    files: [],
  });
  const [filters, setFilters] = useState(messengerFilters);
  const clickHandler = () => {
    if (emails.subject === "") {
      toast("❌ Please add a subject!");
      return;
    }
    if (emails.body === "") {
      toast("❌ Please add a body!");
      return;
    }
    toast(`✅ Emails sent successfully!`);
    console.log(emails);
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
          setObject={setEmails}
          object={emails}
          clear={true}
          label="subject"
          placeholder="subject"
        />
        <div className="w-full h-full bg-white rounded-2xl my-2 flex flex-col p-4 pt-2">
          <p className="text-lg font-extrabold mb-1">body:</p>
          <Textarea setObject={setEmails} object={emails} label="body" />
          <div className="flex w-full justify-between mt-3 items-end">
            <Upload setObjects={setEmails} objects={emails} />
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
