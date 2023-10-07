import Title from "@/components/dynamic/admin/Title";

describe("Title test", () => {
  it("Title", () => {
    cy.mount(<Title title="Dashboard" />);
    cy.get('[data-cy="Dashboard-title"]').should(
      "have.class",
      "text-2xl",
      "font-extrabold"
    );
    cy.get('[data-cy="Dashboard-title"]').contains("Dashboard");
  });

  it("Empty", () => {
    cy.mount(<Title title="" />);
    cy.get('[data-cy="Dashboard-title"]').should(
      "have.class",
      "text-2xl",
      "font-extrabold"
    );
    cy.get('[data-cy="Dashboard-title"]').contains("");
  });
});
