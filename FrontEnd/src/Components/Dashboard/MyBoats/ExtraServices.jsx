import React, { useContext, useState, useEffect } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { AdminContext } from "../../../../Context/AdminContext";
import { toast } from "react-toastify";

const ExtraServices = () => {
  const { ExtraServices, getExtraServices, boatId } = useContext(AdminContext);
  const [services, setServices] = useState([]);
  const [servicesData, setServicesData] = useState({
    serviceName: "",
    pricePerPerson: "",
    isObligatory: false, // Initialize as boolean
  });

  const fetchServices = async () => {
    try {
      const data = await getExtraServices();
      console.log("Data fetched from API:", data); // Log the data received
      setServices(data.extraServices);
    } catch (error) {
      console.error("Error fetching conditions:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handelChange = (e) => {
    const { name, value, type, checked } = e.target;
    setServicesData({
      ...servicesData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    // Include boatId in the payload
    const payload = {
      ...servicesData,
      boatId,
    };
    try {
      await ExtraServices(payload);
      toast.success("Services added successfully");

      setServicesData({
        serviceName: "",
        pricePerPerson: "",
        isObligatory: false,
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
  };

  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <div className="bg-white rounded-md text-[#4B465C]">
        <form
          onSubmit={handelSubmit}
          className="flex flex-col gap-8 w-[80%] mx-2 py-8 px-12"
        >
          <div className="font-medium">Extra Services</div>
          <div className="gap-4 flex flex-col">
            <div className="font-normal text-sm">Create a new option</div>
            <div className="font-light text-sm">
              Here you can enter your extras on rentals, such as equipment, fuel
              or a galley. 
            </div>
          </div>
          <div className="flex flex-col text-sm gap-4">
            <label className="text-lg font-light">Name of the extra*</label>
            <select
              value={servicesData.serviceName}
              name="serviceName"
              onChange={handelChange}
              className="border p-3 rounded-md"
            >
              <option value="" disabled>Select the extra service</option>
              <option value="Snorkeling Gear Rental">Snorkeling Gear Rental</option>
              <option value="WiFi Service">WiFi Service</option>
            </select>
            <div>0 / 50</div>
          </div>
          <div className="flex gap-8">
            <div className="flex items-center gap-3">
              <input type="checkbox" />
              <div>Optional</div>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="isObligatory"
                checked={servicesData.isObligatory}
                onChange={handelChange}
              />
              <div>Obligatory</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" />
            <div>Extra option offered</div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Price</div>
            <div className="border w-[30%] rounded-md">
              <select className="border-r py-3 px-2 w-[20%] bg-transparent">
                <option>€</option>
                <option>$</option>
              </select>
              <input
                className="px-3 w-[80%] py-3 bg-transparent"
                type="number"
                name="pricePerPerson"
                value={servicesData.pricePerPerson}
                onChange={handelChange}
                placeholder="Enter"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" />
            <div>Per person</div>
          </div>
          <button
            type="submit"
            className="bg-[#CBA557] w-[15%] py-4 rounded-lg text-white"
          >
            Add
          </button>
        </form>
        <div className="w-[100%] h-0.5 bg-[#E8E8E8]"></div>
        <div className="flex flex-col gap-8 w-[80%] mx-2 py-8 px-12">
          <div className="font-medium">Your extra options</div>
          <div className="font-normal text-sm">Option extra</div>
          {Array.isArray(services) &&
            services.map((service, index) => (
              <div key={index} className="text-sm flex">
                <div className="py-5 px-4 font-medium w-[35%]">
                  {service.serviceName}
                </div>
                <div className="py-5 px-4 w-[30%] font-light">
                  <span className="font-medium">{service.pricePerPerson} </span>
                  / rental
                </div>
                <div className="flex gap-7 py-5 px-4 w-[35%] text-sm">
                  <button className="border border-[#CBA557] px-4 py-1 rounded-lg text-[#CBA557]">
                    Edit
                  </button>
                  <button className="border border-[#E51F1F] px-4 py-1 rounded-lg text-[#E51F1F]">
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraServices;
