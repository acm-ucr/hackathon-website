import { judgeList } from "../../src/data/mock/Judges.js";

describe("User Search", () => {
  beforeEach(() => {
    cy.login("admin").visit("/admin/judges");
  });

  it("Search just for letter d", () => {
    cy.get('[data-cy="searchBar"]').click().type("D").type("{enter}");
    const shouldExist = ["Dewi Norton", "Kim Alexander"];
    judgeList.forEach((judge) => {
      const existence = shouldExist.includes(judge.name)
        ? "exist"
        : "not.exist";
      cy.get(`[data-cy="${judge.uid}"]`).should(existence);
    });
  });
});
