import { connect } from "react-redux";
import App from "../App";
import {fetchMovies} from "../actions/index.js";


const mapDispatchToProps = { fetchMovies: fetchMovies };

export default connect(null, mapDispatchToProps)(App);  