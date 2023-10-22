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
      tag: "confirm",
      page: "judges",
    });

    five.forEach((judge) =>
      cy
        .get(`[data-cy="${judge.uid}"]`)
        .find('[data-cy="1-tag"]')
        .should("exist")
    );
  });

  it("Not Attending First 5 Entries", () => {
    five.forEach((judge) =>
      cy.get(`[data-cy="${judge.uid}"]`).find('[data-cy="checkbox"]').click()
    );

    cy.action({
      tag: "not attending",
      page: "judges",
    });

    five.forEach((judge) =>
      cy
        .get(`[data-cy="${judge.uid}"]`)
        .find('[data-cy="-1-tag"]')
        .should("exist")
    );
  });

  it("Pending First 5 Entries", () => {
    five.forEach((judge) =>
      cy.get(`[data-cy="${judge.uid}"]`).find('[data-cy="checkbox"]').click()
    );

    cy.action({
      tag: "pending",
      page: "judges",
    });

    five.forEach((judge) =>
      cy
        .get(`[data-cy="${judge.uid}"]`)
        .find('[data-cy="0-tag"]')
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
