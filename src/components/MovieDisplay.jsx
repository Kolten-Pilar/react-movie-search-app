import React from "react";

function MovieDisplay({ movie }) {
  // function to return loaded JSX
  const loaded = () => {
    return (
      <>
        <div>
          <h1>{movie.Title}</h1>
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
