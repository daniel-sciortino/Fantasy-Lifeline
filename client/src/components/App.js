import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import GlobalStyles from "./GlobalStyles";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Header from "./Header"
import NewQuestion from "./NewQuestion"


function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/login">
            <SignIn />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <Route exact path="/new-question">
            <NewQuestion />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
