import React from 'react';
import {Route,Switch} from "react-router-dom";
import CreateMovieContainer from "./containers/CreateMovieContainer"
import MovieContainer from "./containers/MovieContainer"
import MovieDetailContainer from "./containers/MovieDetailContainer"

const Router = () => {
    return (
        <Switch>
          <Route path="/movies" component={MovieContainer} />
          <Route path="/create" component={CreateMovieContainer} />
          <Route path="/movie/:id" component={MovieDetailContainer} />
        </Switch>
    )
}

export default Router;