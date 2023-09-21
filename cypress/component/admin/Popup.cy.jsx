import Popup from "@/components/admin/Popup";
import React from "react";
// import { useState } from "react";

describe("Popup Component", () => {
  it("opens and displays the popup", () => {
    const popup = {
      title: "Sample Popup",
      text: "This is a test popup.",
      color: "green",
      visible: true,
    };

    const onClick = cy.stub();
    const setPopup = cy.stub();
    const text = "confirm";

    cy.mount(
      <Popup popup={popup} onClick={onClick} setPopup={setPopup} text={text} />
    );

    // Verify that the popup is visible
    cy.get('[data-cy="popup"]').should("be.visible");

    // Verify the content inside the popup
    cy.contains("Sample Popup").should("be.visible");
    cy.contains("This is a test popup.").should("be.visible");
  }); // it 1

  it("closes the popup when the close button is clicked", () => {
    const popup = {
      title: "Sample Popup",
      text: "This is a test popup.",
      color: "green",
      visible: true,
    };

    const onClick = cy.stub();
    const setPopup = cy.stub();
    const text = "confirm";

    cy.mount(
      <Popup popup={popup} onClick={onClick} setPopup={setPopup} text={text} />
    );

    cy.get('[data-cy="confirm-button"]')
      .click()
      .then(() => expect(onClick).to.be.calledOnce)
      .then(() => expect(setPopup).to.be.calledWithMatch({ visible: false }));
  }); // it 2
}); // describe
