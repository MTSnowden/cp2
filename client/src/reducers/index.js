import {combineReducers} from "redux";



function movies(state = [], action) {
  if (action.type === "MOVIES_FETCHED") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  movies
});
export default rootReducer;
