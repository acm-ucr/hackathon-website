import { adminList } from "../../../../src/data/mock/admin";
describe("Admin Actions", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/admin");
  });
  it("Accept First Five Entries Action", () => {
    for (let i = 0; i < 5; i++)
      cy.get(`[data-cy="${adminList[i].uid}"]`)
        .find('[data-cy="checkbox"]')
        .click();
    cy.get('[data-cy="toolbar"]').find('[data-cy="acceptTag"]').click();
    for (let i = 0; i < 5; i++)
      cy.get(`[data-cy="${adminList[i].uid}"]`)
        .find('[data-cy="acceptedTag"]')
        .should("exist");
  });

  it("Reject First Five Entries Action", () => {
    for (let i = 0; i < 5; i++)
      cy.get(`[data-cy="${adminList[i].uid}"]`)
        .find('[data-cy="checkbox"]')
        .click();
    cy.get('[data-cy="toolbar"]').find('[data-cy="rejectTag"]').click();
    for (let i = 0; i < 5; i++)
      cy.get(`[data-cy="${adminList[i].uid}"]`)
        .find('[data-cy="rejectedTag"]')
        .should("exist");
  });

  it("Reset Action", () => {
    cy.get('[data-cy="toolbar"]').find("input").type(adminList[0].name);
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.get('[data-cy="toolbar"]').find('[data-cy="resetTag"]').click();
    adminList.forEach((admin) =>
      cy.get(`[data-cy="${admin.uid}"]`).should("exist")
    );
  });
  it("Delete First Five Action", () => {
    for (let i = 0; i < 5; i++)
      cy.get(`[data-cy="${adminList[i].uid}"]`)
        .find('[data-cy="checkbox"]')
        .click();
    cy.get('[data-cy="toolbar"]').find('[data-cy="delete"]').click();
    cy.get('[data-cy="confirmButton"]').click();
    for (let i = 0; i < 5; i++)
      cy.get(`[data-cy="${adminList[i].uid}"]`).should("not.exist");
  });
});
