import BulletPoints from "@/components/user/BulletPoints";

describe("BulletPoints", () => {
  it("BulletPoints", () => {
    const classes = "flex flex-col items-center justify-center mt-2";
    const listClass = "list-disc w-10/12";
    const list = ["first item", "second item"];

    cy.mount(<BulletPoints list={list} />);

    cy.get("[data-cy=bulletpoint-list-items]").should("have.class", classes);

    list.forEach((item, index) => {
      cy.get(`[data-cy=bulletpoint-list-items] [data-cy=bulletpoint-list-item]`)
        .eq(index)
        .should("contain.text", item)
        .and("have.class", listClass);
    });
  });
});
