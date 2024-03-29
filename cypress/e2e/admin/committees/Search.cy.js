import response from "../../../fixtures/committees.json";

const committees = response.items;

describe("Committee Search", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "committees",
    });
  });

  it("No Search Results", () => {
    cy.get('[data-cy="toolbar"]').find('[data-cy="search-input"]').type("Meow");
    cy.contains("No Committees Available");
  });

  it("Search For 1st Entry", () => {
    cy.get('[data-cy="toolbar"]')
      .find('[data-cy="search-input"]')
      .type(committees[0].name);
    cy.get(`[data-cy="${committees[0].uid}"]`).should("exist");
  });

  it("Search For Multiple Entries", () => {
    cy.get('[data-cy="toolbar"]')
      .find('[data-cy="search-input"]')
      .type("Mario");
    committees.forEach((committee) => {
      if (committee.name.toLowerCase().includes("mario"))
        cy.get(`[data-cy="${committee.uid}"]`).should("exist");
      else cy.get(`[data-cy="${committee.uid}"]`).should("not.exist");
    });
  });
});
