import Popup from "@/components/admin/Popup";
import React from "react";
import { useState } from "react";

describe("Popup Component", () => {
  it("opens and displays the popup", () => {
    const Parent = () => {
      const [popup, setPopup] = useState({
        title: "Sample Popup",
        text: "This is a test popup.",
        color: "green",
        visible: true,
      });
      const onClick = () => {};

      return (
        <Popup
          popup={popup}
          setPopup={setPopup}
          text="confirm"
          onClick={onClick}
        />
      );
    };

    cy.mount(<Parent />);

    // Verify that the popup is visible
    cy.get('[data-cy="popup"]').should("be.visible");

    // Verify the content inside the popup
    cy.contains("Sample Popup").should("be.visible");
    cy.contains("This is a test popup.").should("be.visible");
  });

  it("closes the popup when the close button is clicked", () => {
    const Parent = () => {
      const [popup, setPopup] = useState({
        title: "Sample Popup",
        text: "This is a test popup.",
        color: "green",
        visible: true,
      });

      const onClick = () => {};

      return (
        <Popup
          popup={popup}
          setPopup={setPopup}
          text="confirm"
          onClick={onClick}
        />
      );
    };

    cy.mount(<Parent />);
    // Ensure the popup is initially visible
    cy.get('[data-cy="popup"]').should("be.visible");

    // Click the cancel button
    cy.get('[data-cy="cancel-button"]').click();

    // Assert that the popup is no longer visible
    cy.get('[data-cy="popup"]').should("not.exist");

    cy.mount(<Parent />);
    cy.get('[data-cy="confirm-button"]').click();
    cy.get('[data-cy="popup"]').should("not.exist");
  });
});
