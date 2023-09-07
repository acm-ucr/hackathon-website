import { participantList } from "../../../../src/data/mock/Participants";

describe("Participants Searching", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/participants");
  });

  it("No Search Results", () => {
    cy.get('[data-cy="toolbar"]').find("input").type("!@#$%^&*()");
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.contains("No Participants Available");
  });

  it("Search For 1st Entry", () => {
    cy.get('[data-cy="toolbar"]').find("input").type(participantList[0].name);
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.get(`[data-cy="${participantList[0].uid}"]`).should("exist");
  });
});
