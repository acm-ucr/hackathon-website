import React, { useState } from "react";
import Radio from "../Radio.jsx";
import { Col } from "react-bootstrap";

const judgeType = ["student", "professor", "industry"];
const AddJudgeForm = ({ filteredJudges, setFilteredJudges }) => {
  const [judge, setJudge] = useState({
    name: "",
    type: "",
    status: "pending",
    email: "",
    selected: false,
  });
  return (
    <div className="flex flex-row items-center mx-10">
      <div className="font-light text-sm mt-3">name</div>
      <form>
        <input
          className="w-3/5 bg-hackathon-gray rounded-full focus:outline-none mx-12 mt-3"
          value={judge.name}
          onChange={(e) => setJudge({ ...judge, name: e.target.value })}
        />
      </form>
      <div className="font-light text-sm mt-3">email</div>
      <form>
        <input
          className="w-3/5 bg-hackathon-gray rounded-full focus:outline-none mx-12 mt-3"
          value={judge.email}
          onChange={(e) => setJudge({ ...judge, email: e.target.value })}
        />
      </form>
      <Col xl={4} className="text-xs font-light">
        <Radio
          options={judgeType}
          field="type"
          user={judge}
          setUser={setJudge}
        />
      </Col>
      <button
        className="text-white whitespace-nowrap px-10 py-1 hover:opacity-50 text-xs font-semibold w-fit rounded-xl bg-hackathon-green-300 mt-3"
        onClick={() => setFilteredJudges([...filteredJudges, judge])}
      >
        add judge
      </button>
    </div>
  );
};

export default AddJudgeForm;
