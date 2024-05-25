import React, { useContext } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { FaPlus, FaTimes } from "react-icons/fa";
import { AdminContext } from "../../../../Context/AdminContext";

const InfoAccess = () => {
  const { addAccessInformation } = useContext(AdminContext);
  const [inputCount, setInputCount] = React.useState(1);

  const handleAddNewInfoAccess = (e) => {
    e.preventDefault();
    setInputCount(inputCount + 1);
  };

  const handleRemoveInfoAccess = (e, index) => {
    e.preventDefault();
    setInputCount(inputCount - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const accessDetails = [];
    for (let i = 0; i < inputCount; i++) {
      const description = formData.get(`description${i}`);
      const documentName = formData.get(`documentName${i}`);
      const uploadDocument = formData.get(`uploadDocument${i}`);
      const documentLink = formData.get(`documentLink${i}`);

      accessDetails.push({
        description,
        documentName,
        uploadDocument,
        documentLink,
      });
    }
    try {
      const accessData = {
        accessDetails,
      };
      console.log("checking it ", accessData);
      const response = await addAccessInformation(accessData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const renderAdditionalInputs = () => {
    return Array.from({ length: inputCount }, (_, index) => (
      <div key={index} className="relative">
        <button
          className="delete-btn"
          onClick={(e) => handleRemoveInfoAccess(e, index)}
        >
          <FaTimes style={{ color: "red" }} />
        </button>
        <h1 className="font-medium text-[#4B465C] text-lg py-5">
          Information & access
        </h1>
        <textarea
          name={`description${index}`}
          cols="20"
          rows="5"
          placeholder="You will find my boat at the port of"
          className="border-[1.14px] border-[#D2D2D2] w-[90%] py-4 px-3 placeholder:text-[#C2C2C2] resize-none rounded-md"
        ></textarea>
        <h1 className="font-medium text-[#4B465C] text-lg py-5">
          Documents sent automatically
        </h1>
        <select
          name={`documentName${index}`}
          id={`documentName${index}`}
          className="border-[1.35px] px-3 py-2 border-[#DBDADE] w-[90%] text-[#C2C2C2] outline-none rounded-lg bg-[#ffff] mt-[1%]"
        >
          <option value="">Select Document</option>
          <option value="Access map">Access map</option>
          <option value="New map">New map</option>
          <option value="Old map">Old map</option>
        </select>
        <div className="w-[90%] flex justify-between my-[2%] flex-wrap space-y-2 md:space-y-0">
          <div className="flex flex-col gap-8 w-1/3">
            <label
              htmlFor={`uploadDocument${index}`}
              className="text-[#4B465C] font-normal"
            >
              Upload a document
            </label>
            <div className="flex items-center gap-3">
              <input
                type="file"
                id={`uploadDocument${index}`}
                name={`uploadDocument${index}`}
                className="hidden"
              />
              <label
                htmlFor={`uploadDocument${index}`}
                className="py-4 px-16 flex gap-3 text-[#CBA557] font-bold text-sm justify-center items-center border border-[#CBA557] rounded-[10px] cursor-pointer"
              >
                <span>
                  <FaPlus />
                </span>
                <p>Browse</p>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-8 w-1/3 self-end items-center">
            <p className="font-semibold">
              - <span> OR </span> -{" "}
            </p>
          </div>
          <div className="flex flex-col gap-8 w-1/3">
            <label
              htmlFor={`documentLink${index}`}
              className="text-[#4B465C] font-normal"
            >
              Link to a document
            </label>
            <input
              type="text"
              id={`documentLink${index}`}
              name={`documentLink${index}`}
              placeholder="www.abc.com"
              className="border-[1.35px] border-[#DBDADE] rounded-md px-4 py-4"
            />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <BoatsNavbar />
      <div className="mx-[1%] my-[1%] bg-white py-3">
        <div className="mx-[4%]">
          <form onSubmit={handleSubmit}>
            {renderAdditionalInputs()}
            <p className="text-[#4B465C] font-normal text-xs mb-[2%]">
              Size limit: 8MB – Accepted formats: JPEG, JPG, PNG or PDF
            </p>

            <div className="py-2">
              <hr className="text-[#B7B7B7] mb-[2%]" />
              <button
                className="py-4 px-16 flex gap-3 text-[#CBA557] font-bold text-sm justify-center items-center border border-[#CBA557] rounded-[10px]"
                onClick={handleAddNewInfoAccess}
              >
                <span>
                  <FaPlus />
                </span>
                <p>Add a new Information & Access</p>
              </button>
              <hr className="text-[#B7B7B7] mt-[2%]" />
            </div>

            <div className="mt-[3%]">
              <button
                type="submit"
                className="py-[10px] px-12 flex justify-center items-center bg-[#CBA557] text-white rounded-[10px]"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InfoAccess;
