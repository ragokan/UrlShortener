import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UrlRouter from "./UrlRouter";

const index = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/:urlid" component={UrlRouter} />
      </Switch>
    </Router>
  );
};

export default index;
