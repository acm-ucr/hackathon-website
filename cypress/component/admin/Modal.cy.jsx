import Modal from "@/components/admin/dashboards/dashboard/Modal";
import { useState } from "react";
import mockevents from "../../fixtures/events.json";

describe("Modal", () => {
  it("Dashboard-Modal", () => {
    const Parent = () => {
      const data = {
        title: "Sample Modal",
        src: "https://via.placeholder.com/150",
      };
      const setModal = useState(true);

      return <Modal data={data} setModal={setModal} />;
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="modal"]').should(
      "be.visible",
      "have.class",
      "absolute",
      "rounded-xl"
    );
    cy.get('[data-cy="modal-bar"]').should(
      "have.class",
      "flex",
      "justify-between",
      "items-center",
      "p-3",
      "rounded-t-xl",
      "bg-hackathon-green-300"
    );
    cy.get('[data-cy="modal-close"]').should(
      "have.class",
      "hover:cursor-pointer",
      "text-white",
      "hover:!text-red-500"
    );
    cy.get('[data-cy="modal-image"]').should(
      "have.attr",
      "src",
      "https://via.placeholder.com/150"
    );
    cy.get('[data-cy="image-border"]').should(
      "have.class",
      "rounded-b-xl",
      "border-hackathon-darkgray",
      "bg-hackathon-page",
      "justify-center"
    );
  });

  it("Close Modal", () => {
    const Parent = () => {
      const data = {
        title: "Sample Modal",
        src: "https://via.placeholder.com/150",
      };
      const setEvent = useState(mockevents.events[0]);

      return <Modal data={data} setModal={setEvent} />;
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="modal-close"]').click();
    cy.get('[data-cy="modal"]');
  });
});
