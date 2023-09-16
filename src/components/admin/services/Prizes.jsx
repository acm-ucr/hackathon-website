import { useState } from "react";
import Title from "../Title";
import Toolbar from "./Toolbar";
import teamsData from "../../../../cypress/fixtures/Teams.json";
import prizesData from "../../../../cypress/fixtures/Prizes.json";
import Table from "../Table";
import { HEADERS } from "@/data/admin/Prizes";

const Prizes = () => {
  const [teams, setTeams] = useState(teamsData);
  const [prizes, setPrizes] = useState(prizesData);
  const [headers, setHeaders] = useState(HEADERS);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Prizes" />
      <Toolbar
        objects={prizes}
        setObjects={setPrizes}
        teams={teams}
        setTeams={setTeams}
      />
      <Table
        headers={headers}
        setHeaders={setHeaders}
        objects={prizes}
        setObjects={setPrizes}
        empty="No Prizes Available"
      />
    </div>
  );
};

export default Prizes;