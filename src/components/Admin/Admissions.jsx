"use client";
import React, { useState } from "react";
import Title from "./Title";
import Filters from "./Filters.jsx";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
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
          <p className="text-xl font-extrabold ml-10 mr-5 my-0">To</p>
          <Filters
            filters={filters}
            setFilters={setFilters}
            setfilteredObjects={setfilteredParticipants}
            objects={participants}
            input=""
          />
        </div>
        <div className="flex items-center my-1">
          <p className="text-xl font-extrabold ml-10 mr-5 my-0">subject</p>
          <input
            value={subject}
            placeholder="subject"
            type="text"
            className="w-full font-poppins text-lg py-1 px-4 rounded-sm"
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
          <FaTimes
            className="hover:cursor-pointer text-xl mx-2"
            onClick={() => {
              setSubject("");
            }}
          />
        </div>
        <div className="w-full h-full bg-white rounded-2xl my-2 flex flex-col p-2 pb-4 items-center">
          <p className="w-11/12 text-xl font-extrabold mb-1">body</p>
          <textarea
            className="w-11/12 h-full border-2 rounded-md p-2"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
          <div className="flex w-11/12 justify-end">
            <button
              className=" py-1 hover:opacity-50 text-lg font-bold w-1/6 rounded-xl bg-hackathon-green-300 mt-3 text-white "
              onClick={sendEmail}
            >
              send email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admissions;
