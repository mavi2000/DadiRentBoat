import React, { useContext, useEffect, useState } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { FiInfo } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { AdminContext } from "../../../../Context/AdminContext";
import { toast } from "react-toastify";
import baseURL from "../../../../APi/BaseUrl";

const Information = () => {
  const id = localStorage.getItem('id')
  const { boatDescription, boatId, navigate } = useContext(AdminContext);
  const [descriptionData, setDescriptionData] = useState({
    boatType: "",
    rentalType: { bareBoat: false, withoutSkipper: false },
    details: {
      modelOrName: "",
      descriptionItalian: "",
      descriptionEnglish: "",
    },
    capacity: {
      boardingCapacity: 0,
      brand: "",
      model: "",
      year: 2000,
      geographicArea: "",
    },
    motorization: { numberOfEngines: 0, enginePowerHP: 0 },
    fuel: { gas: false, electric: false, diesel: false, ethanol: false },
    fuelCapacityLiters: 0,
    draftMeters: 0,
    widthMeters: 0,
    lengthMeters: 0,
  });
  // load description data while editing
  useEffect(() => {
    if (id) {
      const getBoatDescription = async () => {
        try {
          const res = await baseURL('/decription/get-boat-description/' + id)
          const { data: { description } } = res
          setDescriptionData({ ...description })
        } catch (error) {
          console.log(error);
        }
      }
      getBoatDescription()
    }
  }, [])
  const handelNestedChange = (e, group) => {
    const { name, value, type, checked } = e.target;
    setDescriptionData((prevState) => ({
      ...prevState,
      [group]: {
        ...prevState[group],
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDescriptionData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
      try {
        const payload = {
          ...descriptionData,
          boatId, // Include boatId in the payload
        };
        await boatDescription(payload);
        toast.success("Information successfully saved");
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
        const res = await baseURL.patch('/decription/update-boat-description/' + id, descriptionData)
        toast.success('Description updated successfully');
        localStorage.removeItem('id')
        // setDescriptionData({ ...res.data.updatedDescription })
        setTimeout(() => {
          navigate('/Dashboard/my-boats')
        }, 3000)
      } catch (error) {
        toast.error('Failed to update description')
      }
    }
  };
  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <form
        onSubmit={handelSubmit}
        className="bg-white mx-2 py-8 px-12 flex flex-col gap-10 text-[#4B465C]"
      >
        <div className="font-medium">Information</div>
        <div className="flex flex-col gap-2">
          <div>Types of Boat</div>
          <div className="grid 1400px:grid-cols-6 1200px:grid-cols-4 300px:grid-cols-3 gap-4 w-[88%] text-sm">
            {[
              "Sail Boat",
              "Motorboat",
              "Ruber dinghy",
              "Jet Skis",
              "Luxury yachts",
              "Houseboat/Riverboat",
              "Catamaran/Trimaran",
            ].map((boat, index) => (
              <div key={index} className="flex gap-3">
                <input type="checkbox" className="" name={`boatType${index}`} />
                <div className="font-light">{boat}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[80%]">
  <label>Type of boat</label>
  <input
    type="text"
    name="boatType"
    value={descriptionData.boatType}
    onChange={handleChange}
    placeholder="Enter the type of boat"
    className="border py-3 rounded-md px-3 font-light"
  />
</div>
        <div className="flex flex-col gap-6">
          <div>Type of Rental</div>
          <div className="flex flex-row gap-3 items-start">
            <input
              name="bareBoat"
              onChange={(e) => handelNestedChange(e, "rentalType")}
              type="checkbox"
              className="mt-1"
              checked={descriptionData.rentalType.bareBoat}
            />
            <div className="text-sm">
              <div>Bear Boat (without skipper)</div>
              <div className="font-light">
                The customer is the person in charge of the ship; The boat is
                rented with the "boat alone" formula (without skipper) Boat
                without a license
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-start">
            <input
              name="withoutSkipper"
              onChange={(e) => handelNestedChange(e, "rentalType")}
              type="checkbox"
              className="mt-1"
              checked={descriptionData.rentalType.withoutSkipper}
            />
            <div className="text-sm">
              <div>With skipper</div>
              <div className="font-light">
                The person in charge of the boat is the skipper/owner/owner. For
                the customer, only relaxation!
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#CBA55714] p-4 flex items-center gap-3 w-[60%] rounded-md">
          <FiInfo className="text-[#CBA557]" />
          <div className="font-medium text-[#4B465C]">
            New:
            <span className="font-light">
              Skipper rates are now managed in the
            </span>
            <span className="text-[#CBA557]"> Extra Options.</span>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-[80%]">
          <div>Details</div>
          <div className="flex flex-col gap-3">
            <label>Model or name of the boat</label>
            <input
              name="modelOrName"
              value={descriptionData.details.modelOrName}
              onChange={(e) => handelNestedChange(e, "details")}
              placeholder="Write boat name"
              className="border p-3 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>Description Italian</label>
            <textarea
              name="descriptionItalian"
              value={descriptionData.details.descriptionItalian}
              onChange={(e) => handelNestedChange(e, "details")}
              rows={4}
              className="border rounded-md"
            ></textarea>
            <div className="text-xs">
              your description is automatically translated based on the user's
              country of origin. You can still add your own translation, which
              will replace the automatic translation.
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="text-[#4B465C] font-light">
              Optional: To add a translation of the description
            </div>
            <div className="flex gap-5">
              <select className="border p-3 w-[45%] font-light text-[#4B465C] text-sm rounded-md">
                <option>Select Language</option>
                <option>English</option>
                <option>Italian</option>
                <option>Germen</option>
                <option>Spanish</option>
              </select>
              <button className="flex items-center gap-4 border border-[#CBA557] w-[30%] rounded-lg text-[#CBA557] justify-center font-semibold">
                <IoAddOutline className=" text-lg" />
                ADD
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <label>Description English (US)</label>
              <textarea
                name="descriptionEnglish"
                value={descriptionData.details.descriptionEnglish}
                onChange={(e) => handelNestedChange(e, "details")}
                rows={4}
                className="border rounded-md"
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between ">
              <div>Capacity</div>
              <MdDelete className="text-xl text-[#CBA557]" />
            </div>
            <div className="flex flex-col gap-2">
              <label>Boarding capacity</label>
              <input
                name="boardingCapacity"
                value={descriptionData.capacity.boardingCapacity}
                onChange={(e) => handelNestedChange(e, "capacity")}
                type="number"
                placeholder="Enter"
                className="border w-[47%] p-3 rounded-md font-light"
              />
            </div>
            <div className="grid grid-cols-2 gap-9">
              {/* <div className="flex flex-col gap-2">
                <label>Brand of the boat</label>
                <select
                  name="brand"
                  value={descriptionData.capacity.brand}
                  onChange={(e) => handelNestedChange(e, "capacity")}
                  className="border p-3 rounded-md font-light"
                >
                  <option>Mitsubishi</option>
                  <option>Honda</option>
                  <option>Jakoba</option>
                </select>
              </div> */}
            <div className="flex flex-col gap-2">
  <label>Brand of the boat</label>
  <input
    type="text"
    name="brand"
    value={descriptionData.capacity.brand}
    onChange={(e) => handelNestedChange(e, "capacity")}
    placeholder="Enter the brand of the boat"
    className="border p-3 rounded-md font-light"
  />
</div>
<div className="flex flex-col gap-2">
  <label>Model</label>
  <input
    type="text"
    name="model"
    value={descriptionData.capacity.model}
    onChange={(e) => handelNestedChange(e, "capacity")}
    placeholder="Enter the model"
    className="border p-3 rounded-md font-light"
  />
</div>

<div className="flex flex-col gap-2">
  <label>Geographic area</label>
  <input
    type="text"
    name="geographicArea"
    value={descriptionData.capacity.geographicArea}
    onChange={(e) => handelNestedChange(e, "capacity")}
    placeholder="Enter the geographic area"
    className="border p-3 rounded-md font-light"
  />
</div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between ">
              <div>Motorization</div>
              <MdDelete className="text-xl text-[#CBA557]" />
            </div>
            <div className="grid grid-cols-2 gap-9">
  <div className="flex flex-col gap-2">
    <label>Number of engines</label>
    <input
      type="number"
      name="numberOfEngines"
      value={descriptionData.motorization.numberOfEngines}
      onChange={(e) => handelNestedChange(e, "motorization")}
      placeholder="Enter the number of engines"
      className="border p-3 rounded-md font-light"
    />
  </div>
  <div className="flex flex-col gap-2">
    <label>Engine power (hp)</label>
    <input
      type="number"
      name="enginePowerHP"
      value={descriptionData.motorization.enginePowerHP}
      onChange={(e) => handelNestedChange(e, "motorization")}
      placeholder="Enter the engine power (hp)"
      className="border p-3 rounded-md font-light"
    />
  </div>
</div>
          </div>
          <div className="flex flex-col gap-6">
            <div>Fuel</div>
            <div className="grid grid-cols-4  w-[50%] text-sm">
              {["gas", "electric", "diesel", "ethanol"].map(
                (fuelType, index) => (
                  <div key={index} className="flex gap-3">
                    <input
                      name={fuelType}
                      checked={descriptionData.fuel[fuelType]}
                      onChange={(e) => handelNestedChange(e, "fuel")}
                      type="checkbox"
                      className=""
                    />
                    <div className="font-light">
                      {fuelType.charAt(0).toUpperCase() + fuelType.slice(1)}
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Fuel capacity (in L)</label>
              <input
                name="fuelCapacityLiters"
                value={descriptionData.fuelCapacityLiters}
                onChange={handleChange}
                type="number"
                placeholder="Enter"
                className="border w-[47%] p-3 rounded-md font-light"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-[80%]">
          <div>Dimension</div>
          <div className="grid grid-cols-2 gap-9">
            <div className="flex flex-col gap-2">
              <label>Draft (in metres)</label>
              <input
                name="draftMeters"
                value={descriptionData.draftMeters}
                onChange={handleChange}
                type="number"
                placeholder="Enter"
                className="border p-3 rounded-md font-light"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Width (in meters)</label>
              <input
                name="widthMeters"
                value={descriptionData.widthMeters}
                onChange={handleChange}
                type="number"
                placeholder="Enter"
                className="border p-3 rounded-md font-light"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[48%]">
            <label>Length (in meters)</label>
            <input
              name="lengthMeters"
              value={descriptionData.lengthMeters}
              onChange={handleChange}
              type="number"
              placeholder="Enter"
              className="border p-3 rounded-md font-light"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#CBA557] w-[15%] py-4 rounded-lg text-white"
        >
          {id ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
};

export default Information;
