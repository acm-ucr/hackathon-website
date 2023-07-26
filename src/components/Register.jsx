"use client";

import React, { useState } from "react";
import User from "../data/User";
import { Ages, Majors, Grades, Genders, Shirts } from "../data/Register";
// import { Schools } from "../../data/Schools";
import Select from "@/components/Select";
import Radio from "@/components/Radio";
import Upload from "@/components/Upload";
import Checkbox from "./Checkbox";

const Register = () => {
  const [user, setUser] = useState(User);

  const [requirements, setRequirements] = useState({
    photography: {
      state: false,
      text: "I agree to photograph.",
    },
    inPerson: {
      state: false,
      text: "I understand that I will attend the event in person.",
    },
  });

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(user);
    console.log(requirements);
  };

  const handleRequirementsCheckbox = (key, value) => {
    setRequirements({
      ...requirements,
      [key]: { state: !value.state, text: value.text },
    });
  };

  return (
    <div className="bg-white w-full flex flex-col items-center font-poppins pb-5 rounded-b-xl">
      <div className=" text-xl bg-hackathon-green-300 w-full rounded-t-xl flex items-center pl-6 py-3 font-semibold">
        <p>HACKER APPLICATION</p>
      </div>
      <div className="flex flex-col w-10/12 mt-4">
        <div className="flex">
          <div className="w-1/2">
            <p>First Name</p>
            <input
              className="pl-3 w-full"
              type="text"
              name="first"
              placeholder="First Name"
              value={user.first}
              onChange={handleInput}
            />
            <div className="mx-2 h-[1.5px] bg-hackathon-darkgray rounded-full" />
          </div>
          <div className="w-1/2">
            <p>Last Name</p>
            <input
              className="pl-3 w-full"
              type="text"
              name="last"
              placeholder="Last Name"
              value={user.last}
              onChange={handleInput}
            />
            <div className="mx-2 h-[1.5px] bg-hackathon-darkgray rounded-full" />
          </div>
        </div>
        <div className="mt-4">
          <p>Phone Number</p>
          <input
            className="pl-3 w-full"
            type="phone"
            name="phone"
            placeholder="Phone Number"
            value={user.phone}
            onChange={handleInput}
          />
          <div className="mx-2 h-[1.5px] bg-hackathon-darkgray rounded-full" />
        </div>
        <div className="mt-4">
          <p>Email</p>
          <input
            className="pl-3 w-full"
            type="email"
            name="email"
            placeholder="Email Address"
            value={user.email}
            onChange={handleInput}
          />
          <div className="mx-2 h-[1px] bg-hackathon-darkgray rounded-full" />
        </div>
        <div className="mt-4 w-1/3">
          <p>Age</p>
          <Select
            options={Ages}
            field="age"
            user={user}
            setUser={setUser}
            placeholder="Age"
          />
          <div className="mx-2 h-[1px] bg-hackathon-darkgray rounded-full" />
        </div>

        <div className="mt-4">
          <p>Major</p>
          <Select
            options={Majors}
            field="major"
            user={user}
            setUser={setUser}
            placeholder="Major"
          />
          <div className="mx-2 h-[1.5px] bg-hackathon-darkgray rounded-full" />
        </div>
        <div className="mt-4">
          <p>Grade</p>
          <Select
            options={Grades}
            field="grade"
            user={user}
            setUser={setUser}
            placeholder="Grade"
          />
          <div className="mx-2 h-[1.5px] bg-hackathon-darkgray rounded-full" />
        </div>
        <Radio
          text="Gender"
          options={Genders}
          field="gender"
          user={user}
          setUser={setUser}
        />
        <Radio
          text="Shirt Size"
          options={Shirts}
          field="shirt"
          user={user}
          setUser={setUser}
        />
        <div className="mt-4">
          <p className="mb-2">Share Resume</p>
          <Upload field="resume" user={user} setUser={setUser} />
        </div>
        <div className="my-5">
          {Object.entries(requirements).map(([key, value], index) => (
            <Checkbox
              className="w-1/2"
              key={index}
              toggle={value.state}
              text={value.text}
              onClick={() => handleRequirementsCheckbox(key, value)}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <button
            className=" text-gray-800 py-1 hover:opacity-50 text-xl font-bold w-1/3 rounded-xl bg-hackathon-green-300"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
