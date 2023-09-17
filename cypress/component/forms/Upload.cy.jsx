import Upload from "@/components/forms/Upload";
import { useState } from "react";

describe("Forms Upload", () => {
  it("Upload valid PDF", () => {
    const file = "sample.pdf";
    const Parent = () => {
      const USER = { resume: "" };
      const field = "resume";
      const [user, setUser] = useState(USER);
      const text = "Upload Resume";
      const maxSize = [150, "KB"];
      const types = ["pdf"];

      return (
        <Upload
          field={field}
          user={user}
          setUser={setUser}
          text={text}
          maxSize={maxSize}
          types={types}
        />
      );
    };

    cy.mount(<Parent />);

    cy.contains("Upload Resume");
    cy.get('[data-cy="upload"]').contains("Upload from my computer");
    cy.get('[data-cy="upload-input"]')
      .find("input[type=file]")
      .selectFile("cypress/fixtures/files/" + file, { force: true });
    cy.get('[data-cy="upload-success"]').should("exist");
  });

  it("Upload invalid PDF (file size)", () => {
    const file = "sample.pdf";
    const Parent = () => {
      const USER = { resume: "" };
      const field = "resume";
      const [user, setUser] = useState(USER);
      const text = "Upload Resume";
      const maxSize = [1, "KB"];
      const types = ["pdf"];

      return (
        <Upload
          field={field}
          user={user}
          setUser={setUser}
          text={text}
          maxSize={maxSize}
          types={types}
        />
      );
    };

    cy.mount(<Parent />);

    cy.contains("Upload Resume");
    cy.get('[data-cy="upload"]').contains("Upload from my computer");
    cy.get('[data-cy="upload-input"]')
      .find("input[type=file]")
      .selectFile("cypress/fixtures/files/" + file, { force: true });
    cy.get('[data-cy="upload"]')
      .find('[data-cy="upload-success"]')
      .should("not.exist");
  });

  it("Upload valid PNG", () => {
    const file = "sample.png";
    const Parent = () => {
      const USER = { photo: "" };
      const field = "photo";
      const [user, setUser] = useState(USER);
      const text = "Upload Photo";
      const maxSize = [1, "MB"];
      const types = ["png", "jpg", "jpeg"];

      return (
        <Upload
          field={field}
          user={user}
          setUser={setUser}
          text={text}
          maxSize={maxSize}
          types={types}
        />
      );
    };

    cy.mount(<Parent />);

    cy.contains("Upload Photo");
    cy.get('[data-cy="upload"]').contains("Upload from my computer");
    cy.get('[data-cy="upload-input"]')
      .find("input[type=file]")
      .selectFile("cypress/fixtures/files/" + file, { force: true });
    cy.get('[data-cy="upload-success"]').should("exist");
  });

  it("Upload invalid PNG (file size)", () => {
    const file = "sample.png";
    const Parent = () => {
      const USER = { photo: "" };
      const field = "photo";
      const [user, setUser] = useState(USER);
      const text = "Upload Photo";
      const maxSize = [1, "KB"];
      const types = ["png", "jpg", "jpeg"];

      return (
        <Upload
          field={field}
          user={user}
          setUser={setUser}
          text={text}
          maxSize={maxSize}
          types={types}
        />
      );
    };

    cy.mount(<Parent />);

    cy.contains("Upload Photo");
    cy.get('[data-cy="upload"]').contains("Upload from my computer");
    cy.get('[data-cy="upload-input"]')
      .find("input[type=file]")
      .selectFile("cypress/fixtures/files/" + file, { force: true });
    cy.get('[data-cy="upload"]')
      .find('[data-cy="upload-success"]')
      .should("not.exist");
  });

  it("Upload valid JPEG", () => {
    const file = "sample.jpeg";
    const Parent = () => {
      const USER = { photo: "" };
      const field = "photo";
      const [user, setUser] = useState(USER);
      const text = "Upload Photo";
      const maxSize = [1, "MB"];
      const types = ["png", "jpg", "jpeg"];

      return (
        <Upload
          field={field}
          user={user}
          setUser={setUser}
          text={text}
          maxSize={maxSize}
          types={types}
        />
      );
    };

    cy.mount(<Parent />);

    cy.contains("Upload Photo");
    cy.get('[data-cy="upload"]').contains("Upload from my computer");
    cy.get('[data-cy="upload-input"]')
      .find("input[type=file]")
      .selectFile("cypress/fixtures/files/" + file, { force: true });
    cy.get('[data-cy="upload-success"]').should("exist");
  });

  it("Upload invalid JPEG (file size)", () => {
    const file = "sample.jpeg";
    const Parent = () => {
      const USER = { photo: "" };
      const field = "photo";
      const [user, setUser] = useState(USER);
      const text = "Upload Photo";
      const maxSize = [1, "KB"];
      const types = ["png", "jpg", "jpeg"];

      return (
        <Upload
          field={field}
          user={user}
          setUser={setUser}
          text={text}
          maxSize={maxSize}
          types={types}
        />
      );
    };

    cy.mount(<Parent />);

    cy.contains("Upload Photo");
    cy.get('[data-cy="upload"]').contains("Upload from my computer");
    cy.get('[data-cy="upload-input"]')
      .find("input[type=file]")
      .selectFile("cypress/fixtures/files/" + file, { force: true });
    cy.get('[data-cy="upload"]')
      .find('[data-cy="upload-success"]')
      .should("not.exist");
  });

  it("Remove file", () => {
    const file = "sample.jpeg";
    const Parent = () => {
      const USER = { photo: "" };
      const field = "photo";
      const [user, setUser] = useState(USER);
      const text = "Upload Photo";
      const maxSize = [1, "MB"];
      const types = ["png", "jpg", "jpeg"];

      return (
        <Upload
          field={field}
          user={user}
          setUser={setUser}
          text={text}
          maxSize={maxSize}
          types={types}
        />
      );
    };

    cy.mount(<Parent />);

    cy.contains("Upload Photo");
    cy.get('[data-cy="upload"]').contains("Upload from my computer");
    cy.get('[data-cy="upload-input"]')
      .find("input[type=file]")
      .selectFile("cypress/fixtures/files/" + file, { force: true });
    cy.get('[data-cy="upload-success"]').should("exist");
    cy.get('[data-cy="upload-success"]')
      .find('[data-cy="upload-cancel"]')
      .click();
    cy.get('[data-cy="upload"]')
      .find('[data-cy="upload-success"]')
      .should("not.exist");
  });
});
