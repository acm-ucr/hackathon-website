"use client";

import React, { useState } from "react";
import Select from "@/components/Select";
import { Majors, Grades, Genders, Shirts } from "@/data/Register";
import Radio from "@/components/Radio";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import { Row, Col } from "react-bootstrap";
import Button from "@/components/Forms/Button";
import { Helper } from "@/data/User";
import { Description, Requirements } from "@/data/Volunteers";

const Volunteer = () => {
  const [volunteer, setVolunteer] = useState(Helper);

  const [requirements, setRequirements] = useState(Requirements);

  const handleSubmit = () => {
    console.log(volunteer);
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
        VOLUNTEER APPLICATION
      </div>
      <div className="flex flex-col w-1/3 p-3 bg-white rounded-b-xl">
        <Row className="flex justify-center p-0 m-0">
          <Col xl={12}>
            {Description.map((description, index) => (
              <p key={index}>{description}</p>
            ))}
          </Col>
          <Col xl={6}>
            <Input
              name="first"
              type="text"
              title="First Name"
              placeholder="John"
              value={volunteer.first}
              maxLength={50}
              user={volunteer}
              setUser={setVolunteer}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="last"
              type="text"
              title="Last Name"
              placeholder="Doe"
              value={volunteer.last}
              maxLength={50}
              user={volunteer}
              setUser={setVolunteer}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="phone"
              type="phone"
              title="Phone Number"
              placeholder="123 456 7890"
              value={volunteer.phone}
              maxLength={50}
              user={volunteer}
              setUser={setVolunteer}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="email"
              type="email"
              title="Email Address"
              placeholder="john_doe@gmail.com"
              value={volunteer.email}
              maxLength={50}
              user={volunteer}
              setUser={setVolunteer}
            />
          </Col>
          <Col xl={12}>
            <Select
              title="Major"
              options={Majors}
              field="major"
              user={volunteer}
              setUser={setVolunteer}
              placeholder="Computer Science"
            />
          </Col>
          <Col xl={12}>
            <Select
              title="Grade"
              options={Grades}
              field="grade"
              user={volunteer}
              setUser={setVolunteer}
              placeholder="Undergraduate"
            />
          </Col>
          <Col xl={12}>
            <Radio
              text="Gender"
              options={Genders}
              field="gender"
              user={volunteer}
              setUser={setVolunteer}
            />
          </Col>
          <Col xl={12}>
            <Radio
              text="Shirt Size"
              options={Shirts}
              field="shirt"
              user={volunteer}
              setUser={setVolunteer}
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

export default Volunteer;
