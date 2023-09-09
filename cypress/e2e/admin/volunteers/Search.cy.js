import { volunteerList } from "../../../../src/data/mock/Volunteers";

const multiple = volunteerList.slice(3);

describe("Volunteers Search", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/volunteers");
  });

  it("No Search Results", () => {
    cy.get('[data-cy="toolbar"]').find("input").type("Meow");
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.contains("No Volunteers Available");
  });

  it("Search For 1st Entry", () => {
    cy.get('[data-cy="toolbar"]').find("input").type(volunteerList[0].name);
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.get(`[data-cy="${volunteerList[0].uid}"]`).should("exist");
  });

  it("Search Partial Results", () => {
    cy.get('[data-cy="toolbar"]')
      .find("input")
      .type(multiple[0].name.split(" ")[0]);
    cy.get('[data-cy="toolbar"]').find("form").submit();

    multiple.forEach((volunteer) =>
      cy.get(`[data-cy="${volunteer.uid}"]`).should("exist")
    );
  });
});
