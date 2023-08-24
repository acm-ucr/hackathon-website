"use client";

import React, { useState } from "react";
import Title from "./Title";
import Filters from "./Filters.jsx";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import toast from "react-hot-toast";

const ADDRESSEES = [
  {
    uid: "1",
    name: "Menthy Wu",
    email: "yhung022@ucr.edu",
    team: "b",
    major: "Computer Science",
    status: "pending",
    selected: false,
  },
  {
    uid: "2",
    name: "Divyank Shah",
    email: "yhung022@ucr.edu",
    team: "c",
    major: "Computer Science",
    status: "accepted",
    selected: false,
  },
  {
    uid: "3",
    name: "Shing Hung",
    email: "yhung022@ucr.edu",
    team: "d",
    major: "Computer Science",
    status: "rejected",
    selected: false,
  },
];

const Messenger = () => {
  const [subjectText, setSubjectText] = useState(
    "Rosehack Application Status Update"
  );
  const [messageBody, setMessageBody] = useState(
    "Hello! \n\nWe've got good news! Your application to participate in Rose Hack 2024 has been accepted!\n\nStay tuned for more updates from us via email.\n\nIn the meantime, join our discord, the main platform that we will use on the day of the hackathon. Please don't share this invite with anyone else who wasn't approved. Thank you!\n\nThe Rose Hack Team"
  );
  const [filters, setFilters] = useState({
    accepted: false,
    rejected: false,
    pending: false,
    volunteers: false,
    mentors: false,
    judges: false,
  });
  const [filteredParticipants, setfilteredParticipants] = useState(ADDRESSEES);
  const clickHandler = () => {
    if (subjectText === "") {
      toast("❌ Please add a subject!");
      return;
    }
    if (messageBody === "") {
      toast("❌ Please add a body!");
      return;
    }
    const emails = filteredParticipants.map((user) => user.email);
    console.log({
      sendto: emails,
      subject: subjectText,
      body: messageBody,
    });
    toast(`✅ Email sent successfully!`);
  };
  return (
    <div className="w-full font-poppins h-full">
      <div className="flex flex-col pb-3 pt-4 h-full items-stretch">
        <Title title="Messenger" />
        <div className="flex items-center my-1">
          <p className="text-lg font-extrabold mr-5 my-0">to:</p>
          <Filters
            filters={filters}
            setFilters={setFilters}
            setObjects={setfilteredParticipants}
            objects={ADDRESSEES}
          />
        </div>
        <Input
          setValue={setSubjectText}
          value={subjectText}
          clear={true}
          label="Subject:"
          placeholder="subject"
        />
        <div className="w-full h-full bg-white rounded-2xl my-2 flex flex-col p-4 pt-2">
          <p className="text-lg font-extrabold mb-1">body:</p>
          <Textarea value={messageBody} setValue={setMessageBody} />
          <div className="flex w-full justify-end mt-3">
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
