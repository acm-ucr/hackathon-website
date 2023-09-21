import participants from "../../../fixtures/participants.json";

const five = participants.slice(0, 5);

describe("Participants Actions", () => {
  beforeEach(() => {
    cy.login("admins");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/participants");
  });

  it("Accept First 5 Entries", () => {
    five.forEach((participant) =>
      cy
        .get(`[data-cy="${participant.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="accept-tag"]').click();

    five.forEach((participant) =>
      cy
        .get(`[data-cy="${participant.uid}"]`)
        .find('[data-cy="accept-tag"]')
        .should("exist")
    );
  });

  it("Reject First 5 Entries", () => {
    five.forEach((participant) =>
      cy
        .get(`[data-cy="${participant.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="reject-tag"]').click();

    five.forEach((participant) =>
      cy
        .get(`[data-cy="${participant.uid}"]`)
        .find('[data-cy="reject-tag"]')
        .should("exist")
    );
  });

  it("Pending First 5 Entries", () => {
    five.forEach((participant) =>
      cy
        .get(`[data-cy="${participant.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="pending-tag"]').click();

    five.forEach((participant) =>
      cy
        .get(`[data-cy="${participant.uid}"]`)
        .find('[data-cy="pending-tag"]')
        .should("exist")
    );
  });

  it("Delete First 5 Entries", () => {
    five.forEach((participant) =>
      cy
        .get(`[data-cy="${participant.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="delete"]').click();
    cy.get('[data-cy="confirm-button"]').click();

    five.forEach((participant) =>
      cy.get(`[data-cy="${participant.uid}"]`).should("not.exist")
    );
  });
});
