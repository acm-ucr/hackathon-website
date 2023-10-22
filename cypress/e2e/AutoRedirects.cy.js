describe("Test Auto Redirects", () => {
  it("Auto Redirect to /admin/participants", () => {
    cy.visit("/admin");
    cy.url().should("match", /admin\/participants/);
  });

  it("Auto Redirect to /form/participant", () => {
    cy.visit("/form");
    cy.url().should("match", /form\/participant/);
  });

  it("Auto Redirect to /users/dashboard", () => {
    cy.visit("/user");
    cy.url().should("match", /user\/dashboard/);
  });
});
