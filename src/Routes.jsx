import React from "react";
import { Switch, Route } from "react-router-dom";
import Contact from "./Contact/Contact";
import About from "./About/About";
import useLocationBlocker from "./LocationBlocker";

export default function Routes() {
  useLocationBlocker();
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/">
        <h2>Home</h2>
      </Route>
    </Switch>
  );
}
