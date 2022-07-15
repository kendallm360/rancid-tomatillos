/* eslint-disable no-undef */
describe("All Movies", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should throw an error message when a 500 error is returned", () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 500,
    });
    cy.get("h2").contains("Error: 500 Internal Server Error");
  });
});
