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
      `https://rancid-tomatillos.herokuapp.com/api/v2/vies/${this.props.id}`
    )
      .then((response) => {
        if (!response.ok) {
          console.log(response);
          throw new Error(response.status + " " + response.statusText);
        } else {
          return response.json();
        }
      })
      // .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => {
          return { ...prevState, movie: data.movie };
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
      // .then((response) => response.json())
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
                <VideoPlayer urls={this.state.movieVideos} />
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
            </>
          )}
        </section>
      </section>
    );
  }
}

export default MovieDetail;
