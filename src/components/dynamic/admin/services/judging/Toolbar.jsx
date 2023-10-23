"use client";
import { useEffect, useState } from "react";
import Input from "../../Input";
import Button from "../../Button";
import Tag from "../../Tag";
import { COLORS } from "@/data/dynamic/Tags";
import Popup from "../../Popup";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

const tags = ["professor", "industry", "student"];

const Toolbar = ({ data, setData, judges, setJudges }) => {
  const router = useRouter();

  const [popup, setPopup] = useState({
    title: "",
    text: "",
    color: "green",
    visible: false,
  });
  const [input, setInput] = useState({
    rotations: "",
    input: "",
  });

  const handleSearch = (e) => {
    e.preventDefault();

    setData(
      data.map((group) => {
        let boolean = false;

        if (group.name.toLowerCase().match(input.input.toLowerCase())) {
          boolean = true;
        }

        return { ...group, hidden: !boolean };
      })
    );
  };

  const generate = (e) => {
    e.preventDefault();
    if (
      input.rotations === "" ||
      isNaN(input.rotations) ||
      parseInt(input.rotations) < 1 ||
      parseInt(input.rotations) > 99
    ) {
      toast("❌ Please enter a valid integer value between 1 and 99");
      return;
    }

    if (judges.length === 0) {
      setPopup({
        title: "Insufficient Judges",
        text: "There are not enough judges to go around to each team. Please consider adding more judges via the judge dashboard. ",
        color: "green",
        visible: true,
      });
      return;
    }

    // Filter Professors vs Students + Industry
    const professors = judges.filter(
      (judge) => judge.affiliation === "professor"
    );
    const studentsAndIndustry = judges.filter(
      (judge) => judge.affiliation !== "professor"
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
      teams[i].rounds[round].push(professors[judge]);
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
      teams[i].rounds[round].push(studentsAndIndustry[judge]);
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
    axios.put("/api/judging", { teams }).then(() => toast("✅ Rounds Saved!"));
    setInput({
      ...input,
      rotations: "",
    });
  };

  const handleReset = () => {
    if (data.some((team) => team.rounds.length === 0)) {
      toast("❌ Already Reset!");
      return;
    }
    setData(
      data.map((team) => {
        team.rounds = [];
        return team;
      })
    );

    const uids = data.map((team) => team.uid).join(",");

    axios
      .delete(`/api/judging?ids=${uids}`)
      .then(() => toast("✅ Successfully Reset"));
  };

  const load = () => {
    axios.get("/api/judging").then((response) => {
      setData(response.data.items.teams);
      setJudges(response.data.items.judges);

      if (response.data.items.judges.length === 0) {
        setPopup({
          title: "Insufficient Judges",
          text: "There are not enough judges to go around to each team. Please consider adding more judges via the judge dashboard. ",
          color: "green",
          visible: true,
        });
      }
    });
  };

  useEffect(() => {
    load();
  }, []);

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
          <form className="flex items-center pr-2" onSubmit={generate}>
            <Input
              setObject={setInput}
              object={input}
              label="rotations"
              showLabel={false}
              maxLength={2}
              placeholder="ie. 5"
              clear={true}
            />
            <p className="mb-0 font-semibold mx-2"># of rotations</p>
            <Button color="green" text="generate" onClick={generate} />
          </form>
          <Button color="red" text="reset" onClick={handleReset} />
        </div>
        <div className="flex">
          {tags.map((tag, index) => (
            <Tag key={index} color={COLORS[tag]} text={tag} classes="mx-2" />
          ))}
        </div>
      </div>
      <form className="flex items-center" onSubmit={handleSearch}>
        <Input
          classes="w-full"
          object={input}
          setObject={setInput}
          clear={true}
          label="input"
          maxLength={60}
          placeholder="search"
          showLabel={false}
        />
      </form>
    </>
  );
};

export default Toolbar;
