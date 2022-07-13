import React from "react";
import { NavLink } from "react-router-dom";
import "./AllMovies.css";
import MovieCard from "./MovieCard";

const AllMovies = ({ movies, handleClick }) => {
  let allMovies = movies.map((movie) => {
    return (
      <NavLink to={`/movie-${movie.id}`} className="Nav" key={movie.id}>
        <MovieCard
          title={movie.title}
          poster={movie.poster_path}
          key={movie.id}
          id={movie.id}
          handleClick={handleClick}
        />
      </NavLink>
    );
  });
  return (
    <div className="all-movies">
      <div className="all-movies-wrapper">{allMovies}</div>
    </div>
  );
};

export default AllMovies;
