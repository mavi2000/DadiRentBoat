import React, { useState, useContext } from "react";
import Calendar from "react-calendar";
import { AdminContext } from "../../../../Context/AdminContext";
import { toast } from "react-toastify";

const RatePopup = ({ onClose }) => {
  const { error, AddRate } = useContext(AdminContext);
  const [formData, setFormData] = useState({
    date: "",
    rateType: "",
    fullDayRate: "",
    halfDayMorningRate: "",
    halfDayEveningRate: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AddRate(formData);
      if (response.success) {
        toast.success("Rate Added successfully");
        onClose();
      } else {
        toast.error(response.message || "Failed to create rate");
      }
    } catch (error) {
      const errors = error?.response?.data?.error;
      if (Array.isArray(errors)) {
        errors.forEach((err) => {
          toast.error(err);
        });
      } else {
        toast.error(errors || "Failed to create boat");
      }
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative w-full max-w-4xl max-h-full overflow-y-auto bg-white rounded-lg shadow-lg p-10">
        <form onSubmit={handelSubmit} className="flex flex-col gap-5">
          <div className="text-lg font-medium">Add Period</div>
          <div className="text-sm font-light">Choose Date</div>
          <div className="flex items-center justify-between bg-white shadow-md rounded-md">
            <Calendar className="border-none bg-transparent" />
            <Calendar className="border-none bg-transparent" />
          </div>
          <div className="grid grid-cols-2 text-sm gap-5">
            <div className="flex flex-col gap-5 font-light text-sm">
              <div className="font-normal">Normal days Prices</div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <input type="checkbox" />
                  <div>Full Day</div>
                </div>
                <div className="flex items-center gap-5">
                  <div>Rates</div>
                  <div className="border w-[60%] rounded-md">
                    <select className="border-r py-3 px-2 w-[25%] bg-transparent">
                      <option>€</option>
                      <option>$</option>
                      <option>€</option>
                    </select>
                    <input
                      className="px-3 w-[75%] py-3 bg-transparent"
                      type="number"
                      name="fullDayRate"
                      value={formData.fullDayRate}
                      onChange={handelChange}
                      placeholder="Enter"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <input type="checkbox" />
                  <div>Half Day Morning</div>
                </div>
                <div className="flex items-center gap-5">
                  <div>Rates</div>
                  <div className="border w-[60%] rounded-md">
                    <select className="border-r py-3 px-2 w-[25%] bg-transparent">
                      <option>€</option>
                      <option>$</option>
                      <option>€</option>
                    </select>
                    <input
                      className="px-3 w-[75%] py-3 bg-transparent"
                      type="number"
                      placeholder="Enter"
                      name="halfDayMorningRate"
                      value={formData.halfDayMorningRate}
                      onChange={handelChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <input type="checkbox" />
                  <div>Half Day Evening</div>
                </div>
                <div className="flex items-center gap-5">
                  <div>Rates</div>
                  <div className="border w-[60%] rounded-md">
                    <select className="border-r py-3 px-2 w-[25%] bg-transparent">
                      <option>€</option>
                      <option>$</option>
                      <option>€</option>
                    </select>
                    <input
                      className="px-3 w-[75%] py-3 bg-transparent"
                      type="number"
                      name="halfDayEveningRate"
                      placeholder="Enter"
                      value={formData.halfDayEveningRate}
                      onChange={handelChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 font-light text-sm">
              <div className="font-normal">Weekend Prices</div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <input type="checkbox" />
                  <div>Full Day</div>
                </div>
                <div className="flex items-center gap-5">
                  <div>Rates</div>
                  <div className="border w-[60%] rounded-md">
                    <select className="border-r py-3 px-2 w-[25%] bg-transparent">
                      <option>€</option>
                      <option>$</option>
                      <option>€</option>
                    </select>
                    <input
                      className="px-3 w-[75%] py-3 bg-transparent"
                      type="number"
                      name="fullDayRate"
                      value={formData.fullDayRate}
                      onChange={handelChange}
                      placeholder="Enter"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <input type="checkbox" />
                  <div>Half Day Morning</div>
                </div>
                <div className="flex items-center gap-5">
                  <div>Rates</div>
                  <div className="border w-[60%] rounded-md">
                    <select className="border-r py-3 px-2 w-[25%] bg-transparent">
                      <option>€</option>
                      <option>$</option>
                      <option>€</option>
                    </select>
                    <input
                      className="px-3 w-[75%] py-3 bg-transparent"
                      type="number"
                      placeholder="Enter"
                      name="halfDayMorningRate"
                      value={formData.halfDayMorningRate}
                      onChange={handelChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <input type="checkbox" />
                  <div>Half Day Evening</div>
                </div>
                <div className="flex items-center gap-5">
                  <div>Rates</div>
                  <div className="border w-[60%] rounded-md">
                    <select className="border-r py-3 px-2 w-[25%] bg-transparent">
                      <option>€</option>
                      <option>$</option>
                      <option>€</option>
                    </select>
                    <input
                      className="px-3 w-[75%] py-3 bg-transparent"
                      type="number"
                      name="halfDayEveningRate"
                      placeholder="Enter"
                      value={formData.halfDayEveningRate}
                      onChange={handelChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex gap-4">
            <button
              type="submit"
              className="bg-[#CBA557] w-[15%] py-4 rounded-lg text-white"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="bg-[#d9dce1] w-[15%] py-4 rounded-lg text-[#A8AAAE]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RatePopup;
