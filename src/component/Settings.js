import React from 'react'

import "./../style/Settings.css";
function Settings() {
    function nextPage() {
    document.getElementById("form").style.display = "none";
    document.getElementById("deposit_summary").style.display = "contents";
    }
  return (
    <div className="container ">
      <h2>Settings</h2>
      <div className="transferamount">
        <h1 className="deposite_Balance"> €8, 600, 000.00 </h1>
        <h4 className="title"> AVAILABLE BALANCE </h4>
      </div>
      <div className="nav_bar">
        Home &nbsp; / DashBoard &nbsp;/ <span> &nbsp; Settings </span>
      </div>
      <div className="flex">
        <div className="changePassWord">Change Password</div>
        <div className="authentication">2FA Authentication</div>
      </div>
      <form id="form" className="form">
        <label htmlFor="amount"> Old Password</label>
        <input type="text" name="amount" id="amount" required />
        <label htmlFor="amount"> New Password</label>
        <input type="text" name="amount" id="amount" required />

        <label htmlFor="amount"> Confirm Password</label>
        <input type="text" name="amount" id="amount" required />
        <button type="button" className="submit" id="submit" onClick={nextPage}>
          Submit
        </button>
      </form>
      <div className="deposit_summary" id="deposit_summary">
        Two-Factor Authentication : <span className="active">Active</span>
        <button className="deActivate">Submit</button>
      </div>
    </div>
  );
}

export default Settings