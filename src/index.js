import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import EmployeeList from "./Components/Dashboard/EmployeeList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./Components/Store/Reducer/index";
import UserContainer from "./Components/Store/Container/UserContainer";

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <UserContainer />
        <Route
          path="/Components/Dashboard/EmployeeList"
          component={EmployeeList}
        />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
