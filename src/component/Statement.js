/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import avatar from "./../images/AVATAR.png";
import "./../style/Statement.css";

import pdf from "./../images/DuetscheBank_Statement.pdf";

function Statement() {
  return (
    <div className="container ">
      <h2>Download Statement</h2>
      <div className="transferamount">
        <h2 className="deposite_Balance">
          <a href={pdf} download >Download PDF</a>
        </h2>
      </div>
      <div className="nav_bar">
        Home &nbsp; / DashBoard &nbsp;/ <span> &nbsp; Statement </span>
      </div>
      <div class="transaction_details">
        <table>
          <tr>
            <th> </th> <th>Details </th> <th> Date </th> <th> Amount </th>
            <th> Type </th> <th> Action </th>
          </tr>
          <tr>
            <td>
              
              <img src={avatar} alt="" />
            </td>
            <td> Banker’ s Acceptance </td> <td> 10:10:2008 </td>
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
            <td> Banker’ s Acceptance </td> <td> 10:10:2008 </td>
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
        </table>
      </div>
    </div>
  );
}

export default Statement