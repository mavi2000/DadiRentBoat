import React from "react";

const DeletePopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[45%] bg-white flex items-center justify-center border  py-16">
        <div className="w-[80%]  flex flex-col gap-10">
          <div>Are you sure you want to delete?</div>
          <div className="flex gap-5">
            <button className="bg-red-500 text-white py-1 px-3 rounded-lg">
              Delete
            </button>
            <button
              onClick={onClose}
              className="bg-gray-200 text-gray-500 py-1 px-3 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
