"use client";

import { useState } from "react";
import User from "../../data/User";
import {
  Ages,
  Majors,
  Grades,
  Genders,
  Shirts,
  DietRestrictions,
} from "../../data/Register";
import { Schools } from "../../data/Schools";
import Select from "@/components/Select";
import Radio from "@/components/Radio";
import Upload from "@/components/Forms/Upload";
import Checkbox from "../Checkbox";
import Input from "../Input";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "./Button";
import { Requirements } from "../../data/Register";

const Register = () => {
  const [user, setUser] = useState(User);
  const [dietaryRestrictions, setDietRestrictions] = useState(DietRestrictions);

  const [requirements, setRequirements] = useState(Requirements);

  const handleDietRestrictions = (key, value) => {
    setDietRestrictions({
      ...dietaryRestrictions,
      [key]: { state: !value.state, text: value.text },
    });
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
    <div className="w-full flex flex-col items-center font-poppins py-4">
      <div className="text-xl bg-hackathon-green-300 w-1/3 rounded-t-xl flex items-center justify-center p-3 font-semibold">
        HACKER APPLICATION
      </div>
      <div className="flex flex-col w-1/3 p-3 bg-white rounded-b-xl">
        <Row className="flex justify-center p-0 m-0">
          <Col xl={6}>
            <Input
              name="first"
              type="text"
              title="First Name"
              placeholder="John"
              value={user.first}
              maxLength={50}
              user={user}
              setUser={setUser}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="last"
              type="text"
              title="Last Name"
              placeholder="Doe"
              value={user.last}
              maxLength={50}
              user={user}
              setUser={setUser}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="phone"
              type="phone"
              title="Phone Number"
              placeholder="123 456 7890"
              value={user.phone}
              maxLength={50}
              user={user}
              setUser={setUser}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="email"
              type="email"
              title="Email Address"
              placeholder="john_doe@gmail.com"
              value={user.email}
              maxLength={50}
              user={user}
              setUser={setUser}
            />
          </Col>
          <Col xl={12}>
            <Select
              options={Ages}
              field="age"
              user={user}
              setUser={setUser}
              placeholder="Age"
            />
          </Col>
          <Col xl={12}>
            <Select
              options={Majors}
              field="major"
              user={user}
              setUser={setUser}
              placeholder="Major"
            />
          </Col>
          <Col xl={12}>
            <Select
              options={Schools}
              field="school"
              user={user}
              setUser={setUser}
              placeholder="School"
            />
          </Col>
          <Col xl={12}>
            <Select
              options={Grades}
              field="grade"
              user={user}
              setUser={setUser}
              placeholder="Grade"
            />
          </Col>
          <Col xl={12}>
            <Radio
              text="Gender"
              options={Genders}
              field="gender"
              user={user}
              setUser={setUser}
            />
          </Col>
          <Col xl={12}>
            <Radio
              text="Shirt Size"
              options={Shirts}
              field="shirt"
              user={user}
              setUser={setUser}
            />
          </Col>
          <Col>
            Dietary Restrictions
            {Object.entries(dietaryRestrictions).map(([key, value], i) => (
              <Checkbox
                className="w-1/2"
                key={i}
                toggle={value.state}
                text={value.text}
                onClick={() => handleDietRestrictions(key, value)}
                color="bg-hackathon-green-300"
              />
            ))}
          </Col>
          <Col xl={12}>
            <Upload
              field="resume"
              user={user}
              setUser={setUser}
              text="Upload Resume"
              maxSize={[150, "KB"]}
              types={["pdf", "jpg", "jpeg", "png"]}
            />
          </Col>
          <Col xl={12}>
            {Object.entries(requirements).map(([key, value], index) => (
              <Checkbox
                className="w-1/2"
                key={index}
                toggle={value.state}
                text={value.text}
                onClick={() => handleRequirementsCheckbox(key, value)}
                color="bg-hackathon-green-300"
              />
            ))}
          </Col>
          <Col xl={12} className="flex justify-center">
            <Button text="Submit" onClick={handleSubmit} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Register;
