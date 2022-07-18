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
      singleMovie: {},
      movieVideos: [],
      errorMessage: null,
    };
  }

  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => {
        if (!response.ok) {
          console.log(response);
          throw new Error(response.status + " " + response.statusText);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        this.setState((prevState) => {
          return { ...prevState, movieList: data.movies };
        });
      })
      .catch((error) => {
        console.log(`${error}`);
        this.setState((prevState) => {
          return { ...prevState, errorMessage: error };
        });
      });
  };

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <NavBar
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
                  errorHandling={this.state.errorMessage}
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
        </aside>
      </main>
    );
  }
}

export default App;
