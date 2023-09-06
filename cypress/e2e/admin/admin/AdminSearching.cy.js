import { adminList } from "../../../../src/data/mock/admin";

describe("Admin Searching", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/admin");
  });
  it("Input Not Exist Action", () => {
    cy.get('[data-cy="toolbar"]').find("input").type("Meow");
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.contains("No admin Available");
  });

  it("Search For The First Entry Action", () => {
    cy.get('[data-cy="toolbar"]').find("input").type(adminList[0].name);
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.get(`[data-cy="${adminList[0].uid}"]`).should("exist");
  });
});
