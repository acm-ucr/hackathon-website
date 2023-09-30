// import

const { contains } = require("cypress/types/jquery");

describe("Scan_code", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/checkin");
  });

  it("check for notice", () => {
    contains("❌ Invalid QR Code!");
  });
});
