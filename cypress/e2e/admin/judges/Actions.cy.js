import response from "../../../fixtures/judges.json";

const five = response.items.slice(0, 5);

describe("Judges Actions", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "judges",
    });
  });

  it("Confirm First 5 Entries", () => {
    five.forEach((judge) =>
      cy.get(`[data-cy="${judge.uid}"]`).find('[data-cy="checkbox"]').click()
    );

    cy.action({
      tag: "accept",
      page: "judges",
    });

    five.forEach((judge) =>
      cy
        .get(`[data-cy="${judge.uid}"]`)
        .find('[data-cy="accepted-tag"]')
        .should("exist")
    );
  });

  it("Not Attending First 5 Entries", () => {
    five.forEach((judge) =>
      cy.get(`[data-cy="${judge.uid}"]`).find('[data-cy="checkbox"]').click()
    );

    cy.action({
      tag: "reject",
      page: "judges",
    });

    five.forEach((judge) =>
      cy
        .get(`[data-cy="${judge.uid}"]`)
        .find('[data-cy="rejected-tag"]')
        .should("exist")
    );
  });

  it("Delete First 5 Entries", () => {
    five.forEach((judge) =>
      cy.get(`[data-cy="${judge.uid}"]`).find('[data-cy="checkbox"]').click()
    );

    cy.delete({
      page: "judges",
    });

    five.forEach((judge) =>
      cy.get(`[data-cy="${judge.uid}"]`).should("not.exist")
    );
  });
});
