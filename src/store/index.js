import { combineReducers } from 'redux'
import list from "./reducer/list";
import filter from "./reducer/filter";
import user from './reducer/user'

const rootReducer = combineReducers({
  list: list,
  filter: filter,
  user: user,
});

export default rootReducer;