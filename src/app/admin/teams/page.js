"use client";
import Teams from "@/app/components/Teams";
import Toolbar from "@/app/components/Toolbar";
import React from "react";

const TeamsPage = () => {
  const handleTagClick = (tagText) => {
    console.log(`Tag "${tagText}" clicked!`);
  };

  const tags = [
    { text: "winner", name: "" },
    { text: "disqualified", name: "" },
    { text: "pending", name: "" },
  ];

  return (
    <div className="w-11/12">
      <Toolbar tags={tags} onClick={handleTagClick} />
      <Teams />
    </div>
  );
};

export default TeamsPage;
