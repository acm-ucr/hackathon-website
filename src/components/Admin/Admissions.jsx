"use client";
import React, { useState } from "react";
import Title from "./Title";
import Filters from "./Filters.jsx";
import toast from "react-hot-toast";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
const participants = [
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
    status: "accepted",
    selected: false,
  },
  {
    uid: "4",
    name: "Sachin Chopra",
    email: "yhung022@ucr.edu",
    team: "a",
    major: "Computer Science",
    status: "accepted",
    selected: false,
  },
];

const Admissions = () => {
  const [filters, setFilters] = useState({
    rejected: true,
    accepted: true,
  });

  const [filteredParticipants, setfilteredParticipants] =
    useState(participants);
  const [subject, setSubject] = useState("Rosehack Application Status Update");
  const [body, setBody] = useState("");
  const sendEmail = () => {
    if (subject === "") {
      toast("❌ Please add a subject!");
      return;
    }
    if (body === "") {
      toast("❌ Please add a body!");
      return;
    }
    if (
      Object.keys(filters).length ==
      Object.keys(filters).map((filter) => !filters[filter].selected).length
    ) {
      toast("❌ Please specify recipient!");
      return;
    }
    const emails = filteredParticipants.map((user) => user.email);
    if (emails.length == 0) {
      toast("❌ There's no recipient in this filter!");
      return;
    }
    console.log({
      sendto: emails,
      subject: subject,
      body: body,
    });
    toast(`✅ Email sent successfully!`);
  };
  return (
    <div className="w-full font-poppins h-full">
      <div className="flex flex-col pb-3 pt-4 h-full items-stretch">
        <Title title="Admissions" />
        <div className="flex items-center my-1">
          <p className="text-lg font-extrabold mr-5 my-0">to:</p>
          <Filters
            filters={filters}
            setFilters={setFilters}
            setfilteredObjects={setfilteredParticipants}
            objects={participants}
            input=""
          />
        </div>
        <Input
          setValue={setSubject}
          value={subject}
          clear={true}
          label="subject:"
          placeholder="subject"
        />
        <div className="w-full h-full bg-white rounded-2xl my-2 flex flex-col p-4 pt-2">
          <p className="text-lg font-extrabold mb-1">body:</p>
          <Textarea value={body} setValue={setBody} />
          <div className="flex w-full justify-end mt-3">
            <Button
              text="send email"
              onClick={sendEmail}
              color="green"
              size="md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admissions;
