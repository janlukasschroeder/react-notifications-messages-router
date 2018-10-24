import React from "react";
import ReactDOM from "react-dom";

// redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";

// containers
import SendNotifications from "../src/containers/SendNotifications";
import SendMessages from "../src/containers/SendMessages";

import DisplayNotifications from "../src/containers/DisplayNotifications";
import DisplayMessages from "../src/containers/DisplayMessages";

// ant design
import "antd/dist/antd.css";

// custom css
import "./styles.css";

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <SendNotifications />
      <SendMessages />

      <DisplayNotifications />
      <DisplayMessages />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
