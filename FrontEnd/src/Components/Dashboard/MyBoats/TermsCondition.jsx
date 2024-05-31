import React, { useContext, useState, useEffect } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { IoMdAdd } from "react-icons/io";
import ConditionPopup from "./ConditionPopup";
import { AdminContext } from "../../../../Context/AdminContext";
import DeletePopup from "./DeletePopup";
import EditConditionPopup from "./EditConditionPopup";
const TermsCondition = () => {
  const {
    getTermsAndConditions,
    deleteCondition,
    EditTermAndCondition,
    DeleteTermAndCondition,
  } = useContext(AdminContext);
  const [popup, setPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [conditionData, setConditionData] = useState(null);
  const [conditions, setConditions] = useState([]);
  const [deleteConditionId, setDeleteConditionId] = useState(null);

  const handelDeletePopup = (conditionId) => {
    console.log("Condition ID to delete:", conditionId); // Log the condition ID
    setDeleteConditionId(conditionId);
    setDeletePopup(true);
  };

  const handelEditPopup = (condition) => {
    setConditionData(condition);
    setEditPopup(true);
  };

  const handelPopup = () => {
    setConditionData(null);
    setPopup(true);
  };

  const fetchConditions = async () => {
    try {
      const data = await getTermsAndConditions();
      setConditions(data);
    } catch (error) {
      console.error("Error fetching conditions:", error);
    }
  };

  useEffect(() => {
    fetchConditions();
  }, []);

  const handleDeleteCondition = async () => {
    console.log("Deleting condition with ID:", deleteConditionId); // Log the delete condition ID
    try {
      await DeleteTermAndCondition(deleteConditionId);
      fetchConditions();
      setDeletePopup(false);
    } catch (error) {
      console.error("Error deleting condition:", error);
    }
  };

  console.log("conditions", conditions);

  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <div className="bg-white mx-2 py-8 px-12 flex flex-col gap-10 text-[#4B465C]">
        <div className="font-medium">Terms & Conditions</div>
        <table className="w-full">
          <tbody>
            {Array.isArray(conditions) &&
              conditions.map((condition, index) => (
                <tr key={index} className="border-t-2 pt-10">
                  <td className="w-full flex flex-col gap-5 py-4">
                    <div className="flex justify-between">
                      <div className="font-bold">
                        {condition?.conditionName}
                      </div>
                      <div className="flex gap-8">
                        <button
                          onClick={() => handelEditPopup(condition)}
                          className="py-1 px-4 border border-[#CBA557] text-[#CBA557] rounded-md text-sm font-medium"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handelDeletePopup(condition._id)}
                          className="py-1 px-4 border border-[#FF6347] text-[#FF6347] rounded-md text-sm font-medium"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="text-sm text-[#8881a0]">
                      {condition?.description}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="border-t-2 pt-10">
          <div className="w-[80%] flex flex-col gap-5">
            <button
              type="button"
              onClick={handelPopup}
              className="border w-[30%] py-3 border-[#CBA557] text-sm font-semibold rounded-lg text-[#CBA557] justify-center flex items-center gap-3"
            >
              <IoMdAdd className="text-lg" />
              Add a new Condition
            </button>
          </div>
        </div>
        <div className="border-t-2 pt-10">
          <button
            type="button"
            className="border w-[15%] py-3 border-[#CBA557] text-sm font-semibold rounded-lg bg-[#CBA557] text-white justify-center flex items-center gap-3"
          >
            Save
          </button>
        </div>
      </div>
      {popup && (
        <ConditionPopup
          onClose={() => {
            setPopup(false);
            fetchConditions();
          }}
        />
      )}
      {editPopup && (
        <EditConditionPopup
          condition={conditionData}
          onClose={() => {
            setEditPopup(false);
            fetchConditions();
          }}
        />
      )}

      {deletePopup && (
        <DeletePopup
          onDelete={handleDeleteCondition}
          onClose={() => setDeletePopup(false)}
        />
      )}
    </div>
  );
};

export default TermsCondition;
