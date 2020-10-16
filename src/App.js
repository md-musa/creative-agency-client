import React, {createContext, useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import AdminHome from "./Components/AllAdminPanelComponents/AdminHome/AdminHome";
import Home from "./Components/AllHomePageComponent/Home/Home";
import LogIn from "./Components/AllHomePageComponent/LogIn/LogIn";
import PrivateRoute from "./Components/AllHomePageComponent/PrivateRoute/PrivateRoute";
import NotFound from "./Components/AllHomePageComponent/NotFound/NotFound";

export const ServiceDetailsToForm = createContext();
export const UserDataContext = createContext();

function App() {
  const [serviceDetails, setServiceDetails] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({
    email: "",
    name: "",
    profile: "",
  });

  return (
    <div className="App">
      <ServiceDetailsToForm.Provider
        value={[serviceDetails, setServiceDetails]}
      >
        <UserDataContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/login">
                <LogIn></LogIn>
              </Route>

              <PrivateRoute path="/admin">
                <AdminHome />
              </PrivateRoute>

              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </UserDataContext.Provider>
      </ServiceDetailsToForm.Provider>
    </div>
  );
}
export default App;
