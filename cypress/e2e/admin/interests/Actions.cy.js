import response from "../../../fixtures/interests.json";

const interests = response.items.slice(0, 5);

describe("Interests Actions", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "interests",
    });
  });

  it("Confirm First 5 Entries", () => {
    interests.forEach((interest) =>
      cy
        .get(`[data-cy="${interest.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click(),
    );

    cy.action({
      tag: "accept",
      page: "interests",
    });

    interests.forEach((interest) =>
      cy
        .get(`[data-cy="${interest.uid}"]`)
        .find('[data-cy="accepted-tag"]')
        .should("exist"),
    );
  });

  it("Delete First 5 Entries", () => {
    interests.forEach((interest) =>
      cy
        .get(`[data-cy="${interest.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click(),
    );

    cy.delete({
      page: "interests",
    });

    interests.forEach((interest) =>
      cy.get(`[data-cy="${interest.uid}"]`).should("not.exist"),
    );
  });
});
