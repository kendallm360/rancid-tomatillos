import React from "react";

const MovieDetail = ({ singleMovie, displayHome }) => {
  return (
    <div>
      <button onClick={displayHome}>Home</button>
      <h1>{singleMovie.title}</h1>
      <img
        className="fake-movie"
        src={singleMovie.poster_path}
        alt="Official movie poster"
      />
      <p>{singleMovie.release_date}</p>
      <p>{singleMovie.overview}</p>
      <p>{singleMovie.average_rating}</p>
      <p>{singleMovie.genres}</p>
      <p>{singleMovie.budget}</p>
      <p>{singleMovie.revenue}</p>
      <p>{singleMovie.runtime}</p>
      <p>{singleMovie.tagline}</p>
    </div>
  );
};

export default MovieDetail;
