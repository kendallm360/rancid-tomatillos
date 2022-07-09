import React from "react";
import "./MovieCard.css";
import MovieDetail from "./MovieDetail";

const MovieCard = ({ title, poster, handleClick, id }) => {
  return (
    <div className="movies" id={id} onClick={(event) => handleClick(event)}>
      <h1>{title}</h1>
      <img src={poster} alt="Picture of the movies official poster" />
    </div>
  );
};

export default MovieCard;
