/// <reference types="cypress" />

describe("search result", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/restaurant_results/32608");
    cy.log("startng test");
  });
  it("shoud have user info", () => {
    // cy.visit("http://localhost:3000/signup");
    cy.intercept("POST", "http://localhost:5000/r/react/search_result").as(
      "searchResult"
    );
    // cy.wait("@userSignup");
    cy.get("@searchResult").then((res) => {
      console.log(res);
    });
  });
});
