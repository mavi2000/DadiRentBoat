import React, { useContext, useState } from 'react';
import { AdminContext } from '../../../../../Context/AdminContext.jsx';
import { toast } from 'react-toastify';

const BoatInformation = () => {
  const { createBoat, error } = useContext(AdminContext);
  const [formData, setFormData] = useState({
    type: '',
    brand: '',
    model: '',
    year: 2017,
    region: 'Atlantica',
    boardingCapacity: 20,
    totalEnginePowerHP: 2017,
    lengthMeters: 5,
    telephone: '7183638911',
    waterTankLiters: 20,
    fuelTankLiters: 17,
    droughtMeters: 10,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBoat(formData);
      toast.success('Boat created successfully');
    } catch (error) {
      const errors = error?.response?.data?.error;
      if (Array.isArray(errors)) {
        errors.forEach(err => {
          toast.error(err);
        });
      } else {
        toast.error(errors || 'Failed to create boat');
      }
    }
  };

  return (
    <div className="flex flex-col w-[100%] gap-20">
      <div className="flex justify-center flex-col gap-4 w-[100%]">
        <div>Type of Boat</div>
        <div className="grid 1200px:grid-cols-6 500px:grid-cols-3 500px:grid-rows-3 300px:grid-cols-2 300px:grid-rows-4 1200px:gap-3 300px:gap-4 w-[90%] justify-between">
          {/* Checkbox items */}
          {['Sail Boat', 'Motorboat', 'Ruber dinghy', 'Jet Skis', 'Luxury yachts', 'Houseboat/Riverboat', 'Catamaran/Trimaran'].map((item, index) => (
            <label key={index} className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <div className="font-normal text-[#676767] 500px:text-sm 300px:text-xs">{item}</div>
            </label>
          ))}
        </div>
      </div>
      <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
        <div className="grid 600px:grid-cols-3 600px:grid-rows-4 300px:grid-cols-2 1000px:text-sm 300px:text-xs gap-8 flex-row justify-between">
        <div className="flex flex-col gap-2 w-[100%] font-normal">
  <div className="text-[#4B465C]">Type of boat</div>
  <div className="w-[90%]">
  <input
    type="text"
    name="type"
    value={formData.type}
    onChange={handleChange}
    placeholder="Enter boat type"
    className="w-[100%] bg-transparent border border-gray-400 text-gray-400 py-3 px-4 rounded 1000px:text-sm 300px:text-xs"
  />
</div>
</div>


<div className="flex flex-col gap-2 w-[100%] font-normal">
  <div className="text-[#4B465C]">Boat Brand</div>
  <div className="w-[90%]">
    <input
      type="text"
      name="brand"
      value={formData.brand}
      onChange={handleChange}
      placeholder="Enter boat brand"
      className="w-[100%] bg-transparent border border-gray-400 text-gray-400 py-3 px-4 rounded 1000px:text-sm 300px:text-xs"
    />
  </div>
</div>



<div className="flex flex-col gap-2 w-[100%] font-normal">
  <div className="text-[#4B465C]">Model</div>
  <div className="w-[90%]">
    <input
      type="text"
      name="model"
      value={formData.model}
      onChange={handleChange}
      placeholder="Enter model"
      className="w-[100%] bg-transparent border border-gray-400 text-gray-400 py-3 px-4 rounded 1000px:text-sm 300px:text-xs"
    />
  </div>
</div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">Year</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs">
              <input
                type="number"
                name="year"
                min={2010}
              
                value={formData.year}
                onChange={handleChange}
                className="w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">Region</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs">
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="w-[100%] bg-transparent border-none py-3 px-4 rounded 1000px:text-sm 300px:text-xs"
              >
                <option value="Livorno">Livorno, Italy</option>
                <option value="Germany">Germany</option>
                <option value="England">England</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">Boarding Capacity</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs">
              <input
                type="number"
                name="boardingCapacity"
                min={0}
              
                value={formData.boardingCapacity}
                onChange={handleChange}
                className="w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">Total Engine power (in hp)</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs">
              <input
                type="number"
                name="totalEnginePowerHP"
           
                value={formData.totalEnginePowerHP}
                onChange={handleChange}
                className="w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">Length (in meters)</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs">
              <input
                type="float"
                name="lengthMeters"
                min={0}
               
                value={formData.lengthMeters}
                onChange={handleChange}
                className="w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">Telephone</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs">
              <input
                type="text"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">Water Tank (in liter)</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs">
              <input
                type="number"
                name="waterTankLiters"
                min={0}
           
                value={formData.waterTankLiters}
                onChange={handleChange}
                className="w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">Fuel Tank (in liter)</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs">
              <input
                type="number"
                name="fuelTankLiters"
                min={0}
                value={formData.fuelTankLiters}
                onChange={handleChange}
                className="w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">Drought (in meters)</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs">
              <input
                type="number"
                name="droughtMeters"
                min={0}
                value={formData.droughtMeters}
                onChange={handleChange}
                className="w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
        </div>
        <div>
          <button type="submit" className="py-3 px-8 bg-[#cba557] text-sm text-white rounded-lg">
            Next
          </button>
        </div>
        {error && <div className="text-red-500">{error}</div>}
      </form>
    </div>
  );
};

export default BoatInformation;
