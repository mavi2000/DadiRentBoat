import React from "react";

const ConditionPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white w-[50%] p-8">
        <form className="flex flex-col gap-4">
          <div>New Condition</div>
          <div className="flex flex-col gap-2 text-sm">
            <label>Condition name</label>
            <select className="border py-2 rounded-md">
              <option>Cancellation Policy</option>
              <option>Cancellation Policy</option>
              <option>Cancellation Policy</option>
              <option>Cancellation Policy</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <label>Description</label>
            <textarea className="border rounded-md" rows={4}></textarea>
          </div>
          <div className="flex flex-row gap-5">
            <button className=" py-2 px-5 rounded-md text-white bg-[#CBA557]">
              Save
            </button>
            <button
              onClick={onClose}
              className="border py-2 px-5 rounded-md bg-[#d6d8dc] text-[#898a8d]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConditionPopup;
