describe("Test Auto Redirects", () => {
  it("Auto Redirect to /admin/participants", () => {
    cy.visit("/admin");
    cy.url().should("match", /admin\/participants/);
  });

  it("Auto Redirect to /forms/participant", () => {
    cy.visit("/forms");
    cy.url().should("match", /forms\/participant/);
  });

  it("Auto Redirect to /user/dashboard", () => {
    cy.visit("/user");
    cy.url().should("match", /user\/dashboard/);
  });
});
