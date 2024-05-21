import React from "react";
import BoatsNavbar from "./BoatsNavbar";

const Voucher = () => {
  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <form className="bg-white ">
        <div className="mx-8 py-8 flex flex-col gap-10 text-[#4B465C] w-[80%]">
          <div className="font-medium">Voucher</div>
          <div className="text-sm">You can create voucher for customers.</div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label>Voucher Name</label>
              <input
                type="text"
                placeholder="Name"
                className="border py-2 px-3 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Total Discount Percentage</label>
              <select className="border py-2 px-3 rounded-md">
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label>Start Date - End Date</label>
              <input
                type="text"
                placeholder="Choose a date"
                className="border py-2 px-3 rounded-md"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" />
            <div>Activate?</div>
          </div>
        </div>
        <div className="w-[100%] h-0.5 bg-[#E8E8E8]"></div>
        <div className="mx-8 py-8 flex flex-col gap-5 text-[#4B465C] w-[80%]">
          <div className="flex flex-col gap-4">
            <div>Promotions</div>
            <div className="text-sm font-light">
              Promotions allow you to apply a discount in the periods you
              select. Select dates and discount amount: these will automatically
              be applied to the final price for all requests relating to the
              chosen period.
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label>Start Date - End Date</label>
                <input
                  type="date"
                  placeholder="Choose a date"
                  className="border py-2 px-3 rounded-md text-[#4B465C] text-sm font-light"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Discount Percentage</label>
                <select className="border py-2 px-3 rounded-md text-[#4B465C] text-sm font-light">
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-[#CBA557] text-sm font-normal">
                Add Conditions
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <div className="text-sm">
                  Apply only during the week (weekends excluded)
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 w-[48%]">
              <div className="flex flex-col gap-2 text-sm">
                <label>Add an end date</label>
                <input
                  type="date"
                  placeholder="Choose a date"
                  className="border py-2 px-3 rounded-md text-[#4B465C]  font-light"
                />
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <label>Rental duration</label>
                <select className="border py-2 px-3 rounded-md text-[#4B465C] text-sm font-light">
                  <option>Half Day Morning/Evening, Full Day</option>
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                </select>
              </div>
            </div>
            <button className="bg-[#CBA557] w-[15%] py-2 rounded-lg text-white font-semibold">
              Add
            </button>
            <div className="flex flex-col gap-5">
              <div>My Promotions</div>
              <div className=" w-[80%] flex flex-col gap-5">
                <div className="flex justify-between">
                  <div>
                    <div>Discount 5%</div>
                    <div className="text-sm text-[#8881a0]">
                      15 Dec 2024 to 15 Jan 2025
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <button className="py-1 px-4 border border-[#CBA557] text-[#CBA557] rounded-md text-sm font-medium">
                      Edit
                    </button>
                    <button className="py-1 px-4 border border-[#FF6347] text-[#FF6347] rounded-md text-sm font-medium">
                      Delete
                    </button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <div>Discount 5%</div>
                    <div className="text-sm text-[#8881a0]">
                      15 Dec 2024 to 15 Jan 2025
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <button className="py-1 px-4 border border-[#CBA557] text-[#CBA557] rounded-md text-sm font-medium">
                      Edit
                    </button>
                    <button className="py-1 px-4 border border-[#FF6347] text-[#FF6347] rounded-md text-sm font-medium">
                      Delete
                    </button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <div>Discount 5%</div>
                    <div className="text-sm text-[#8881a0]">
                      15 Dec 2024 to 15 Jan 2025
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <button className="py-1 px-4 border border-[#CBA557] text-[#CBA557] rounded-md text-sm font-medium">
                      Edit
                    </button>
                    <button className="py-1 px-4 border border-[#FF6347] text-[#FF6347] rounded-md text-sm font-medium">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-0.5 bg-[#E8E8E8]"></div>
        <div className="mx-8 py-8 flex flex-col gap-5 text-[#4B465C] w-[90%]">
          <div>Last minute promotions</div>
          <div className="text-sm ">
            The last minute promotion allows you to apply a discount if your
            boat is not rented. This reduction applies only to the period of
            your choice.
          </div>

          <div className="w-[80%] grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-1">
              <label>Validity of the promotion</label>
              <select className="border py-2 px-3 rounded-md text-[#4B465C] text-sm font-light">
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Reduction percentage</label>
              <select className="border py-2 px-3 rounded-md text-[#4B465C] text-sm font-light">
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" />
              <div>Activate?</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Voucher;
