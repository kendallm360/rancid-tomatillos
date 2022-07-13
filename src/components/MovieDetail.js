import React, { Component } from "react";
import "./MovieDetail.css";

class MovieDetail extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      movieVideos: [],
      isError: false,
      errorMessage: "",
    };
  }

  componentDidMount = () => {
    fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => {
          return { ...prevState, movie: data.movie };
        });
      });

    fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}/videos`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => {
          return { ...prevState, movieVideos: data.videos };
        });
      });
  };

  // let videoUrl;
  // if (videos) {
  //   videoUrl = `https://www.youtube.com/embed/${videos[0].key}`;
  // }
  render() {
    return (
      <section
        className="movie-detail"
        style={{ backgroundImage: `url(${this.state.movie.poster_path})` }}
      >
        <section className="movie-detail-wrapper">
          <div className="movie-title">
            <img
              className="movie-poster"
              src={this.state.movie.poster_path}
              alt="Official movie poster"
            />
            <br></br>
            <h1>{this.state.movie.title}</h1>
            <p>{this.state.movie.genres}</p>
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
            {/* {videos && <iframe src={videoUrl}></iframe>} */}
          </div>
          <div className="movie-details">
            <h3>Release Date</h3>
            <p>{this.state.movie.release_date}</p>
            <h3>Budget</h3>
            <p>${this.state.movie.budget}</p>
            <h3>Runtime</h3>
            <p>{this.state.movie.runtime}</p>
            <h3>Revenue</h3>
            <p>${this.state.movie.revenue}</p>
            <h3>Average Rating</h3>
            <p>⭐️ {this.state.movie.average_rating}</p>
          </div>
        </section>
      </section>
    );
  }
}

export default MovieDetail;
