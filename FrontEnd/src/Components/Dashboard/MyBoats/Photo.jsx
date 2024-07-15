import React, { useState, useContext } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { FaPlus } from "react-icons/fa6";
import Download from "../../../assets/Images/Download-Cloud.png";
import { AdminContext } from "../../../../Context/AdminContext";
import { toast } from "react-toastify";
import LoadingSpinner from "./LoadingSpinner";

const Photo = () => {
  const id = localStorage.getItem('id');
  console.log("id",id)
  const { uploadBoatImages, boatId, navigate } = useContext(AdminContext);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (event) => {
    setSelectedImages(Array.from(event.target.files));
  };

  const handleVideoChange = (event) => {
    setSelectedVideos(Array.from(event.target.files));
  };

  const handleUpload = async () => {
    const files = [...selectedImages, ...selectedVideos];
    if (files.length > 0) {
      const formData = new FormData();
      selectedImages.forEach(file => {
        formData.append("images", file);
      });
      selectedVideos.forEach(file => {
        formData.append("videos", file);
      });
      formData.append("boatId", id || boatId);

      setLoading(true); // Set loading to true when the upload starts
      try {
        const response = await uploadBoatImages(formData);
        setSelectedImages([]); // Reset the selected files after upload
        setSelectedVideos([]); // Reset the selected files after upload
        toast.success("Files uploaded successfully");
        localStorage.removeItem('id');
        setTimeout(() => {
          navigate('/Dashboard/my-boats');
        }, 3000);
      } catch (error) {
        console.error("Failed to upload files", error);
        toast.error("Failed to upload files");
      } finally {
        setLoading(false); // Set loading to false when the upload completes or fails
      }
    } else {
      alert("Please select images or videos first");
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
                <div className="flex flex-wrap gap-4 mt-4">
                  {selectedImages.map((image, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(image)}
                      alt="Selected"
                      className="w-24 h-24 object-cover rounded-md"
                    />
                  ))}
                </div>
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
                <div className="flex flex-wrap gap-4 mt-4">
                  {selectedVideos.map((video, index) => (
                    <video
                      key={index}
                      src={URL.createObjectURL(video)}
                      className="w-24 h-24 object-cover rounded-md"
                      controls
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={handleUpload}
              className="flex gap-[10px] justify-center items-center py-4 px-16 bg-[#CBA557] text-white font-bold text-sm rounded-[10px]"
            >
              <FaPlus />
              <p>Upload Files</p>
            </button>
          </div>
          {loading && (
          <LoadingSpinner/>
          )}
        </div>
      </div>
    </>
  );
};

export default Photo;
