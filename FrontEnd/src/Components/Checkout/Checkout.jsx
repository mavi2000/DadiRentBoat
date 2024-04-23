import React from 'react';
import Annina from '../../assets/Images/annina.png';

const Checkout = () => {
  return (
    <div>
      <div className="checkout-bg !h-[50svh] md:!h-[100svh]">
        <div className="h-[50svh] md:h-[100svh] flex flex-col justify-center mx-[6%] ">
          <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
            Check Out
          </h1>
        </div>
      </div>
      <div className=" mx-[6%] mt-[3%]">
        <h1 className="font-medium text-3xl text-[#000000]">Check Out</h1>
        <p className="para-book mt-2">
          Book your rental in two simple steps. <br />
          Renting boats from us means relying on a competent team that takes
          care of all the pre and post boat rental phases. But not only that,
          all our boats are periodically checked and tested according to current
          regulations. This is why boat rental with DaDi Rent is safe. Not only
          in the price but also in the quality of our boats and in the service
          that we are able to provide always and in any case.
        </p>

        <div className=" flex flex-col md:flex-row md:space-x-[2%] mt-[2%] space-y-[5%]">
          <div className="md:w-[35%] bg-white rounded-xl shadow-checkout mb-[1%]">
            <div className="py-9 px-12 flex flex-col justify-center items-center">
              <h2 className=" text-xl font-medium leading-7">
                Booking #240401-104107563
              </h2>
            </div>
            <hr className=" border border-[#DCDCDC]" />

            <div className="py-9 px-12 flex justify-center flex-col text-[#383838]">
              <img src={Annina} alt="" className="md:w-64" />
              <h2 className="heading-book mt-[4%] text-[#383838]">
                Yachts du Canon
              </h2>

              <div className=" flex flex-col gap-1 mt-[3%]">
                <p>
                  From:{' '}
                  <span className=" text-[#676767] font-normal">
                    April 3, 2024 - 7:00 am
                  </span>
                </p>
                <p>
                  To:{' '}
                  <span className=" text-[#676767] font-normal">
                    April 5, 2024 - 7:00 am
                  </span>
                </p>
                <p>
                  No of persons:{' '}
                  <span className=" text-[#676767] font-normal">4</span>
                </p>
                <p>
                  With Skipper:{' '}
                  <span className=" text-[#676767] font-normal">$10.00</span>
                </p>
                <p>Full Day</p>
                <p className=" text-[#EA5455]">Fuel Not Included</p>
              </div>
            </div>

            <div className="border-t border-b border-[#CBA557] py-9 px-12 leading-7">
              <h1 className="font-medium text-[#383838] text-lg">
                Amount to be Paid Online
              </h1>

              <div className=" flex justify-between w-[90%] mt-[1%]">
                <p className=" text-lg font-normal text-[#676767]">Amount</p>
                <p className=" text-lg font-medium text-[#383838]">$5712.00</p>
              </div>
            </div>

            <div className="border-b border-[#CBA557] py-9 px-12 leading-7">
              <h1 className="font-medium text-[#383838] text-lg">
                Amount to be Paid on Harbor
              </h1>

              <div className=" flex justify-between w-[90%] mt-[1%]">
                <p className=" text-lg font-normal text-[#676767]">Skipper</p>
                <p className=" text-lg font-medium text-[#383838]">$10.00</p>
              </div>

              <div className=" flex justify-between w-[90%] mt-[1%]">
                <p className=" text-lg font-normal text-[#676767]">Tickets</p>
                <p className=" text-lg font-medium text-[#383838]">$10.00</p>
              </div>
            </div>

            <div className="py-9 px-12 leading-7">
              <div className=" flex justify-between w-[90%] mt-[1%]">
                <p className=" text-lg font-normal text-[#676767]">Subtotal</p>
                <p className=" text-lg font-medium text-[#383838]">$5712.00</p>
              </div>

              <div className=" flex justify-between w-[90%] mt-[1%]">
                <p className=" text-lg font-normal text-[#676767]">
                  Skipper Charges:
                </p>
                <p className=" text-lg font-medium text-[#383838]">$10.00</p>
              </div>

              <div className=" flex justify-between w-[90%] mt-[1%]">
                <p className=" text-lg font-normal text-[#676767]">Tickets</p>
                <p className=" text-lg font-medium text-[#383838]">$10.00</p>
              </div>

              <div className=" flex justify-between w-[90%] mt-[1%]">
                <p className=" text-lg font-normal text-[#676767]">Total</p>
                <p className=" text-lg font-medium text-[#383838]">$5712.00</p>
              </div>
            </div>

            <hr className="border-b border-[#DCDCDC] mb-[5%]" />
          </div>

          <div className="md:w-[65%] bg-white rounded-xl shadow-checkout mb-[3%] py-9 pl-8 pr-16 h-full">
            <div className="flex flex-col">
              <h2 className=" text-xl font-medium leading-7">
                General Information
              </h2>
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
                <input
                  type="text"
                  placeholder="Email*"
                  className="input-checkout"
                />
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
                <h2 className=" text-xl font-medium leading-7">
                  Payment Method
                </h2>
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
        </div>
      </div>
    </div>
  );
};

export default Checkout;
