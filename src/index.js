import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import storeReducer from "./store/reducer";

const combinedReducer = combineReducers({
  reducerCounter: storeReducer,
});

const store = createStore(combinedReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

console.log("Git Signature Test");
