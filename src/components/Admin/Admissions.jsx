"use client";
import React, { useState } from "react";
import Title from "../Title";
import Filters from "./Filters.jsx";
import toast from "react-hot-toast";
import SubjectInput from "../SubjectInput";
import BodyInput from "../BodyInput";
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
    status: "rejected",
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

    console.log({
      sendto: filteredParticipants,
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
          <p className="text-lg font-extrabold ml-10 mr-5 my-0">To</p>
          <Filters
            filters={filters}
            setFilters={setFilters}
            setfilteredObjects={setfilteredParticipants}
            objects={participants}
            input=""
          />
        </div>
        <SubjectInput subject={subject} setSubject={setSubject} />
        <BodyInput body={body} setBody={setBody} sendEmail={sendEmail} />
      </div>
    </div>
  );
};
export default Admissions;
