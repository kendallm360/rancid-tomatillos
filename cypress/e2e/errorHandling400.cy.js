/* eslint-disable no-undef */
describe("All Movies", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should throw an error message when a 400 error is returned", () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 400,
    });
    cy.get("h2").contains("Error: 400 Bad Request");
  });
});
