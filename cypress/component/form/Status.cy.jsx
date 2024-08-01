import Status from "@/components/form/form/Status";
import { STATUSES } from "@/data/Statuses";
import Tag from "@/components/admin/Tag";
import { COLORS } from "@/data/Tags";

describe("Status Component", () => {
  it("Display greeting messages", () => {
    const object = { name: "Alex", roles: { form: 1 }, form: "form" };
    cy.mount(<Status object={object} statuses={STATUSES} />);
    cy.contains(`Hello ${object.name},`).should("be.visible");
  });

  it("Correct color and text from Tag", () => {
    const text = "accepted";
    const classes = "mb-2";
    const onClick = cy.stub();
    const color = COLORS["accept"];
    cy.mount(
      <Tag color={color} text={text} onClick={onClick} classes={classes} />,
    );

    cy.contains(text).should("be.visible").and("have.class", classes);
  });

  it("Confirmation", () => {
    const user = { name: "Alex", roles: { form: 1 }, form: "form" };
    cy.mount(<Status object={user} statuses={STATUSES} />);
    const expectedText =
      "You have already filled out the form. If you wish to change any information, please fill out the form again. Note that your status will change until approved by an admin.";
    cy.get('[data-cy="status-confirmation"]')
      .should("exist")
      .and("have.class", "text-center")
      .and("contain.text", expectedText);
  });

  it("Status change", () => {
    const user = { name: "Alex", roles: { form: 1 }, form: "form" };
    cy.mount(<Status object={user} statuses={STATUSES} />);
    const confirmText =
      "If you believe that your status is incorrect, please reach out to us immediately.";
    cy.get("[data-cy=status-incorrect]")
      .should("have.class", "text-center")
      .and("contain.text", confirmText);
  });
});
