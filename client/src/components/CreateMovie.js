import React, {Component} from "react";


class CreateMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            director: "",
            genre: "",
            year: ""
        };
    }

    render(){
        return(
            <div>
                <h1>Movie</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                if (this.props.createMovie) {
                    this.props.createMovie(this.state);
                }
                }}>
                <div>
                Title: <input onChange={(e) => {
                    this.setState({
                        title: e.target.value
                    });
                }} />
                </div>
                <div>
                Director: <input onChange={(e) => {
                    this.setState({
                        director: e.target.value
                    });
                }} />
                </div>
                <div>
                Genre: <input onChange={(e) => {
                    this.setState({
                        genre: e.target.value
                    });
                }} />
                </div>
                <div>
                Year: <input onChange={(e) => {
                    this.setState({
                        year: e.target.value
                    });
                }} /> 
                </div>
                <button>Create</button>
                </form>
            </div>
        )
    }
}

export default CreateMovie;