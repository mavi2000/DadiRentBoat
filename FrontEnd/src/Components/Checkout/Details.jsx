import React from "react";

const Details = () => {
  return (
    <div>
      <div className="flex flex-col">
        <h2 className=" text-xl font-medium leading-7">General Information</h2>
      </div>

      <form className=" mt-[5%]">
        <div className=" flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="First Name*"
            className="input-checkout"
          />
          <input
            type="text"
            placeholder="Last Name*"
            className="input-checkout"
          />
          <input type="text" placeholder="Email*" className="input-checkout" />
          <input
            type="text"
            placeholder="Phone Number*"
            className="input-checkout"
          />
          <input
            type="text"
            placeholder="Country you were born*"
            className="input-checkout"
          />
          <input
            type="text"
            placeholder="City you were born*"
            className="input-checkout"
          />
          <input
            type="text"
            placeholder="Date of Birth*"
            className="input-checkout"
          />
          <input
            type="text"
            placeholder="Tax code (Only for Italy Residence)"
            className="input-checkout"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Write message"
            className="input-checkout md:w-[99%] resize-none"
          ></textarea>
        </div>

        <div className="mt-[5%]">
          <h2 className=" text-xl font-medium leading-7">Payment Method</h2>
          <div className="flex gap-12 my-[3%]">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" className="w-5 h-5" />
              <span className=" font-normal text-[#676767] text-sm">
                Pay all rent
              </span>
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="payment" className="w-5 h-5" />
              <span className=" font-normal text-[#676767] text-sm">
                Pay deposit
              </span>
            </label>
          </div>

          <div className="mt-[4%]">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5" />
              <span className=" font-normal text-[#676767] text-sm">
                I read and agree to the terms & conditions
              </span>
            </label>
          </div>

          <div className="">
            <button className="md:btn-5 py-2 px-10 my-[5%] bg-[#CBA557] rounded-[20px] text-base text-white font-bold">
              Sign Up To Complete Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Details;
