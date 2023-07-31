import React from "react";
import styled from "styled-components";
import "./index.css";

const myDiv = {};

function MovieDisplay({ movie }) {
  // function to return loaded JSX
  const loaded = () => {
    return (
      <div className="contents">
        <div className="leftSide">
          <h1>{movie.Title}</h1>
          <img className="movie" src={movie.Poster} alt={movie.Title} />
          <h2>{movie.Released}</h2>
          <h2>Plot: {movie.Plot}</h2>
          <h2>Genre: {movie.Genre}</h2>
          <h2>Rated: {movie.Rated}</h2>
        </div>
      </div>
    );
  };
  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };
  return movie ? loaded() : loading();
}

export default MovieDisplay;
