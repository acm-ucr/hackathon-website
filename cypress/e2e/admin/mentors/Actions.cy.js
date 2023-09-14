import mentors from "../../../fixtures/Mentors.json";

const five = mentors.slice(0, 5);

describe("Mentors Actions", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/mentors");
  });

  it("Confirm First 5 Entries", () => {
    five.forEach((mentor) =>
      cy.get(`[data-cy="${mentor.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="confirm-tag"]').click();

    five.forEach((mentor) =>
      cy
        .get(`[data-cy="${mentor.uid}"]`)
        .find('[data-cy="confirm-tag"]')
        .should("exist")
    );
  });

  it("Not Attending First 5 Entries", () => {
    five.forEach((mentor) =>
      cy.get(`[data-cy="${mentor.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="not attending-tag"]').click();

    five.forEach((mentor) =>
      cy
        .get(`[data-cy="${mentor.uid}"]`)
        .find('[data-cy="not attending-tag"]')
        .should("exist")
    );
  });

  it("Pending First 5 Entries", () => {
    five.forEach((mentor) =>
      cy.get(`[data-cy="${mentor.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="pending-tag"]').click();

    five.forEach((mentor) =>
      cy
        .get(`[data-cy="${mentor.uid}"]`)
        .find('[data-cy="pending-tag"]')
        .should("exist")
    );
  });

  it("Delete First 5 Entries", () => {
    five.forEach((mentor) =>
      cy.get(`[data-cy="${mentor.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="delete"]').click();
    cy.get('[data-cy="confirm-button"]').click();

    five.forEach((mentor) =>
      cy.get(`[data-cy="${mentor.uid}"]`).should("not.exist")
    );
  });
});
