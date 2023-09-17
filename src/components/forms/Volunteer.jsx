"use client";

import { useState } from "react";
import Select from "@/components/Select";
import Radio from "@/components/Radio";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "@/components/Button";
import toast from "react-hot-toast";
import { MAJORS, GRADES, GENDERS, SHIRTS } from "@/data/forms/Information";
import { HELPER, AVAILABILITY } from "@/data/forms/Helper";
import { DESCRIPTIONS, REQUIREMENTS } from "@/data/forms/Volunteers";
import { useSession } from "next-auth/react";
import axios from "axios";

const Volunteer = () => {
  const { data: session } = useSession();
  const [volunteer, setVolunteer] = useState(HELPER);
  const [requirements, setRequirements] = useState(REQUIREMENTS);
  const [availability, setAvailability] = useState(AVAILABILITY);

  const handleSubmit = () => {
    const incompleteFields = Object.values(volunteer).some(
      (value) => value === ""
    );
    const invalidRequirements = Object.values(requirements).some(
      (check) => check.state === false
    );
    const atLeastOneAvailability = Object.values(availability).some(
      (time) => time.state === true
    );

    if (incompleteFields || invalidRequirements || !atLeastOneAvailability) {
      toast("❌ Please complete all fields!");
      return;
    }

    const data = {
      ...volunteer,
      availability: Object.entries(availability)
        .filter(([_, value]) => value.state === true)
        .map(([key]) => key),
    };

    axios
      .post("/api/forms/volunteer", data)
      .then(() => toast(`✅ Submitted successfully!`));
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
        VOLUNTEER APPLICATION
      </div>
      <div className="flex flex-col w-1/3 p-3 bg-white rounded-b-xl">
        <Row className="flex justify-center p-0 m-0">
          <Col xl={12}>
            {DESCRIPTIONS.map((description, index) => (
              <p key={index}>{description}</p>
            ))}
          </Col>
          <Col xl={6}>
            <Input title="Name" value={session.user.name} editable={false} />
          </Col>
          <Col xl={6}>
            <Input
              title="Email Address"
              value={session.user.email}
              editable={false}
            />
          </Col>
          <Col xl={12}>
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

          <Col xl={12}>
            <Select
              title="Major"
              options={MAJORS}
              field="major"
              user={volunteer}
              setUser={setVolunteer}
              placeholder="ie. Computer Science"
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
            <Select
              title="Grade"
              options={GRADES}
              field="grade"
              user={volunteer}
              setUser={setVolunteer}
              placeholder="ie. Undergraduate"
            />
          </Col>
          <Col xl={12}>
            <Radio
              text="Gender"
              options={GENDERS}
              field="gender"
              user={volunteer}
              setUser={setVolunteer}
            />
          </Col>
          <Col xl={12}>
            <Radio
              text="Shirt Size"
              options={SHIRTS}
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
