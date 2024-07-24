import { TbWheel } from "react-icons/tb";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}
const Filters = ({ filters, handleFilterChange, handleAccessoriesChange }) => {
  return (
    <div className="w-full md:w-[300px] bg-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-bold mb-4">Filters</h3>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Boat Type</label>
        <select
          value={filters.boatType}
          onChange={(e) => handleFilterChange("boatType", e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="">All Types</option>
          <option value="Motorboat">Motorboat</option>
          <option value="Sail Boat">Sail Boat</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Price Range</label>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={filters.priceRange}
          onChange={(event, newValue) =>
            handleFilterChange("priceRange", newValue)
          }
          max={100000}
          valueLabelDisplay="auto"
          color="#000"
          getAriaValueText={valuetext}
        />
        <span>
          ${filters.priceRange[0]} - ${filters.priceRange[1]}
        </span>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Length (meters)</label>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={filters.length}
          onChange={(event, newValue) => handleFilterChange("length", newValue)}
          max={100}
          valueLabelDisplay="auto"
          color="#000"
          getAriaValueText={valuetext}
        />
        <span>
          {filters.length[0]}m - {filters.length[1]}m
        </span>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Engine Power (HP)</label>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={filters.enginePower}
          onChange={(event, newValue) =>
            handleFilterChange("enginePower", newValue)
          }
          max={1000}
          valueLabelDisplay="auto"
          color="#000"
          getAriaValueText={valuetext}
        />
        <span>
          {filters.enginePower[0]}HP - {filters.enginePower[1]}HP
        </span>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Accessories</label>
        <div>
          {["Awning", "Wifi and internet", "Flybridge"].map((accessory) => (
            <div key={accessory} className="flex items-center">
              <input
                type="checkbox"
                value={accessory}
                checked={filters.accessories.includes(accessory)}
                onChange={() => handleAccessoriesChange(accessory)}
                className="mr-2"
              />
              <label>{accessory}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Location</label>
        <input
          type="text"
          value={filters.location}
          onChange={(e) => handleFilterChange("location", e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
    </div>
  );
};
export default Filters;
