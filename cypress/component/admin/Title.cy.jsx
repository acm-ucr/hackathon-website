import Title from "@/components/admin/Title";

describe("Title test", () => {
  it("Title", () => {
    cy.mount(<Title title="Dashboard" />);
    cy.get('[data-cy="Dashboard-title"]').should(
      "have.class",
      "text-2xl",
      "font-extrabold"
    );
  });
});
