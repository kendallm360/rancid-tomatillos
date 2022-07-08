import React from "react";
import "./MovieCard.css";
import MovieDetail from "./MovieDetail";

const MovieCard = ({ title, poster, handleClick }) => {
  return (
    <div className="movies" onClick={() => handleClick()}>
      <h1>{title}</h1>
      <img src={poster} alt="Picture of the movies official poster" />
    </div>
  );
};

export default MovieCard;
