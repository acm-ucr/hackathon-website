import Tag from "@/components/Admin/Tag";
import { colors } from "@/data/Tags";

describe("Tag", () => {
  it("Accepted", () => {
    const color = colors["accept"];
    const onClick = cy.stub();
    const text = "Accepted";

    cy.mount(<Tag color={color} text={text} onClick={onClick} />);
    cy.get('[data-cy="Accepted-tag"]').contains("Accepted");
    cy.get('[data-cy="Accepted-tag"]').should(
      "have.class",
      "bg-hackathon-tags-green-bg"
    );
    cy.get('[data-cy="Accepted-tag"]').should(
      "have.class",
      "text-hackathon-tags-green-text"
    );
    cy.get('[data-cy="Accepted-tag"]').should(
      "have.class",
      "hover:shadow-[inset_0px_0px_0px_2px_#00AFB9]"
    );

    cy.get('[data-cy="Accepted-tag"]')
      .click()
      .then(() => expect(onClick).to.be.called);
  });

  it("Pending", () => {
    const color = colors["pending"];
    const onClick = cy.stub();
    const text = "Pending";

    cy.mount(<Tag color={color} text={text} onClick={onClick} />);
    cy.get('[data-cy="Pending-tag"]').contains("Pending");
    cy.get('[data-cy="Pending-tag"]').should(
      "have.class",
      "bg-hackathon-tags-yellow-bg"
    );
    cy.get('[data-cy="Pending-tag"]').should(
      "have.class",
      "text-hackathon-tags-yellow-text"
    );
    cy.get('[data-cy="Pending-tag"]').should(
      "have.class",
      "hover:shadow-[inset_0px_0px_0px_2px_#FFB81C]"
    );

    cy.get('[data-cy="Pending-tag"]')
      .click()
      .then(() => expect(onClick).to.be.called);
  });

  it("Rejected", () => {
    const color = colors["reject"];
    const onClick = cy.stub();
    const text = "Rejected";

    cy.mount(<Tag color={color} text={text} onClick={onClick} />);
    cy.get('[data-cy="Rejected-tag"]').contains("Rejected");
    cy.get('[data-cy="Rejected-tag"]').should(
      "have.class",
      "bg-hackathon-tags-red-bg"
    );
    cy.get('[data-cy="Rejected-tag"]').should(
      "have.class",
      "text-hackathon-tags-red-text"
    );
    cy.get('[data-cy="Rejected-tag"]').should(
      "have.class",
      "hover:shadow-[inset_0px_0px_0px_2px_#F07167]"
    );

    cy.get('[data-cy="Rejected-tag"]')
      .click()
      .then(() => expect(onClick).to.be.called);
  });

  it("Custom Classes", () => {
    const color = colors["accept"];
    const onClick = cy.stub();
    const text = "Accepted";

    cy.mount(
      <Tag
        color={color}
        text={text}
        onClick={onClick}
        classes="border-2 border-black"
      />
    );
    cy.get('[data-cy="Accepted-tag"]').contains("Accepted");
    cy.get('[data-cy="Accepted-tag"]').should(
      "have.class",
      "bg-hackathon-tags-green-bg"
    );
    cy.get('[data-cy="Accepted-tag"]').should(
      "have.class",
      "text-hackathon-tags-green-text"
    );
    cy.get('[data-cy="Accepted-tag"]').should(
      "have.class",
      "border-2 border-black"
    );
    cy.get('[data-cy="Accepted-tag"]').should(
      "have.class",
      "hover:shadow-[inset_0px_0px_0px_2px_#00AFB9]"
    );

    cy.get('[data-cy="Accepted-tag"]')
      .click()
      .then(() => expect(onClick).to.be.called);
  });

  it("No onClick", () => {
    const color = colors["accept"];
    const text = "Accepted";

    cy.mount(<Tag color={color} text={text} />);
    cy.get('[data-cy="Accepted-tag"]').contains("Accepted");
    cy.get('[data-cy="Accepted-tag"]').should(
      "have.class",
      "bg-hackathon-tags-green-bg"
    );
    cy.get('[data-cy="Accepted-tag"]').should(
      "have.class",
      "text-hackathon-tags-green-text"
    );
    cy.get('[data-cy="Accepted-tag"]').should(
      "not.have.class",
      "hover:shadow-[inset_0px_0px_0px_2px_#00AFB9]"
    );
  });
});
