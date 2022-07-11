import React from "react";
import "./MovieDetail.css";

const MovieDetail = ({ singleMovie, displayHome, videos }) => {
  const videoUrl = `https://www.youtube.com/embed/${videos[0].key}`;
  // console.log(videos)
  return (
    <section
      className="movie-detail"
      style={{ backgroundImage: `url(${singleMovie.poster_path})` }}
    >
      <section className="movie-detail-wrapper">
        <div className="movie-title">
          <img
            className="movie-poster"
            src={singleMovie.poster_path}
            alt="Official movie poster"
          />
          <br></br>
          <h1>{singleMovie.title}</h1>
          <p>{singleMovie.genres}</p>
        </div>
        <div className="movie-description">
          {singleMovie.tagline != "" && (
            <div>
              <h3>Tagline</h3>
              <p>{singleMovie.tagline}</p>
              <br></br>
            </div>
          )}

          <h3>Description</h3>
          <p>{singleMovie.overview}</p>
          <iframe src={videoUrl}></iframe>
        </div>
        <div className="movie-details">
          <h3>Release Date</h3>
          <p>{singleMovie.release_date}</p>
          <h3>Budget</h3>
          <p>${singleMovie.budget}</p>
          <h3>Runtime</h3>
          <p>{singleMovie.runtime}</p>
          <h3>Revenue</h3>
          <p>${singleMovie.revenue}</p>
          <h3>Average Rating</h3>
          <p>⭐️ {singleMovie.average_rating}</p>
        </div>
      </section>
    </section>
  );
};

export default MovieDetail;
