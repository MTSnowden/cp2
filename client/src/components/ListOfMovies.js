import React from 'react'
import {Link} from 'react-router-dom'

const ListOfMovies = (props) => {
  
    const movieDivs = props.movies.map((movie,i) => {
     
      return (
        
        <div key={i}>
          {movie.title}
         <Link to={"/movie/" + movie._id}><button>View</button> </Link>
          <button onClick={() => {props.deleteMovie(movie._id)}}>Delete</button>
        </div>);
    });
    return (   
      <div>{movieDivs}</div>
    );
  }
  
  export default ListOfMovies