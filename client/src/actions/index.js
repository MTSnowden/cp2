export function fetchMovies() {
    return function (dispatch) {
        
        fetch("http://localhost:3002/movies")
        .then( (response) => {
          return response.json();
        }).then((movies) => {
          dispatch(moviesFetched(movies));
        });
  
    };
  }
  
  export function moviesFetched(movies) {
    return {
      type: "MOVIES_FETCHED",
      value: movies
    };
  }

  export function createMovie(movie) {
    return function (dispatch) {
          
      fetch("http://localhost:3002/movies ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(movie)
      }
   )
          .then( (response) => {
            return response.json();
          }).then(() => {
            dispatch(fetchMovies());
          });
    
    };
  }

  export function deleteMovie(id) {
    return function (dispatch) {
          
      fetch(`http://localhost:3002/movies/${id}`, {
        method: "DELETE"
      }
   )
          .then( (response) => {
            return response.json();
          }).then(() => {
            dispatch(fetchMovies());
          });
    
    };
  
  }
    