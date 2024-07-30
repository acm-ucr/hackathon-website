import Loading from "../../src/components/Loading";

describe("Loading", () => {
  it("Loading", () => {
    cy.mount(<Loading />);

    cy.contains("Loading...")
      .should("exist")
      .and("have.class", "text-3xl", "font-bold", "text-hackathon-blue-100");

    cy.get(".animate-spin")
      .should("exist")
      .and("have.class", "text-hackathon-blue-100");
  });
});
