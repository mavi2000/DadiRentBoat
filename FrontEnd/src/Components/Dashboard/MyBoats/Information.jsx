import React, { useContext, useEffect, useState } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { FiInfo } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { AdminContext } from "../../../../Context/AdminContext";
import { toast } from "react-toastify";
import baseURL from "../../../../APi/BaseUrl";

const Information = () => {
  const id = localStorage.getItem('id');

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
      year: "",
      geographicArea: "",
      berth: "",
      showerRoom: 0,
      wc: "",
      cabin: ""
    },
    motorization: { numberOfEngines: 0, enginePowerHP: 0 },
    fuel: { unleaded: false, electric: false, diesel: false, ethanol: false },
    fuelCapacityLiters: 0,
    engineType: { twoStroke: false, fourStroke: false },
    draftMeters: 0,
    widthMeters: 0,
    lengthMeters: 0,
    draftFeet: 0,
    widthFeet: 0,
    lengthFeet: 0,
  });

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [languageSections, setLanguageSections] = useState([]);

  useEffect(() => {
    if (id) {
      const getBoatDescription = async () => {
        try {
          const res = await baseURL('/description/get-boat-description/' + id);
          const { data: { description } } = res;
          setDescriptionData({ ...description });
        } catch (error) {
          console.log(error);
        }
      };
      getBoatDescription();
    }
  }, [id]);

  const handleNestedChange = (e, group) => {
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

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setDescriptionData((prevState) => ({
      ...prevState,
      [name]: {
        unleaded: false,
        electric: false,
        ethanol: false,
        diesel: false,
        [value]: true,
      },
    }));
  };

  const handleEngineTypeChange = (e) => {
    const { value } = e.target;
    setDescriptionData((prevState) => ({
      ...prevState,
      engineType: {
        twoStroke: false,
        fourStroke: false,
        [value]: true,
      },
    }));
  };

  const handleMetersChange = (e) => {
    const { name, value } = e.target;
    const feetValue = (value * 3.28084).toFixed(2);
    setDescriptionData((prevState) => ({
      ...prevState,
      [name]: value,
      [`${name.replace('Meters', 'Feet')}`]: feetValue,
    }));
  };

  const handleFeetChange = (e) => {
    const { name, value } = e.target;
    const metersValue = (value / 3.28084).toFixed(2);
    setDescriptionData((prevState) => ({
      ...prevState,
      [name]: value,
      [`${name.replace('Feet', 'Meters')}`]: metersValue,
    }));
  };

  const translateText = async (text, targetLanguage) => {
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=it|${targetLanguage}`);
    const data = await response.json();
    return data.responseData.translatedText;
  };

  const addLanguageSection = async () => {
    if (selectedLanguage) {
      const translatedText = await translateText(descriptionData.details.descriptionItalian, selectedLanguage);
      setLanguageSections([...languageSections, { language: selectedLanguage, description: translatedText }]);
      setSelectedLanguage('');
    }
  };

  const handleLanguageDescriptionChange = (index, e) => {
    const { value } = e.target;
    const updatedSections = [...languageSections];
    updatedSections[index].description = value;
    setLanguageSections(updatedSections);
  };

  const deleteLanguageSection = (index) => {
    setLanguageSections(languageSections.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
      try {
        const payload = {
          ...descriptionData,
          boatId,
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
        const res = await baseURL.patch('/description/update-boat-description/' + id, descriptionData);
        toast.success('Description updated successfully');
        localStorage.removeItem('id');
        setTimeout(() => {
          navigate('/Dashboard/my-boats')
        }, 3000);
      } catch (error) {
        toast.error('Failed to update description');
      }
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <form
        onSubmit={handleSubmit}
        className="bg-white mx-2 py-8 px-12 flex flex-col gap-10 text-[#4B465C]"
      >
        <div className="font-medium">Information</div>
        <div className="flex flex-col gap-2">
          <div>Type of Boat</div>
          <div className="flex gap-10 text-sm">
            {[
              "Sail Boat",
              "Motorboat",
              "Ruber dinghy",
              "Jet Skis",
              "Luxury yachts",
              "Houseboat/Riverboat",
              "Catamaran/Trimaran",
            ].map((boat, index) => (
              <div key={index} className="flex gap-3 items-center">
                <input
                  type="radio"
                  name="boatType"
                  value={boat}
                  checked={descriptionData.boatType === boat}
                  onChange={handleRadioChange}
                  className="outline-none"
                />
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
            className="border py-3 rounded-md px-3 font-light outline-none"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div>Type of Rental</div>
          <div className="flex flex-row gap-3 items-start">
            <input
              name="bareBoat"
              onChange={(e) => handleNestedChange(e, "rentalType")}
              type="checkbox"
              className="mt-1 outline-none"
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
              onChange={(e) => handleNestedChange(e, "rentalType")}
              type="checkbox"
              className="mt-1 outline-none"
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
              onChange={(e) => handleNestedChange(e, "details")}
              placeholder="Write boat name"
              className="border p-3 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>Description Italian</label>
            <textarea
              name="descriptionItalian"
              value={descriptionData.details.descriptionItalian}
              onChange={(e) => handleNestedChange(e, "details")}
              rows={4}
              className="border rounded-md outline-none"
            ></textarea>
            <div className="text-xs">
              Your description is automatically translated based on the user's
              country of origin. You can still add your own translation, which
              will replace the automatic translation.
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="text-[#4B465C] font-light">
              Optional: To add a translation of the description
            </div>
            <div className="flex gap-5">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="border p-3 w-[45%] font-light text-[#4B465C] text-sm rounded-md outline-none"
              >
                <option value="">Select Language</option>
                <option value="en">English</option>
                <option value="de">German</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
              <button
                type="button"
                onClick={addLanguageSection}
                className="flex items-center gap-4 border border-[#CBA557] w-[30%] rounded-lg text-[#CBA557] justify-center font-semibold"
              >
                <IoAddOutline className="text-lg" />
                ADD
              </button>
            </div>
            {languageSections.map((section, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <label>Description ({section.language})</label>
                  <MdDelete
                    className="text-xl text-[#CBA557] cursor-pointer"
                    onClick={() => deleteLanguageSection(index)}
                  />
                </div>
                <textarea
                  value={section.description}
                  onChange={(e) => handleLanguageDescriptionChange(index, e)}
                  rows={4}
                  className="border rounded-md outline-none"
                ></textarea>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between ">
              <div>Capacity</div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Boarding capacity</label>
              <input
                name="boardingCapacity"
                value={descriptionData.capacity.boardingCapacity}
                onChange={(e) => handleNestedChange(e, "capacity")}
                type="number"
                placeholder="Enter"
                className="border w-[47%] p-3 rounded-md font-light outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-9">
              <div className="flex flex-col gap-2">
                <label>Brand of the boat</label>
                <input
                  type="text"
                  name="brand"
                  value={descriptionData.capacity.brand}
                  onChange={(e) => handleNestedChange(e, "capacity")}
                  placeholder="Enter the brand of the boat"
                  className="border p-3 rounded-md font-light outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Model</label>
                <input
                  type="text"
                  name="model"
                  value={descriptionData.capacity.model}
                  onChange={(e) => handleNestedChange(e, "capacity")}
                  placeholder="Enter the model"
                  className="border p-3 rounded-md font-light outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Geographic area</label>
                <input
                  type="text"
                  name="geographicArea"
                  value={descriptionData.capacity.geographicArea}
                  onChange={(e) => handleNestedChange(e, "capacity")}
                  placeholder="Enter the geographic area"
                  className="border p-3 rounded-md font-light outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Year</label>
                <input
                  type="text"
                  name="year"
                  value={descriptionData.capacity.year}
                  onChange={(e) => handleNestedChange(e, "capacity")}
                  placeholder="Enter the year"
                  className="border p-3 rounded-md font-light outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Shower room(s)</label>
                <input
                  type="number"
                  name="showerRoom"
                  value={descriptionData.capacity.showerRoom}
                  onChange={(e) => handleNestedChange(e, "capacity")}
                  placeholder=""
                  className="border p-3 rounded-md font-light outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Total number of berths</label>
                <input
                  type="text"
                  name="berth"
                  value={descriptionData.capacity.berth}
                  onChange={(e) => handleNestedChange(e, "capacity")}
                  placeholder="berth"
                  className="border p-3 rounded-md font-light outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>WC</label>
                <input
                  type="text"
                  name="wc"
                  value={descriptionData.capacity.wc}
                  onChange={(e) => handleNestedChange(e, "capacity")}
                  placeholder=""
                  className="border p-3 rounded-md font-light outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Number of cabins</label>
                <input
                  type="number"
                  name="cabin"
                  value={descriptionData.capacity.cabin}
                  onChange={(e) => handleNestedChange(e, "capacity")}
                  placeholder=""
                  className="border p-3 rounded-md font-light outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>Fuel</div>
            <div className="grid grid-cols-4 w-[50%] text-sm">
              {["unleaded", "electric", "ethanol", "diesel"].map((fuelType, index) => (
                <div key={index} className="flex gap-3">
                  <input
                    name="fuel"
                    value={fuelType}
                    checked={descriptionData.fuel[fuelType]}
                    onChange={handleRadioChange}
                    type="radio"
                    className="outline-none"
                  />
                  <div className="font-light">
                    {fuelType.charAt(0).toUpperCase() + fuelType.slice(1)}
                  </div>
                </div>
              ))}
            </div>
            {!descriptionData.fuel.electric && (
              <>
                <div className="flex flex-col gap-2">
                  <label>Fuel capacity (in L)</label>
                  <input
                    name="fuelCapacityLiters"
                    value={descriptionData.fuelCapacityLiters}
                    onChange={handleChange}
                    type="number"
                    placeholder="Enter"
                    className="border w-[47%] p-3 rounded-md font-light outline-none"
                  />
                </div>
                <div className="flex flex-col gap-6 mt-4">
                  <div>Type of Engine</div>
                  <div className="grid grid-cols-4 w-[50%] text-sm">
                    {["twoStroke", "fourStroke"].map((engineType, index) => (
                      <div key={index} className="flex gap-3">
                        <input
                          name="engineType"
                          value={engineType}
                          checked={descriptionData.engineType[engineType]}
                          onChange={handleEngineTypeChange}
                          type="radio"
                          className="outline-none"
                        />
                        <div className="font-light">
                          {engineType === "twoStroke" ? "2 Stroke" : "4 Stroke"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-6 w-[80%]">
          <div>Dimensions</div>
          <div className="grid grid-cols-2 gap-9">
            <div className="flex flex-col gap-2">
              <label>Draft</label>
              <div className="flex gap-2">
                <div className="flex flex-col">
                  <input
                    name="draftMeters"
                    value={descriptionData.draftMeters}
                    onChange={handleMetersChange}
                    type="number"
                    placeholder="Meters"
                    className="border p-3 rounded-md font-light outline-none"
                  />
                  <label className="text-xs text-gray-500">Meters</label>
                </div>
                <div className="flex flex-col">
                  <input
                    name="draftFeet"
                    value={descriptionData.draftFeet}
                    onChange={handleFeetChange}
                    type="number"
                    placeholder="Feet"
                    className="border p-3 rounded-md font-light outline-none"
                  />
                  <label className="text-xs text-gray-500">Feet</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Width</label>
              <div className="flex gap-2">
                <div className="flex flex-col">
                  <input
                    name="widthMeters"
                    value={descriptionData.widthMeters}
                    onChange={handleMetersChange}
                    type="number"
                    placeholder="Meters"
                    className="border p-3 rounded-md font-light outline-none"
                  />
                  <label className="text-xs text-gray-500">Meters</label>
                </div>
                <div className="flex flex-col">
                  <input
                    name="widthFeet"
                    value={descriptionData.widthFeet}
                    onChange={handleFeetChange}
                    type="number"
                    placeholder="Feet"
                    className="border p-3 rounded-md font-light outline-none"
                  />
                  <label className="text-xs text-gray-500">Feet</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Length</label>
              <div className="flex gap-2">
                <div className="flex flex-col">
                  <input
                    name="lengthMeters"
                    value={descriptionData.lengthMeters}
                    onChange={handleMetersChange}
                    type="number"
                    placeholder="Meters"
                    className="border p-3 rounded-md font-light outline-none"
                  />
                  <label className="text-xs text-gray-500">Meters</label>
                </div>
                <div className="flex flex-col">
                  <input
                    name="lengthFeet"
                    value={descriptionData.lengthFeet}
                    onChange={handleFeetChange}
                    type="number"
                    placeholder="Feet"
                    className="border p-3 rounded-md font-light outline-none"
                  />
                  <label className="text-xs text-gray-500">Feet</label>
                </div>
              </div>
            </div>
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
