import judgeList from "../../../fixtures/JudgeList.json";

const five = judgeList.slice(0, 5);

describe("Judges Select", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/judges");
  });

  it("Select All", () => {
    cy.get('[data-cy="select-all"]').click();
    judgeList.forEach((judge) => {
      cy.get(`[data-cy="${judge.uid}"]`).should("have.class", "bg-green-100");
    });
  });

  it("Select First 5 Entries", () => {
    five.map((judge) =>
      cy.get(`[data-cy="${judge.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    judgeList.forEach((judge, index) => {
      if (index < 5)
        cy.get(`[data-cy="${judge.uid}"]`).should("have.class", "bg-green-100");
      else cy.get(`[data-cy="${judge.uid}"]`).should("have.class", "bg-white");
    });
  });
});
