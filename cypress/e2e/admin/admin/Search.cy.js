import admins from "../../../fixtures/Admin.json";

describe("Admin Search", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/admin");
  });

  it("No Search Results", () => {
    cy.get('[data-cy="toolbar"]').find('[data-cy="input-input"]').type("Meow");
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.contains("No Admin Available");
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
