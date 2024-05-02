import React from "react";
import { FiFileText } from "react-icons/fi";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { LiaBanSolid } from "react-icons/lia";
import BillingLog from "./BillingLog";

const BillingList = () => {
  return (
    <div>
      <div className=" my-2  flex justify-center items-center gap-3 bg-white w-full rounded-md shadow  py-2 text-[#4b465cb4]">
        <div className=" flex justify-center items-center flex-row gap-4  w-[95%] px-5">
          <div className="flex flex-row justify-between items-center w-1/3 border-l-2 pl-4">
            <div className="flex flex-col">
              <div>165</div>
              <div>Invoices</div>
            </div>
            <div className="flex justify-center items-center rounded-md w-9 h-9 bg-[#4B465C14] ">
              <FiFileText className="w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-1/3 border-l-2 pl-4">
            <div className="flex flex-col">
              <div>$2.46k</div>
              <div>Paid</div>
            </div>
            <div className="flex justify-center items-center rounded-md w-9 h-9 bg-[#4B465C14] ">
              <IoCheckmarkDoneOutline className="w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-1/3 border-l-2 pl-4">
            <div className="flex flex-col">
              <div>$876</div>
              <div>Unpaid</div>
            </div>
            <div className="flex justify-center items-center rounded-md w-9 h-9 bg-[#4B465C14] ">
              <LiaBanSolid className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <BillingLog />
      </div>
    </div>
  );
};

export default BillingList;
