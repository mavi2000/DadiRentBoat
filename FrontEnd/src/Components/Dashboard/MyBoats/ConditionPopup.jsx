import React, { useContext, useState, useEffect } from "react";
import { AdminContext } from "../../../../Context/AdminContext";
import { toast } from "react-toastify";

const ConditionPopup = ({ condition, onClose }) => {
  const { addTermAndCondition } = useContext(AdminContext);
  const { conditionName, description } = condition || {};

  const [conditionData, setConditionData] = useState({
    conditionName: conditionName || "",
    description: description || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConditionData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTermAndCondition(conditionData);
      toast.success("Condition added successfully");
      onClose();
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        const errorMessage = error.response.data.error;
        toast.error(errorMessage);
      } else {
        toast.error("Failed to add condition");
      }
    }
  };
  console.log("Condition Data:", conditionData);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white w-[50%] p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h2>New Condition</h2>
          <div className="flex flex-col gap-2 text-sm">
            <label>Condition name</label>
            <select
              name="conditionName"
              value={conditionData.conditionName}
              onChange={handleChange}
              className="border py-2 rounded-md"
            >
              <option value="">Select a condition</option>
              <option value="Cancellation Policy">Cancellation Policy</option>
              <option value="Terms of Service">Terms of Service</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <label>Description</label>
            <textarea
              name="description"
              value={conditionData.description}
              onChange={handleChange}
              className="border rounded-md"
              rows={4}
            ></textarea>
          </div>
          <div className="flex flex-row gap-5">
            <button
              type="submit"
              className="py-2 px-5 rounded-md text-white bg-[#CBA557]"
            >
              Save
            </button>
            <button
              type="button"
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
