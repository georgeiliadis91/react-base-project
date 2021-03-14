import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import allReducer from "./reducers";

export const globalStore = createStore(allReducer, devToolsEnhancer({}));