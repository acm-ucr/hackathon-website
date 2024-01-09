import response from "../../../fixtures/mentors.json";

const five = response.items.slice(0, 5);

describe("Mentors Actions", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "mentors",
    });
  });

  it("Confirm First 5 Entries", () => {
    five.forEach((mentor) =>
      cy.get(`[data-cy="${mentor.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.action({
      tag: "confirm",
      page: "mentors",
    });
    five.forEach((mentor) =>
      cy
        .get(`[data-cy="${mentor.uid}"]`)
        .find('[data-cy="accepted-tag"]')
        .should("exist")
    );
  });

  it("Not Attending First 5 Entries", () => {
    five.forEach((mentor) =>
      cy.get(`[data-cy="${mentor.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.action({
      tag: "not attending",
      page: "mentors",
    });

    five.forEach((mentor) =>
      cy
        .get(`[data-cy="${mentor.uid}"]`)
        .find('[data-cy="rejected-tag"]')
        .should("exist")
    );
  });

  it("Delete First 5 Entries", () => {
    five.forEach((mentor) =>
      cy.get(`[data-cy="${mentor.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.delete({
      page: "mentors",
    });
    five.forEach((mentor) =>
      cy.get(`[data-cy="${mentor.uid}"]`).should("not.exist")
    );
  });
});
