import React, { useContext, useState, useEffect } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { AdminContext } from "../../../../Context/AdminContext";
import { toast } from "react-toastify";
import baseURL from "../../../../APi/BaseUrl";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import LoadingSpinner from "./LoadingSpinner";

const Insurance = () => {
  const id = localStorage.getItem("id");
  const boatId = '669b9620135e1210b2c8e50c'; // ensure this is a valid ObjectId
  console.log("id", id);
  const { Insurances, navigate } = useContext(AdminContext);
  const [insuranceData, setInsuranceData] = useState({
    // boatId: boatId,
    currentInsurer: "",
    amountDeductible: "",
    insuredValueOfBoat: "",
    boatRegistration: "",
  });
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      const getInsurance = async () => {
        try {
          const res = await baseURL('/insurence/get-insurance/' + id);
          const { data: { insurance } } = res;
          const { _id, createdAt, updatedAt, __v, ...rest } = insurance;
          setInsuranceData({ ...rest, boatId });
        } catch (error) {
          console.log(error);
        }
      };
      getInsurance();
    }
  }, [id, boatId]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setDocuments([...documents, ...files]);
  };

  const handleDeleteFile = (index) => {
    setDocuments(documents.filter((_, i) => i !== index));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInsuranceData({ ...insuranceData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("boatId", insuranceData.boatId);
    formData.append("currentInsurer", insuranceData.currentInsurer);
    formData.append("amountDeductible", insuranceData.amountDeductible);
    formData.append("insuredValueOfBoat", insuranceData.insuredValueOfBoat);
    formData.append("boatRegistration", insuranceData.boatRegistration);
    documents.forEach((file) => {
      formData.append("insuranceDocuments", file); // Append each file to the same field name
    });

    setLoading(true);
    if (!id) {
      try {
        await Insurances(formData);
        toast.success("Insurance successfully saved");
        setInsuranceData({
          // boatId: boatId,
          currentInsurer: "",
          amountDeductible: "",
          insuredValueOfBoat: "",
          boatRegistration: "",
        });
        setDocuments([]);
      } catch (error) {
        if (error.response) {
          console.error("Error Response:", error.response);
          toast.error(`Error: ${error.response.data.message || error.message}`);
        } else {
          console.error("Error:", error);
          toast.error("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const res = await baseURL.patch('/insurence/update-insurance/' + id, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success("Insurance updated successfully");
        localStorage.removeItem("id");
        setTimeout(() => {
          navigate('/Dashboard/my-boats');
        }, 3000);
      } catch (error) {
        toast.error("Failed to update insurance");
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <form
        onSubmit={handleSubmit}
        className="bg-white mx-2 py-8 px-4 sm:px-14 text-[#4B465C]"
      >
        <div className="flex flex-col gap-10">
          <div className="font-medium">Insurance</div>
          <div className="gap-4 flex flex-col">
            <div className="font-normal text-sm">
              Click below to declare that you are in compliance with your insurance obligations
            </div>
            <div className="font-medium text-center py-2 rounded-sm text-sm bg-[#CBA55714]">
              I am already insured for rental
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>Who is your current insurer?</label>
            <input
              type="text"
              name="currentInsurer"
              value={insuranceData.currentInsurer}
              onChange={handleChange}
              placeholder="Name of your Insurer"
              className="border p-3 rounded-md font-light outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div>Amount of the deductible</div>
            <div className="border rounded-md">
              <select className="border-r py-3 px-2 w-[10%] bg-transparent">
                <option>€</option>
              </select>
              <input
                className="px-3 w-[90%] py-3 bg-transparent outline-none"
                type="number"
                name="amountDeductible"
                value={insuranceData.amountDeductible}
                onChange={handleChange}
                placeholder="Enter"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Insured value of your boat</div>
            <div className="border rounded-md">
              <select className="border-r py-3 px-2 w-[10%] bg-transparent">
                <option>€</option>
              </select>
              <input
                className="px-3 w-[90%] py-3 bg-transparent outline-none"
                type="number"
                name="insuredValueOfBoat"
                value={insuranceData.insuredValueOfBoat}
                onChange={handleChange}
                placeholder="Enter"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>Boat registration</label>
            <input
              type="text"
              name="boatRegistration"
              value={insuranceData.boatRegistration}
              onChange={handleChange}
              placeholder="Enter boat registration"
              className="border p-3 rounded-md font-light outline-none"
            />
            <div className="text-sm">
              With this self-certification I confirm that I am in compliance with the insurance obligations in force in my country
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>Upload insurance documents</label>
            <input
              type="file"
              onChange={handleFileChange}
              multiple
              accept="application/pdf"
              className="border p-3 rounded-md font-light outline-none"
            />
            <div className="flex flex-wrap gap-4 mt-4">
              {documents.map((file, index) => (
                <div key={index} className="relative">
                  <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-md">
                    <p className="text-xs text-gray-700">{file.name}</p>
                  </div>
                  <MdDelete
                    onClick={() => handleDeleteFile(index)}
                    className="absolute top-0 right-0 text-red-500 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#CBA557] sm:w-max p-4 rounded-lg text-white"
          >
            {id ? "Update" : "Add"}
          </button>
          {loading && <LoadingSpinner />}
        </div>
      </form>
    </div>
  );
};

export default Insurance;
