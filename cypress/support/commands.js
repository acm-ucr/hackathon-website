Cypress.Commands.add("login", (user) => {
  cy.intercept("/api/auth/session", { fixture: `${user}_role.json` }).as(
    "session"
  );
});
