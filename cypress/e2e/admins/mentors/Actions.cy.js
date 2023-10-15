import response from "../../../fixtures/mentors.json";

const five = response.items.slice(0, 5);

describe("Mentors Actions", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admins",
      page: "mentors",
    });
  });

  it("Confirm First 5 Entries", () => {
    five.forEach((mentor) =>
      cy.get(`[data-cy="${mentor.uid}"]`).find('[data-cy="select"]').click()
    );
    cy.action({
      tag: "confirm",
      page: "mentors",
    });
    five.forEach((mentor) =>
      cy
        .get(`[data-cy="${mentor.uid}"]`)
        .find('[data-cy="1-tag"]')
        .should("exist")
    );
  });

  it("Not Attending First 5 Entries", () => {
    five.forEach((mentor) =>
      cy.get(`[data-cy="${mentor.uid}"]`).find('[data-cy="select"]').click()
    );
    cy.action({
      tag: "not attending",
      page: "mentors",
    });

    five.forEach((mentor) =>
      cy
        .get(`[data-cy="${mentor.uid}"]`)
        .find('[data-cy="-1-tag"]')
        .should("exist")
    );
  });

  it("Pending First 5 Entries", () => {
    five.forEach((mentor) =>
      cy.get(`[data-cy="${mentor.uid}"]`).find('[data-cy="select"]').click()
    );
    cy.action({
      tag: "pending",
      page: "mentors",
    });

    five.forEach((mentor) =>
      cy
        .get(`[data-cy="${mentor.uid}"]`)
        .find('[data-cy="0-tag"]')
        .should("exist")
    );
  });

  it("Delete First 5 Entries", () => {
    five.forEach((mentor) =>
      cy.get(`[data-cy="${mentor.uid}"]`).find('[data-cy="select"]').click()
    );
    cy.delete({
      page: "mentors",
    });
    five.forEach((mentor) =>
      cy.get(`[data-cy="${mentor.uid}"]`).should("not.exist")
    );
  });
});
