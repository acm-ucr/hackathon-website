import response from "../../../fixtures/committees.json";

const five = response.items.slice(0, 5);

describe("Committee Actions", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "committees",
    });
  });

  it("Accept First 5 Entries", () => {
    five.forEach((committee) =>
      cy
        .get(`[data-cy="${committee.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click()
    );

    cy.action({
      tag: "accept",
      page: "committees",
    });
    five.forEach((committee) =>
      cy
        .get(`[data-cy="${committee.uid}"]`)
        .find('[data-cy="1-tag"]')
        .should("exist")
    );
  });

  it("Pending First 5 Entries", () => {
    five.forEach((committee) =>
      cy
        .get(`[data-cy="${committee.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click()
    );

    cy.action({
      tag: "pending",
      page: "committees",
    });
    five.forEach((committee) =>
      cy
        .get(`[data-cy="${committee.uid}"]`)
        .find('[data-cy="0-tag"]')
        .should("exist")
    );
  });

  it("Reject First 5 Entries", () => {
    five.forEach((committee) =>
      cy
        .get(`[data-cy="${committee.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click()
    );
    cy.action({
      tag: "reject",
      page: "committees",
    });
    five.forEach((committee) =>
      cy
        .get(`[data-cy="${committee.uid}"]`)
        .find('[data-cy="-1-tag"]')
        .should("exist")
    );
  });

  it("Delete First 5 Entries", () => {
    five.forEach((committee) =>
      cy
        .get(`[data-cy="${committee.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click()
    );
    cy.delete({
      page: "committees",
    });
    five.forEach((committee) =>
      cy.get(`[data-cy="${committee.uid}"]`).should("not.exist")
    );
  });
});
