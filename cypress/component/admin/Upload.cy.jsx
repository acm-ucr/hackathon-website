import Upload from "@/components/admin/services/Upload";
import { useState } from "react";

describe("Upload", () => {
  it("Upload valid mutliple files", () => {
    const files = ["sample.pdf", "sample.jpeg", "sample.jpg", "sample.png"];
    const Parent = () => {
      const [email, setEmail] = useState({
        sendto: [],
        subject: "Rosehack Application Status Update",
        body: "Hello! \n\nWe've got good news! Your application to participate in Rose Hack 2024 has been accepted!\n\nStay tuned for more updates from us via email.\n\nIn the meantime, join our discord, the main platform that we will use on the day of the hackathon. Please don't share this invite with anyone else who wasn't approved. Thank you!\n\nThe Rose Hack Team",
        files: [],
      });

      return (
        <Upload
          setObjects={setEmail}
          objects={email}
          size={[1, "MB"]}
          types={["pdf", "jpg", "jpeg", "png"]}
        />
      );
    };

    cy.mount(<Parent />);
    cy.contains("attach");
    files.map((file) => {
      cy.get('[data-cy="upload-input"]')
        .find("input[type=file]")
        .selectFile("cypress/fixtures/files/" + file, { force: true });
    });

    files.map((file) => {
      cy.get(`[data-cy="${file}"]`).should("exist");
    });
  });

  it("Upload invalid exceeding files", () => {
    const files = [
      "sample.pdf",
      "sample.jpeg",
      "sample.jpg",
      "sample.png",
      "extra.jpeg",
      "extra.pdf",
    ];
    const Parent = () => {
      const [email, setEmail] = useState({
        sendto: [],
        subject: "Rosehack Application Status Update",
        body: "Hello! \n\nWe've got good news! Your application to participate in Rose Hack 2024 has been accepted!\n\nStay tuned for more updates from us via email.\n\nIn the meantime, join our discord, the main platform that we will use on the day of the hackathon. Please don't share this invite with anyone else who wasn't approved. Thank you!\n\nThe Rose Hack Team",
        files: [],
      });

      return (
        <Upload
          setObjects={setEmail}
          objects={email}
          size={[1, "MB"]}
          types={["pdf", "jpg", "jpeg", "png"]}
        />
      );
    };

    cy.mount(<Parent />);
    cy.contains("attach");
    files.map((file) => {
      cy.get('[data-cy="upload-input"]')
        .find("input[type=file]")
        .selectFile("cypress/fixtures/files/" + file, { force: true });
    });

    files.map((file) => {
      cy.get(`[data-cy="${file}"]`).should(
        file === "extra.pdf" ? "not.exist" : "exist"
      );
    });
  });

  it("Upload invalid file size", () => {
    const file = "sample.png";
    const Parent = () => {
      const [email, setEmail] = useState({
        sendto: [],
        subject: "Rosehack Application Status Update",
        body: "Hello! \n\nWe've got good news! Your application to participate in Rose Hack 2024 has been accepted!\n\nStay tuned for more updates from us via email.\n\nIn the meantime, join our discord, the main platform that we will use on the day of the hackathon. Please don't share this invite with anyone else who wasn't approved. Thank you!\n\nThe Rose Hack Team",
        files: [],
      });

      return (
        <Upload
          setObjects={setEmail}
          objects={email}
          size={[1, "KB"]}
          types={["pdf", "jpg", "jpeg", "png"]}
        />
      );
    };

    cy.mount(<Parent />);
    cy.contains("attach");
    cy.get('[data-cy="upload-input"]')
      .find("input[type=file]")
      .selectFile("cypress/fixtures/files/" + file, { force: true });
    cy.get(`[data-cy="${file}"]`).should("not.exist");
  });

  it("Upload invalid same file", () => {
    const file = "sample.png";
    const Parent = () => {
      const [email, setEmail] = useState({
        sendto: [],
        subject: "Rosehack Application Status Update",
        body: "Hello! \n\nWe've got good news! Your application to participate in Rose Hack 2024 has been accepted!\n\nStay tuned for more updates from us via email.\n\nIn the meantime, join our discord, the main platform that we will use on the day of the hackathon. Please don't share this invite with anyone else who wasn't approved. Thank you!\n\nThe Rose Hack Team",
        files: [],
      });

      return (
        <Upload
          setObjects={setEmail}
          objects={email}
          size={[1, "MB"]}
          types={["pdf", "jpg", "jpeg", "png"]}
        />
      );
    };

    cy.mount(<Parent />);
    cy.contains("attach");
    cy.get('[data-cy="upload-input"]')
      .find("input[type=file]")
      .selectFile("cypress/fixtures/files/" + file, { force: true });
    cy.get('[data-cy="upload-input"]')
      .find("input[type=file]")
      .selectFile("cypress/fixtures/files/" + file, { force: true });
    cy.get(`[data-cy="${file}"]`).should("exist");
    cy.get('[data-cy="upload-list"]').should("have.length", 1);
  });

  it("Remove a file", () => {
    const files = ["sample.pdf", "sample.jpeg", "sample.jpg", "sample.png"];
    const Parent = () => {
      const [email, setEmail] = useState({
        sendto: [],
        subject: "Rosehack Application Status Update",
        body: "Hello! \n\nWe've got good news! Your application to participate in Rose Hack 2024 has been accepted!\n\nStay tuned for more updates from us via email.\n\nIn the meantime, join our discord, the main platform that we will use on the day of the hackathon. Please don't share this invite with anyone else who wasn't approved. Thank you!\n\nThe Rose Hack Team",
        files: [],
      });

      return (
        <Upload
          setObjects={setEmail}
          objects={email}
          size={[1, "MB"]}
          types={["pdf", "jpg", "jpeg", "png"]}
        />
      );
    };

    cy.mount(<Parent />);
    cy.contains("attach");
    files.map((file) => {
      cy.get('[data-cy="upload-input"]')
        .find("input[type=file]")
        .selectFile("cypress/fixtures/files/" + file, { force: true });
    });

    files.map((file) => {
      cy.get(`[data-cy="${file}"]`).should("exist");
    });

    cy.get(`[data-cy="sample.pdf-delete"]`).click();

    files.map((file) => {
      cy.get(`[data-cy="${file}"]`).should(
        file === "sample.pdf" ? "not.exist" : "exist"
      );
    });
  });
});
