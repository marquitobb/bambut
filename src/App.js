/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import Landing from "./views/landingPage/landing";
import NotFound from "./NotFound";
import {BrowserRouter,Switch,Route,} from "react-router-dom";
import StartPage from "./views/startPage/startPage";

const App = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/inicio" component={StartPage} />
        <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App;
