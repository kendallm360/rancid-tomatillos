import React, { Component } from "react";
import "./App.css";
import movieData from "./MovieData";
import AllMovies from "./components/AllMovies";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieList: movieData.movies,
    };
  }
  render() {
    // console.log(this.state.movieList);
    return (
      <div className="App">
        <header className="App-header">
          <AllMovies movies={this.state.movieList} />
        </header>
      </div>
    );
  }
}

export default App;
