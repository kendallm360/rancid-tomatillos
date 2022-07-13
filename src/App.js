import React, { Component } from "react";
import "./App.css";
import AllMovies from "./components/AllMovies";
import NavBar from "./components/NavBar";
import MovieDetail from "./components/MovieDetail";
import { Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
      isClicked: false,
      singleMovie: {},
      movieVideos: [],
      isError: false,
      errorMessage: "",
    };
  }

  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => {
          return { ...prevState, movieList: data.movies };
        });
      })
      .catch((error) => {
        console.log(`${error}`);
        this.setState((prevState) => {
          return { ...prevState, isError: true, errorMessage: error };
        });
      });
  };

  handleClick = (event) => {
    fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${event.currentTarget.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => {
          return { ...prevState, isClicked: true, singleMovie: data.movie };
        });
      });

    fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${event.currentTarget.id}/videos`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => {
          return { ...prevState, movieVideos: data.videos };
        });
      });
  };

  displayHome = () => {
    this.setState((prevState) => {
      return { ...prevState, isClicked: false };
    });
  };

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <NavBar
            isClicked={this.state.isClicked}
            displayHome={this.displayHome}
          />
        </header>
        <aside>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <AllMovies
                  movies={this.state.movieList}
                  handleClick={this.handleClick}
                />
              );
            }}
          />
          <Route
            exact
            path="/movie-:id"
            render={({ match }) => {
              return <MovieDetail id={match.params.id} />;
            }}
          />
          {this.state.isError && <h2>{`${this.state.errorMessage}`}</h2>}
        </aside>
      </main>
    );
  }
}

export default App;
