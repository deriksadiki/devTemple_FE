import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages
import DevInfo from "../Components/DevInfo/DevInfo";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Search from "../Components/Search/Search";

let loggedIn = true;

function AppRouter() {
  return (
    <div>
      {loggedIn ? (
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Home" exact component={Home} />
            <Route path="/Search" exact component={Search} />
            <Route path="/DevInfo" exact component={DevInfo} />
          </Switch>
          <Footer />
        </Router>
      ) : (
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Register" exact component={Register} />
          </Switch>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default AppRouter;
