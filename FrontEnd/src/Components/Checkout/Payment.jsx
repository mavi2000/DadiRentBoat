import React from "react";
import Mastercard from "../../assets/Images/mastercard.png";
import Visa from "../../assets/Images/visa.png";

const Payment = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3 font-medium text-lg">
        <div>Card Details</div>
        <img className="h-10 w-10" src={Mastercard} alt="Master Card" />
        <img className="h-10 w-10" src={Visa} alt="Visa" />
      </div>
      <form className=" mt-[5%]] flex flex-col gap-5">
        <div className=" flex flex-wrap gap-3 ">
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
        </div>
        <div className=" flex flex-wrap gap-3">
          <input
            type="text"
            placeholder="First Name*"
            className="input-checkout w-[100%]"
          />
        </div>

        <div className="">
          <div className="flex flex-col gap-12 my-[3%]">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" className="w-5 h-5" />
              <span className=" font-normal text-[#676767] text-sm">
                Google Pay
              </span>
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="payment" className="w-5 h-5" />
              <span className=" font-normal text-[#676767] text-sm">
                Apple Pay
              </span>
            </label>
          </div>

          <div className="mt-[4%] flex flex-col gap-5">
            <a href="/" className=" underline">
              Do you have a Voucher?
            </a>
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

          <div className="">
            <button className="md:btn-5 py-2 px-10 my-[5%] bg-[#CBA557] rounded-[20px] text-base text-white font-bold">
              Pay
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;
