import React from "react";
import "./AllMovies.css";
import MovieCard from "./MovieCard";

const AllMovies = ({ movies }) => {
  let allMovies = movies.map((movie) => {
    return (
      <MovieCard
        title={movie.title}
        poster={movie.poster_path}
        key={movie.id}
      />
    );
  });
  return <div className="all-movies">{allMovies}</div>;
};

export default AllMovies;
