import React from 'react';

const DeletePopup = ({ onDelete, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl mb-4">Delete Condition</h2>
        <p>Are you sure you want to delete this condition?</p>
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={onClose}
            className="py-2 px-4 bg-gray-300 rounded"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="py-2 px-4 bg-red-600 text-white rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
