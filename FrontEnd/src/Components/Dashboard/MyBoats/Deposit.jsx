import React, { useContext, useEffect, useState } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { AdminContext } from "../../../../Context/AdminContext";
import { toast } from "react-toastify";
import baseURL from "../../../../APi/BaseUrl";

const Deposit = () => {
  const id = localStorage.getItem('id')
  const { damageDeposit, boatId, navigate } = useContext(AdminContext);
  const [checkbox, setCheckbox] = useState(false);
  const [depositData, setDepositData] = useState({
    type: "",
    amount: "",
  });
  useEffect(() => {
    if (id) {
      const getDeposit = async () => {
        try {
          const res = await baseURL('/demage/get-damage-deposit/' + id)
          const { data: { deposit } } = res
          setDepositData(deposit)
        } catch (error) {
          console.log(error);
        }
      }
      getDeposit()
    }
  }, [])
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "type") {
      if (checked) {
        setDepositData({ ...depositData, [name]: value });
      } else {
        setDepositData({ ...depositData, [name]: "" });
      }
    } else if (name === "amount") {
      setDepositData({ ...depositData, [name]: value.toString() }); // Convert amount to string
    } else {
      setDepositData({ ...depositData, [name]: value });
    }
  };

  const handleCheckbox = (event) => {
    setCheckbox(event.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
      try {
        await damageDeposit({ ...depositData, boatId });
        toast.success("Deposit amount successfully saved");
        setDepositData({ type: "", amount: "" });
        setCheckbox(false);
      } catch (error) {
        if (error.response) {
          console.error("Error Response:", error.response); // Log the error response for debugging
          toast.error(`Error: ${error.response.data.message || error.message}`);
        } else {
          console.error("Error:", error); // Log the error for debugging
          toast.error("An unexpected error occurred");
        }
      }
    } else {
      try {
        const res = await baseURL.patch('/demage/update-damage-deposit/' + id, depositData)
        toast.success('Deposit updated successfully');
        localStorage.removeItem('id')
        // setDepositData({ ...res.data.updatedDeposit })
        setTimeout(() => {
          navigate('/Dashboard/my-boats')
        }, 3000)
      } catch (error) {
        toast.error('Failed to update deposit')
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
              onChange={(e) => setCheckbox(e.target.checked)}
            />
            <div className="text-sm">No damage deposit required</div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Damage Deposit</div>
            <div className="border w-[30%] rounded-md">
              <select
                className="border-r py-3 px-2 w-[20%] bg-transparent"
                name="currency"
                onChange={handleChange}
              >
                <option value="EUR">€</option>
                <option value="USD">$</option>
                <option value="GBP">£</option>
              </select>
              <input
                className="px-3 w-[80%] py-3 bg-transparent"
                name="amount"
                type="text" // Keep type as text
                placeholder="Enter"
                value={depositData.amount}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              checked={checkbox}
              onChange={handleCheckbox}
              className="mt-1"
            />
            <div>
              <div>Deposit managed directly</div>
              <div className="font-light">
                By indicating the types of deposits accepted, you reduce the
                risk of last-minute cancellations
              </div>
            </div>
          </div>
          {checkbox && (
            <div className="flex flex-col gap-3 pl-8">
              <div>What type of deposits do you accept?</div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="type"
                  value="Check"
                  onChange={handleChange}
                  checked={depositData.type === "Check"}
                />
                <label>Check</label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="type"
                  value="Cash"
                  onChange={handleChange}
                  checked={depositData.type === "Cash"}
                />
                <label>Cash</label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="type"
                  value="Card preauthorization"
                  onChange={handleChange}
                  checked={depositData.type === "Card preauthorization"}
                />
                <label>Card preauthorization</label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="type"
                  value="Other"
                  onChange={handleChange}
                  checked={depositData.type === "Other"}
                />
                <label>Other</label>
              </div>
            </div>
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
