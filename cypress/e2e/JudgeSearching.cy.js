describe("User Search", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/admin/judges");
  });

  it("Search Dewi Norton", () => {
    cy.get("input").click();
    cy.get("input").type("Dewi Norton");
    cy.get("input").type("{enter}");
    cy.get("body").contains("Dewi Norton");
    cy.get("body").contains("Amie Nguyen").should("not.exist");
    cy.get("body").contains("Larry Larsen").should("not.exist");
    cy.get("body").contains("Tiffany").should("not.exist");
  });
  it("Search just for letter d", () => {
    cy.get("input").click();
    cy.get("input").type("D");
    cy.get("input").type("{enter}");
    cy.get("body").contains("Dewi Norton");
    cy.get("body").contains("Kim Alexander");
    cy.get("body").contains("Larry Larsen").should("not.exist");
  });
  it("search for unused letter", () => {
    cy.get("input").click();
    cy.get("input").type("z");
    cy.get("input").type("{enter}");
    cy.get("body").contains("Dewi Norton").should("not.exist");
    cy.get("body").contains("Kim Alexander").should("not.exist");
    cy.get("body").contains("Larry Larsen").should("not.exist");
  });
});
