import React, { useState } from "react";
import SortIcon from "@/components/dynamic/admin/dashboards/SortIcon";
describe("SortIcon", () => {
  it("Exists", () => {
    const Parent = () => {
      const [headers, setHeaders] = useState([{ text: "name", sort: "off" }]);
      const [currentSort, setCurrentSort] = useState(false);
      const setObjects = () => {};

      return (
        <SortIcon
          index={0}
          name="name"
          headers={headers}
          setHeaders={setHeaders}
          setObjects={setObjects}
          setCurrentSort={setCurrentSort}
          currentSort={currentSort}
        />
      );
    };

    cy.mount(<Parent />);

    cy.get('[data-cy="name-sort-up"]').should("exist");
    cy.get('[data-cy="name-sort-down"]').should("exist");
    cy.get('[data-cy="name-sort-up"]').should("have.class", "hover:opacity-50");
    cy.get('[data-cy="name-sort-down"]').should(
      "have.class",
      "hover:opacity-50"
    );
  });

  it("Up", () => {
    const Parent = () => {
      const [headers, setHeaders] = useState([{ text: "name", sort: "off" }]);
      const [currentSort, setCurrentSort] = useState(null);
      const setObjects = () => {};

      return (
        <SortIcon
          index={0}
          name="name"
          headers={headers}
          objects={[]}
          setHeaders={setHeaders}
          setObjects={setObjects}
          setCurrentSort={setCurrentSort}
          currentSort={currentSort}
        />
      );
    };

    cy.mount(<Parent />);

    cy.get('[data-cy="name-sort-up"]').click();
    cy.get('[data-cy="name-sort-up"]').should(
      "have.class",
      "text-hackathon-blue-100"
    );
  });

  it("Down", () => {
    const Parent = () => {
      const [headers, setHeaders] = useState([{ text: "name", sort: "off" }]);
      const [currentSort, setCurrentSort] = useState(null);
      const setObjects = () => {};

      return (
        <SortIcon
          index={0}
          name="name"
          headers={headers}
          objects={[]}
          setHeaders={setHeaders}
          setObjects={setObjects}
          setCurrentSort={setCurrentSort}
          currentSort={currentSort}
        />
      );
    };

    cy.mount(<Parent />);

    cy.get('[data-cy="name-sort-down"]').click();
    cy.get('[data-cy="name-sort-down"]').should(
      "have.class",
      "text-hackathon-blue-100"
    );
  });
});
