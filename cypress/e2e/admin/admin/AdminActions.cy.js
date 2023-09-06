import { adminList } from "../../../../src/data/mock/Admin";
describe("Admin Actions", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/admin");
  });
  it("Accept First 5 Entries", () => {
    for (let i = 0; i < 5; i++)
      cy.get(`[data-cy="${adminList[i].uid}"]`)
        .find('[data-cy="checkbox"]')
        .click();
    cy.get('[data-cy="toolbar"]').find('[data-cy="accept-tag"]').click();
    for (let i = 0; i < 5; i++)
      cy.get(`[data-cy="${adminList[i].uid}"]`)
        .find('[data-cy="accepted-tag"]')
        .should("exist");
  });

  it("Reject First 5 Entries", () => {
    for (let i = 0; i < 5; i++)
      cy.get(`[data-cy="${adminList[i].uid}"]`)
        .find('[data-cy="checkbox"]')
        .click();
    cy.get('[data-cy="toolbar"]').find('[data-cy="reject-tag"]').click();
    for (let i = 0; i < 5; i++)
      cy.get(`[data-cy="${adminList[i].uid}"]`)
        .find('[data-cy="rejected-tag"]')
        .should("exist");
  });

  it("Delete First 5 Entries", () => {
    const deleteList = adminList.slice(0, 5);
    deleteList.forEach((admin) =>
      cy.get(`[data-cy="${admin.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="delete"]').click();
    cy.get('[data-cy="confirm-button"]').click();
    deleteList.forEach((admin) =>
      cy.get(`[data-cy="${admin.uid}"]`).should("not.exist")
    );
  });
});
