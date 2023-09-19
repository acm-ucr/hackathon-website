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
    const text = "close";

    cy.mount(
      <Popup popup={popup} onClick={onClick} setPopup={setPopup} text={text} />
    );

    // Use Cypress mount to render the Popup component
    // cy.mount(<Popup popup={popupContent} />);

    // Verify that the popup is visible
    cy.get('[data-cy="popup"]').should("be.visible");

    // Verify the content inside the popup
    cy.contains("Sample Popup").should("be.visible");
    cy.contains("This is a test popup.").should("be.visible");
  });

  it("closes the popup when the close button is clicked", () => {
    const popup = {
      title: "Sample Popup",
      text: "This is a test popup.",
      color: "green",
      visible: true,
    };

    const onClick = cy.stub();
    const setPopup = cy.stub();
    const text = "close";

    cy.mount(
      <Popup popup={popup} onClick={onClick} setPopup={setPopup} text={text} />
    );

    // cy.mount(<Popup popup={popupContent} />);

    cy.get('[data-cy="close-button"]').click();

    // Verify that the popup is no longer visible
    cy.get('[data-cy="popup"]').should("not.exist");
  });
  // Add other test cases for Popup component as needed
});

// describe("Popup", () => {
//   it("renders with the correct title and text", () => {
//     const popup = {
//       title: "Sample Popup",
//       text: "This is a sample popup message.",
//       visible: true,
//       color: "green",
//     };
//     const onClick = cy.stub();
//     const setPopup = cy.stub();
//     const text = "Confirm";

//     cy.mount(
//       <Popup
//         popup={popup}
//         onClick={onClick}
//         setPopup={setPopup}
//         text={text}
//       />
//     );

//     cy.get('[data-cy="popup"]').should("exist");
//     cy.get("p").should("contain", popup.title);
//     cy.get("p").should("contain", popup.text);
//   });

//   it("closes the popup when the close icon is clicked", () => {
//     const popup = {
//       title: "Sample Popup",
//       text: "This is a sample popup message.",
//       visible: true,
//       color: "blue", // Replace with your desired color
//     };
//     const onClick = cy.stub();
//     const setPopup = cy.stub();
//     const text = "Confirm";

//     mount(
//       <Popup
//         popup={popup}
//         onClick={onClick}
//         setPopup={setPopup}
//         text={text}
//       />
//     );

//     cy.get('[data-cy="popup"]').should("exist");
//     cy.get("p").should("contain", popup.title);

//     // Click the close icon
//     cy.get("svg").click();

//     // Ensure that setPopup was called with the correct arguments to close the popup
//     cy.wrap(setPopup).should("be.calledWith", { ...popup, visible: false });
//   });

//   it("performs the action and closes the popup when the action button is clicked", () => {
//     const popup = {
//       title: "Sample Popup",
//       text: "This is a sample popup message.",
//       visible: true,
//       color: "blue", // Replace with your desired color
//     };
//     const onClick = cy.stub();
//     const setPopup = cy.stub();
//     const text = "Confirm";

//     cy.mount(
//       <Popup
//         popup={popup}
//         onClick={onClick}
//         setPopup={setPopup}
//         text={text}
//       />
//     );

//     cy.get('[data-cy="popup"]').should("exist");
//     cy.get("p").should("contain", popup.title);

//     // Click the action button
//     cy.get('[data-cy="confirm-button"]').click();

//     // Ensure that onClick and setPopup were called with the correct arguments
//     cy.wrap(onClick).should("be.called");
//     cy.wrap(setPopup).should("be.calledWith", { ...popup, visible: false });
//   });
// });
