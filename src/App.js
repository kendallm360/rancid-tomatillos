import React, { Component } from "react";
import "./App.css";
import movieData from "./MovieData";
import AllMovies from "./components/AllMovies";
import NavBar from "./components/NavBar";
import MovieDetail from "./components/MovieDetail";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieList: movieData.movies,
    };
  }

  handleClick = () => {
    console.log("hey");
    return <MovieDetail />;
  };

  render() {
    // console.log(this.state.movieList);
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <body>
          <AllMovies
            movies={this.state.movieList}
            handleClick={this.handleClick}
          />
          {/* <MovieDetail /> */}
        </body>
      </div>
    );
  }
}

export default App;
