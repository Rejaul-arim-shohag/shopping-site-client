import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Header from './components/Header/Header';
import Dashbord from './components/Dashbord/Dashbord';
import Checkout from './components/Checkout/Checkout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {
const [loggedinUser, setLoggedinUser] = useState({})
  return (
    <UserContext.Provider value={[loggedinUser , setLoggedinUser]}>
      <Router>
        <p>{loggedinUser.name}</p>
        <div>
          <Header></Header>
          <Switch>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/admin">
              <Dashbord></Dashbord>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/product/:productId">
              <Checkout></Checkout>
            </PrivateRoute>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
