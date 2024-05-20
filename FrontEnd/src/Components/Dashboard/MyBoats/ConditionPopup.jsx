import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../../../Context/AdminContext";
import { toast } from "react-toastify";

const ConditionPopup = ({ onClose, onSave }) => {
  const { termCondition, error } = useContext(AdminContext);
  const [conditionData, setConditionData] = useState({
    conditionName: "",
    description: "",
  });
  const handelChange = (e) => {
    setConditionData({ ...conditionData, [e.target.name]: e.target.value });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCondition = await termCondition(conditionData);
      toast.success("Condition added Successfully");
      onSave(newCondition);
      onClose();
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        const errorMessage = error.response.data.error;
        toast.error(errorMessage);
      } else {
        toast.error("Failed to create boat");
      }
    }
  };
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white w-[50%] p-8">
        <form onSubmit={handelSubmit} className="flex flex-col gap-4 ">
          <div>New Condition</div>
          <div className="flex flex-col gap-2 text-sm">
            <label>Condition name</label>
            <select
              name="conditionName"
              value={conditionData.conditionName}
              onChange={handelChange}
              className="border py-2 rounded-md"
            >
              <option value="Cancellation Policy">Cancellation Policy</option>
              <option value="Terms of Service">Terms of Service</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <label>Description</label>
            <textarea
              name="description"
              value={conditionData.description}
              onChange={handelChange}
              className="border rounded-md"
              rows={4}
            ></textarea>
          </div>
          <div className="flex flex-row gap-5">
            <button
              type="submit"
              className=" py-2 px-5 rounded-md text-white bg-[#CBA557]"
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
        </form>
      </div>
    </div>
  );
};

export default ConditionPopup;
