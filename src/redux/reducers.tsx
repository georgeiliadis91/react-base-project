import Alert from "./alert/reducer";
import User from "./user/reducer";

import { combineReducers } from "redux";

const allReducer = combineReducers({
  alert: Alert,
  user: User,
});

export default allReducer;

export type AppState = ReturnType<typeof allReducer>;