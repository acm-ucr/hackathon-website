"use client";
import React, { useState } from "react";
import Title from "./Title";
import Filters from "@/components/Admin/Filters";
import Toolbar from "@/components/Admin/Toolbar";
import SortIcon from "./SortIcon.jsx";
import Admin from "@/components/Admin/Admin";

const admins = [
  {
    uid: 1,
    name: "a",
    email: "a@ucr.edu",
    status: "accepted",
    affiliation: "marketing",
    selected: false,
  },
  {
    uid: 2,
    name: "b",
    email: "b@ucr.edu",
    status: "accepted",
    affiliation: "operations",
    selected: false,
  },
  {
    uid: 3,
    name: "c",
    email: "c@ucr.edu",
    status: "accepted",
    affiliation: "sponsorship",
    selected: false,
  },
  {
    uid: 4,
    name: "d",
    email: "d@ucr.edu",
    status: "accepted",
    affiliation: "directors",
    selected: false,
  },
];

const Admins = () => {
  const [filteredAdmins, setFilteredAdmins] = useState(admins);

  const [input, setInput] = useState("");

  const [filters, setFilters] = useState({
    marketing: true,
    operations: true,
    sponsorship: true,
    directors: true,
  });

  const [sorts, setSorts] = useState({
    name: "down",
    affiliation: "off",
    status: "off",
  });

  const tags = [
    {
      color: "green",
      text: "accept",
      name: "Accept",
      onClick: () => {
        console.log("placeholder");
      },
    },
    {
      color: "red",
      text: "remove",
      name: "Remove",
      onClick: (setToggle) => {
        setToggle(false);
        setFilteredAdmins(
          filteredAdmins.filter((a) => {
            if (a.selected !== true) {
              return a;
            }
          })
        );
      },
    },
  ];

  const headers = [
    { name: "", size: "w-[7%]", icon: false },
    { name: "Name", size: "w-1/5", icon: true },
    { name: "Email", size: "w-1/3", icon: true },
    { name: "Affiliation", size: "w-1/5", icon: true },
    { name: "Status", size: "", icon: true },
  ];
  return (
    <div className="max-h-[80%] font-poppins">
      <div className="flex pb-3 pt-4">
        <Title title="Admins" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setfilteredObjects={setFilteredAdmins}
          objects={admins}
          input={input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={tags}
        setFilteredObjects={setFilteredAdmins}
        objects={filteredAdmins}
        filters={filters}
        reset={admins}
      />
      <div className="max-h-[80%] w-full flex bg-white rounded-2xl flex-col">
        <div className="w-full text-sm rounded-t-xl flex font-poppins text-white bg-hackathon-blue-200 py-2">
          {headers.map((header, index) => (
            <div
              key={index}
              className={`${header.size} font-semibold text-white flex items-center`}
            >
              {header.name}
              {header.icon && (
                <SortIcon
                  name={header.name.toLowerCase()}
                  sorts={sorts}
                  setSorts={setSorts}
                  setfilteredObjects={setFilteredAdmins}
                  objects={filteredAdmins}
                  reset={{
                    name: "off",
                    affiliation: "off",
                    email: "off",
                    status: "off",
                  }}
                />
              )}
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col">
          {filteredAdmins.length != 0 ? (
            filteredAdmins.map((admin, index) => (
              <Admin
                uid={admin.uid}
                setFilteredAdmins={setFilteredAdmins}
                filteredAdmins={filteredAdmins}
                key={index}
                name={admin.name}
                affiliation={admin.affiliation}
                status={admin.status}
                email={admin.email}
                selected={admin.selected}
              />
            ))
          ) : (
            <p className="m-0 bg-white rounded-b-2xl p-4 text-center w-full text-hackathon-darkgray">
              No admins to display
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admins;
