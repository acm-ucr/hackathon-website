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
      text: "HELLO PLS SAY YES TO PHOTOGRAPH",
    },
    inPerson: {
      state: false,
      text: "HELLO PLS SAY YES TO IN PERSON",
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
    <div className="bg-red-500 w-full">
      <input
        type="text"
        name="first"
        placeholder="First Name"
        value={user.first}
        onChange={handleInput}
      />
      <input
        type="text"
        name="last"
        placeholder="Last Name"
        value={user.last}
        onChange={handleInput}
      />
      <input
        type="phone"
        name="phone"
        placeholder="Phone Number"
        value={user.phone}
        onChange={handleInput}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={user.email}
        onChange={handleInput}
      />
      <Select
        options={Ages}
        field="age"
        user={user}
        setUser={setUser}
        placeholder="Age"
      />
      <Select
        options={Majors}
        field="major"
        user={user}
        setUser={setUser}
        placeholder="Major"
      />
      <Select
        options={Grades}
        field="grade"
        user={user}
        setUser={setUser}
        placeholder="Grade"
      />
      {Object.entries(requirements).map(([key, value], index) => (
        <Checkbox
          key={index}
          toggle={value.state}
          text={value.text}
          onClick={() => handleRequirementsCheckbox(key, value)}
        />
      ))}

      <Radio options={Genders} field="gender" user={user} setUser={setUser} />
      <Radio options={Shirts} field="shirt" user={user} setUser={setUser} />
      <Upload field="resume" user={user} setUser={setUser} />
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
};

export default Register;
