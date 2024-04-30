import React, { useState } from "react";
import BoatInformation from "./BoatInformation";
import RentalInformation from "./RentalInformation";
const CreateList = () => {
  const [activeComponent, setActiveComponent] = useState("rentalInformation");
  const renderComponent = () => {
    switch (activeComponent) {
      case "boatInformation":
        return <BoatInformation />;

      default:
        return <RentalInformation />;
    }
  };
  const isLogin = !!true;
  return (
    <div className=" w-[100%]   my-3 bg-[#FFFFFF] py-5 flex flex-col justify-center items-center gap-12">
      <h1 className=" text-3xl font-medium text-center">Create Listing</h1>
      <div className=" w-[90%] ">
        {isLogin && (
          <div className="flex flex-row justify-center w-[100%] items-baseline  gap-2">
            <div className="flex flex-col items-center gap-2 text-sm text-[#CBA557] border w-8">
              <button
                className={`rounded-[50%] h-8 w-8 bg-transparent border-2 border-[#CBA557] ${
                  activeComponent === "boatInformation"
                    ? "bg-[#cba557] text-white"
                    : ""
                }`}
                onClick={() => setActiveComponent("boatInformation")}
              >
                01
              </button>
              <div className=" text-xs whitespace-nowrap text-[#465668]">
                Boat Information
              </div>
            </div>
            <div className=" w-20 h-0.5 bg-gray-400 "></div>
            <div className="flex flex-col items-center gap-2 text-sm text-[#CBA557] w-8 ">
              <button
                className={`rounded-[50%] h-8 w-8 bg-transparent border-2 border-[#CBA557] ${
                  activeComponent === "rentalInformation"
                    ? "bg-[#cba557] text-white"
                    : ""
                }`}
                onClick={() => setActiveComponent("rentalInformation")}
              >
                02
              </button>
              <div className=" text-xs whitespace-nowrap text-[#465668]">
                Rental information
              </div>
            </div>
          </div>
        )}
      </div>
      <div className=" w-[90%] pb-16 h-full">{renderComponent()}</div>
    </div>
  );
};

export default CreateList;
