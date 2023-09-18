import volunteers from "../../../fixtures/volunteers.json";

describe("Volunteer Search", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/volunteers");
  });

  it("No Search Results", () => {
    cy.get('[data-cy="toolbar"]').find('[data-cy="input-input"]').type("Meow");
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.contains("No Volunteers Available");
  });

  it("Search For 1st Entry", () => {
    cy.get('[data-cy="toolbar"]')
      .find('[data-cy="input-input"]')
      .type(volunteers[0].name);
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.get(`[data-cy="${volunteers[0].uid}"]`).should("exist");
  });

  it("Search For Multiple Entries", () => {
    cy.get('[data-cy="toolbar"]')
      .find('[data-cy="input-input"]')
      .type("John Cena");
    cy.get('[data-cy="toolbar"]').find("form").submit();
    volunteers.forEach((volunteer) => {
      if (volunteer.name.toLowerCase().includes("john cena"))
        cy.get(`[data-cy="${volunteer.uid}"]`).should("exist");
      else cy.get(`[data-cy="${volunteer.uid}"]`).should("not.exist");
    });
  });
});
