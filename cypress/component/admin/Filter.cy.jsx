import Filter from "@/components/admin/dashboards/dashboard/Filter";
import React from "react";

describe("Filter", () => {
  const initialProps = {
    value: "test",
    status: "Active",
    isActive: false,
  };

  it("change colors", () => {
    cy.mount(
      <Filter {...initialProps} isActive={false} setFilters={() => {}} />,
    );
    cy.get('[data-cy="Active-filter"]').should(
      "have.class",
      "text-hackathon-blue-100 bg-white",
    );
    cy.mount(
      <Filter {...initialProps} isActive={true} setFilters={() => {}} />,
    );
    cy.get('[data-cy="Active-filter"]').should(
      "have.class",
      "text-white bg-hackathon-blue-100",
    );
  });

  it("onClick setFilters", () => {
    const setFilters = cy.stub();
    cy.mount(<Filter {...initialProps} setFilters={setFilters} />);
    cy.get('[data-cy="Active-filter"]').click();
    cy.wrap(setFilters).should("have.been.calledOnce");
  });

  it("TiPlus rotation", () => {
    cy.mount(
      <Filter {...initialProps} isActive={false} setFilters={() => {}} />,
    );
    cy.get('[data-cy="Active-filter"] .duration-300').should(
      "not.have.class",
      "-rotate-45",
    );
    cy.mount(
      <Filter {...initialProps} isActive={true} setFilters={() => {}} />,
    );
    cy.get('[data-cy="Active-filter"] .duration-300').should(
      "have.class",
      "-rotate-45",
    );
  });
});
