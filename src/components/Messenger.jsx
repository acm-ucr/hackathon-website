"use client";

import React, { useState } from "react";

const ADDRESSEES = ["volunteers", "mentors", "judges"];

const Message = () => {
  const [addressees, setAddressee] = useState([]);
  const [subjectText, setSubjectText] = useState("");
  const [messageBody, setMessageBody] = useState("");
  return (
    <>
      <ToSelector
        selected={addressees}
        setSelected={setAddressee}
        allSelectorNames={ADDRESSEES}
      />
      <Subject setSubjectText={setSubjectText} />
      <BodyMessage setMessageBody={setMessageBody} />
      <SendButton
        addressees={addressees}
        subjectText={subjectText}
        messageBody={messageBody}
      />
    </>
  );
};

const ToSelector = ({ selected, setSelected, allSelectorNames }) => {
  const allButtonClasses = "ml-5 rounded-md mr-15 px-8 py-0.5 ";
  const unselectedButtonClasses =
    "text-hackathon-tags-green-text bg-hackathon-tags-white";
  const selectedButtonClasses = "bg-hackathon-tags-green-text text-white";
  const clickHandler = (name) => {
    setSelected(
      selected.includes(name)
        ? selected.filter((e) => e !== name)
        : selected.concat([name])
    );
  };

  return (
    <div className="mt-2 flex flex-row">
      <div className="min-w-[6%] font-bold text-lg text-end">To:</div>
      <div>
        {allSelectorNames.map((name) => {
          const nameSelected = selected.includes(name);
          const classes =
            allButtonClasses +
            (nameSelected ? selectedButtonClasses : unselectedButtonClasses);
          return (
            <button
              className={classes}
              key={name}
              onClick={() => clickHandler(name)}
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const Subject = ({ setSubjectText }) => {
  return (
    <div className="mt-4 flex flex-row">
      <div className="min-w-[6%] font-bold text-lg text-end">Subject:</div>
      <input
        className="px-2 py-1 w-full bg-hackathon-gray rounded-md focus:outline-none ml-5 w-7/12"
        type="text"
        onChange={(e) => setSubjectText(e.target.value)}
      />
    </div>
  );
};

const BodyMessage = ({ setMessageBody }) => {
  return (
    <div className="bg-white rounded-lg mt-4 relative flex flex-column justify-center h-fit">
      <div className="flex flex-row mt-2">
        <div className="min-w-[6%] font-bold text-lg text-end">Body:</div>
      </div>
      <textarea
        className="mt-2 mb-5 m-auto w-11/12 p-2 border border-black rounded-lg sm:text-md focus:outline-none"
        onChange={(e) => setMessageBody(e.target.value)}
        rows={15}
      />
    </div>
  );
};

const SendButton = ({ addressees, subjectText, messageBody }) => {
  const clickHandler = () => {
    if (isValidInput(addressees, subjectText, messageBody)) {
      sendMessage(addressees, subjectText, messageBody);
    } else {
      // TODO display error
    }
  };
  return (
    <button
      onClick={clickHandler}
      className="bg-green-400 rounded-2xl p-1 px-3 font-bold text-white float-right mt-4"
    >
      send email
    </button>
  );
};

const isValidInput = (addressees, subjectText, messageBody) => {
  // TODO perform validation
  console.log("All the stuff: ", addressees, subjectText, messageBody);
};

const sendMessage = (addressees, subjectText, messageBody) => {
  // TODO perform message send
};

export default Message;
