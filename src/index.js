import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// component
import Home from "./component/Home";
import About from "./component/About";
import Nav from "./component/Nav";
import Rest from "./component/Rest";

// react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

// Amplify
import Amplify from "aws-amplify";
import config from "./aws-exports";

Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <Nav></Nav>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/rest" component={Rest}></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
