import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SavedArticles from "./components/SavedArticles";
import Feed from "./components/Feed";
import Landing from "./components/Landing";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import MediaSources from "./components/MediaSources";
import NotFound from "./components/404/NotFound.js";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/saved-articles" component={SavedArticles} />
      <Route exact path="/feed" component={Feed} />
      <Route exact path="/media" component={MediaSources} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
