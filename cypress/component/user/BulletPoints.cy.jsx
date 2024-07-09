import BulletPoints from "@/components/user/BulletPoints";

describe("BulletPoints Component", () => {
  it("renders BulletPoints component correctly", () => {
    const classes = "flex flex-col items-center justify-center mt-2";
    const classes2 = "list-disc w-10/12";
    const list = ["first item", "second item"];

    cy.mount(<BulletPoints list={list} />);

    cy.get("[data-cy=bulletpoint-component]").should("have.class", classes);

    list.forEach((item, index) => {
      cy.get(`[data-cy=bulletpoint-component] [data-cy=key]`)
        .eq(index)
        .should("contain.text", item)
        .and("have.class", classes2);
    });
  });
});
