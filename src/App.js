import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Dashboard from "./Dashboard";
import Home from "./Home";

export default function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
      </Switch>

    </BrowserRouter>
  );
}
