import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages
import DevInfo from "../Components/DevInfo/DevInfo";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Search from "../Components/Search/Search";
import { checkAuthState } from "../Providers/Functions";
function AppRouter() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    checkAuthState.then((val) => {
      if (val) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      setLoading(false);
    });
  };

  return (
    <div>
      {loading ? (
        <div>loading please wait</div>
      ) : (
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
      )}
    </div>
  );
}

export default AppRouter;
