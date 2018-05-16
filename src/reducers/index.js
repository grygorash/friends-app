import { combineReducers } from "redux";

import users from "./users";
import search from "./search";

export default combineReducers({
  users,
  search
});