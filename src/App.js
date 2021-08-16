import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import HomePage from "./components/HomePage/HomePage";
import SignUp from "./components/SignUp/SignUp";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/register" exact component={SignUp} />
          <ProtectedRoute exact path="/dashboard" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
