import response from "../../../fixtures/participants.json";

const five = response.items.slice(0, 5);

describe("Participants Actions", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "participants",
    });
  });

  it("Accept First 5 Entries", () => {
    five.forEach((participant) =>
      cy
        .get(`[data-cy="${participant.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click()
    );
    cy.action({
      tag: "accepted",
      page: "participants",
    });

    five.forEach((participant) =>
      cy
        .get(`[data-cy="${participant.uid}"]`)
        .find('[data-cy="1-tag"]')
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
    cy.action({
      tag: "rejected",
      page: "participants",
    });

    five.forEach((participant) =>
      cy
        .get(`[data-cy="${participant.uid}"]`)
        .find('[data-cy="-1-tag"]')
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
    cy.delete({
      page: "participants",
    });

    five.forEach((participant) =>
      cy.get(`[data-cy="${participant.uid}"]`).should("not.exist")
    );
  });
});
