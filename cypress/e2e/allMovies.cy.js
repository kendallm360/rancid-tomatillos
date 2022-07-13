/* eslint-disable no-undef */
describe("All Movies", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.fixture("allMovies.json").then((movies) => {
      cy.intercept(
        "GET",
        "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
        movies
      );
    });
  });

  it("Should show movie name", () => {
    cy.get("div .movies").eq(0).contains("h1", "Money Plane");
  });

  it("Should have a poster for each movie", () => {
    cy.get("img")
      .eq(1)
      .should("have.attr", "src")
      .should(
        "include",
        "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg"
      );
  });

  it("Should show three movies", () => {
    cy.get("div .movies").should("have.length", 3);
  });
});
