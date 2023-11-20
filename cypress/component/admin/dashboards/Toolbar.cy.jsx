import { useState } from "react";
import Toolbar from "@/components/dynamic/admin/dashboards/Toolbar";
import response from "../../../fixtures/admins.json";
import committeeResponse from "../../../fixtures/committees.json";
import { TAGS } from "src/data/dynamic/admin/Admins.js";
import { FILTERS } from "src/data/dynamic/admin/Admins.js";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const adminData = response.items;
const committeeData = committeeResponse.items;

const createRouter = (params) => ({
  back: cy.spy().as("back"),
  forward: cy.spy().as("forward"),
  prefetch: cy.stub().as("prefetch").resolves(),
  push: cy.spy().as("push"),
  replace: cy.spy().as("replace"),
  refresh: cy.spy().as("refresh"),
  ...params,
});

const MockNextRouter = ({ children, ...props }) => {
  const router = createRouter(props);

  return (
    <AppRouterContext.Provider value={router}>
      {children}
    </AppRouterContext.Provider>
  );
};

describe("Toolbar", () => {
  it("Default", () => {
    const admins = adminData;
    const setAdmins = cy.stub();

    const Parent = () => {
      const [input, setInput] = useState({
        input: "",
      });

      return (
        <Toolbar
          input={input}
          setInput={setInput}
          tags={TAGS}
          setObjects={setAdmins}
          objects={admins}
          filters={FILTERS}
          page="admins"
        />
      );
    };
    cy.intercept("GET", `/api/admins`, {
      fixture: `admins.json`,
    }).as("GET");
    cy.intercept("PUT", `/api/admins`, { message: "OK", status: 200 }).as(
      "GET"
    );
    cy.mount(
      <MockNextRouter>
        <Parent />
      </MockNextRouter>
    );

    cy.get('[data-cy="checkbox-bg"]').should(
      "have.class",
      "bg-hackathon-gray-100",
      expect(admins.every((admin) => admin.selected === false)).to.be.true
    );
  });

  it("Select and Delete all", () => {
    let admins = adminData;
    const setAdmins = (e) => {
      admins = e;
    };

    const Parent = () => {
      const [input, setInput] = useState({
        input: "",
      });

      return (
        <Toolbar
          input={input}
          setInput={setInput}
          tags={TAGS}
          setObjects={setAdmins}
          objects={admins}
          filters={FILTERS}
          page="admins"
        />
      );
    };
    cy.intercept("GET", `/api/admins`, {
      fixture: `admins.json`,
    }).as("GET");
    cy.intercept("PUT", `/api/admins`, { message: "OK", status: 200 }).as(
      "GET"
    );
    cy.mount(
      <MockNextRouter>
        <Parent />
      </MockNextRouter>
    );

    cy.get('[data-cy="delete"]')
      .click()
      .then(
        () =>
          expect(admins.every((admin) => admin.selected === false)).to.be.true
      );
    cy.get('[data-cy="checkbox-bg"]')
      .click()
      .should("have.class", "bg-hackathon-blue-100");
    cy.get('[data-cy="delete"]').click();
    cy.get('[data-cy="confirm-button"]')
      .click()
      .then(() => expect(admins).to.be.empty);
  });

  it("Reject all", () => {
    let admins = adminData;
    const setAdmins = (e) => {
      admins = e;
    };

    const Parent = () => {
      const [input, setInput] = useState({
        input: "",
      });

      return (
        <Toolbar
          input={input}
          setInput={setInput}
          tags={TAGS}
          setObjects={setAdmins}
          objects={admins}
          filters={FILTERS}
          page="admins"
        />
      );
    };
    cy.intercept("GET", `/api/admins`, {
      fixture: `admins.json`,
    }).as("GET");
    cy.intercept("PUT", `/api/admins`, { message: "OK", status: 200 }).as(
      "GET"
    );
    cy.mount(
      <MockNextRouter>
        <Parent />
      </MockNextRouter>
    );
    cy.get('[data-cy="checkbox-bg"]')
      .click()
      .should("have.class", "bg-hackathon-blue-100");

    cy.get('[data-cy="reject-tag"]')
      .click()
      .then(
        () => expect(admins.every((admin) => admin.status === -1)).to.be.true
      );
  });

  it("Accept all", () => {
    let committee = committeeData;
    const setCommittee = (e) => {
      committee = e;
    };

    const Parent = () => {
      const [input, setInput] = useState({
        input: "",
      });

      return (
        <Toolbar
          input={input}
          setInput={setInput}
          tags={TAGS}
          setObjects={setCommittee}
          objects={committee}
          filters={FILTERS}
          page="admins"
        />
      );
    };
    cy.intercept("GET", `/api/admins`, {
      fixture: `admins.json`,
    }).as("GET");
    cy.intercept("PUT", `/api/admins`, { message: "OK", status: 200 }).as(
      "GET"
    );
    cy.mount(
      <MockNextRouter>
        <Parent />
      </MockNextRouter>
    );
    cy.get('[data-cy="checkbox-bg"]')
      .click()
      .should("have.class", "bg-hackathon-blue-100");

    cy.get('[data-cy="accept-tag"]')
      .click()
      .then(
        () =>
          expect(
            committee.every((committeeMember) => committeeMember.status === 1)
          ).to.be.true
      );
  });

  it("Input not found", () => {
    let admins = adminData;
    const setAdmins = (e) => {
      admins = e;
    };

    const Parent = () => {
      const [input, setInput] = useState({
        input: "",
      });

      return (
        <Toolbar
          input={input}
          setInput={setInput}
          tags={TAGS}
          setObjects={setAdmins}
          objects={admins}
          filters={FILTERS}
          page="admins"
        />
      );
    };
    cy.intercept("GET", `/api/admins`, {
      fixture: `admins.json`,
    }).as("GET");
    cy.intercept("PUT", `/api/admins`, { message: "OK", status: 200 }).as(
      "GET"
    );
    cy.mount(
      <MockNextRouter>
        <Parent />
      </MockNextRouter>
    );

    cy.get('[data-cy="input-input"]').type("Hello");
    cy.get('[data-cy="toolbar"]')
      .find("form")
      .submit()
      .then(
        () => expect(admins.every((admin) => admin.hidden === true)).to.be.true
      );
    cy.get('[data-cy="input-clear-input"]').click();
    cy.get('[data-cy="toolbar"]')
      .find("form")
      .submit()
      .then(
        () => expect(admins.every((admin) => admin.hidden === true)).to.be.false
      );
  });
  it("Input found", () => {
    let admins = adminData;
    const setAdmins = (e) => {
      admins = e;
    };

    const Parent = () => {
      const [input, setInput] = useState({
        input: "",
      });

      return (
        <Toolbar
          input={input}
          setInput={setInput}
          tags={TAGS}
          setObjects={setAdmins}
          objects={admins}
          filters={FILTERS}
          page="admins"
        />
      );
    };
    cy.intercept("GET", `/api/admins`, {
      fixture: `admins.json`,
    }).as("GET");
    cy.intercept("PUT", `/api/admins`, { message: "OK", status: 200 }).as(
      "GET"
    );
    cy.mount(
      <MockNextRouter>
        <Parent />
      </MockNextRouter>
    );

    cy.get('[data-cy="input-input"]').type("Dewi");
    cy.get('[data-cy="toolbar"]')
      .find("form")
      .submit()
      .then(
        () => expect(admins.every((admin) => admin.hidden === true)).to.be.false
      );

    cy.get('[data-cy="input-clear-input"]').click();
    cy.get('[data-cy="toolbar"]')
      .find("form")
      .submit()
      .then(
        () => expect(admins.every((admin) => admin.hidden === true)).to.be.false
      );
  });
});
