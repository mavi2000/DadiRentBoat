import { AdminContext } from "../../../../Context/AdminContext";
import React, { useState, useContext } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { FaPlus } from "react-icons/fa6";
import Download from "../../../assets/Images/Download-Cloud.png";

const Photo = () => {
  const [image, setImage] = useState(null);
  const { uploadBoatImage } = useContext(AdminContext);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }

    const formData = new FormData();
    formData.append("avatar", image);

    try {
      const response = await uploadBoatImage(formData);
      console.log(response);
    } catch (error) {
      console.error("Upload error: ", error);
    }
  };

  return (
    <>
      <BoatsNavbar />
      <div className="mx-[1%] my-[1%] bg-white h-[100vh]">
        <div className="mx-[4%]">
          <h1 className="font-medium text-[#4B465C] text-lg py-5">
            Cover photo
          </h1>
          <p className="text-[#4B465C] font-normal text-sm">
            The cover photo must be a general photo of the boat, bright and of
            good quality.
          </p>
          <div className="mx-[3%] my-[2%] boatPhoto py-12 rounded-md">
            <div className="flex flex-col py-8 gap-4 items-center justify-center">
              <p>Select an image</p>
              <img
                src={Download}
                alt="Download icon"
                className="w-16 md:w-24"
              />
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={handleChange}
                style={{ display: "none" }}
                id="fileInput"
              />
              <label htmlFor="fileInput">
                <button className="flex gap-[10px] justify-center items-center py-4 px-16 bg-[#CBA557] text-white font-bold text-sm rounded-[10px]">
                  <FaPlus />
                  <p>Choose a photo</p>
                </button>
              </label>
              {image && (
                <button
                  className="mt-4 py-2 px-4 bg-[#4B465C] text-white font-bold text-sm rounded-[10px]"
                  onClick={handleSubmit}
                >
                  Upload Photo
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photo;
