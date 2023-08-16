import React from "react";
import Title from "@/components/Title";
import Messenger from "@/components/Messenger";
import ProtectedPage from "@/components/ProtectedPage";

const MessengerPage = () => {
  return (
    <ProtectedPage title="Admin | Messenger" restrictions={["admin"]}>
      <div className="w-11/12 justify-center bg-hackathon-page z-0 min-h-screen mt-4">
        <title>Admin | Messenger</title>
        <Title title="Messenger" />
        <Messenger />
      </div>
    </ProtectedPage>
  );
};

export default MessengerPage;
