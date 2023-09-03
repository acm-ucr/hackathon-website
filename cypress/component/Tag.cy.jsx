import Tag from "@/components/Admin/Tag";

describe("Tag", () => {
  it("Pending", () => {
    const color = {
      background: "bg-hackathon-tags-green-bg",
      text: "text-hackathon-tags-green-text",
    };

    cy.mount(<Tag color={color} text="Pending" />);
  });

  it("Rejected", () => {
    const color = {
      background: "bg-hackathon-tags-red-bg",
      text: "text-hackathon-tags-red-text",
    };

    cy.mount(<Tag color={color} text="Rejected" />);
  });
});
