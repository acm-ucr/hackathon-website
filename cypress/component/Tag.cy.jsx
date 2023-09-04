import Tag from "@/components/Admin/Tag";
import { colors } from "@/data/Tags";

describe("Tag", () => {
  it("Accepted", () => {
    const color = colors["accept"];
    const onClick = cy.stub();
    const text = "Accepted";

    cy.mount(<Tag color={color} text={text} onClick={onClick} />);
    cy.get(".tag").contains("Accepted");
    cy.get(".tag").should("have.class", "bg-hackathon-tags-green-bg");
    cy.get(".tag").should("have.class", "text-hackathon-tags-green-text");
    cy.get(".tag").should(
      "have.class",
      "hover:shadow-[inset_0px_0px_0px_2px_#00AFB9]"
    );

    cy.get(".tag")
      .click()
      .then(() => expect(onClick).to.be.called);
  });

  it("Pending", () => {
    const color = colors["pending"];
    const onClick = cy.stub();
    const text = "Pending";

    cy.mount(<Tag color={color} text={text} onClick={onClick} />);
    cy.get(".tag").contains("Pending");
    cy.get(".tag").should("have.class", "bg-hackathon-tags-yellow-bg");
    cy.get(".tag").should("have.class", "text-hackathon-tags-yellow-text");
    cy.get(".tag").should(
      "have.class",
      "hover:shadow-[inset_0px_0px_0px_2px_#FFB81C]"
    );

    cy.get(".tag")
      .click()
      .then(() => expect(onClick).to.be.called);
  });

  it("Rejected", () => {
    const color = colors["reject"];
    const onClick = cy.stub();
    const text = "Rejected";

    cy.mount(<Tag color={color} text={text} onClick={onClick} />);
    cy.get(".tag").contains("Rejected");
    cy.get(".tag").should("have.class", "bg-hackathon-tags-red-bg");
    cy.get(".tag").should("have.class", "text-hackathon-tags-red-text");
    cy.get(".tag").should(
      "have.class",
      "hover:shadow-[inset_0px_0px_0px_2px_#F07167]"
    );

    cy.get(".tag")
      .click()
      .then(() => expect(onClick).to.be.called);
  });

  it("Custom Classes", () => {
    const color = colors["accept"];
    const text = "Accepted";

    cy.mount(<Tag color={color} text={text} classes="border-2 border-black" />);
    cy.get(".tag").contains("Accepted");
    cy.get(".tag").should("have.class", "bg-hackathon-tags-green-bg");
    cy.get(".tag").should("have.class", "text-hackathon-tags-green-text");
    cy.get(".tag").should("have.class", "border-2 border-black");
    cy.get(".tag").should(
      "not.have.class",
      "hover:shadow-[inset_0px_0px_0px_2px_#00AFB9]"
    );
  });
});
