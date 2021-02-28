import { combineReducers, applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";

import stateReducers from "./userstore";

const rootRdeucers = combineReducers({
  auth: stateReducers
});

let store = createStore(rootRdeucers, applyMiddleware(thunk));
export default store;
