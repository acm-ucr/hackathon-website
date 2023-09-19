Cypress.Commands.add("login", (user) => {
  cy.intercept("/api/auth/session", { fixture: `${user}_role.json` }).as(
    "session"
  );
});

Cypress.Commands.add("fetch", (portal, page) => {
  cy.intercept("GET", `/api/${page}`, {
    fixture: `${page}.json`,
  }).as("get");
  cy.visit(`/${portal}/${page}`);
  cy.wait("@get");
});
