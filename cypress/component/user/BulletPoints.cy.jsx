import BulletPoints from "@/components/user/BulletPoints";

describe("BulletPoints", () => {
  it("BulletPoints", () => {
    const classes = "mt-2 flex flex-col items-center justify-center";
    const listClass = "w-10/12 list-disc";
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
