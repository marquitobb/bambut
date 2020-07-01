/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import Landing from "./views/landingPage/landing";
import NotFound from "./NotFound";
import {BrowserRouter,Switch,Route,} from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App;
