import { combineReducers } from 'redux'
import list from "./reducer/list";
import filter from "./reducer/filter";

const rootReducer = combineReducers({
  list: list,
  filter: filter,
});

export default rootReducer;