import Packing from "@/components/user/Packing";

describe("Packing", () => {
  it("List", () => {
    cy.mount(<Packing />);
    cy.get("[data-cy='packing-title']").contains("🎒Packing List");

    const expectedList = [
      "Computer and accessories (mouse, keyboard, etc.)",
      "Chargers (phone, laptop, etc.)",
      "Hardware that you might want to hack on.",
      "Sleep-related things (sleeping bags, pillow, blankets, etc.)",
      "There will be a resting area within the venue itself, but we can't provide sleeping materials to hackers.",
    ];

    expectedList.forEach((item) => {
      cy.get("[data-cy='packing-items']").should("exist");
    });
  });
});
