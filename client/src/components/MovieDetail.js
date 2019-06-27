import React from "react";


function MovieDetail(props) {
  
  const movieId = props.match.params.id;
  
  const movie = props.movies.find(m => m._id === movieId) || {};
  
  return (   
    <div>
      <h3>Title: {movie.title}</h3>
      <h4>Director: {movie.director}</h4>
      <p>Genre: {movie.genre}</p>
      <p>Year: {movie.year}</p>
    </div>
  );
}
export default MovieDetail