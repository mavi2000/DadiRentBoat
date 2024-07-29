import React, { useState, useContext, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AdminContext } from "../../../../../Context/AdminContext.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import baseURL from "../../../../../APi/BaseUrl.js";

const RentalInformation = () => {
  const id = localStorage.getItem("id");
  const { rentBoat, error, boatId, navigate } = useContext(AdminContext);
  const [rentalData, setRentalData] = useState({
    boatId: "",
    BoatName: "",
    Port: "",
    city: "",
    minPrice: "",
    duration: "",
  });

  // const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    setRentalData((prevState) => ({
      ...prevState,
      boatId: boatId,
    }));
  }, [boatId]);
  useEffect(() => {
    if (id) {
      const getBoatRent = async () => {
        try {
          const res = await baseURL("/rent/get-boat-rent/" + id);
          const {
            data: { rent },
          } = res;
          setRentalData({ ...rent });
        } catch (error) {
          console.log(error);
        }
      };
      getBoatRent();
    }
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRentalData({
      ...rentalData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
      try {
        await rentBoat(rentalData);
        toast.success("Rent created successfully");
        navigate("/Dashboard/my-boats/photo"); // Use the navigate function to redirect
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          const errorMessage = error.response.data.error;
          toast.error(errorMessage);
        } else {
          toast.error("Failed to create boat");
        }
      }
    } else {
      try {
        const res = await baseURL.patch(
          "/rent/update-boat-rent/" + id,
          rentalData
        );
        localStorage.removeItem("id");
        setRentalData({ ...res.data.updatedRent });
        toast.success("Rent updated successfully!!!");
        setTimeout(() => {
          navigate("/Dashboard/my-boats");
        }, 3000);
      } catch (error) {
        console.log(error);
        toast.error("Failed to update boat!!!");
      }
    }
  };

  return (
    <div className="flex flex-col w-[95%] gap-20">
      <form
        className="flex flex-wrap flex-col w-[90%]  gap-5"
        onSubmit={handleSubmit}
      >
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
            className="border border-[#DBDADE] p-2 rounded-md text-sm outline-none"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-5  w-[100%]">
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">Place</div>
            <div className="w-[90%]">
              <input
                type="text"
                name="Port"
                value={rentalData.Port}
                onChange={handleChange}
                placeholder="Enter port"
                className="w-[100%] bg-transparent border border-gray-400 text-gray-400 py-3 px-4 rounded 1000px:text-sm 300px:text-xs outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%]">
            <div className="text-[#4B465C] font-light">City</div>
            <div className=" w-[90%] border border-[#DBDADE] text-gray-400 rounded">
              <input
                type="text"
                name="city"
                value={rentalData.city}
                onChange={handleChange}
                placeholder="Enter city"
                className="w-[100%] bg-transparent border-none py-3 px-4 rounded text-sm outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%]">
            <div className="text-[#4B465C] font-light">Minimum Price</div>
            <div className=" w-[90%] border border-[#DBDADE] text-gray-400 rounded">
              <input
                type="number"
                name="minPrice"
                value={rentalData.minPrice}
                onChange={handleChange}
                placeholder="Enter minimum price"
                className="w-[100%] bg-transparent border-none py-3 px-4 rounded text-sm outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%]">
            <div className="text-[#4B465C] font-light">Duration</div>
            <div className=" w-[90%] border border-[#DBDADE] text-gray-400 rounded">
              <select
                name="duration"
                value={rentalData.duration}
                onChange={handleChange}
                className="w-[100%] bg-transparent border-none py-3 px-4 rounded text-sm outline-none"
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
          <button
            type="submit"
            className="py-2 px-8 bg-[#cba557] text-sm text-white rounded-lg"
          >
            {id ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RentalInformation;
