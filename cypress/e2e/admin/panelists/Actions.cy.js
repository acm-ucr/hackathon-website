import response from "../../../fixtures/panelists.json";

const five = response.items.slice(0, 5);

describe("Panelists Actions", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "panelists",
    });
  });

  it("Confirm First 5 Entries", () => {
    five.forEach((panelists) =>
      cy
        .get(`[data-cy="${panelists.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click()
    );

    cy.action({
      tag: "accept",
      page: "panelists",
    });

    five.forEach((panelist) =>
      cy
        .get(`[data-cy="${panelist.uid}"]`)
        .find('[data-cy="accepted-tag"]')
        .should("exist")
    );
  });

  it("Not Attending First 5 Entries", () => {
    five.forEach((panelist) =>
      cy.get(`[data-cy="${panelist.uid}"]`).find('[data-cy="checkbox"]').click()
    );

    cy.action({
      tag: "reject",
      page: "panelists",
    });

    five.forEach((panelist) =>
      cy
        .get(`[data-cy="${panelist.uid}"]`)
        .find('[data-cy="rejected-tag"]')
        .should("exist")
    );
  });

  it("Delete First 5 Entries", () => {
    five.forEach((panelist) =>
      cy.get(`[data-cy="${panelist.uid}"]`).find('[data-cy="checkbox"]').click()
    );

    cy.delete({
      page: "panelists",
    });

    five.forEach((panelist) =>
      cy.get(`[data-cy="${panelist.uid}"]`).should("not.exist")
    );
  });
});
