import React from "react";
import error from "./../images/error.png";

import { Link } from "react-router-dom";

function Transfer() {
    
    function transfer() {
    document.getElementById("form").style.display = "none";
    document.getElementById("form_h2").style.display = "none";
    document.getElementById("deposit_summary").style.display = "contents";
    document.getElementById("deposit_summary_h2").style.display = "contents";
  }

  function confirmTransfer() {
    document.getElementById("deposit_summary").style.display = "none";
    document.getElementById("deposit_summary_h2").style.display = "none";
    document.getElementById("payment").style.display = "contents";
    document.getElementById("payment_h2").style.display = "contents";
  }

  function addAccountNumber() {
    document.getElementById("payment").style.display = "none";
    document.getElementById("payment_h2").style.display = "none";
    document.getElementById("confirm_Deposit").style.display = "contents";
    document.getElementById("confirm_Deposit_h2").style.display = "contents";
  }

  return (
    <div className="container ">
      <h2>
        <span id="form_h2" class="form">
          New Transfer
        </span>
        <span className="deposit_summary" id="deposit_summary_h2">
          Confirm Transfer Details
        </span>
        <span className="payment" id="payment_h2">
          Add Account Number
        </span>
        <span className="confirm_Deposit" id="confirm_Deposite_h2">
          Error
        </span>
      </h2>
      <div className="transferamount">
        <h1 className="deposite_Balance"> €8, 500, 000.00 </h1>
        <h4 className="title"> AVAILABLE BALANCE </h4>
      </div>
      <div className="nav_bar">
        Home &nbsp; / DashBoard &nbsp;/ <span> &nbsp; Transfer </span>
      </div>
      <form id="form" className="form">
        <label for="amount">Select Account</label>
        <select name="amount" className="transfer_amount" id="amount">
          <option value="available">Available Balance</option>
          <option value="book">Book Balance</option>
        </select>

        <label htmlFor="coin">Amount In Euro</label>
        <input type="number" name="coin" id="coin" min="1" required />
        <button type="button" className="submit" id="submit" onClick={transfer}>
          Submit
        </button>
      </form>
      <div className="deposit_summary" id="deposit_summary">
        <label htmlFor="currency">Select Currency</label>
        <select name="currency" className="transfer_amount" id="amount">
          <option value="available">USD</option>
          <option value="available">EUR</option>
          <option value="available">NGN</option>
        </select>

        <label htmlFor="coin">Correspondent Bank</label>
        <input type="text" name="coin" id="coin" required />

        <label htmlFor="coin">Location</label>
        <input type="text" name="coin" id="coin" required />

        <button className="submit" onClick={confirmTransfer}>
          Submit
        </button>
      </div>
      <div className="payment" id="payment">
        <label htmlFor="coin">SWIFT Code</label>
        <input type="text" name="coin" id="coin" min="1" required />
        <label htmlFor="coin">Account Number</label>
        <input type="number" name="coin" id="coin" min="1" required />
        <div className="confirmTransfer">
          <label htmlFor="confirmTransfer" name="confirmTransfer">
            <input
              type="Radio"
              name="confirmTransfer"
              id="confirmTransfer"
              value="true"
              className="radio"
              checked
            />
            &nbsp; Are you sure you want to make this transfer?
          </label>
        </div>
        <button className="submit" id="submit" onClick={addAccountNumber}>
          Continue
        </button>
      </div>
      <div id="confirm_Deposit" className="confirm_Deposite ">
        <div className="alert">
          <div className="alertDiv">
            <div className="img">
              <img src={error} alt="" className="image" srcset="" />
            </div>

            <h3 className="status">Transaction Failed</h3>
            <h4 className="errorInfo">Kindly make new deposit before you can make bank transfers.</h4>
            <Link to="/deposit" className="link">
              Deposit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
