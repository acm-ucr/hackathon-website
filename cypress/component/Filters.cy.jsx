import Filters from "@/components/Admin/Filters";
import { useState } from "react";

describe("Filters Component", () => {
  it("Default", () => {
    const filters = {
      rejected: true,
      accepted: true,
      pending: true,
    };

    cy.mount(<Filters filters={filters} />);
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100", "text white");
    cy.get('[data-cy="rejected-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100", "text white");
    cy.get('[data-cy="accepted-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100", "text white");
  });

  it("Click Filters", () => {
    const Parent = () => {
      const [filters, setFilters] = useState({
        rejected: true,
        accepted: true,
        pending: true,
      });
      const [objects, setObjects] = useState([
        { name: "pending" },
        { name: "rejected" },
        { name: "accepted" },
      ]);
      const input = "";

      const onClick = (filter) => {
        const filterValues = { ...filters, [filter]: !filters[filter] };
        setFilters(filterValues);
      };

      return (
        <Filters
          filters={filters}
          setFilters={setFilters}
          objects={objects}
          setObjects={setObjects}
          input={input}
          onClick={onClick}
        />
      );
    };

    cy.mount(<Parent />);

    cy.get('[data-cy="pending-filter"]').click();
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "bg-white", "text-hackathon-blue-100");
    cy.get('[data-cy="rejected-filter"]').click();
    cy.get('[data-cy="rejected-filter"]')
      .get("div")
      .should("have.class", "bg-white", "text-hackathon-blue-100");
    cy.get('[data-cy="accepted-filter"]').click();
    cy.get('[data-cy="accepted-filter"]')
      .get("div")
      .should("have.class", "bg-white", "text-hackathon-blue-100");
  });
});
