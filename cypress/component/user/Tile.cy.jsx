import React from "react";
import Tile from "@/components/user/Tile";
import { BsQrCode } from "react-icons/bs";
import { LuParkingCircle } from "react-icons/lu";

describe("Tile", () => {
  it("renders correctly when given Check-In prop", () => {
    const icon = <BsQrCode />;
    const text = "Check In";
    const link = "/checkin";

    cy.mount(<Tile icon={icon} text={text} link={link} />);

    cy.get('[data-cy="tile-link"]').should("have.attr", "href", link);
    cy.get('[data-cy="tile-icon"]').should("exist");
    cy.get('[data-cy="tile-text"]').should("contain.text", text);
  });

  it("renders correctly when given Parking prop", () => {
    const icon = <LuParkingCircle />;
    const text = "Parking";
    const link = "/parking";

    cy.mount(<Tile icon={icon} text={text} link={link} />);

    cy.get('[data-cy="tile-link"]').should("have.attr", "href", link);
    cy.get('[data-cy="tile-icon"]').should("exist");
    cy.get('[data-cy="tile-text"]').should("contain.text", text);
  });
});
