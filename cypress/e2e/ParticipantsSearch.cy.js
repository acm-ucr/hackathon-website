import { participantList } from "../../src/data/mock/Participants";

describe("Participants Searching", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/participants");
  });

  it("Searching For Missing Entry", () => {
    cy.get("input").type("!@#$%^&*()");
    cy.get("form").submit();
    cy.contains("No Participants Available");
  });

  it("Searching For First Entry", () => {
    cy.get("input").type(participantList[0].name);
    cy.get("form").submit();
    cy.contains(".font-bold", participantList[0].name);
  });
});
