import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Questions";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Header from "./Header";
import NewQuestion from "./NewQuestion";
import ErrorPage from "./ErrorPage";
import Profile from "./Profile";
import CompletedPage from "./CompletedPage";
import SignedUpPage from "./SignedUpPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/questions">
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
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/request-submited">
            <CompletedPage />
          </Route>
          <Route exact path="/signed-up">
            <SignedUpPage />
          </Route>
          <Route path="/">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
