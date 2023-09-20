import mentors from "../../../fixtures/mentors.json";

const five = mentors.slice(0, 5);

describe("Mentor Select", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/mentors");
  });

  it("Select All", () => {
    cy.get('[data-cy="select-all"]').click();
    mentors.forEach((mentor) => {
      cy.get(`[data-cy="${mentor.uid}"]`).should("have.class", "bg-green-100");
    });
  });

  it("Select First 5 Entries", () => {
    five.map((mentor) =>
      cy.get(`[data-cy="${mentor.uid}"]`).find('[data-cy="select"]').click()
    );
    mentors.forEach((mentor, index) => {
      if (index < 5)
        cy.get(`[data-cy="${mentor.uid}"]`).should(
          "have.class",
          "bg-green-100"
        );
      else cy.get(`[data-cy="${mentor.uid}"]`).should("have.class", "bg-white");
    });
  });
});
