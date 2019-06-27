import { connect } from "react-redux";
import ListOfMovies from "../components/ListOfMovies";
import {deleteMovie} from "../actions/index";

const mapStateToProps = state => ({ movies: state.movies });

const mapDispatchToProps = { deleteMovie: deleteMovie };

export default connect(mapStateToProps, mapDispatchToProps)(ListOfMovies);