/// <reference types="cypress" />

describe("user signup", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/signup");
    cy.log("startng test");
  });
  it("shoud have user info", () => {
    // cy.visit("http://localhost:3000/signup");
    cy.intercept("POST", "http://localhost:5000/react/signup").as("userSignup");
    // cy.wait("@userSignup");
    cy.get("@userSignup").then((res) => {
      console.log(res);
      cy.log(res);
    });
  });
});
