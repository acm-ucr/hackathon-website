import response from "../../../fixtures/sponsors.json";

const five = response.items.slice(0, 5);

describe("Sponsors Actions", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "sponsors",
    });
  });

  it("Confirm First 5 Entries", () => {
    five.forEach((sponsor) =>
      cy.get(`[data-cy="${sponsor.uid}"]`).find('[data-cy="checkbox"]').click()
    );

    cy.action({
      tag: "confirm",
      page: "sponsors",
    });

    five.forEach((sponsor) =>
      cy
        .get(`[data-cy="${sponsor.uid}"]`)
        .find('[data-cy="1-tag"]')
        .should("exist")
    );
  });

  it("Not Attending First 5 Entries", () => {
    five.forEach((sponsor) =>
      cy.get(`[data-cy="${sponsor.uid}"]`).find('[data-cy="checkbox"]').click()
    );

    cy.action({
      tag: "not attending",
      page: "sponsors",
    });

    five.forEach((sponsor) =>
      cy
        .get(`[data-cy="${sponsor.uid}"]`)
        .find('[data-cy="-1-tag"]')
        .should("exist")
    );
  });

  it("Delete First 5 Entries", () => {
    five.forEach((sponsor) =>
      cy.get(`[data-cy="${sponsor.uid}"]`).find('[data-cy="checkbox"]').click()
    );

    cy.delete({
      page: "sponsors",
    });

    five.forEach((sponsor) =>
      cy.get(`[data-cy="${sponsor.uid}"]`).should("not.exist")
    );
  });
});
