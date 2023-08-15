import React from "react";
import Title from "@/components/Title";
import Messenger from "@/components/Messenger";

const MessengerPage = () => {
  return (
    <div className="w-11/12 justify-center bg-hackathon-page z-0 min-h-screen">
      <Title title="Messenger" />
      <Messenger />
    </div>
  );
};

export default MessengerPage;
