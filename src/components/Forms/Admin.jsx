"use client";

import { useState } from "react";
import { USER } from "../../data/Forms/User";
import Radio from "@/components/Radio";
import Checkbox from "../Checkbox";
import Input from "../Input";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "./Button";
import { AFFILIATIONS, POSITIONS, REQUIREMENTS } from "@/data/Forms/Admin";

const Admin = () => {
  const [user, setUser] = useState(USER);
  const [requirements, setRequirements] = useState(REQUIREMENTS);

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
        ADMIN PORTAL REQUEST
      </div>

      <div className="flex flex-col w-1/3 p-3 bg-white rounded-b-xl">
        <Row className="flex justify-center p-0 m-0">
          <Col xl={12}>
            If you would like access to Rosehack&apos;s Admin Portal, please
            submit the request form below!
          </Col>
          <Col xl={6}>
            <Input
              name="first"
              type="text"
              title="First Name"
              placeholder="John"
              maxLength={50}
              value={user.first}
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
          <Col xl={12}>
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
            <Input
              name="discord"
              type="discord"
              title="Discord Username"
              placeholder="john_doe#1234"
              value={user.discord}
              maxLength={50}
              user={user}
              setUser={setUser}
            />
          </Col>
          <Col xl={12}>
            <Radio
              text="Affiliations"
              options={AFFILIATIONS}
              field="affiliations"
              user={user}
              setUser={setUser}
            />
          </Col>
          <Col xl={12}>
            <Radio
              text="Position"
              options={POSITIONS}
              field="position"
              user={user}
              setUser={setUser}
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

export default Admin;
