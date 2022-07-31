/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import avatar from "./../images/AVATAR.png";
function Accounts() {
  return (
    <div class="container">
      <h2> Good Morning Tobias Pickett </h2>
      <div class="nav_bar">
        Home &nbsp; / DashBoard &nbsp;/ <span> &nbsp; Dashboards </span>
      </div>
      <div className="amount_cards">
        <div className="account_availableBalance">
          <h3 className="title">Available Balance</h3>
          <h3 className="account_amount">€8,500,000.00</h3>
        </div>
        <div className="account_bookBalance">
          <h3 className="title">Book Balance</h3>
          <h3 className="account_amount">€0.00</h3>
        </div>
      </div>
      <h2> Account Details </h2>
      <div class="transaction_details">
        <table>
          <tr>
            <th> </th> <th> Details </th> <th> Date </th> <th> Amount </th>
            <th> Type </th> <th> Status </th>
          </tr>
          <tr>
            <td>
              <img src={avatar} alt="" />
            </td>
            <td> Banker’ s Acceptance </td> <td>11/09/1998</td>
            <td> €8,500,000.00 </td>
            <td>
              <a href="#" class="btn btn_credit">
                Credit
              </a>
            </td>
            <td>
              <a href="#" class="btn btn_available">
                Available
              </a>
            </td>
          </tr>
          <tr>
            <td>
              
              <img src={avatar} alt="" />
            </td>
            <td> PENSION DEPOSIT </td> <td> 10/10/2008 </td>
            <td> €100,000.00 </td>
            <td>
              <a href="#" class="btn btn_credit">
                Credit
              </a>
            </td>
            <td>
              <a href="#" class="btn btn_available">
                
                Available
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Accounts;
