import response from "../../../fixtures/mentors.json";

const mentors = response.items;

describe("Mentor Search", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admins",
      page: "mentors",
    });
  });

  it("No Search Results", () => {
    cy.get('[data-cy="toolbar"]').find('[data-cy="input-input"]').type("Meow");
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.contains("No Mentors Available");
  });

  it("Search For 1st Entry", () => {
    cy.get('[data-cy="toolbar"]')
      .find('[data-cy="input-input"]')
      .type(mentors[0].name);
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.get(`[data-cy="${mentors[0].uid}"]`).should("exist");
  });

  it("Search For Multiple Entries", () => {
    cy.get('[data-cy="toolbar"]')
      .find('[data-cy="input-input"]')
      .type("John Cena");
    cy.get('[data-cy="toolbar"]').find("form").submit();
    mentors.forEach((mentor) => {
      if (mentor.name.toLowerCase().includes("john cena"))
        cy.get(`[data-cy="${mentor.uid}"]`).should("exist");
      else cy.get(`[data-cy="${mentor.uid}"]`).should("not.exist");
    });
  });
});
