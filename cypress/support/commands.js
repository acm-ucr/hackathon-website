Cypress.Commands.add("login", (user) => {
  cy.intercept("/api/auth/session", { fixture: `${user}.json` }).as("session");
});
