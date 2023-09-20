"use client";

import { useState } from "react";
import Select from "@/components/Select";
import Radio from "@/components/Radio";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "@/components/Button.jsx";
import Textarea from "@/components/forms/Textarea.jsx";
import { MAJORS, GRADES, GENDERS, SHIRTS } from "@/data/forms/Information.js";
import { HELPER, AVAILABILITY } from "@/data/forms/Helper.js";
import { DESCRIPTIONS, REQUIREMENTS } from "../../data/forms/Mentors.js";
import toast from "react-hot-toast";

const Mentor = () => {
  const [mentor, setMentor] = useState(HELPER);
  const [requirements, setRequirements] = useState(REQUIREMENTS);
  const [availability, setAvailability] = useState(AVAILABILITY);

  const handleSubmit = () => {
    const incompleteFields = Object.values(mentor).some(
      (value) => value === "" || !value
    );
    const invalidRequirements = Object.values(requirements).some(
      (check) => !check.state
    );
    const atLeastOneAvailability = Object.values(availability).some(
      (time) => time.state
    );

    if (incompleteFields || invalidRequirements || !atLeastOneAvailability) {
      toast("❌ Please complete all fields!");
      return;
    }
    toast(`✅ Submitted successfully!`);
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
            {DESCRIPTIONS.map((description, index) => (
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
              options={MAJORS}
              field="major"
              user={mentor}
              setUser={setMentor}
              placeholder="Computer Science"
            />
          </Col>
          <Col xl={12}>
            <Select
              title="Grade"
              options={GRADES}
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
              options={GENDERS}
              field="gender"
              user={mentor}
              setUser={setMentor}
            />
          </Col>
          <Col xl={12}>
            <Radio
              text="Shirt Size"
              options={SHIRTS}
              field="shirt"
              user={mentor}
              setUser={setMentor}
            />
          </Col>
          <Col xl={12}>
            <Textarea
              name="response"
              rows={4}
              title="What skills and experience can you bring as a mentor?"
              placeholder="I can bring..."
              value={mentor.response}
              user={mentor}
              setUser={setMentor}
              maxLength={300}
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
