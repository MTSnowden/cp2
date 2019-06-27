import { connect } from "react-redux";
import MovieDetail from "../components/MovieDetail";

const mapStateToProps = state => ({ movies: state.movies });

export default connect(mapStateToProps)(MovieDetail);

