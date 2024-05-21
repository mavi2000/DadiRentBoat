import React, { useContext, useState, useEffect } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { IoMdAdd } from "react-icons/io";
import ConditionPopup from "./ConditionPopup";
import { AdminContext } from "../../../../Context/AdminContext";

const TermsCondition = () => {
  const { getTermsAndConditions } = useContext(AdminContext);
  const [popup, setPopup] = useState(false);
  const [conditions, setConditions] = useState([]);

  const handelPopup = () => {
    setPopup(!popup);
  };

  const fetchConditions = async () => {
    try {
      const data = await getTermsAndConditions();
      setConditions(data);
    } catch (error) {
      console.error("Error fetching conditions:", error);
    }
  };

  // Fetch conditions on component mount
  useEffect(() => {
    fetchConditions();
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <div className="bg-white mx-2 py-8 px-12 flex flex-col gap-10 text-[#4B465C]">
        <div className="font-medium">Terms & Conditions</div>
        <table className="w-full">
          <tbody>
            {conditions.map((condition, index) => (
              <tr key={index} className="border-t-2 pt-10">
                <td className="w-full flex flex-col gap-5 py-4"> {/* Add padding here */}
                  <div className="flex justify-between">
                    <div className="font-bold">{condition.conditionName}</div>
                    <div className="flex gap-8">
                      <button className="py-1 px-4 border border-[#CBA557] text-[#CBA557] rounded-md text-sm font-medium">
                        Edit
                      </button>
                      <button className="py-1 px-4 border border-[#FF6347] text-[#FF6347] rounded-md text-sm font-medium">
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-[#8881a0]">{condition.description}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Add new condition form */}
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
            {popup && (
              <ConditionPopup
                onClose={() => {
                  setPopup(false);
                  fetchConditions(); // Refetch conditions after adding a new one
                }}
              />
            )}
          </div>
        </div>
        <div className="border-t-2 pt-10">
          <button type="button" className="border w-[15%] py-3 border-[#CBA557] text-sm font-semibold rounded-lg bg-[#CBA557] text-white justify-center flex items-center gap-3">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;
