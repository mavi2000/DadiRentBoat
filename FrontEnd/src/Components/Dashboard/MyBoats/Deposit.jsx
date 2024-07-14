import React, { useContext, useEffect, useState } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { AdminContext } from "../../../../Context/AdminContext";
import { toast } from "react-toastify";
import baseURL from "../../../../APi/BaseUrl";

const Deposit = () => {
  const id = localStorage.getItem('id');
  const { damageDeposit, boatId, navigate } = useContext(AdminContext);
  const [checkbox, setCheckbox] = useState(false);
  const [toggleSkipperDeposit, setToggleSkipperDeposit] = useState(false);
  const [depositData, setDepositData] = useState({
    type: [],
    amount: "",
    withoutSkipper: "",
    withSkipper: "",
    guaranteeAmount: "",
    manageDeposit: ""
  });

  useEffect(() => {
    if (id) {
      const getDeposit = async () => {
        try {
          const res = await baseURL('/demage/get-damage-deposit/' + id);
          const { data: { deposit } } = res;
          setDepositData(deposit);
        } catch (error) {
          console.log(error);
        }
      };
      getDeposit();
    }
  }, [id, boatId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "type") {
      setDepositData((prevState) => {
        const types = checked
          ? [...prevState.type, value]
          : prevState.type.filter((t) => t !== value);
        return {
          ...prevState,
          type: types,
        };
      });
    } else {
      setDepositData((prevState) => ({
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleCheckbox = (event) => {
    setCheckbox(event.target.checked);
    if (event.target.checked) {
      setDepositData({
        type: [],
        amount: "",
        withoutSkipper: "",
        withSkipper: "",
        guaranteeAmount: "",
        manageDeposit: ""
      });
    }
  };

  const handleSkipperToggle = (event) => {
    setToggleSkipperDeposit(event.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = { ...depositData };
    if (checkbox) {
      dataToSubmit.type = [];
      dataToSubmit.amount = "";
    }
    if (!id) {
      try {
        await damageDeposit(dataToSubmit);
        toast.success("Deposit amount successfully saved");
        setDepositData({ type: [], amount: "", withoutSkipper: "", withSkipper: "", guaranteeAmount: "", manageDeposit: "" });
        setCheckbox(false);
      } catch (error) {
        if (error.response) {
          console.error("Error Response:", error.response);
          toast.error(`Error: ${error.response.data.message || error.message}`);
        } else {
          console.error("Error:", error);
          toast.error("An unexpected error occurred");
        }
      }
    } else {
      try {
        const res = await baseURL.patch('/demage/update-damage-deposit/' + id, dataToSubmit);
        toast.success('Deposit updated successfully');
        localStorage.removeItem('id');
        setTimeout(() => {
          navigate('/Dashboard/my-boats');
        }, 3000);
      } catch (error) {
        toast.error('Failed to update deposit');
      }
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <div className="bg-white mx-2 py-8 mb-10 px-12 flex flex-col gap-10 text-[#4B465C]">
        <div className="font-medium">Damage Deposit</div>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={checkbox}
              onChange={handleCheckbox}
            />
            <div className="font-light">No security deposit required</div>
          </div>

          {!checkbox && (
            <>
              <div className="flex flex-col gap-2">
                <div className="font-light">Security deposit</div>
                <div className="border w-[30%] rounded-md flex items-center">
                  <input
                    className="px-3 w-[80%] py-3 bg-transparent"
                    name="amount"
                    type="number"
                    placeholder="Enter"
                    value={depositData.amount}
                    onChange={handleChange}
                  />
                  <span className="px-3">€</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={toggleSkipperDeposit}
                  onChange={handleSkipperToggle}
                />
                <div className="text-sm font-light">Different security deposit for rentals with a skipper</div>
              </div>

              {toggleSkipperDeposit && (
                <div className="flex gap-5">
                  <div className="flex flex-col gap-2">
                    <div className="font-light">Security deposit with a skipper</div>
                    <div className="border rounded-md flex items-center w-[350px]">
                      <input
                        className="px-3 w-[80%] py-3 bg-transparent"
                        name="withSkipper"
                        type="number"
                        placeholder="Enter"
                        value={depositData.withSkipper}
                        onChange={handleChange}
                      />
                      <span className="px-3">€</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-2">
                <div className="font-light">Security deposit without a skipper</div>
                <div className="border rounded-md flex items-center w-[350px]">
                  <input
                    className="px-3 w-[80%] py-3 bg-transparent"
                    name="withoutSkipper"
                    type="number"
                    placeholder="Enter"
                    value={depositData.withoutSkipper}
                    onChange={handleChange}
                  />
                  <span className="px-3">€</span>
                </div>
              </div>

              <p className="bg-orange-100 font- p-auto rounded font-light text-center px-4 py-4">Please note that you have indicated 1 € for your security deposit without skipper. This amount seems low.</p>

              <div className="flex items-start gap-4 font-light">
                <input
                  type="radio"
                  name="manageDeposit"
                  value="directly"
                  onChange={handleChange}
                  checked={depositData.manageDeposit === "directly"}
                  className="mt-1"
                />
                <div>
                  <div className="font-light">Security deposit managed directly</div>
                  <div className="font-light">
                    By indicating the types of bond you accept, you reduce the risk of last-minute cancellations
                  </div>
                </div>
              </div>

              {depositData.manageDeposit === "directly" && (
                <div className="flex flex-col gap-3 pl-8 ">
                  <div className="font-light">What type of bonds do you accept?</div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="type"
                      value="Check"
                      onChange={handleChange}
                      checked={depositData.type.includes("Check")}
                    />
                    <label className="font-light">Check</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="type"
                      value="Cash"
                      onChange={handleChange}
                      checked={depositData.type.includes("Cash")}
                    />
                    <label className="font-light">Cash</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="type"
                      value="Pre-Authorization"
                      onChange={handleChange}
                      checked={depositData.type.includes("Pre-Authorization")}
                    />
                    <label className="font-light">Pre-Authorization</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="type"
                      value="Other"
                      onChange={handleChange}
                      checked={depositData.type.includes("Other")}
                    />
                    <label className="font-light">Other</label>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-4">
                <input
                  type="radio"
                  name="manageDeposit"
                  value="samboat"
                  onChange={handleChange}
                  checked={depositData.manageDeposit === "samboat"}
                  className="mt-1"
                />
                <div>
                  <div className="font-light">Security deposit managed by Samboat</div>
                  <div className="font-light">
                    Via a bank pre-authorization
                  </div>
                </div>
              </div>

              {depositData.manageDeposit === "samboat" && (
                <div className="p-2 rounded">
                  <p className="bg-blue-100 p-2 rounded font-light text-center m-auto ">
                    SamBoat offers a service to guarantee the amount of your security deposit in the event of a claim, even if the renter is not solvent. Depending on the amount guaranteed, an additional commission is charged on all your bookings.
                  </p>
                  <div className="flex flex-col gap-3 mt-3 ">
                    <div className="font-light mt-10">I would like Samboat to guarantee the security deposit in the amount of:</div>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="guaranteeAmount"
                        value="0"
                        onChange={handleChange}
                        checked={depositData.guaranteeAmount === "0"}
                      />
                      <label className="font-light">0 € (+ 0% commission)      (Commission taken by Samboat: 18%)</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="guaranteeAmount"
                        value="1000"
                        onChange={handleChange}
                        checked={depositData.guaranteeAmount === "1000"}
                      />
                      <label className="font-light">1 000 € (+ 2% commission) (Commission taken by Samboat: 20%)</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="guaranteeAmount"
                        value="2000"
                        onChange={handleChange}
                        checked={depositData.guaranteeAmount === "2000"}
                      />
                      <label className="font-light">2 000 € (+ 3% commission) (Commission taken by Samboat: 21%)</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="guaranteeAmount"
                        value="5000"
                        onChange={handleChange}
                        checked={depositData.guaranteeAmount === "5000"}
                      />
                      <label className="font-light">5 000 € (+ 5% commission) (Commission taken by Samboat: 23%)</label>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          <button
            type="submit"
            className="bg-[#CBA557] w-[15%] py-4 rounded-lg text-white"
          >
            {id ? "Update" : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Deposit;
