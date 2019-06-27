import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Buttons from "./components/Buttons"
import Router from "./router.js"


class App extends Component {

  componentDidMount() {
    fetchMovie();
  }
  
  render(){
    return (

      <div>
      <div id="title">
        MOVIE DATABASE
      </div>

      <BrowserRouter>
        <div>
          <Buttons />
          <Router /> 
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
