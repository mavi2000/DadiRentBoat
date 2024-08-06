import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Mastercard from "../../assets/Images/mastercard.png";
// import Visa from "../../assets/Images/visa.png";

const Payment = () => {
  const [paymentOption, setPaymentOption] = useState('payFull');

  const handleChange = (event) => {
    setPaymentOption(event.target.value);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* <div className="flex items-center gap-3 font-medium text-lg">
        <div>Card Details</div>
        <img className="h-10 w-10" src={Mastercard} alt="Master Card" />
        <img className="h-10 w-10" src={Visa} alt="Visa" />
      </div> */}

      <form className="mt-[5%] flex flex-col gap-5">
        {/* <div className="flex flex-wrap gap-3">
          <input
            type="text"
            placeholder="First Name*"
            className="input-checkout w-[46%]"
          />
          <input
            type="text"
            placeholder="Last Name*"
            className="input-checkout w-[25%]"
          />
          <input
            type="text"
            placeholder="Email*"
            className="input-checkout w-[25%]"
          />
        </div> */}

        {/* <div className="flex flex-wrap gap-3">
          <input
            type="text"
            placeholder="Card Number*"
            className="input-checkout w-[100%]"
          />
        </div> */}

        {/* <div className="flex flex-col gap-5">
          <h2>Select Payment Option</h2>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                id="payFull"
                name="paymentOption"
                value="payFull"
                checked={paymentOption === 'payFull'}
                onChange={handleChange}
                className="w-5 h-5"
              />
              <span>Pay Full Rent</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                id="payDeposits"
                name="paymentOption"
                value="payDeposits"
                checked={paymentOption === 'payDeposits'}
                onChange={handleChange}
                className="w-5 h-5"
              />
              <span>Pay in Deposits</span>
            </label>
          </div>
        </div> */}


        <div className="flex flex-col gap-5 mt-5">
          <h1 className="font-bold text-xl">Rental Agreement</h1>
          <p>Please check and fill out the rental agreement form.</p>
          <Link to="/RecreationalVehicleRentalAgreement"   className=" text-[#CBA557] underline">
            Rental Agreement
          </Link>
        </div>
        <div className="mt-[4%] flex flex-col gap-5">
          
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5" />
              <div className=" font-normal text-[#676767] text-sm">
                I read and agree to the{" "}
                <a
                  className=" text-[#CBA557] underline"
                  href="/booking/conditions"
                >
                  terms & conditions
                </a>
              </div>
            </label>
          </div>


      </form>
    </div>
  );
};

export default Payment;
