import response from "../../../fixtures/participants.json";

const five = response.items.slice(0, 5);

describe("Participants Actions", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admins",
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
      tag: "accept",
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
      tag: "reject",
      page: "participants",
    });

    five.forEach((participant) =>
      cy
        .get(`[data-cy="${participant.uid}"]`)
        .find('[data-cy="-1-tag"]')
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
    cy.action({
      tag: "pending",
      page: "participants",
    });

    five.forEach((participant) =>
      cy
        .get(`[data-cy="${participant.uid}"]`)
        .find('[data-cy="0-tag"]')
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
