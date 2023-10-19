import response from "../../../fixtures/admins.json";

const admins = response.items;

describe("Admin Search", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admins",
      page: "admins",
    });
  });

  it("No Search Results", () => {
    cy.get('[data-cy="toolbar"]').find('[data-cy="input-input"]').type("Meow");
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.contains("No Admins Available");
  });

  it("Search For 1st Entry", () => {
    cy.get('[data-cy="toolbar"]')
      .find('[data-cy="input-input"]')
      .type(admins[0].name);
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.get(`[data-cy="${admins[0].uid}"]`).should("exist");
  });

  it("Search For Multiple Entries", () => {
    cy.get('[data-cy="toolbar"]').find('[data-cy="input-input"]').type("Mario");
    cy.get('[data-cy="toolbar"]').find("form").submit();
    admins.forEach((admin) => {
      if (admin.name.toLowerCase().includes("mario"))
        cy.get(`[data-cy="${admin.uid}"]`).should("exist");
      else cy.get(`[data-cy="${admin.uid}"]`).should("not.exist");
    });
  });
});
