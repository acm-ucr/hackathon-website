import React from "react";
import { Accordion } from "react-bootstrap";

const participants = [
  {
    name: "Menthy Wu",
    email: "mwu171@ucr.edu",
    team: "poggers",
    major: "Computer Science",
    status: "accepted",
  },
  {
    name: "Menthy Wu",
    email: "mwu171@ucr.edu",
    team: "poggers",
    major: "Computer Science",
    status: "accepted",
  },
  {
    name: "Menthy Wu",
    email: "mwu171@ucr.edu",
    team: "poggers",
    major: "Computer Science",
    status: "accepted",
  },
];

const headers = [
  { name: "", size: "w-1/12" },
  { name: "Name", size: "w-1/6" },
  { name: "Email", size: "w-1/6" },
  { name: "Team", size: "w-1/6" },
  { name: "Major", size: "w-1/6" },
  { name: "Status", size: "w-1/6" },
];

const Participants = () => {
  return (
    <div className="font-poppins">
      <div className="flex bg-hackathon-blue-200 py-2 rounded-t !z-[1000]">
        {headers.map((header, index) => (
          <div key={index} className={`${header.size} font-bold text-white`}>
            {header.name}
          </div>
        ))}
      </div>
      <Accordion>
        {participants.map((participant, index) => (
          <Accordion.Item
            eventKey={index}
            key={index}
            className="!rounded-none"
          >
            <Accordion.Header className="font-normal">
              <div className="w-1/12">
                <input type="checkbox" />
              </div>
              <div className="w-1/6">{participant.name}</div>
              <div className="w-1/6">{participant.email}</div>
              <div className="w-1/6">{participant.team}</div>
              <div className="w-1/6">{participant.major}</div>
              <div className="w-1/6">{participant.status}</div>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Participants;
