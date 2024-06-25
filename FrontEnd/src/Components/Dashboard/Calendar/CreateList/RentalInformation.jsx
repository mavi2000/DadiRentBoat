import React, { useState, useContext, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AdminContext } from '../../../../../Context/AdminContext.jsx';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook



const RentalInformation = () => {
  const { rentBoat, error, boatId } = useContext(AdminContext);
  const [rentalData, setRentalData] = useState({
    boatId: "",
    BoatName: "",
    Port: "",
    city: "",
    minPrice: "",
    duration: "",
  });

  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    setRentalData(prevState => ({
      ...prevState,
      boatId: boatId
    }));
  }, [boatId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRentalData({
      ...rentalData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await rentBoat(rentalData);
      toast.success('Rent created successfully');
    navigate("/Dashboard/my-boats/photo"); // Use the navigate function to redirect
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        const errorMessage = error.response.data.error;
        toast.error(errorMessage);
      } else {
        toast.error('Failed to create boat');
      }
    }
  };

  return (
    <div className="flex flex-col w-[95%] gap-20">
      <form className="flex flex-wrap flex-col w-[90%]  gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-normal text-[#4b465c]">
            Model or name of the boat
          </label>
          <input
            type="text"
            required
            autoComplete="off"
            name="BoatName"
            value={rentalData.BoatName}
            onChange={handleChange}
            placeholder="Write boat name"
            className="border border-[#DBDADE] p-2 rounded-md text-sm"
          />
        </div>
        <div className="grid grid-cols-2 gap-5  w-[100%]">
          <div className="flex flex-col gap-2 w-[100%]">
            <div className="text-[#4B465C] font-light">Place</div>
            <div className=" w-[80%] border border-[#DBDADE] text-gray-400 rounded">
              <select
                name="Port"
                value={rentalData.Port}
                onChange={handleChange}
                className="w-[100%] bg-transparent border-none py-3 px-4 rounded text-sm"
              >
                <option value="">Select a port</option>
                <option value="Livorno">Livorno, Italy</option>
                <option value="Germany">Germany</option>
                <option value="England">England</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%]">
            <div className="text-[#4B465C] font-light">City</div>
            <div className=" w-[80%] border border-[#DBDADE] text-gray-400 rounded">
              <input
                type="text"
                name="city"
                value={rentalData.city}
                onChange={handleChange}
                placeholder="Enter city"
                className="w-[100%] bg-transparent border-none py-3 px-4 rounded text-sm"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%]">
            <div className="text-[#4B465C] font-light">Minimum Price</div>
            <div className=" w-[80%] border border-[#DBDADE] text-gray-400 rounded">
              <input
                type="number"
                name="minPrice"
                value={rentalData.minPrice}
                onChange={handleChange}
                placeholder="Enter minimum price"
                className="w-[100%] bg-transparent border-none py-3 px-4 rounded text-sm"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%]">
            <div className="text-[#4B465C] font-light">Duration</div>
            <div className=" w-[80%] border border-[#DBDADE] text-gray-400 rounded">
              <select
                name="duration"
                value={rentalData.duration}
                onChange={handleChange}
                className="w-[100%] bg-transparent border-none py-3 px-4 rounded text-sm"
              >
                <option value="">Select duration</option>
                <option value="Full Day">Full Day</option>
                <option value="Half Day morning">Half Day morning</option>
                <option value="Half Day Evening">Half Day Evening</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <button type="submit" className="py-2 px-8 bg-[#cba557] text-sm text-white rounded-lg">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default RentalInformation;
