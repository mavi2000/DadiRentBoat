import React, { useState, useEffect, useContext } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Download from "../../../assets/Images/Download-Cloud.png";
import { AdminContext } from "../../../../Context/AdminContext";
import { toast } from "react-toastify";
import LoadingSpinner from "./LoadingSpinner";

const Photo = () => {
  const id = localStorage.getItem("id");
  const { navigate, boatId, uploadBoatImages } = useContext(AdminContext);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [existingVideos, setExistingVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBoatMedia = async () => {
      try {
        const res = await baseURL.get(`/image/getBoatImages/${id}`);
        const { images, videos } = res.data.data;
        setExistingImages(images);
        setExistingVideos(videos);
      } catch (error) {
        console.error("Failed to fetch boat media", error);
      }
    };

    if (id || boatId) {
      fetchBoatMedia();
    }
  }, [id, boatId]);

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
      selectedImages.forEach((file) => {
        formData.append("images", file);
      });
      selectedVideos.forEach((file) => {
        formData.append("videos", file);
      });
      formData.append("boatId", id || boatId);

      setLoading(true);
      try {
        await uploadBoatImages(formData);
        setSelectedImages([]);
        setSelectedVideos([]);
        toast.success("Files uploaded successfully");
      } catch (error) {
        console.error("Failed to upload files", error);
        toast.error("Failed to upload files");
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please select images or videos first");
    }
  };

  const handleDelete = async (type, index) => {
    try {
      setLoading(true);
      const deleteType = type === 'image' ? 'images' : 'videos';
      const mediaUrl = type === 'image' ? existingImages[index] : existingVideos[index];

      const response = await baseURL.delete(`/image/deleteImage`, {
        data: {
          boatId: id || boatId,
          type: deleteType,
          url: mediaUrl,
        }
      });

      if (type === 'image') {
        setExistingImages(existingImages.filter((_, i) => i !== index));
      } else {
        setExistingVideos(existingVideos.filter((_, i) => i !== index));
      }

      toast.success("File deleted successfully");
    } catch (error) {
      console.error("Failed to delete file", error);
      toast.error("Failed to delete file");
    } finally {
      setLoading(false);
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
                <img src={Download} alt="Download icon" className="w-16 md:w-24" />
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
                <div className="flex flex-wrap gap-4 mt-4">
                  {existingImages.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image}
                        alt="Existing"
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <MdDelete
                        onClick={() => handleDelete('image', index)}
                        className="absolute top-0 right-0 text-red-500 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Upload Section */}
            <div className="boatVideo py-12 rounded-md flex-1 mx-2 bg-white shadow-lg">
              <div className="flex flex-col py-8 gap-4 items-center justify-center">
                <p>Select videos</p>
                <img src={Download} alt="Download icon" className="w-16 md:w-24" />
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
                <div className="flex flex-wrap gap-4 mt-4">
                  {existingVideos.map((video, index) => (
                    <div key={index} className="relative">
                      <video
                        src={video}
                        className="w-24 h-24 object-cover rounded-md"
                        controls
                      />
                      <MdDelete
                        onClick={() => handleDelete('video', index)}
                        className="absolute top-0 right-0 text-red-500 cursor-pointer"
                      />
                    </div>
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
          {loading && <LoadingSpinner />}
        </div>
      </div>
    </>
  );
};

export default Photo;
