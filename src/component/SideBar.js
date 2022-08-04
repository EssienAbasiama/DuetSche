import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./../images/logoImg.png";
import overview from "./../images/Vector.png";
import account from "./../images/Group 2.png";
import transfer from "./../images/Group 1.png";
import statement from "./../images/Group 3.png";
import transactions from "./../images/Group 4.png";
import settings from "./../images/Group 11.png";
import logout from "./../images/logout.png";

function SideBar() {
  return (
    <div className="sideBar">
      <div className="bankName">
        <h1> DuetSche Bank </h1>
      </div>
      <div className="logo">
        <img src={logoImg} className="logoImg" alt="" />
      </div>
      <ul>
        <li>
          <Link to="/overview">
            <img src={overview} alt="" />
            &nbsp; &nbsp; <span> Overview </span>
          </Link>
        </li>
        <li>
          <Link to="/account">
            <img src={account} alt="" />
            &nbsp; &nbsp; <span> Accounts </span>
          </Link>
        </li>
        <li>
          <Link to="/transfer">
            <img src={transfer} alt="" />
            &nbsp; &nbsp; <span> Transfer </span>
          </Link>
        </li>
        <li>
          <Link to="/deposit">
            <img src={transfer} alt="" />
            &nbsp; &nbsp; <span> Deposit </span>
          </Link>
        </li>
        <li>
          <Link to="/statement">
            <img src={statement} alt="" />
            &nbsp; &nbsp;
            <span> Statement </span>
          </Link>
        </li>
        <li>
          <Link to="/transaction">
            <img src={transactions} alt="" />
            &nbsp; &nbsp;
            <span> Transactions </span>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <img src={settings} alt="" />
            &nbsp; &nbsp; <span> Settings </span>
          </Link>
        </li>
      </ul>
      <div className="logout">
        <div className="content_container">
          <img src={logout} alt="" />
          <a className="logout" href='./'>LogOut</a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;