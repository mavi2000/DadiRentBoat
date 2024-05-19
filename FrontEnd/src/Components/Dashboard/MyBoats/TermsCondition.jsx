import React, { useState } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { IoMdAdd } from "react-icons/io";
import ConditionPopup from "./ConditionPopup";
const TermsCondition = () => {
  const [popup, setPopup] = useState(false);
  const handelPopup = (e) => {
    e.preventDefault();
    setPopup(!popup);
  };
  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <form className="bg-white mx-2 py-8 px-12 flex flex-col gap-10 text-[#4B465C]">
        <div className="font-medium">Terms & Conditions</div>
        <div className=" border-t-2 pt-10">
          <div className=" w-[80%] flex flex-col gap-5">
            <div className="flex justify-between">
              <div>Preferences</div>
              <div className="flex gap-8">
                <button className="py-1 px-4 border border-[#CBA557] text-[#CBA557] rounded-md text-sm font-medium">
                  Edit
                </button>
                <button className="py-1 px-4 border border-[#FF6347] text-[#FF6347] rounded-md text-sm font-medium">
                  Delete
                </button>
              </div>
            </div>
            <div className="text-sm text-[#8881a0]">
              Pets are welcome on board
            </div>
          </div>
        </div>
        <div className=" border-t-2 pt-10">
          <div className=" w-[80%] flex flex-col gap-5">
            <div className="flex justify-between">
              <div>Cancellation conditions</div>
              <div className="flex gap-8">
                <button className="py-1 px-4 border border-[#CBA557] text-[#CBA557] rounded-md text-sm font-medium">
                  Edit
                </button>
                <button className="py-1 px-4 border border-[#FF6347] text-[#FF6347] rounded-md text-sm font-medium">
                  Delete
                </button>
              </div>
            </div>
            <div className="text-sm text-[#7f7b8b]">
              Select the cancellation conditions for your listing that the
              tenant will be subject to
            </div>
            <div className="text-sm text-[#7f7b8b] ml-6 flex flex-col gap-4">
              <div>
                <div className="font-medium">Flexible</div>
                <div className="font-light">
                  The renter will be refunded the full rental amount up to the
                  day before departure (excluding SamBoat service fees).
                </div>
              </div>
              <div>
                <div className="font-medium">Zen</div>
                <div className="font-light">
                  If the customer cancels the reservation up to 5 days before
                  the rental date, you will receive 30% of the total amount net
                  of SamBoat commissions. However, if the customer cancels with
                  less than 5 days notice, you will receive 100% of the rental.
                </div>
              </div>
              <div>
                <div className="font-medium">Moderate</div>
                <div className="font-light">
                  If the renter cancels more than 2 weeks before the start of
                  the rental, you will receive 50% of the rental amount deducted
                  from the SamBoat service fee. If you cancel less than 2 weeks
                  before the start of the rental period, you will receive 100%
                  of the rental income.
                </div>
              </div>
              <div>
                <div className="font-medium">Rigid</div>
                <div className="font-light">
                  No refunds are possible, unless there is a special weather
                  alert.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-t-2 pt-10">
          <div className=" w-[80%] flex flex-col gap-5">
            <div className="flex justify-between">
              <div>Partial payment online</div>
              <div className="flex gap-8">
                <button className="py-1 px-4 border border-[#CBA557] text-[#CBA557] rounded-md text-sm font-medium">
                  Edit
                </button>
                <button className="py-1 px-4 border border-[#FF6347] text-[#FF6347] rounded-md text-sm font-medium">
                  Delete
                </button>
              </div>
            </div>
            <div className="text-sm text-[#8881a0] flex justify-start">
              If activated, this feature allows owners to require the customer
              to pay only a deposit online via SamBoat; The remaining balance
              will be paid on site by the customer on the day of rental. This
              function does not affect in any way the commission applied, which
              is always calculated on the total rental amount. In case of
              cancellation by the tenant, only the deposit paid will be retained
            </div>
          </div>
        </div>
        <div className=" border-t-2 pt-10">
          <div className=" w-[80%] flex flex-col gap-5">
            <button
              type="button"
              onClick={handelPopup}
              className="border w-[30%] py-3 border-[#CBA557] text-sm font-semibold rounded-lg text-[#CBA557] justify-center flex items-center gap-3"
            >
              <IoMdAdd className="text-lg" />
              Add a new Condition
            </button>
            {popup && (
              <ConditionPopup
                onClose={() => {
                  setPopup(false);
                }}
              />
            )}
          </div>
        </div>
        <div className=" border-t-2 pt-10">
          <button className="border w-[15%] py-3 border-[#CBA557] text-sm font-semibold rounded-lg bg-[#CBA557] text-white justify-center flex items-center gap-3">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default TermsCondition;
