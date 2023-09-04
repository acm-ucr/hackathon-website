import Tag from "@/components/Admin/Tag";

describe("Tag", () => {
  it("Accepted", () => {
    const color = {
      background: "bg-hackathon-tags-green-bg",
      text: "text-hackathon-tags-green-text",
    };

    const onClick = cy.stub();

    cy.mount(<Tag color={color} text="Accepted" onClick={onClick} />);
    cy.get(".tag").contains("Accepted");
    cy.get(".tag").should("have.class", "bg-hackathon-tags-green-bg");
    cy.get(".tag").should("have.class", "text-hackathon-tags-green-text");

    cy.get(".tag")
      .click()
      .then(() => expect(onClick).to.be.called);
  });

  it("Pending", () => {
    const color = {
      background: "bg-hackathon-tags-yellow-bg",
      text: "text-hackathon-tags-yellow-text",
    };

    const onClick = cy.stub();

    cy.mount(<Tag color={color} text="Pending" onClick={onClick} />);
    cy.get(".tag").contains("Pending");
    cy.get(".tag").should("have.class", "bg-hackathon-tags-yellow-bg");
    cy.get(".tag").should("have.class", "text-hackathon-tags-yellow-text");

    cy.get(".tag")
      .click()
      .then(() => expect(onClick).to.be.called);
  });

  it("Rejected", () => {
    const color = {
      background: "bg-hackathon-tags-red-bg",
      text: "text-hackathon-tags-red-text",
    };

    const onClick = cy.stub();

    cy.mount(<Tag color={color} text="Rejected" onClick={onClick} />);
    cy.get(".tag").contains("Rejected");
    cy.get(".tag").should("have.class", "bg-hackathon-tags-red-bg");
    cy.get(".tag").should("have.class", "text-hackathon-tags-red-text");

    cy.get(".tag")
      .click()
      .then(() => expect(onClick).to.be.called);
  });

  it("Custom Classes", () => {
    const color = {
      background: "bg-hackathon-tags-green-bg",
      text: "text-hackathon-tags-green-text",
    };

    cy.mount(
      <Tag color={color} text="Accepted" classes="border-2 border-black" />
    );
    cy.get(".tag").contains("Accepted");
    cy.get(".tag").should("have.class", "bg-hackathon-tags-green-bg");
    cy.get(".tag").should("have.class", "text-hackathon-tags-green-text");
    cy.get(".tag").should("have.class", "border-2 border-black");
  });
});
