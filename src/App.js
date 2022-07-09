import React, { Component } from "react";
import "./App.css";
import movieData from "./MovieData";
import AllMovies from "./components/AllMovies";
import NavBar from "./components/NavBar";
import MovieDetail from "./components/MovieDetail";
import SingleMovie from "./singleMovie";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieList: movieData.movies,
      isClicked: false,
      singleMovie: SingleMovie,
    };
  }

  handleClick = () => {
    console.log("hello");
    this.setState((prevState) => {
      return { ...prevState, isClicked: true };
    });
  };

  displayHome = () => {
    this.setState((prevState) => {
      return { ...prevState, isClicked: false };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <body>
          {this.state.isClicked && (
            <MovieDetail
              singleMovie={this.state.singleMovie}
              displayHome={this.displayHome}
            />
          )}
          {!this.state.isClicked && (
            <AllMovies
              movies={this.state.movieList}
              handleClick={this.handleClick}
            />
          )}
        </body>
      </div>
    );
  }
}

export default App;
