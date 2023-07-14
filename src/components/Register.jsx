"use client";

import React, { useState } from "react";
import User from "../data/User";
import { Ages, Majors, Grades, Genders, Shirts } from "../data/Register";
// import { Schools } from "../../data/Schools";
import Select from "@/components/Select";
import Radio from "@/components/Radio";
import Upload from "@/components/Upload";

const Register = () => {
  const [user, setUser] = useState(User);

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
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
      <Radio options={Genders} field="gender" user={user} setUser={setUser} />
      <Radio options={Shirts} field="shirt" user={user} setUser={setUser} />
      <Upload field="resume" user={user} setUser={setUser} />
      <button onClick={() => console.log(user)}>SUBMIT</button>
    </div>
  );
};

export default Register;
