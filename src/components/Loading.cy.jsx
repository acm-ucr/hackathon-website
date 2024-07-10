import Loading from "../../src/components/Loading";

describe("Loading Component", () => {
  it("renders Loading component correctly", () => {
    // Mount the Loading component
    cy.mount(<Loading />);

    // test "loading..." text and style
    cy.contains("Loading...")
      .should("exist")
      .and("have.class", "text-3xl")
      .and("have.class", "font-bold")
      .and("have.class", "text-hackathon-blue-100");

    // test spinning thing
    cy.get(".animate-spin")
      .should("exist")
      .and("have.class", "text-hackathon-blue-100");
  });
});
