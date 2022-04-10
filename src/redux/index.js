import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import createRootReducer from "./rootReducer";

function reduxMulti({ dispatch }) {
  return (next) => (action) => {
    return Array.isArray(action)
      ? action.filter(Boolean).map(dispatch)
      : next(action);
  };
}

export default (initialState = {}) => {
  const middlewares = [thunk,logger, reduxMulti];
  return createStore(
    createRootReducer(),
    initialState,
    applyMiddleware(...middlewares)
  );
};
