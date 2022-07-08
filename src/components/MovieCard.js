import React from "react";
import "./MovieCard.css";

const MovieCard = ({ title, poster }) => {
  return (
    <div className="movies">
      <h1>{title}</h1>
      <img src={poster} alt="Picture of the movies official poster" />
    </div>
  );
};

export default MovieCard;
