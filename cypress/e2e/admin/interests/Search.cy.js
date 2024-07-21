import response from "../../../fixtures/interests.json";

const interests = response.items;

describe("Interests Search", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "interests",
    });
  });

  it("No Search Results", () => {
    cy.get('[data-cy="toolbar"]').find('[data-cy="search-input"]').type("Meow");
    cy.contains("No Interests Available");
  });

  it("Search For 1st Entry", () => {
    cy.get('[data-cy="toolbar"]')
      .find('[data-cy="search-input"]')
      .type(interests[0].name);
    cy.get(`[data-cy="${interests[0].uid}"]`).should("exist");
  });

  it("Search For Multiple Entries", () => {
    cy.get('[data-cy="toolbar"]')
      .find('[data-cy="search-input"]')
      .type("Mario");
    interests.forEach((interest) => {
      if (interest.name.toLowerCase().includes("john cena"))
        cy.get(`[data-cy="${interest.uid}"]`).should("exist");
      else cy.get(`[data-cy="${interest.uid}"]`).should("not.exist");
    });
  });
});
