import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import mainReducer from "./redux/reducers/mainReducer.js";
import thunk from "redux-thunk";

const globalStore = createStore(mainReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={globalStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
