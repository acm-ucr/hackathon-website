describe("Test Auto Redirects", () => {
  it("Auto Redirect to /admins/participants", () => {
    cy.visit("/admins");
    cy.url().should("match", /admins\/participants/);
  });

  it("Auto Redirect to /forms/participants", () => {
    cy.visit("/forms");
    cy.url().should("match", /forms\/participants/);
  });

  it("Auto Redirect to /users/dashboard", () => {
    cy.visit("/users");
    cy.url().should("match", /users\/dashboard/);
  });
});
