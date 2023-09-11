"use client";
import { useState } from "react";
import Input from "./Input";
import Button from "../Button";
import Tag from "../Tag";
import { colors } from "@/data/Tags";
import { HiSearch } from "react-icons/hi";
import Popup from "../Popup";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const tags = ["professor", "industry", "student"];

const Toolbar = ({ data, setData, judges }) => {
  const router = useRouter();

  const [popup, setPopup] = useState({
    title: "",
    text: "",
    color: "green",
    visible: false,
  });
  const [input, setInput] = useState({
    rotations: "",
    search: "",
  });

  const handleSearch = (e) => {
    e.preventDefault();

    setData(
      data.map((group) => {
        let boolean = false;

        if (group.name.toLowerCase().match(input.search.toLowerCase())) {
          boolean = true;
        }

        return { ...group, hidden: !boolean };
      })
    );
  };

  const generate = () => {
    if (input.rotations === "") {
      toast("❌ Please enter a valid integer value");
      return;
    }

    // Filter Professors vs Students + Industry
    const professors = judges.filter((judge) => judge.type === "professor");
    const studentsAndIndustry = judges.filter(
      (judge) => judge.type !== "professor"
    );

    const teams = [...data];

    // Reset Rounds
    teams.forEach((team, index) => {
      team.rounds = Array.from(Array(parseInt(input.rotations)), () => []);
      team.table = index + 1;
    });

    let judge = 0;
    let round = 0;

    // Assign Professors
    for (let i = 0; i < teams.length; i += 1) {
      if (round === parseInt(input.rotations)) continue;
      teams[i].rounds[round].push(professors[judge].name);
      if (judge < professors.length - 1) {
        judge += 1;
      } else {
        judge = 0;
        round += 1;
      }
    }

    judge = 0;
    round = 0;

    // Assign Students + Industry
    for (let i = teams.length - 1; i > -1; i -= 1) {
      if (round === parseInt(input.rotations)) continue;
      teams[i].rounds[round].push(studentsAndIndustry[judge].name);
      if (judge < studentsAndIndustry.length - 1) {
        judge += 1;
      } else {
        judge = 0;
        round += 1;
      }
    }

    if (professors.length * input.rotations < teams.length) {
      setPopup({
        title: "Insufficient Professors",
        text: "There are not enough professors to go around to each team. Please consider adding more professors via the judge dashboard. ",
        color: "green",
        visible: true,
      });
    }

    if (
      professors.length * input.rotations +
        studentsAndIndustry.length * input.rotations <
      teams.length
    ) {
      setPopup({
        title: "Insufficient Judges",
        text: "There are not enough judges, causing one or more teams to have no judges. Please consider adding more judges via the judges dashboard.",
        color: "green",
        visible: true,
      });
    }

    setData(teams);
  };

  return (
    <>
      {popup.visible && (
        <Popup
          setPopup={setPopup}
          popup={popup}
          onClick={() => router.push("/admin/judges")}
          text="add judges"
        />
      )}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <Input
            setObject={setInput}
            object={input}
            label="rotations"
            showLabel={false}
            maxLength={2}
          />
          <p className="mb-0 font-semibold mx-2"># of rotations</p>
          <Button color="green" text="generate" onClick={generate} />
        </div>
        <div className="flex">
          {tags.map((tag, index) => (
            <Tag key={index} color={colors[tag]} text={tag} classes="mx-2" />
          ))}
        </div>
      </div>
      <form className="flex items-center" onSubmit={handleSearch}>
        <Input
          object={input}
          setObject={setInput}
          maxLength={100}
          label="search"
          showLabel={false}
          classes="w-full"
        />
        <HiSearch
          onClick={handleSearch}
          size={30}
          className="mx-2 text-hackathon-gray-300 hover:cursor-pointer hover:opacity-70 duration-150"
        />
      </form>
    </>
  );
};

export default Toolbar;
