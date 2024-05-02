import React, { useState } from "react";
import ChangePassword from "./ChangePassword";
import PaymentInfo from "./PaymentInfo";
const AccountSetting = () => {
  const [activeSection, setActiveSection] = useState("account");
  const renderForm = () => {
    switch (activeSection) {
      case "changePassword":
        return <ChangePassword />;
      case "payment":
        return <PaymentInfo />;
      default:
        return <div>Account Information</div>;
    }
  };
  return (
    <div className=" flex justify-center ">
      <div className=" flex gap-3 mt-40 mb-20 700px:w-[90%] 300px:w-[95%] h-screen ">
        <div className="1100px:w-[20%] 600px:w-[25%] 300px:w-[30%]  shadow-lg rounded-lg  1400px:h-[45%] 1000px:h-[40%] 880px:h-[32%]  700px:h-[20%] 550px:h-[24%] 300px:h-[27%]  1400px:text-lg 1100px 880px:text-sm 300px:text-xs ">
          <div className="flex justify-center items-center">
            <button
              className={`w-[100%]  1000px:p-6 400px:p-2 400px:py-2  880px:p-3 bg-transparent ${
                activeSection === "account" ? "bg-[#f3ae2327]" : ""
              }`}
              onClick={() => setActiveSection("account")}
            >
              Account Information
            </button>
          </div>
          <div className="flex justify-center items-center ">
            <button
              className={`w-[100%]  1000px:p-6 400px:p-2 400px:py-2  880px:p-3 bg-transparent ${
                activeSection === "changePassword" ? "bg-[#f3ae2327]" : ""
              }`}
              onClick={() => setActiveSection("changePassword")}
            >
              Change Password
            </button>
          </div>
          <div className="flex justify-center items-center ">
            <button
              className={`w-[100%]  1000px:p-5 400px:p-2 400px:py-2  880px:p-3 bg-transparent ${
                activeSection === "payment" ? "bg-[#f3ae2327]" : ""
              }`}
              onClick={() => setActiveSection("payment")}
            >
              Payment Information
            </button>
          </div>
          <div className="flex justify-center items-center ">
            <button className="w-[100%]  1000px:p-6 400px:p-2 400px:py-2  880px:p-3 bg-transparent">
              Logout
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-16 shadow-lg rounded-lg w-[80%] p-7 h-[100%]  text-[#4B465C] ">
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
