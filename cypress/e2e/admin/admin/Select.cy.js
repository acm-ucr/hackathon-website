import admins from "../../../fixtures/admin.json";

const five = admins.slice(0, 5);

describe("Admin Select", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/admin");
  });

  it("Select All", () => {
    cy.get('[data-cy="select-all"]').click();
    admins.forEach((admin) => {
      cy.get(`[data-cy="${admin.uid}"]`).should("have.class", "bg-green-100");
    });
  });

  it("Select First 5 Entries", () => {
    five.map((admin) =>
      cy.get(`[data-cy="${admin.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    admins.forEach((admin, index) => {
      if (index < 5)
        cy.get(`[data-cy="${admin.uid}"]`).should("have.class", "bg-green-100");
      else cy.get(`[data-cy="${admin.uid}"]`).should("have.class", "bg-white");
    });
  });
});
