import React from "react";
import "./../style/Deposit.css";
import bitcoin from "./../images/bitcoin.png";
import address from "./../images/image 7.png";
// import ethereum from "./../images/ethereum.png";
import { useState } from "react";

function Deposit() {
  function copyText() {
    var copyText = document.getElementById("address");
    copyText.select();
    navigator.clipboard.writeText(copyText.innerHTML);
    alert("Copied the text: " + copyText.innerHTML);
  }

  function makeDeposite() {
    document.getElementById("form").style.display = "none";
    document.getElementById("form_h2").style.display = "none";
    document.getElementById("deposit_summary").style.display = "contents";
    document.getElementById("deposit_summary_h2").style.display = "contents";
  }

  function makePayment() {
    document.getElementById("deposit_summary").style.display = "none";
    document.getElementById("deposit_summary_h2").style.display = "none";
    document.getElementById("payment").style.display = "contents";
    document.getElementById("payment_h2").style.display = "contents";
  }

  function confirmDeposit() {
    document.getElementById("payment").style.display = "none";
    document.getElementById("payment_h2").style.display = "none";
    document.getElementById("confirm_Deposit").style.display = "contents";
    document.getElementById("confirm_Deposit_h2").style.display = "contents";
  }

  const [amount, setAmount] = useState("");
  const [coin, setCoin] = useState("");
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleChange = (event) => {
    setCoin(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container ">
      <h2>
        <span id="form_h2" class="form">
          New Deposit
        </span>
        <span className="deposit_summary" id="deposit_summary_h2">
          Confirm Deposit Details
        </span>
        <span className="payment" id="payment_h2">
          Make Payments
        </span>
        <span className="confirm_Deposite" id="confirm_Deposite_h2">
          Confirm Deposit Details
        </span>
      </h2>
      <div className="transferamount">
        <h1 className="deposite_Balance">€8,500,000.00</h1>
        <h4 className="title">AVAILABLE BALANCE</h4>
      </div>
      <div className="nav_bar">
        Home &nbsp; / DashBoard &nbsp;/ <span> &nbsp; New Deposit</span>
      </div>
      <form onSubmit={handleSubmit} id="form" className="form">
        <label htmlFor="amount">Amount in Euro</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          required
          defaultValue="1"
          onChange={handleAmountChange}
        />
        <label htmlFor="coin"> Pay From </label>
        <div className="payment_section">
          <table className="transferTable">
            <tr>
              <td className="checkBox">
                <input
                  type="radio"
                  className="field"
                  name="name"
                  value="Bitcoin"
                  onChange={handleChange}
                />
              </td>
              <td className="coin_img">
                <img src={bitcoin} alt="bitcoin" />
              </td>
              <td className="coinName"> Bitcoin </td>
            </tr>
          </table>
        </div>
        <button className="submit" id="submit" onClick={makeDeposite}>
          Submit
        </button>
      </form>
      <div className="deposit_summary" id="deposit_summary">
        <table className="deposit_table">
          <tr>
            <td className="amount"> Amount </td>
            <td className="amount amount_value"> €{amount} </td>
          </tr>
          <tr>
            <td className="amount"> Payment Method </td>
            <td className="amount amount_value"> {coin} </td>
          </tr>
        </table>
        <button className="submit" onClick={makePayment}>
          Submit
        </button>
      </div>
      <div className="payment info" id="payment">
        <div className="barCode_container">
          <img src={address} alt="" />
        </div>
        <div className="nav_bar info">
          Please pay to exact details below or scan the qrcode above for paying
          directly with your Bitcoin wallet
        </div>
        <div id="address" className="address">
          <h3>bc1q98evdaju3vmqh8f3yqf7lvrm8x9xqq0pf6zeee</h3>
        </div>
        <div className="copyAddress">
          <button className="copytext" onClick={copyText}>
            Copy Address
          </button>
        </div>
        <table className="deposit_table">
          <tr>
            <td className="amount"> Payment Address </td>
            <td className="amount">
              bc1q98evdaju3vmqh8f3yqf7lvrm8x9xqq0pf6zeee
            </td>
          </tr>
          <tr>
            <td className="amount"> Payment Amount </td>
            <td className="amount"> €{amount} </td>
          </tr>
        </table>
        <div className="copyAddress">
          <button className="submit" onClick={confirmDeposit}>
            Confirm Payment
          </button>
        </div>
      </div>
      <div id="confirm_Deposite" className="confirm_Deposite">
        Thanks for depositing, your account would be credited shortly.
      </div>
    </div>
  );
}

export default Deposit;
