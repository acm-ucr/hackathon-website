import { adminList } from "../../../../src/data/mock/Admin";

const five = adminList.slice(0, 5);

describe("Admin Actions", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/admin");
  });

  it("Accept First 5 Entries", () => {
    five.forEach((admin) =>
      cy.get(`[data-cy="${admin.uid}"]`).find('[data-cy="checkbox"]').click()
    );

    cy.get('[data-cy="toolbar"]').find('[data-cy="accept-tag"]').click();
    five.forEach((admin) =>
      cy
        .get(`[data-cy="${admin.uid}"]`)
        .find('[data-cy="accepted-tag"]')
        .should("exist")
    );
  });

  it("Reject First 5 Entries", () => {
    five.forEach((admin) =>
      cy.get(`[data-cy="${admin.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="reject-tag"]').click();
    five.forEach((admin) =>
      cy
        .get(`[data-cy="${admin.uid}"]`)
        .find('[data-cy="rejected-tag"]')
        .should("exist")
    );
  });

  it("Delete First 5 Entries", () => {
    five.forEach((admin) =>
      cy.get(`[data-cy="${admin.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="delete"]').click();
    cy.get('[data-cy="confirm-button"]').click();
    five.forEach((admin) =>
      cy.get(`[data-cy="${admin.uid}"]`).should("not.exist")
    );
  });
});
