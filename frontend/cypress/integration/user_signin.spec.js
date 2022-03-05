/// <reference types="cypress" />

describe("user signin", () => {
  // beforeEach(() => {
  //   cy.visit("http://localhost:3000/signin");
  // });
  it("shoud have email and password", () => {
    cy.visit("http://localhost:3000/signin");
    cy.intercept("POST", "http://localhost:5000/react/signin", (req) => {
      cy.log("posted");
    }).as("userSignin");
    // cy.wait("@userSignup").then((res) => {
    //   cy.log(res);
    // });
  });
});
