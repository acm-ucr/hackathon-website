// import { encode } from "next-auth/jwt";

Cypress.Commands.add("login", (user) => {
  cy.intercept("/api/auth/session", { fixture: "session.json" }).as("session");
  //   return cy
  //     .wrap(null)
  //     .then(() => {
  //       return encode({
  //         token: user,
  //         secret: Cypress.env("NEXTAUTH_SECRET"),
  //       });
  //     })
  //     .then((encryptedToken) => {
  //       cy.setCookie("next-auth.session-token", encryptedToken);
  //       cy.setCookie("__Secure-next-auth.session-token", encryptedToken, {
  //         secure: true,
  //       });
  //     });
});
