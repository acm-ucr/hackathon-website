import SortIcon from "../../../src/components/admin/dashboards/SortIcon.jsx";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { useState } from "react";

describe("SortIcon", () => {
  let setHeadersStub;
  let setObjectsStub;
  let setCurrentSortStub;
  const mockData = {
    index: 0,
    name: "test",
    headers: [{ text: "test", sort: "off" }],
    objects: [{ test: "A" }, { test: "B" }],
    currentSort: "test",
  };

  beforeEach(() => {
    setHeadersStub = cy.stub();
    setObjectsStub = cy.stub();
    setCurrentSortStub = cy.stub();
  });

  const mountComponent = (overrides = {}) => {
    cy.mount(
      <SortIcon
        {...mockData}
        setHeaders={setHeadersStub}
        setObjects={setObjectsStub}
        setCurrentSort={setCurrentSortStub}
        {...overrides}
      />
    );
  };

  it("Up button highlights when clicked", () => {
    mountComponent();
    cy.get("#up").click();
    cy.get("#up").should("have.class", "text-[8px]");
  });

  it("Down button highlights when clicked", () => {
    mountComponent();
    cy.get("#down").click();
    cy.get("#down").should("have.class", "text-[8px]");
  });
});
