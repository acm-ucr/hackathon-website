Cypress.Commands.add("fetch", ({ role, portal, page }) => {
  cy.intercept("/api/auth/session", { fixture: `${role}_role.json` }).as(
    "session"
  );
  cy.intercept("GET", `/api/${page}`, {
    fixture: `${page}.json`,
  }).as("GET");

  cy.visit("/");
  cy.wait("@session");

  cy.visit(`/${portal}/${page}`);
  cy.wait("@GET");
});

Cypress.Commands.add("action", ({ tag, page }) => {
  cy.intercept("PUT", `/api/${page}`, { message: "OK", status: 200 }).as("PUT");
  cy.get('[data-cy="toolbar"]').find(`[data-cy="${tag}-tag"]`).click();
  cy.wait("@PUT");
});

Cypress.Commands.add("delete", ({ page }) => {
  cy.intercept("PUT", `/api/${page}`, { message: "OK", status: 200 }).as("PUT");
  cy.get('[data-cy="toolbar"]').find('[data-cy="delete"]').click();
  cy.get('[data-cy="confirm-button"]').click();
  cy.wait("@PUT");
});
