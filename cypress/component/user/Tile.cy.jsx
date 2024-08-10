import Tile from "@/components/user/Tile";
import { QrCode, ParkingCircle } from "lucide-react";

describe("Tile", () => {
  it("Checkin", () => {
    const icon = <QrCode />;
    const text = "Check In";
    const link = "/checkin";

    cy.mount(<Tile icon={icon} text={text} link={link} />);

    cy.get('[data-cy="tile-link"]').should("have.attr", "href", link);
    cy.get('[data-cy="tile-icon"]').should("exist");
    cy.get('[data-cy="tile-text"]').should("contain.text", text);
  });

  it("Parking", () => {
    const icon = <ParkingCircle />;
    const text = "Parking";
    const link = "/parking";

    cy.mount(<Tile icon={icon} text={text} link={link} />);

    cy.get('[data-cy="tile-link"]').should("have.attr", "href", link);
    cy.get('[data-cy="tile-icon"]').should("exist");
    cy.get('[data-cy="tile-text"]').should("contain.text", text);
  });
});
