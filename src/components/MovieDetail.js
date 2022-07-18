import React, { Component } from "react";
import "./MovieDetail.css";
import VideoPlayer from "./VideoPlayer";

class MovieDetail extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      movieVideos: null,
      errorMessage: null,
    };
  }

  componentDidMount = () => {
    fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`
    )
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
          return {
            ...prevState,
            movie: data.movie,
            genre: data.movie.genres.map((genre) => (
              <button className="genre-tag">{genre}</button>
            )),
          };
        });
      })
      .catch((error) => {
        console.log(`${error}`);
        this.setState((prevState) => {
          return { ...prevState, errorMessage: error };
        });
      });

    fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}/videos`
    )
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
          return { ...prevState, movieVideos: data.videos };
        });
      })
      .catch((error) => {
        console.log(`${error}`);
        this.setState((prevState) => {
          return { ...prevState, errorMessage: error };
        });
      });
  };

  displayBudget = () => {
    if (this.state.movie.budget > 0) {
      return (
        <div>
          <h3>Budget</h3>
          <p>${this.state.movie.budget}</p>
        </div>
      );
    }
  };

  displayRevenue = () => {
    if (this.state.movie.revenue > 0) {
      return (
        <div>
          <h3>Revenue</h3>
          <p>${this.state.movie.revenue}</p>
        </div>
      );
    }
  };

  render() {
    return (
      <section
        className="movie-detail"
        style={{ backgroundImage: `url(${this.state.movie.backdrop_path})` }}
      >
        <section className="movie-detail-wrapper">
          {this.state.errorMessage && <h2>{`${this.state.errorMessage}`}</h2>}
          {!this.state.errorMessage && (
            <>
              <div className="movie-title">
                <img
                  className="movie-poster"
                  src={this.state.movie.poster_path}
                  alt="Official movie poster"
                />
                <br></br>
                <h1>{this.state.movie.title}</h1>
                <p className="genres">{this.state.genre}</p>
              </div>
              <div className="movie-description">
                {this.state.movie.tagline !== "" && (
                  <div>
                    <h3>Tagline</h3>
                    <p>{this.state.movie.tagline}</p>
                    <br></br>
                  </div>
                )}
                <h3>Description</h3>
                <p>{this.state.movie.overview}</p>
                <div className="trailer-video">
                  <VideoPlayer urls={this.state.movieVideos} />
                </div>
              </div>
              <div className="movie-details">
                <h3>Release Date</h3>
                <p>{this.state.movie.release_date}</p>
                {this.displayBudget()}
                <h3>Runtime</h3>
                <p>{this.state.movie.runtime} minutes</p>
                {this.displayRevenue()}
                <h3>Average Rating</h3>
                <p>
                  ⭐️ {Math.round(this.state.movie.average_rating)} out of 10
                </p>
              </div>
            </>
          )}
        </section>
      </section>
    );
  }
}

export default MovieDetail;
