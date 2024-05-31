import React, { useContext, useState, useEffect } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { AdminContext } from "../../../../Context/AdminContext";
import { toast } from "react-toastify";

const Insurance = () => {
  const { Insurances, boatId } = useContext(AdminContext);
  const [insuranceData, setInsuranceData] = useState({
    currentInsurer: "",
    amountDeductible: "",
    insuredValueOfBoat: "",
    boatRegistration: "",
  });

  useEffect(() => {
    setInsuranceData((prevState) => ({
      ...prevState,
      boatId: boatId,
    }));
  }, [boatId]);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setInsuranceData({ ...insuranceData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Insurances(insuranceData);
      toast.success("Insurance successfully saved");
      setInsuranceData({
        boatId: boatId,
        currentInsurer: "",
        amountDeductible: "",
        insuredValueOfBoat: "",
        boatRegistration: "",
      });
    } catch (error) {
      if (error.response) {
        console.error("Error Response:", error.response);
        toast.error(`Error: ${error.response.data.message || error.message}`);
      } else {
        console.error("Error:", error);
        toast.error("An unexpected error occurred");
      }
    }
  }
  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <form
        onSubmit={handleSubmit}
        className="bg-white mx-2 py-8 px-14 text-[#4B465C]"
      >
        <div className="w-[80%] flex flex-col gap-10">
          <div className="font-medium">Insurance</div>
          <div className="gap-4 flex flex-col">
            <div className="font-normal text-sm">
              Click below to declare that you are in compliance with your
              insurance obligations
            </div>
            <div className="font-medium text-center py-2 rounded-sm text-sm bg-[#CBA55714]">
              My boat is insured
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>Who is your current insurer?</label>
            <input
              type="text"
              name="currentInsurer"
              value={insuranceData.currentInsurer}
              onChange={handelChange}
              placeholder="Name of your Insurer"
              className="border p-3 rounded-md font-light"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div>Amount of the deductible</div>
            <div className="border   rounded-md">
              <select className="border-r py-3 px-2 w-[10%] bg-transparent">
                <option>€</option>
                <option>$</option>
                <option>€</option>
              </select>
              <input
                className="px-3 w-[90%] py-3 bg-transparent"
                type="number"
                name="amountDeductible"
                value={insuranceData.amountDeductible}
                onChange={handelChange}
                placeholder="Enter"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Insured value of your boat</div>
            <div className="border rounded-md">
              <select className="border-r py-3 px-2 w-[10%] bg-transparent">
                <option>€</option>
                <option>$</option>
                <option>€</option>
              </select>
              <input
                className="px-3 w-[90%] py-3 bg-transparent"
                type="number"
                name="insuredValueOfBoat"
                value={insuranceData.insuredValueOfBoat}
                onChange={handelChange}
                placeholder="Enter"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>Boat registration</label>
            <input
              type="text"
              name="boatRegistration"
              value={insuranceData.boatRegistration}
              onChange={handelChange}
              placeholder="Name of your Insurer"
              className="border p-3 rounded-md font-light"
            />
            <div className="text-sm">
              With this self-certification I confirm that I am in compliance
              with the insurance obligations in force in my country
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#CBA557] w-[15%] py-4 rounded-lg text-white"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Insurance;
