import React, { useState, useContext, useEffect } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { AdminContext } from "../../../../Context/AdminContext";
import baseURL from "../../../../APi/BaseUrl";
import { toast } from "react-toastify";
import {
  FaSun, FaTable, FaBed, FaWifi, FaUmbrellaBeach, FaShower, FaParking, FaSnowflake, FaCouch, FaSwimmer, FaFan, FaFire, FaTachometerAlt, FaCogs, FaPlug, FaSolarPanel, FaWind, FaBolt, FaUtensils, FaFish, FaTv, FaAnchor, FaCompass, FaToilet, FaSink, FaBath, FaWater, FaTrash, FaWrench
} from "react-icons/fa";

const Equipments = () => {
  const id = localStorage.getItem('id')
  const { createEquipment, boatId, navigate } = useContext(AdminContext); // Use the context and destructure boatId
  const [equipment, setEquipment] = useState({
    security: "",
    mainUse: [],
    comfort: [],
    energy: [],
    kitchen: [],
    leisure: [],
    navigation: [],
    sanitary: []
  });
  // get boat equipments if editing
  useEffect(() => {
    if (id) {
      const getBoatEquipments = async () => {
        try {
          const res = await baseURL('/equipment/get-boat-equipments/' + id)
          const { data: { equipments } } = res
          setEquipment({ ...equipments })
        } catch (error) {
          console.log(error);
        }
      }
      getBoatEquipments()
    }
  }, [id])
  const handleCheckboxChange = (category, value) => {
    setEquipment((prev) => {
      const updatedCategory = prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value];
      return { ...prev, [category]: updatedCategory };
    });
  };

  const handleRadioChange = (e) => {
    setEquipment({ ...equipment, security: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      try {
        const res = await baseURL.patch('/equipment/update-boat-equipments/' + id, equipment)
        toast.success('Equipments updated successfully');
        localStorage.removeItem('id')
        setTimeout(() => {
          navigate('/Dashboard/my-boats')
        }, 3000)
      } catch (error) {
        toast.error('Failed to update equipments')
      }
    }
    else {
      try {
        await createEquipment({ ...equipment ,boatId});
        toast.success('Equipments added successfully');
      } catch (error) {
        console.error(error);
        toast.error('Failed to add equipments');
      }
    }
  };

  const renderCheckbox = (category, label, icon) => (
    <label key={label} className="flex items-center gap-3">
      <input type="checkbox" checked={equipment[category].includes(label)} onChange={() => handleCheckboxChange(category, label)} />
      <span className="flex items-center gap-2">
        <span className="text-[#CBA557]">{icon}</span>
        {label}
      </span>
    </label>
  );

  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <form className="bg-white mx-2 py-8 px-4 sm:px-12 flex flex-col gap-10 text-[#4B465C]" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-8">
          <div className="font-medium text-xl">Equipment and Uses</div>

          {/* Security Equipment */}
          <div className="flex flex-col gap-4">
            <div className="font-light">Type of security equipment*</div>
            <div className="flex flex-wrap gap-4">
              {["Basic", "Coastal", "Inshore", "Semi-Offshore", "Offshore"].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input type="radio" name="security" value={type} checked={equipment.security === type} onChange={handleRadioChange} />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Main Use */}
          <div className="flex flex-col gap-4">
            <div className="font-medium">Main use (4 main uses maximum)</div>
            <div className="flex flex-wrap gap-5 text-sm font-light text-[#4B465C]">
              {["Full-day excursion", "Cruise", "Water sports", "Fishing", "Diving", "Regatta"].map((use) => (
                <label key={use} className="flex items-center gap-3">
                  <input type="checkbox" checked={equipment.mainUse.includes(use)} onChange={() => handleCheckboxChange("mainUse", use)} />
                  {use}
                </label>
              ))}
            </div>
          </div>

          {/* Comfort Equipment */}
          <div className="flex flex-col gap-4">
            <div className="font-medium">Comfort</div>
            <div className="flex flex-wrap gap-5 text-sm font-light text-[#4B465C]">
              {[
                { label: "Awning", icon: <FaUmbrellaBeach /> },
                { label: "Table", icon: <FaTable /> },
                { label: "Bedding", icon: <FaBed /> },
                { label: "Wifi and internet", icon: <FaWifi /> },
                { label: "Sundeck", icon: <FaSun /> },
                { label: "Deck shower", icon: <FaShower /> },
                { label: "Free parking on site", icon: <FaParking /> },
                { label: "A/C", icon: <FaSnowflake /> },
                { label: "Convertible saloon", icon: <FaCouch /> },
                { label: "Flybridge", icon: <FaSwimmer /> },
                { label: "Swim platform", icon: <FaSwimmer /> },
                { label: "Fans", icon: <FaFan /> },
                { label: "Heater", icon: <FaFire /> },
                { label: "Dodger", icon: <FaTachometerAlt /> },
                { label: "Outdoor cushions", icon: <FaCouch /> },
                { label: "Gangway", icon: <FaTachometerAlt /> },
                { label: "Towels", icon: <FaTachometerAlt /> },
                { label: "Cover", icon: <FaTachometerAlt /> },
                { label: "Davits", icon: <FaTachometerAlt /> },
                { label: "MP3 player", icon: <FaCogs /> },
                { label: "Bluetooth connection", icon: <FaCogs /> },
                { label: "DVD player", icon: <FaCogs /> },
                { label: "Teak cockpit", icon: <FaCogs /> },
                { label: "Teak deck", icon: <FaCogs /> },
                { label: "Outdoor fridge", icon: <FaCogs /> },
              ].map(({ label, icon }) => renderCheckbox("comfort", label, icon))}
            </div>
          </div>

          {/* Energy Equipment */}
          <div className="flex flex-col gap-4">
            <div className="font-medium">Energy</div>
            <div className=" flex flex-wrap gap-5 text-sm font-light text-[#4B465C]">
              {[
                { label: "Socket 220V", icon: <FaPlug /> },
                { label: "USB plug", icon: <FaPlug /> },
                { label: "Solar panel", icon: <FaSolarPanel /> },
                { label: "Windmill", icon: <FaWind /> },
                { label: "Generator", icon: <FaBolt /> },
              ].map(({ label, icon }) => renderCheckbox("energy", label, icon))}
            </div>
          </div>

          {/* Kitchen Equipment */}
          <div className="flex flex-col gap-4">
            <div className="font-medium">Kitchen</div>
            <div className="flex flex-wrap gap-5 text-sm font-light text-[#4B465C]">
              {[
                { label: "Cooking hob", icon: <FaUtensils /> },
                { label: "Fridge", icon: <FaUtensils /> },
                { label: "Freezer", icon: <FaUtensils /> },
                { label: "Sink", icon: <FaUtensils /> },
                { label: "BBQ", icon: <FaUtensils /> },
                { label: "Plancha", icon: <FaUtensils /> },
                { label: "Oven", icon: <FaUtensils /> },
                { label: "Gas stove", icon: <FaUtensils /> },
                { label: "Coffee maker", icon: <FaUtensils /> },
                { label: "Cooler", icon: <FaUtensils /> },
                { label: "Microwave", icon: <FaUtensils /> },
                { label: "Ice machine", icon: <FaUtensils /> },
                { label: "Dishwasher", icon: <FaUtensils /> },
              ].map(({ label, icon }) => renderCheckbox("kitchen", label, icon))}
            </div>
          </div>

          {/* Leisure Equipment */}
          <div className="flex flex-col gap-4">
            <div className="font-medium">Leisure</div>
            <div className="flex flex-wrap gap-5 text-sm font-light text-[#4B465C]">
              {[
                { label: "Wakeboard", icon: <FaFish /> },
                { label: "Swim ladder", icon: <FaSwimmer /> },
                { label: "Towable tube", icon: <FaFish /> },
                { label: "Water-ski", icon: <FaFish /> },
                { label: "Fishing gear", icon: <FaFish /> },
                { label: "Diving equipment", icon: <FaFish /> },
                { label: "Snorkeling equipment", icon: <FaFish /> },
                { label: "Stand up paddle", icon: <FaFish /> },
                { label: "TV", icon: <FaTv /> },
                { label: "Outdoor Speakers", icon: <FaFish /> },
                { label: "Rod holder", icon: <FaFish /> },
                { label: "Canoe or Kayak", icon: <FaFish /> },
                { label: "Fish finder", icon: <FaFish /> },
                { label: "Jet-ski", icon: <FaFish /> },
              ].map(({ label, icon }) => renderCheckbox("leisure", label, icon))}
            </div>
          </div>

          {/* Navigation Equipment */}
          <div className="flex flex-col gap-4">
            <div className="font-medium">Navigation</div>
            <div className="flex flex-wrap gap-5 text-sm font-light text-[#4B465C]">
              {[
                { label: "GPS", icon: <FaCompass /> },
                { label: "Sounder", icon: <FaAnchor /> },
                { label: "Spinnaker", icon: <FaAnchor /> },
                { label: "Electric windlass", icon: <FaAnchor /> },
                { label: "Dinghy", icon: <FaAnchor /> },
                { label: "Auto-pilot", icon: <FaAnchor /> },
                { label: "Outboard engine", icon: <FaAnchor /> },
                { label: "Bow thruster", icon: <FaAnchor /> },
                { label: "VHF", icon: <FaAnchor /> },
                { label: "AIS", icon: <FaAnchor /> },
                { label: "Safety net", icon: <FaAnchor /> },
                { label: "Electric winch", icon: <FaAnchor /> },
                { label: "Speedometer", icon: <FaAnchor /> },
                { label: "Anemometer", icon: <FaAnchor /> },
                { label: "Compass", icon: <FaAnchor /> },
                { label: "Lazy bag", icon: <FaAnchor /> },
                { label: "Lazy jack", icon: <FaAnchor /> },
                { label: "Safety harness", icon: <FaAnchor /> },
                { label: "Radar", icon: <FaCompass /> },
                { label: "Gennaker", icon: <FaAnchor /> },
                { label: "Code zero", icon: <FaAnchor /> },
              ].map(({ label, icon }) => renderCheckbox("navigation", label, icon))}
            </div>
          </div>

          {/* Sanitary Equipment */}
          <div className="flex flex-col gap-4">
            <div className="font-medium">Sanitary</div>
            <div className="flex flex-wrap gap-5 text-sm font-light text-[#4B465C]">
              {[
                { label: "WC", icon: <FaToilet /> },
                { label: "Shower", icon: <FaShower /> },
                { label: "Hot Water", icon: <FaWater /> },
                { label: "Fresh water tank", icon: <FaWater /> },
                { label: "Bathroom", icon: <FaBath /> },
                { label: "Water maker", icon: <FaWater /> },
                { label: "Washing machine", icon: <FaWrench /> },
                { label: "Dryer", icon: <FaWrench /> },
                { label: "Black water tank", icon: <FaTrash /> },
                { label: "Grey water tank", icon: <FaTrash /> },
              ].map(({ label, icon }) => renderCheckbox("sanitary", label, icon))}
            </div>
          </div>

          <button className="bg-[#CBA557] sm:w-max p-4 rounded-lg text-white">
            {!id ? "Add" : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Equipments;
