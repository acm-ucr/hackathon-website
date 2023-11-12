import response from "../../../fixtures/volunteers.json";

const five = response.items.slice(0, 5);

describe("Volunteers Actions", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "volunteers",
    });
  });

  it("Confirm First 5 Entries", () => {
    five.forEach((volunteer) =>
      cy.get(`[data-cy="${volunteer.uid}"]`).find('[data-cy="select"]').click()
    );

    cy.action({
      tag: "confirm",
      page: "volunteers",
    });

    five.forEach((volunteer) =>
      cy
        .get(`[data-cy="${volunteer.uid}"]`)
        .find('[data-cy="1-tag"]')
        .should("exist")
    );
  });

  it("Not Attending First 5 Entries", () => {
    five.forEach((volunteer) =>
      cy.get(`[data-cy="${volunteer.uid}"]`).find('[data-cy="select"]').click()
    );

    cy.action({
      tag: "not attending",
      page: "volunteers",
    });

    five.forEach((volunteer) =>
      cy
        .get(`[data-cy="${volunteer.uid}"]`)
        .find('[data-cy="-1-tag"]')
        .should("exist")
    );
  });

  it("Delete First 5 Entries", () => {
    five.forEach((volunteer) =>
      cy.get(`[data-cy="${volunteer.uid}"]`).find('[data-cy="select"]').click()
    );

    cy.delete({
      page: "volunteers",
    });

    five.forEach((volunteer) =>
      cy.get(`[data-cy="${volunteer.uid}"]`).should("not.exist")
    );
  });
});
