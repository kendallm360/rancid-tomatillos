import React from "react";
import { NavLink } from "react-router-dom";
import "./AllMovies.css";
import MovieCard from "./MovieCard";

const AllMovies = ({ errorHandling, movies, handleClick }) => {
  let allMovies = movies
    .filter((movie) => movie.id !== 737173)
    .filter((movie) => movie.id !== 737799)
    .filter((movie) => movie.id !== 479259)
    .filter((movie) => movie.id !== 619592)
    .map((movie) => {
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
      <div className="all-movies-wrapper">
        {errorHandling && <div className="error">{`${errorHandling}`}</div>}
        {allMovies}
      </div>
    </div>
  );
};

export default AllMovies;
