Cypress.Commands.add("fetch", ({ role, portal, page }) => {
  cy.intercept("/api/auth/session", { fixture: `${role}_role.json` }).as(
    "session"
  );
  cy.intercept(
    "GET",
    `/api/dashboard/${page}?direction=undefined&index=1&size=10&first=undefined&last=undefined`,
    {
      fixture: `${page}.json`,
    }
  ).as("GET");

  // expires August 25th 2025
  cy.setCookie(
    "next-auth.session-token",
    "51f03b6d-71ea-4b02-aad8-a8a2165689ee"
  );

  cy.visit("/");
  cy.wait("@session");

  cy.visit(`/${portal}/${page}`);
  cy.wait("@GET");
});

Cypress.Commands.add("action", ({ tag, page }) => {
  cy.intercept("PUT", `/api/dashboard/${page}`, {
    message: "OK",
    status: 200,
  }).as("PUT");
  cy.get('[data-cy="toolbar"]').find(`[data-cy="${tag}-tag"]`).click();
  cy.wait("@PUT");
});

Cypress.Commands.add("delete", ({ page }) => {
  cy.intercept("DELETE", `/api/dashboard/${page}?remove=*`, {
    message: "OK",
    status: 200,
  }).as("DELETE");
  cy.get('[data-cy="toolbar"]').find('[data-cy="delete"]').click();
  cy.get('[data-cy="popup"]').find('[data-cy="confirm-button"]').click();
  cy.wait("@DELETE");
});
