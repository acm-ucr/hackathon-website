import { mentorList } from "../../../../src/data/mock/Mentors";

describe("Mentors Search", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/mentors");
  });

  it("No Search Results", () => {
    cy.get('[data-cy="toolbar"]').find("input").type("Meow");
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.contains("No Mentors Available");
  });

  it("Search For 1st Entry", () => {
    cy.get('[data-cy="toolbar"]').find("input").type(mentorList[0].name);
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.get(`[data-cy="${mentorList[0].uid}"]`).should("exist");
  });
});
