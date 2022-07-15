/* eslint-disable no-undef */
describe("Movie Details", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.fixture("allMovies.json").then((movies) => {
      cy.intercept(
        "GET",
        "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
        movies
      );

      cy.fixture("movieMoneyPlane.json").then((movie) => {
        cy.intercept(
          "GET",
          "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919",
          movie
        );
      });
    });

    cy.fixture("movieRogue.json").then((movie) => {
      cy.intercept(
        "GET",
        "https://rancid-tomatillos.herokuapp.com/api/v2/movies/718444",
        movie
      );
    });
  });

  it("Should display a div with a movie name, poster and genres", () => {
    cy.get("div .movies").first().click();
    cy.wait(500);

    cy.get(".movie-title").within(() => {
      cy.get("img")
        .should("have.attr", "src")
        .should(
          "include",
          "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"
        );

      cy.get("h1").contains("Money Plane");

      cy.get("p").contains("Action");
    });
  });

  it("Should display a div with a movie description and no tagline", () => {
    cy.get("div .movies").first().click();
    cy.wait(500);

    cy.get(".movie-description").within(() => {
      cy.get("h3").contains("Description");
      cy.get("p").contains(
        `A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.`
      );
    });
  });

  it("should display a dive with reviews, release date, budget, runtime, revenue, and average rating", () => {
    cy.get("div .movies").first().click();
    cy.wait(500);

    cy.get(".movie-details").within(() => {
      cy.get("h3").eq(0).contains("Release Date");
      cy.get("p").eq(0).contains("2020-09-29");

      cy.get("h3").eq(1).contains("Budget");
      cy.get("p").eq(1).contains("$0");

      cy.get("h3").eq(2).contains("Runtime");
      cy.get("p").eq(2).contains("82");

      cy.get("h3").eq(3).contains("Revenue");
      cy.get("p").eq(3).contains("$too much");

      cy.get("h3").eq(4).contains("Average Rating");
      cy.get("p").eq(4).contains("6.875");
    });
  });

  it("should display a tagline if a movie has one", () => {
    cy.get("div .movies").eq(2).click();
    cy.wait(500);

    cy.get(".movie-description").within(() => {
      cy.get("h3").should("have.length", 2);
      cy.get("p").should("have.length", 2);

      cy.get("h3").eq(0).contains("Tagline");
      cy.get("p").eq(0).contains(`When the hunter becomes the prey.`);
    });
  });
});
