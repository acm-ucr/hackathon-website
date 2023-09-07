"use client";

import { useState } from "react";
import Select from "@/components/Select";
import { Majors, Grades, Genders, Shirts, Availability } from "@/data/Register";
import Radio from "@/components/Radio";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "@/components/Button.jsx";
import { Helper } from "@/data/User";
import Textarea from "@/components/Forms/Textarea";
import { Description, Requirements } from "../../data/Mentors.js";

const Mentor = () => {
  const [mentor, setMentor] = useState(Helper);

  const [requirements, setRequirements] = useState(Requirements);

  const [availability, setAvailability] = useState(Availability);

  const handleSubmit = () => {
    console.log(mentor);
    console.log(requirements);
    console.log(availability);
  };

  const handleRequirementsCheckbox = (key, value) => {
    setRequirements({
      ...requirements,
      [key]: { state: !value.state, text: value.text },
    });
  };

  const handleAvailabilityCheckbox = (key, value) => {
    setAvailability({
      ...availability,
      [key]: { state: !value.state, text: value.text },
    });
  };

  return (
    <div className="w-full flex flex-col items-center font-poppins py-4">
      <div className="text-xl bg-hackathon-green-300 w-1/3 rounded-t-xl flex items-center justify-center p-3 font-semibold">
        MENTOR APPLICATION
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
              value={mentor.first}
              maxLength={50}
              user={mentor}
              setUser={setMentor}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="last"
              type="text"
              title="Last Name"
              placeholder="Doe"
              value={mentor.last}
              maxLength={50}
              user={mentor}
              setUser={setMentor}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="phone"
              type="phone"
              title="Phone Number"
              placeholder="123 456 7890"
              value={mentor.phone}
              maxLength={50}
              user={mentor}
              setUser={setMentor}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="email"
              type="email"
              title="Email Address"
              placeholder="john_doe@gmail.com"
              value={mentor.email}
              maxLength={50}
              user={mentor}
              setUser={setMentor}
            />
          </Col>
          <Col xl={12}>
            <Select
              title="Major"
              options={Majors}
              field="major"
              user={mentor}
              setUser={setMentor}
              placeholder="Computer Science"
            />
          </Col>
          <Col xl={12}>
            <Select
              title="Grade"
              options={Grades}
              field="grade"
              user={mentor}
              setUser={setMentor}
              placeholder="Undergraduate"
            />
          </Col>
          <Col xl={12} className="flext mt-3">
            Availability
            {Object.entries(availability).map(([key, value], i) => (
              <Checkbox
                className="w-1/2"
                key={i}
                toggle={value.state}
                text={value.text}
                onClick={() => handleAvailabilityCheckbox(key, value)}
                color="bg-hackathon-green-300"
              />
            ))}
          </Col>
          <Col xl={12}>
            <Radio
              text="Gender"
              options={Genders}
              field="gender"
              user={mentor}
              setUser={setMentor}
            />
          </Col>
          <Col xl={12}>
            <Radio
              text="Shirt Size"
              options={Shirts}
              field="shirt"
              user={mentor}
              setUser={setMentor}
            />
          </Col>
          <Col xl={12}>
            <Textarea
              name="response"
              type="email"
              title="What skills and experience can you bring as a mentor?"
              placeholder="I can bring..."
              value={mentor.response}
              user={mentor}
              setUser={setMentor}
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

export default Mentor;
