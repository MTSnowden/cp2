import { connect } from "react-redux";
import CreateMovie from "../components/CreateMovie";
import {createMovie} from "../actions/index.js";


const mapDispatchToProps = { createMovie: createMovie };

export default connect(null, mapDispatchToProps)(CreateMovie);