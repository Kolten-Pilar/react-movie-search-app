import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3rem;
  color: red;
`

function MovieDisplay({ movie }) {
  // function to return loaded JSX
  const loaded = () => {
    return (
      <>
        <div>
          <Title>{movie.Title}</Title>
          <h2>Genre: {movie.Genre}</h2>
          <h2>Rated: {movie.Rated}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <h2>Plot: {movie.Plot}</h2>
          <h2>{movie.Released}</h2>
        </div>
      </>
    );
  };
  const loading = () => {
    return <h1>No Movie to Display</h1>;
  }
  return movie ? loaded() : loading();
}

export default MovieDisplay;
