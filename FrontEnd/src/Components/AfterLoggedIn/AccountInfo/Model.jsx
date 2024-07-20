

import React from 'react'

const Model = ({ isOpen, onClose, onConfirm, title, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <div className="mb-4">{children}</div>
          <div className="flex justify-end space-x-4">
            <button onClick={onClose} className="btn btn-secondary">Cancel</button>
            <button onClick={onConfirm} className="btn btn-danger">Deactivate</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Model;