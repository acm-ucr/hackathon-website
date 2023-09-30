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
        .find('[data-cy="confirm-tag"]')
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
        .find('[data-cy="not attending-tag"]')
        .should("exist")
    );
  });

  it("Pending First 5 Entries", () => {
    five.forEach((volunteer) =>
      cy.get(`[data-cy="${volunteer.uid}"]`).find('[data-cy="select"]').click()
    );

    cy.action({
      tag: "pending",
      page: "volunteers",
    });

    five.forEach((volunteer) =>
      cy
        .get(`[data-cy="${volunteer.uid}"]`)
        .find('[data-cy="pending-tag"]')
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
