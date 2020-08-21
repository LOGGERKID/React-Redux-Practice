import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import storeReducer from "./store/reducer";

const combinedReducer = combineReducers({
  reducerCounter: storeReducer,
});

const store = createStore(combinedReducer);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});
