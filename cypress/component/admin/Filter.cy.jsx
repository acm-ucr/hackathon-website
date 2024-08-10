import Filter from "@/components/admin/dashboards/dashboard/Filter";

describe("Filter", () => {
  const props = {
    value: "test",
    status: "Active",
    isActive: false,
  };

  it("Toggle", () => {
    cy.mount(<Filter {...props} isActive={false} setFilters={() => {}} />);
    cy.get('[data-cy="Active-filter"]').should(
      "have.class",
      "bg-white text-hackathon-blue-100",
    );
    cy.mount(<Filter {...props} isActive={true} setFilters={() => {}} />);
    cy.get('[data-cy="Active-filter"]').should(
      "have.class",
      "bg-hackathon-blue-100 text-white",
    );
  });

  it("onClick", () => {
    const setFilters = cy.stub();
    cy.mount(<Filter {...props} setFilters={setFilters} />);
    cy.get('[data-cy="Active-filter"]').click();
    cy.wrap(setFilters).should("have.been.calledOnce");
  });

  it("Rotate", () => {
    cy.mount(<Filter {...props} isActive={false} setFilters={() => {}} />);
    cy.get('[data-cy="Active-filter"] .duration-300').should(
      "not.have.class",
      "-rotate-45",
    );
    cy.mount(<Filter {...props} isActive={true} setFilters={() => {}} />);
    cy.get('[data-cy="Active-filter"] .duration-300').should(
      "have.class",
      "-rotate-45",
    );
  });
});
