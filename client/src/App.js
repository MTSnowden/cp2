import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Buttons from "./components/Buttons"
import Router from "./router.js"
import "bootstrap/dist/css/bootstrap.min.css";



class App extends Component {

  componentDidMount() {
    // fetchMovie();
  }
  
  render(){
    return (

      <body className='body'>
      <div id="title">
        MY AMAZING MOVIE DATABASE
      </div>

      <BrowserRouter>
        <div>
          <Buttons />
          <Router /> 
        </div>
      </BrowserRouter>
      </body>
    );
  }
}

export default App;
