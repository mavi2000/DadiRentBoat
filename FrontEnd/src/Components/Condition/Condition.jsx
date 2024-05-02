import React from "react";

const Condition = () => {
  return (
    <div className=" flex justify-center ">
      <div className=" mt-40 mb-20 w-[80%] ">
        <div className="flex  gap-2 w-[100%] text-gray-500 600px:text-sm 300px:text-xs">
          <div>My Booking</div>
          <div>/</div>
          <div>Rules&Conditions</div>
        </div>
        <div className="  my-5  shadow-lg rounded-lg w-[100%] h-[100%]  ">
          <div className="my-10 mx-10 w-[80%] flex flex-col gap-5">
            <div className="py-2 text-gray-700 font-medium 600px:text-lg 300px:text-sm">
              Rules & Conditions
            </div>
            <div className="bg-gray-300 w-[100%] h-0.5"></div>
            <div className="flex flex-col gap-2">
              <div className="text-gray-700 font-medium 600px:text-lg 300px:text-sm">
                Preferences
              </div>
              <div className="text-gray-500 text-sm">
                Pets are welcome on board
              </div>
              <div className="bg-gray-300 w-[100%] my-5 h-0.5"></div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-gray-700 font-medium 600px:text-lg 300px:text-sm">
                Cancellation conditions
              </div>
              <div className="text-gray-500 600px:text-sm 300px:text-xs">
                Select the cancellation conditions for your listing that the
                tenant will be subject to
              </div>
              <div className="flex flex-col justify-center items-center gap-2  w-[90%]   ">
                <div className="flex justify-center flex-col gap-1 w-[95%]  ">
                  <div className="text-gray-700 600px:text-sm 300px:text-xs font-medium">
                    Flexible
                  </div>
                  <div className="text-gray-500 600px:text-sm 300px:text-xs">
                    The renter will be refunded the full rental amount up to the
                    day before departure (excluding SamBoat service fees).
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-[95%] ">
                  <div className="text-gray-700 600px:text-sm 300px:text-xs font-medium">
                    Zen
                  </div>
                  <div className="text-gray-500 600px:text-sm 300px:text-xs">
                    If the customer cancels the reservation up to 5 days before
                    the rental date, you will receive 30% of the total amount
                    net of SamBoat commissions. However, if the customer cancels
                    with less than 5 days notice, you will receive 100% of the
                    rental.
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-[95%] ">
                  <div className="text-gray-700 600px:text-sm 300px:text-xs font-medium">
                    Moderate
                  </div>
                  <div className="text-gray-500 600px:text-sm 300px:text-xs">
                    If the renter cancels more than 2 weeks before the start of
                    the rental, you will receive 50% of the rental amount
                    deducted from the SamBoat service fee. If you cancel less
                    than 2 weeks before the start of the rental period, you will
                    receive 100% of the rental income.
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-[95%] ">
                  <div className="text-gray-700 600px:text-sm 300px:text-xs font-medium ">
                    Rigid
                  </div>
                  <div className="text-gray-500 600px:text-sm 300px:text-xs">
                    No refunds are possible, unless there is a special weather
                    alert.
                  </div>
                </div>
              </div>
              <div className="bg-gray-300 w-[100%] my-5 h-0.5"></div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-gray-700 font-medium 600px:text-lg 300px:text-sm">
                Partial payment online
              </div>
              <div className="text-gray-500 600px:text-sm 300px:text-xs">
                If activated, this feature allows owners to require the customer
                to pay only a deposit online via SamBoat; The remaining balance
                will be paid on site by the customer on the day of rental. This
                function does not affect in any way the commission applied,
                which is always calculated on the total rental amount. In case
                of cancellation by the tenant, only the deposit paid will be
                retained{" "}
              </div>
              <div className="bg-gray-300 w-[100%] my-5 h-0.5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Condition;
{
  /*
  
   */
}
