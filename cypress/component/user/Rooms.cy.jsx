import Rooms from "@/components/user/Rooms";

describe("Rooms", () => {
  it("rooms", () => {
    cy.mount(<Rooms />);
    cy.get("[data-cy='rooms-title']").contains("🚪Hackrooms");

    const roomList = ["WCH 127", "WCH 110", "WCH 130", "Byte", "WCH 129"];

    roomList.forEach((room) => {
      cy.contains(room).should("exist");
    });
  });
});
