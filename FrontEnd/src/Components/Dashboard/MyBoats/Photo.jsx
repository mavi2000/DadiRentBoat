import React, { useState, useContext, useEffect } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { FaPlus } from "react-icons/fa6";
import Download from "../../../assets/Images/Download-Cloud.png";
import { AdminContext } from "../../../../Context/AdminContext";
import baseURL from "../../../../APi/BaseUrl";
import { toast } from "react-toastify";

const Photo = () => {
  const id = localStorage.getItem('id')
  const { uploadBoatImages, boatId } = useContext(AdminContext); // Destructure the uploadBoatImages function and boatId from the context
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile); // Ensure the key matches server-side
      if (id) {
        formData.append("boatId", id);
      } else {
        formData.append("boatId", boatId);
      }
      if (!id) {
        try {
          const response = await uploadBoatImages(formData);
          setSelectedFile(null); // Reset the selected file after upload
        } catch (error) {
          console.error("Failed to upload image", error);
        }
      } else {
        try {
          const response = await baseURL.patch('/image/update-image/' + id, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            }
          });
          setSelectedFile(null); // Reset the selected file after upload
          toast.success('Image updated successfully')
          localStorage.removeItem('id')
        } catch (error) {
          console.error("Failed to upload image", error);
          toast.error('Failed to update image')
        }
      }
    } else {
      alert("Please select a file first");
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
                onChange={handleFileChange}
                style={{ display: "none" }}
                id="fileInput"
              />
              <button
                onClick={() => document.getElementById("fileInput").click()}
                className="flex gap-[10px] justify-center items-center py-4 px-16 bg-[#CBA557] text-white font-bold text-sm rounded-[10px]"
              >
                <FaPlus />
                <p>Choose a photo</p>
              </button>
              {selectedFile && (
                <button
                  onClick={handleUpload}
                  className="flex gap-[10px] justify-center items-center py-4 px-16 bg-[#CBA557] text-white font-bold text-sm rounded-[10px] mt-4"
                >
                  <FaPlus />
                  <p>Upload a photo</p>
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
