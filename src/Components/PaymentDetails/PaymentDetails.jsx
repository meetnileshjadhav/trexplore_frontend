import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './PaymentDetails.css';

function PaymentDetails() {

  const paymentdetails = {
    fname: "nilesh",
    lname: "jadhav",
    cardno: 1234567890,
    cvv: 123
  };

  let [cardDetails, setCardDetails] = useState({ fname: "", lname: "", cardno: "", cvv: "" });

  const changeHandle = (event) => {
    const { name, value } = event.target
    setCardDetails({ ...cardDetails, [name]: value });
  }

  const cardValidation = (event) => {
    // event.preventDefault();
    if (cardDetails.fname === paymentdetails.fname || cardDetails.lname === paymentdetails.lname || cardDetails.cardno === paymentdetails.cardno || cardDetails.cvv === paymentdetails.cvv) {
      alert("Congrats");
      setCardDetails({ fname: "", lname: "", cardno: "", cvv: "" });
    }
    else {
      alert("Plese enter valid data");


    }
  }


  return (
    <div className='container my-5 mx-auto border-4 p-5'>
      <div className='col-sm-6 offset-sm-3 border border-dark shadow p-3 rounded-2 payment-bg'>
        <h3 className='m-3 text-danger'>Payment Details Page</h3>

        <form action="/logout">

          <div class="mb-5 mt-5">
            <label for="fname" class="form-label font-weight-bold text-left">First Name</label>
            <input type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname" value={cardDetails.fname} onChange={changeHandle} />
          </div>

          <div class="mb-5">
            <label for="lname" class="form-label font-weight-bold text-left">Last Name</label>
            <input type="text" class="form-control" id="lname" placeholder="Enter Last Name" name="lname" value={cardDetails.lname} onChange={changeHandle} />
          </div>

          <div class="mb-5">
            <label for="cardno" class="form-label font-weight-bold text-left">Card No</label>
            <input type="text" class="form-control" id="cardno" placeholder="Enter card no" name="cardno" value={cardDetails.cardno} onChange={changeHandle} />
          </div>

          <div class="mb-5">
            <label for="cvv" class="form-label font-weight-bold text-left">CVV</label>
            <input type="text" class="form-control" id="cvv" placeholder="Enter CVV" name="cvv" value={cardDetails.cvv} onChange={changeHandle} />
          </div>

          <button type="submit" class="btn btn-primary bg-danger p-2 px-2" onClick={cardValidation}>Make Payment</button> &nbsp; &nbsp;
          <button type="reset" class="btn btn-primary bg-danger p-2 px-2">Reset</button> &nbsp; &nbsp;
          <Link
            to="/"
            className="btn btn-primary bg-danger p-2 px-2"
          >
            Cancel
          </Link>

        </form>
      </div>
    </div>
  )
}

export default PaymentDetails
