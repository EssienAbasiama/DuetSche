import React from 'react';
import SideBar from "./SideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Statement from "./Statement";
import Transaction from "./Transaction";
import Settings from "./Settings.js";
import Account from "./Accounts";
import headerLogo from "./../images/blueLogo.png";
import Deposit from "./Deposit";
import Transfer from "./Transfer";
import "./../App.css";

function HomePage() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <div className="content">
          <div className="header">
            <ul>
              <li>Media</li>
              <div className="list_seperator"></div>
              <li>Career</li>
              <div className="list_seperator"></div>
              <li>Investors Relation</li>
              <div className="list_seperator"></div>
              <li>Research</li>
              <div className="list_seperator"></div>
              <li>#Positiveimpact</li>
              <div className="list_seperator"></div>
              <li>Responsibility</li>
              <div className="list_seperator"></div>
              <li>Contact</li>
            </ul>
            <img src={headerLogo} alt="hekko" />
          </div>
          <div className="body">
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route exact path="/login">
                <Dashboard />
              </Route>
              <Route exact path="/overview">
                <Dashboard />
              </Route>
              <Route exact path="/deposit">
                <Deposit />
              </Route>
              <Route exact path="/account">
                <Account />
              </Route>
              <Route exact path="/transfer">
                <Transfer />
              </Route>
              <Route exact path="/statement">
                <Statement />
              </Route>
              <Route exact path="/transaction">
                <Transaction />
              </Route>
              <Route exact path="/settings">
                <Settings />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default HomePage