import userReducer from "./UserReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  user: userReducer,
});

export default allReducers;
