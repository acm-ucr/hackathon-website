import response from "../../../fixtures/admins.json";

const five = response.items.slice(0, 5);

describe("Admin Actions", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admins",
      page: "admins",
    });
  });

  it("Accept First 5 Entries", () => {
    five.forEach((admin) =>
      cy.get(`[data-cy="${admin.uid}"]`).find('[data-cy="checkbox"]').click()
    );

    cy.action({
      tag: "accept",
      page: "admins",
    });
    five.forEach((admin) =>
      cy
        .get(`[data-cy="${admin.uid}"]`)
        .find('[data-cy="1-tag"]')
        .should("exist")
    );
  });

  it("Pending First 5 Entries", () => {
    five.forEach((admin) =>
      cy.get(`[data-cy="${admin.uid}"]`).find('[data-cy="checkbox"]').click()
    );

    cy.action({
      tag: "pending",
      page: "admins",
    });
    five.forEach((admin) =>
      cy
        .get(`[data-cy="${admin.uid}"]`)
        .find('[data-cy="0-tag"]')
        .should("exist")
    );
  });

  it("Reject First 5 Entries", () => {
    five.forEach((admin) =>
      cy.get(`[data-cy="${admin.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.action({
      tag: "reject",
      page: "admins",
    });
    five.forEach((admin) =>
      cy
        .get(`[data-cy="${admin.uid}"]`)
        .find('[data-cy="-1-tag"]')
        .should("exist")
    );
  });

  it("Delete First 5 Entries", () => {
    five.forEach((admin) =>
      cy.get(`[data-cy="${admin.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.delete({
      page: "admins",
    });
    five.forEach((admin) =>
      cy.get(`[data-cy="${admin.uid}"]`).should("not.exist")
    );
  });
});
