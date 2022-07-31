/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import avatar from "./../images/AVATAR.png";

function Dashboard() {
  return (
    <div className="container">
      <h2> Good Morning Tobias Pickett </h2>
      <div className="nav_bar">
        Home &nbsp; / DashBoard &nbsp;/ <span> &nbsp; Dashboards </span>
      </div>
      <div className="cards">
        <div className="card">
          <div className="text">
            <h2> Total Balance </h2>
            <div className="deposite_button">
              <div className="deposit"> Deposit </div>
              <div className="transfer"> Transfer </div>
            </div>
          </div>
          <div className="balance">
            <h3 className="amount"> €8,500,000.00 </h3>
            <h3 className="title"> ACCOUNT BALANCE </h3>
          </div>
        </div>
        <div className="balance_card">
          <div className="book_balance">
            <h3 className="title"> Book Balance </h3>
            <h3 className="amount"> €0.00 </h3>
          </div>
          <div className="available_balance">
            <h3 className="title"> Available Balance </h3>
            <h3 className="amount"> €8,500,000.00 </h3>
          </div>
        </div>
      </div>
      <div className="lineSeperator"> </div> <h2> Transaction Details </h2>
      <div className="transaction_details">
        <table>
          <tr>
            <th> </th> <th> Details </th> <th> Date </th> <th> Amount </th>
            <th> Type </th> <th> Status </th>
          </tr>
          <tr>
            <td>
              <img src={avatar} alt="" />
            </td>
            <td> Banker’ s Acceptance </td> <td> 11/09/1998 </td>
            <td> €8,500,000.00 </td>
            <td>
              <a href="#" className="btn btn_credit">
                Credit
              </a>
            </td>
            <td>
              <a href="#" className="btn btn_available">
                Available
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <img src={avatar} alt="" />
            </td>
            <td> PENSION DEPOSIT </td> <td>10/10/2008</td>
            <td> €100,000.00</td>
            <td>
              <a href="#" className="btn btn_credit">
                Credit
              </a>
            </td>
            <td>
              <a href="#" className="btn btn_available">
                Available
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
