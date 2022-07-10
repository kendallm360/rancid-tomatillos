import React, { Component } from "react";
import "./App.css";
import AllMovies from "./components/AllMovies";
import NavBar from "./components/NavBar";
import MovieDetail from "./components/MovieDetail";
import SingleMovie from "./singleMovie";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
      isClicked: false,
      singleMovie: {},
      movieVideos:[],
      isError: false,
      errorMessage: "",
    };
  }

  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => response.json())
      .then((data) => {
        console.log("hey");
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
    // [event.currentTarget.id] = event.target;
    fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${event.currentTarget.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => {
          return { ...prevState, isClicked: true, singleMovie: data.movie };
        });
      });

      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${event.currentTarget.id}/videos`)
      .then((response) => response.json())
      .then(data => {
        this.setState(prevState => {
          return { ...prevState, movieVideos: data.videos}
        })
      })
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
              videos={this.state.movieVideos}
            />
          )}
          {!this.state.isClicked && (
            <AllMovies
              movies={this.state.movieList}
              handleClick={this.handleClick}
            />
          )}
          {this.state.isError && <h2>{`${this.state.errorMessage}`}</h2>}
        </body>
      </div>
    );
  }
}

export default App;
