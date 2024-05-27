import React, { useState, useContext } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { AdminContext } from "../../../../Context/AdminContext";

const Equipments = () => {
  const { createEquipment, boatId } = useContext(AdminContext); // Use the context and destructure boatId
 console.log("boatId",boatId)
 
  const [equipment, setEquipment] = useState({
    comfort: [],
    navigation: [],
    services: [],
    energy: []
  });

  const handleCheckboxChange = (category, value) => {
    setEquipment((prev) => {
      const updatedCategory = prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value];
      return { ...prev, [category]: updatedCategory };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEquipment({ ...equipment, boatId });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <form className="bg-white mx-2 py-8 px-12 flex flex-col gap-10 text-[#4B465C]" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-8 w-[80%]">
          <div className="font-medium">Equipment and uses</div>
          
          {["comfort", "navigation", "services", "energy"].map((category) => (
            <div key={category} className="flex flex-col gap-4">
              <div className="flex items-center justify-between font-light">
                <div className="capitalize">{category}</div>
                <button type="button" className="text-[#CBA557]">Add more</button>
              </div>
              <div className="grid grid-cols-3 gap-5 text-sm font-light text-[#4B465C]">
                {["Furling mainsail", "Furling genoa", "Double rudder with wheels", "Full battened mainsail", "Genoa on carabiner", "Single wheel rudder", "Semi-lateral mainsail", "Tiller rudder"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <input type="checkbox" onChange={() => handleCheckboxChange(category, item)} />
                    <label>{item}</label>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <button className="bg-[#CBA557] w-[15%] py-4 rounded-lg text-white">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Equipments;
