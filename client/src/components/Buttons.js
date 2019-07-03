import React from 'react';
import {Link} from "react-router-dom";


function Buttons(props) {
  
    return (
        <div>
            <p>
            <Link to="/"><button type="button" className="btn btn-info">Home</button></Link>
            <Link to="/movies"><button type="button" className="btn btn-primary">List of Movies</button></Link>
            <Link to="/create"><button type="button" className="btn btn-success">Create New Movie</button></Link>
            </p>
        </div>
    );
  }

 
export default Buttons;