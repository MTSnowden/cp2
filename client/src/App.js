import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Buttons from "./components/Buttons"
import Router from "./router"


class App extends Component {

  componentDidMount() {
    this.props.fetchMovies();
  }
  
  render(){
    return (
      <div id="title">
        MOVIE DATABASE
      </div>

      <BrowserRouter>
        <div>
          <Buttons />
          <Router /> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
