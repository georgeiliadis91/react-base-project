import { combineReducers } from "redux";

import Alert from "./alert/reducer";
import Loading from "./loading/reducer";
import User from "./user/reducer";

const allReducer = combineReducers({
  alert: Alert,
  user: User,
  loading: Loading,
});

// eslint-disable-next-line import/no-default-export
export default allReducer;

export type AppState = ReturnType<typeof allReducer>;
