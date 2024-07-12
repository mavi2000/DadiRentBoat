import React, { useState, useContext } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { FaPlus } from "react-icons/fa6";
import Download from "../../../assets/Images/Download-Cloud.png";
import { AdminContext } from "../../../../Context/AdminContext";
import baseURL from "../../../../APi/BaseUrl";
import { toast } from "react-toastify";

const Photo = () => {
  const id = localStorage.getItem('id');
  const { uploadBoatImages, boatId, navigate } = useContext(AdminContext);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);

  const handleImageChange = (event) => {
    setSelectedImages(event.target.files);
  };

  const handleVideoChange = (event) => {
    setSelectedVideos(event.target.files);
  };

  const handleUpload = async (files, type) => {
    if (files.length > 0) {
      const formData = new FormData();
      Array.from(files).forEach(file => {
        formData.append("files", file); // Ensure the key matches server-side
      });
      if (id) {
        formData.append("boatId", id);
      } else {
        formData.append("boatId", boatId);
      }

      if (!id) {
        try {
          const response = await uploadBoatImages(formData);
          type === "image" ? setSelectedImages([]) : setSelectedVideos([]); // Reset the selected files after upload
        } catch (error) {
          console.error(`Failed to upload ${type}s`, error);
        }
      } else {
        try {
          const response = await baseURL.patch('/image/update-image/' + id, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            }
          });
          type === "image" ? setSelectedImages([]) : setSelectedVideos([]); // Reset the selected files after upload
          toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)}s updated successfully`);
          localStorage.removeItem('id');
          setTimeout(() => {
            navigate('/Dashboard/my-boats');
          }, 3000);
        } catch (error) {
          console.error(`Failed to upload ${type}s`, error);
          toast.error(`Failed to update ${type}s`);
        }
      }
    } else {
      alert(`Please select ${type}s first`);
    }
  };

  return (
    <>
      <BoatsNavbar />
      <div className="mx-[1%] my-[1%] bg-white h-[100vh]">
        <div className="mx-[4%]">
          <h1 className="font-medium text-[#4B465C] text-lg py-5">
            Cover photos and videos
          </h1>
          <p className="text-[#4B465C] font-normal text-sm">
            The cover photos and videos must be of the boat, bright and of good quality.
          </p>
          <div className="flex justify-between mx-[3%] my-[2%]">
            {/* Image Upload Section */}
            <div className="boatPhoto py-12 rounded-md flex-1 mx-2 bg-white shadow-lg">
              <div className="flex flex-col py-8 gap-4 items-center justify-center">
                <p>Select images</p>
                <img
                  src={Download}
                  alt="Download icon"
                  className="w-16 md:w-24"
                />
                <input
                  type="file"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                  id="imageInput"
                  multiple
                  accept="image/*"
                />
                <button
                  onClick={() => document.getElementById("imageInput").click()}
                  className="flex gap-[10px] justify-center items-center py-4 px-16 bg-[#CBA557] text-white font-bold text-sm rounded-[10px]"
                >
                  <FaPlus />
                  <p>Choose images</p>
                </button>
                {selectedImages.length > 0 && (
                  <button
                    onClick={() => handleUpload(selectedImages, "image")}
                    className="flex gap-[10px] justify-center items-center py-4 px-16 bg-[#CBA557] text-white font-bold text-sm rounded-[10px] mt-4"
                  >
                    <FaPlus />
                    <p>Upload images</p>
                  </button>
                )}
              </div>
            </div>

            {/* Video Upload Section */}
            <div className="boatVideo py-12 rounded-md flex-1 mx-2 bg-white shadow-lg">
              <div className="flex flex-col py-8 gap-4 items-center justify-center">
                <p>Select videos</p>
                <img
                  src={Download}
                  alt="Download icon"
                  className="w-16 md:w-24"
                />
                <input
                  type="file"
                  onChange={handleVideoChange}
                  style={{ display: "none" }}
                  id="videoInput"
                  multiple
                  accept="video/*"
                />
                <button
                  onClick={() => document.getElementById("videoInput").click()}
                  className="flex gap-[10px] justify-center items-center py-4 px-16 bg-[#CBA557] text-white font-bold text-sm rounded-[10px]"
                >
                  <FaPlus />
                  <p>Choose videos</p>
                </button>
                {selectedVideos.length > 0 && (
                  <button
                    onClick={() => handleUpload(selectedVideos, "video")}
                    className="flex gap-[10px] justify-center items-center py-4 px-16 bg-[#CBA557] text-white font-bold text-sm rounded-[10px] mt-4"
                  >
                    <FaPlus />
                    <p>Upload videos</p>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photo;
