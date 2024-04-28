import React from "react";
import { LiaDownloadSolid } from "react-icons/lia";
import logo from "../../assets/Images/logo.png";

const Invoice = () => {
  return (
    <div className=" flex justify-center ">
      <div className=" mt-40 mb-20 w-[80%] h-[100%]   ">
        <div className="flex justify-between items-center">
          <div className="flex  gap-2  text-gray-500 text-sm ">
            <div>My Booking</div>
            <div>/</div>
            <div>Invoice</div>
          </div>
          <div className="flex items-center gap-1 bg-[#CBA557] text-white py-2 rounded-2xl px-3 cursor-pointer">
            <LiaDownloadSolid />
            <span>Download</span>
          </div>
        </div>
        <div className="  my-5  shadow-lg rounded-lg w-[100%] h-[100%]  ">
          <div className="my-0  w-[100%]  flex flex-col gap-5">
            <div className=" flex p-10 gap-3 ">
              <div className=" w-2/3 flex flex-col gap-5 ">
                <div className="flex items-center gap-3 text-[#4B465C]">
                  <img className="h-25 w-20" src={logo} />
                  <div className="text-2xl font-medium">Dadi Rental</div>
                </div>
                <div className="flex flex-col gap-2 font-light text-[#4B465C]">
                  <div>Viale Italia, 62 c/o BAGNI PANCALDI IN ACQUAVIVA</div>
                  <div>Livorno, Italy</div>
                  <div>+39 3701564317</div>
                  <div>info@dadirent.it</div>
                </div>
              </div>
              <div className=" w-1/3  text-[#4B465C] flex flex-col gap-2 ">
                <div className=" font-normal">Invoice #3492</div>
                <div className=" font-light">Date Issues: 25/08/2020</div>
                <div className=" font-light">Date Due: 29/08/2020</div>
              </div>
            </div>
            <div className=" flex p-10 gap-3 ">
              <div className=" flex-1  flex flex-col gap-5 ">
                <div className="flex flex-col  gap-3 text-[#4B465C]">
                  <div className=" font-normal">Invoice To:</div>
                  <div>
                    <div className=" font-light">Thomas shelby</div>
                    <div className=" font-light">Small Heath, B10 0HF, UK</div>
                    <div className=" font-light">718-986-6062</div>
                    <div className=" font-light">peakyFBlinders@gmail.com</div>
                  </div>
                </div>
              </div>
              <div className=" flex-1  text-[#4B465C] flex flex-col gap-2 ">
                <div className="flex flex-col  gap-3 text-[#4B465C]">
                  <div className=" font-normal">Bill To:</div>
                  <div className="text-[#4B465C]">
                    <div className="flex w-[80%] ">
                      <div className="flex w-[35%]  font-light">Total Due:</div>
                      <div className="flex w-[65%]  font-light">$12,110.55</div>
                    </div>
                    <div className="flex w-[80%] ">
                      <div className="flex w-[35%]  font-light">Bank name:</div>
                      <div className="flex w-[65%]  font-light">
                        Universal Bank
                      </div>
                    </div>
                    <div className="flex w-[80%] ">
                      <div className="flex w-[35%] font-light">Country:</div>
                      <div className="flex w-[65%]   font-light">Italy</div>
                    </div>
                    <div className="flex w-[80%]">
                      <div className="flex w-[35%]  font-light">IBAN:</div>
                      <div className="flex w-[65%]  font-light">
                        ETD95476213874685
                      </div>
                    </div>
                    <div className="flex w-[80%] ">
                      <div className="flex w-[35%]  font-light">
                        SWIFT code:
                      </div>
                      <div className="flex w-[65%]  font-light">BR91905</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" gap-3 border border[#DBDADE] text-[#4B465C]">
            <div className="flex w-[100%] ">
              <div className="w-[50%] border-b border[#DBDADE] p-3">ITEM</div>
              <div className="w-[15%] border-b border[#DBDADE] p-3">COST</div>
              <div className="w-[15%] border-b border[#DBDADE] p-3">QTY</div>
              <div className="w-[20%] border-b border[#DBDADE] p-3">PRICE</div>
            </div>
            <div className="flex w-[100%] ">
              <div className="w-[50%] border-b border[#DBDADE] p-3">
                Boat Name
              </div>
              <div className="w-[15%] border-b border[#DBDADE] p-3">$32</div>
              <div className="w-[15%] border-b border[#DBDADE] p-3">1</div>
              <div className="w-[20%] border-b border[#DBDADE] p-3">$32.00</div>
            </div>
            <div className="flex w-[100%] ">
              <div className="w-[50%] border-b border[#DBDADE] p-3">
                Skipper
              </div>
              <div className="w-[15%] border-b border[#DBDADE] p-3">$15</div>
              <div className="w-[15%] border-b border[#DBDADE] p-3">1</div>
              <div className="w-[20%] border-b border[#DBDADE] p-3">$15.00</div>
            </div>
            <div className="flex w-[100%] ">
              <div className="w-[50%] border-b border[#DBDADE] p-3">Ticket</div>
              <div className="w-[15%] border-b border[#DBDADE] p-3">$15</div>
              <div className="w-[15%] border-b border[#DBDADE] p-3">1</div>
              <div className="w-[20%] border-b border[#DBDADE] p-3">$15.00</div>
            </div>
          </div>
          <div className=" flex p-10 gap-3 ">
            <div className=" w-2/3 flex flex-col gap-5 ">
              <div className="flex items-center gap-3 text-[#4B465C]">
                <div className="text-md text-[#FF6347] ">
                  Fuel is not included*
                </div>
              </div>
            </div>
            <div className=" w-1/3  text-[#4B465C] text-sm flex flex-col gap-2 ">
              <div className="flex flex-col gap-3 text-[#4B465C]">
                <div className="text-[#4B465C] flex flex-col gap-2">
                  <div className="flex w-[100%] ">
                    <div className=" w-[45%]  font-light">Subtotal:</div>
                    <div className=" w-[55%]  font-light">$154.25</div>
                  </div>
                  <div className="flex w-[100%] ">
                    <div className=" w-[45%]  font-light">Service Charges:</div>
                    <div className=" w-[55%]  font-light">$10. </div>
                  </div>
                  <div className="flex w-[100%] ">
                    <div className=" w-[45%] font-light">Discount:</div>
                    <div className=" w-[55%]   font-light">$00.00</div>
                  </div>
                  <div className="flex w-[100%]">
                    <div className=" w-[45%]  font-light">VAT:</div>
                    <div className=" w-[55%]  font-light">$50.00 </div>
                  </div>
                  <div className="flex w-[100%] ">
                    <div className="flex w-[45%]  font-light">Total:</div>
                    <div className="flex w-[55%]  font-light">$204.25</div>
                  </div>
                  <div className="flex w-[100%] ">
                    <div className="flex w-[45%]  font-light">Amount Paid</div>
                    <div className="flex w-55%]  font-light">$204.25</div>
                  </div>
                  <div className="flex w-[100%] ">
                    <div className="flex w-[45%]  font-light">
                      To Pay at Harbor
                    </div>
                    <div className="flex w-[55%]  font-light">$204.25</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
