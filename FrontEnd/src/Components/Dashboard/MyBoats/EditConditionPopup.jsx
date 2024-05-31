import React, { useState, useContext } from "react";
import { AdminContext } from "../../../../Context/AdminContext";

const EditConditionPopup = ({ condition, onClose }) => {
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
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white w-[50%] p-8 flex flex-col gap-5">
        <h2>Edit Condition</h2>
        <div className="flex flex-col gap-2 text-sm">
          <label>Condition name</label>
          <select
            type="text"
            placeholder="Condition Name"
            value={conditionName}
            onChange={(e) => setConditionName(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          >
            <option value="">Select a condition</option>
            <option value="Cancellation Policy">Cancellation Policy</option>
            <option value="Terms of Service">Terms of Service</option>
          </select>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <div className="flex justify-start gap-4">
            <button
              onClick={handleSave}
              className="py-2 px-5 rounded-md text-white bg-[#CBA557]"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="border py-2 px-5 rounded-md bg-[#d6d8dc] text-[#898a8d]"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditConditionPopup;
