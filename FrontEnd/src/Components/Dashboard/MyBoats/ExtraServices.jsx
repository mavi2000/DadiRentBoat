import React, { useContext, useState, useEffect } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { AdminContext } from "../../../../Context/AdminContext";
import { toast } from "react-toastify";
import baseURL from "../../../../APi/BaseUrl";

const ExtraServices = () => {
  const id = localStorage.getItem('id');


  const { ExtraServices, getExtraServices, boatId, navigate } = useContext(AdminContext);
  const [services, setServices] = useState([]);
  const [servicesData, setServicesData] = useState({
    serviceName: "",
    pricePerPerson: "",
    isObligatory: false,
    priceUnit: "per rental",
    minDuration: "",
    maxDuration: ""
  });

  const fetchServices = async () => {
    try {
      const data = await getExtraServices();
      setServices(data.extraServices);
    } catch (error) {
      console.error("Error fetching conditions:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  useEffect(() => {
    if (services.length > 0) {
      const thisBoatService = services.find((service) => service.boatId === id);
      if (thisBoatService) {
        setServicesData(thisBoatService);
      }
    }
  }, [services, id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setServicesData({
      ...servicesData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...servicesData,
      boatId,
    };

    if (!id) {
      try {
        await ExtraServices(payload);
        toast.success("Services added successfully");
        setServicesData({
          serviceName: "",
          pricePerPerson: "",
          isObligatory: false,
          priceUnit: "per rental",
          minDuration: "",
          maxDuration: "",
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
    } else {
      try {
        await baseURL.patch('/service/update-service/' + id, payload);
        toast.success('Extra service updated successfully');
        localStorage.removeItem('id');
        setTimeout(() => {
          navigate('/Dashboard/my-boats');
        }, 3000);
      } catch (error) {
        toast.error('Failed to update extra service');
      }
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <div className="bg-white rounded-md text-[#4B465C]">
        <form
          onSubmit={handleSubmit}
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
            <input
              type="text"
              value={servicesData?.serviceName}
              name="serviceName"
              onChange={handleChange}
              className="border p-3 rounded-md"
              placeholder="Enter the extra service"
            />
            <div>0 / 50</div>
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-lg font-light">Minimum duration in days (optional)</label>
            <select
              name="minDuration"
              value={servicesData?.minDuration || ""}
              onChange={handleChange}
              className="border p-3 rounded-md"
            >
              <option value="" disabled>Select minimum duration</option>
              {Array.from({ length: 25 }, (_, i) => i + 1).map(day => (
                <option key={day} value={day}>{day} day{day > 1 ? "s" : ""}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-lg font-light">Maximum duration in days (optional)</label>
            <select
              name="maxDuration"
              value={servicesData?.maxDuration || ""}
              onChange={handleChange}
              className="border p-3 rounded-md"
            >
              <option value="" disabled>Select maximum duration</option>
              {Array.from({ length: 25 }, (_, i) => i + 1).map(day => (
                <option key={day} value={day}>{day} day{day > 1 ? "s" : ""}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-8">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="isObligatory"
                value={true}
                checked={servicesData?.isObligatory === true}
                onChange={handleChange}
              />
              <div>Obligatory</div>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="isObligatory"
                value={false}
                checked={servicesData?.isObligatory === false}
                onChange={handleChange}
              />
              <div>Optional</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Price</div>
            <div className="border w-[50%] rounded-md flex">
              <select className="border-r py-3 px-2 w-[20%] bg-transparent">
                <option>€</option>
                <option>$</option>
              </select>
              <input
                className="px-3 w-[60%] py-3 bg-transparent"
                type="number"
                name="pricePerPerson"
                value={servicesData?.pricePerPerson}
                onChange={handleChange}
                placeholder="Enter"
              />
              <select
                className="border-l py-3 px-2 w-[20%] bg-transparent"
                name="priceUnit"
                value={servicesData?.priceUnit}
                onChange={handleChange}
              >
                <option value="per rental">Per Rental</option>
                <option value="per day">Per Day</option>
                <option value="per week">Per Week</option>
                <option value="% rental">% Rental</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#CBA557] w-[15%] py-4 rounded-lg text-white"
          >
            {id ? "Update" : "Add"}
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
                  {service?.serviceName}
                </div>
                <div className="py-5 px-4 w-[30%] font-light">
                  <span className="font-medium">{service?.pricePerPerson} </span>
                  {service?.priceUnit}
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
