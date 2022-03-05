/// <reference types="cypress" />

describe("user signin", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/signin");
  });
  it("shoud have email and password", () => {
    cy.get("div").contains("Sign in");
    cy.contains("new to GatorEats?");
    cy.contains("Email");
    cy.get("#email");
    cy.contains("Password");
    cy.contains("Forgot your password");
    cy.get("#password");
    cy.get("div").contains("Sign in");
    cy.get("div").contains("Continue with Google");
    // cy.visit("http://localhost:3000/signin");
    // cy.intercept("POST", "http://localhost:5000/react/signin", (req) => {
    //   cy.log("posted");
    // }).as("userSignin");
    // cy.wait("@userSignup").then((res) => {
    //   cy.log(res);
    // });
  });
});
