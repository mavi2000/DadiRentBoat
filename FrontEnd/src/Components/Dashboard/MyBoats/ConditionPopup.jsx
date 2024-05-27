import React, { useState, useContext } from "react";
import { AdminContext } from "../../../../Context/AdminContext";

const ConditionPopup = ({ condition, onClose }) => {
  const { EditTermAndCondition } = useContext(AdminContext);
  const [conditionName, setConditionName] = useState(
    condition?.conditionName || ""
  );
  const [description, setDescription] = useState(condition?.description || "");

  const handleSave = async () => {
    const conditionData = {
      conditionId: condition._id,
      conditionName,
      description,
    };
    await EditTermAndCondition(conditionData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl mb-4">
          {condition ? "Edit Condition" : "Add Condition"}
        </h2>
        <input
          type="text"
          placeholder="Condition Name"
          value={conditionName}
          onChange={(e) => setConditionName(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <div className="flex justify-end gap-4">
          <button onClick={onClose} className="py-2 px-4 bg-gray-300 rounded">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="py-2 px-4 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConditionPopup;
