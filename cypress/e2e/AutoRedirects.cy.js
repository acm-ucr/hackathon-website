describe("Test Auto Redirects", () => {
  it("Auto Redirect to /admin/participants", () => {
    cy.visit("/admin");
    cy.url().should("match", /admin\/participants/);
  });

  it("Auto Redirect to /form/participants", () => {
    cy.visit("/forms");
    cy.url().should("match", /form\/participants/);
  });

  it("Auto Redirect to /users/dashboard", () => {
    cy.visit("/user");
    cy.url().should("match", /user\/dashboard/);
  });
});
