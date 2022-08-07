/* eslint-disable jsx-a11y/anchor-is-valid */
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
            {/* <ul>
              <li><a  className="a" href='#'>Media</a></li>
              <div className="list_seperator"></div>
              <li><a  className="a" href='#'>Career</a></li>
              <div className="list_seperator"></div>
              <li><a  className="a" href='#'>Investors Relation</a></li>
              <div className="list_seperator"></div>
              <li><a  className="a" href='#'>Research</a></li>
              <div className="list_seperator"></div>
              <li><a  className="a" href='#'>#Positiveimpact</a></li>
              <div className="list_seperator"></div>
              <li><a  className="a" href='#'>Responsibility</a></li>
              <div className="list_seperator"></div>
              <li><a  className="a" href='#'>Contact</a></li>
            </ul> */}
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