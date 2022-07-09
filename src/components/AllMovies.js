import React from "react";
import "./AllMovies.css";
import MovieCard from "./MovieCard";

const AllMovies = ({ movies, handleClick }) => {
  let allMovies = movies.map((movie) => {
    return (
      <MovieCard
        title={movie.title}
        poster={movie.poster_path}
        key={movie.id}
        id={movie.id}
        handleClick={handleClick}
      />
    );
  });
  return <div className="all-movies">{allMovies}</div>;
};

export default AllMovies;
