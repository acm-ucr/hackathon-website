// import

describe("", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/checkin");
  });

  it("", () => {});
});
