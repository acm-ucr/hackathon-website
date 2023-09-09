import Button from "@/components/Forms/Button";

describe("Button.cy.jsx", () => {
  it("text", () => {
    const text = "Hello, world";
    cy.mount(<Button text={text}>Hello, world</Button>);
    cy.get("button").should("contains.text", "Hello, world");
  });

  it("no text", () => {
    cy.mount(<Button></Button>);
    cy.get("button").should("not.contain.text");
  });

  it("clickable", () => {
    const onClick = cy.stub().as("clickHandler");
    cy.mount(<Button onClick={onClick} />);
    cy.get("button").click({ force: true });
  });
});
