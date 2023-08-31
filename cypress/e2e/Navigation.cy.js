// describe("Static Site Navigation", () => {
//   it("Visit Home Page", () => {
//     cy.visit("/");
//   });
// });

describe("Admin Portal Navigation", () => {
  const user = {
    name: "John Smith",
    email: "test@example.com",
    id: "1234567890",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Square_funny.svg/1200px-Square_funny.svg.png",
    role: "admin",
  };

  it("Visit Index Page", () => {
    cy.login(user);
    cy.visit("/admin");
    cy.wait("@session");
  });
});
