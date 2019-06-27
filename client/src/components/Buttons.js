import React from 'react';
import {Link} from "react-router-dom";

function Buttons(props) {
  
    return (
        <div>
            <p>
            <Link to="/"><button>Home</button></Link>
            <Link to="/movies"><button>List of Movies</button></Link>
            <Link to="/create"><button>Create New Movie</button></Link>
            </p>
        </div>
    );
  }

 
export default Buttons;