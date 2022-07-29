import './App.css';
import SideBar from "./component/SideBar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Statement from './component/Statement';
import Transaction from './component/Transaction';
import Settings from './component/Settings.js';
import Account from './component/Accounts';
import headerLogo from './images/blueLogo.png';
import Deposit from './component/Deposit';
import Transfer from './component/Transfer';

function App() {
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

export default App;