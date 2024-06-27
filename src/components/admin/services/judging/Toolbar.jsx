"use client";
import { useState, useEffect } from "react";
import Input from "../../Input";
import Button from "../../Button";
import Tag from "../../Tag";
import { COLORS } from "@/data/Tags";
import Popup from "../../Popup";
import toaster from "@/utils/toaster";
import { useRouter } from "next/navigation";
import { api } from "@/utils/api";

const tags = ["professor", "industry", "student"];

const Toolbar = ({
  data,
  setData,
  setFilters,
  view,
  setView,
  setJudgesView,
}) => {
  const router = useRouter();

  const [judges, setJudges] = useState(null);
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
  const [search, setSearch] = useState("");

  const generate = (e) => {
    e.preventDefault();
    if (
      input.rotations === "" ||
      isNaN(input.rotations) ||
      parseInt(input.rotations) < 1 ||
      parseInt(input.rotations) > 99
    ) {
      toaster("Please enter a valid integer value between 1 and 99", "error");
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

    const teams = [...data];

    // Reset Rounds
    teams.forEach((team, index) => {
      team.rounds = Array.from(Array(parseInt(input.rotations)), () => []);
      team.table = index + 1;
    });

    let judge = 0;
    let round = 0;

    // assign judges
    for (let j = 0; j < input.rotations; j += 1) {
      for (let i = 0; i < teams.length; i += 1) {
        if (round === parseInt(input.rotations)) continue;
        if (
          teams[i].rounds.some((judges) =>
            judges.some((individual) => individual.name === judges[judge].name)
          )
        )
          continue;
        if (judge < judges.length) {
          teams[i].rounds[round].push(judges[judge]);
          judge += 1;
        }
        if (judge === judges.length) {
          judge = 0;
          round += 1;
        }
      }
    }

    if (judges.length * input.rotations < teams.length) {
      setPopup({
        title: "Insufficient Judges",
        text: "There are not enough judges to go around to each team. Please consider adding more judges via the judge dashboard. ",
        color: "green",
        visible: true,
      });
    }

    setData(teams);

    api({
      method: "PUT",
      url: "/api/judging",
      body: { teams },
    }).then(() => toaster("Rounds Saved!", "success"));

    setInput({
      ...input,
      rotations: "",
    });
  };

  const handleReset = () => {
    if (data.some((team) => team.rounds.length === 0)) {
      toaster("Already Reset!", "error");
      return;
    }
    setData(
      data.map((team) => {
        team.rounds = [];
        return team;
      })
    );

    const uids = data.map((team) => team.uid).join(",");

    api({
      method: "DELETE",
      url: `/api/judging?ids=${uids}`,
    }).then(() => toaster("Successfully Reset", "success"));
  };

  const handleView = () => {
    setView(!view);
    const totalJudges = [...judges];

    totalJudges.forEach((judge) => {
      judge.rounds = Array.from(Array(data[0].rounds.length), () => []);

      data.forEach((team) => {
        const name = team.table
          ? team.table.toString().padStart(2, "0") + " : " + team.name
          : team.name;
        team.rounds.forEach((round, index) => {
          if (round.some((individual) => individual.name === judge.name))
            judge.rounds[index] = [{ name: name, affiliation: "student" }];
        });
      });
    });

    setJudgesView(totalJudges);
  };

  const handleInput = (e) => {
    setFilters(
      data.filter(({ name }) =>
        name.toLowerCase().search(e.target.value.toLowerCase()) === -1
          ? false
          : true
      )
    );

    setSearch(e.target.value);
  };

  const load = () => {
    api({
      method: "GET",
      url: "/api/judging",
    }).then(({ items }) => {
      setData(items.teams);
      setFilters(items.teams);
      setJudges(items.judges);

      if (items.judges.length === 0) {
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
          <Button
            color="red"
            text="reset"
            onClick={handleReset}
            disabled={!data || data.some(({ rounds }) => rounds.length === 0)}
          />
          <div className="pl-2">
            <Button
              color="green"
              text="view"
              onClick={handleView}
              disabled={!data || data.some(({ rounds }) => rounds.length === 0)}
            />
          </div>
          <div className="pl-2">
            <Input
              value={search}
              label="search"
              showLabel={false}
              maxLength={100}
              placeholder="Search"
              clear={true}
              clearFn={() => setSearch("")}
              onChangeFn={handleInput}
            />
          </div>
        </div>
        <div className="flex">
          {tags.map((tag, index) => (
            <Tag key={index} color={COLORS[tag]} text={tag} classes="mx-2" />
          ))}
        </div>
      </div>
    </>
  );
};

export default Toolbar;
