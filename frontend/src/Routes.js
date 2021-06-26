import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import signup from "./design/signup";
import login from "./design/login";
import Home from "./design/home";
import dashboard from "./design/dashboard";
import profile from "./design/profile"


const Routes = () =>{
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component = {Home}/>
        <Route path="/profile" exact component = {profile}/>
        <Route path="/dashboard" exact component = {dashboard}/>
        <Route path="/signup" exact component = {signup}/>
        <Route path="/login" exact component = {login}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
