import React, { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoSearchOutline } from "react-icons/io5";
import { TiLocation } from "react-icons/ti";
import { AiOutlinePlus } from "react-icons/ai";
import CircularBar from "./CircularBar";
import { Link, useNavigate } from "react-router-dom";
import { AdminContext } from "../../../../Context/AdminContext";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ArrowLeft = ({ className, style, onClick }) => (
  <div
    className={`${className} bg-black rounded-full flex items-center justify-center`}
    style={{ ...style, left: "10px", zIndex: 1 }}
    onClick={onClick}
  >
    <FaArrowLeft color="white" />
  </div>
);

const ArrowRight = ({ className, style, onClick }) => (
  <div
    className={`${className} bg-black rounded-full flex items-center justify-center`}
    style={{ ...style, right: "10px", zIndex: 1 }}
    onClick={onClick}
  >
    <FaArrowRight color="white" />
  </div>
);
const MyBoats = () => {
  const { getBoats, deleteBoat } = useContext(AdminContext);
  const [boatData, setBoatData] = useState([]);
  const [boatIdToDelete, setBoatIdToDelete] = useState(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [boatType, setBoatType] = useState("");
  const [boatLength, setBoatLength] = useState("");
  const [filteredBoats, setFilteredBoats] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBoats = async () => {
      try {
        const boats = await getBoats();
        setBoatData(boats);
      } catch (error) {
        console.error("Error fetching boats:", error);
      }
    };
    fetchBoats();
  }, [getBoats]);
  useEffect(() => {
    const applyFilters = () => {
      let filtered = boatData;

      // Filter by search text
      if (searchText) {
        filtered = filtered.filter(
          (boat) =>
            boat.rental[0].BoatName.toLowerCase().includes(
              searchText.toLowerCase()
            ) ||
            boat.boat.brand.toLowerCase().includes(searchText.toLowerCase()) ||
            boat.boat.model.toLowerCase().includes(searchText.toLowerCase()) ||
            boat.boat._id.toLowerCase().includes(searchText.toLowerCase())
        );
      }

      // Filter by boat type
      if (boatType) {
        filtered = filtered.filter((boat) =>
          boat.boat.type.toLowerCase().includes(boatType.toLowerCase())
        );
      }

      // Filter by boat length
      if (boatLength) {
        filtered = filtered.filter(
          (boat) => boat.boat.lengthMeters <= parseFloat(boatLength)
        );
      }

      setFilteredBoats(filtered);
    };

    applyFilters();
  }, [boatData, searchText, boatType, boatLength]);

  const handleDeleteClick = (id) => {
    setBoatIdToDelete(id);
    setShowDeletePopup(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteBoat(boatIdToDelete);
      setShowDeletePopup(false);
      setBoatData(boatData.filter((boat) => boat.boat._id !== boatIdToDelete));
    } catch (error) {
      console.error("Error deleting boat:", error);
    }
  };

  const handleCancelDelete = () => {
    setShowDeletePopup(false);
  };

  const handleChange = (e, id) => {
    localStorage.setItem("id", id);
    navigate(e.target.value);
  };

  const handleManageCalendar = (boatId) => {
    navigate(`/Dashboard/my-boats/calender`, { state: { boatId } });
  };

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };

  const pages = [
    { path: "", page: "Select" },
    { path: "/Dashboard/calender/createlist", page: "Boat Information" },
    { path: "/Dashboard/calender/createlist", page: "Rental Information" },
    { path: "/Dashboard/my-boats/equipments", page: "Equipments" },
    { path: "/Dashboard/my-boats/information", page: "Description" },
    { path: "/Dashboard/my-boats/extra-services", page: "Extra Service" },
    { path: "/Dashboard/my-boats/deposit", page: "Damage Deposit" },
    { path: "/Dashboard/my-boats/insurance", page: "Insurance" },
    { path: "/Dashboard/my-boats/address", page: "Address" },
    { path: "/Dashboard/my-boats/promotion", page: "Promotions" },
    { path: "/Dashboard/my-boats/rates", page: "Rates" },
    { path: "/Dashboard/my-boats/photo", page: "Image" },
    { path: "/Dashboard/my-boats/info-access", page: "Access Information" },
  ];
  const getRandomAutoplaySpeed = () => Math.floor(Math.random() * 1000) + 3000;

  return (
    <div className="mx-[4%] mt-[3%]">
      <div className="md:flex md:justify-between justify-center text-center gap-5 md:gap-0 items-center">
        <h1 className="text-[#07474F] text-lg font-bold">My Boats</h1>
        <div className="flex md:gap-5 flex-wrap justify-center gap-3">
          <Link to="/Dashboard/calender/createlist">
            <button className="px-4 py-2 text-[#07474F] text-xs text-center border border-[#07474F] rounded">
              Add a boat
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center flex-col md:flex-row space-y-2 md:space-y-0 mt-[2%] w-full gap-[4%]">
        <div className="flex gap-2 items-center py-2 px-3 rounded-xl border border-[#B7B7B7]">
          <IoSearchOutline className="text-[#4B465C]" />
          <input
            type="text"
            placeholder="Name, ID, Brand, Model"
            className="bg-transparent outline-none focus:ring-0 lg:w-full md:w-1/3 w-1/2 text-sm text-[#4B465C] font-normal"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="items-center py-2 px-3 rounded-xl border border-[#B7B7B7]">
          <input
            type="text"
            placeholder="Boat Type"
            className="bg-transparent outline-none focus:ring-0 lg:w-full md:w-1/3 w-1/2 text-sm text-[#4B465C] font-normal"
            value={boatType}
            onChange={(e) => setBoatType(e.target.value)}
          />
        </div>
        <div className="items-center py-2 px-3 rounded-xl border border-[#B7B7B7]">
          <input
            type="text"
            placeholder="Boat Length"
            className="bg-transparent outline-none focus:ring-0 lg:w-full md:w-1/3 w-1/2 text-sm text-[#4B465C] font-normal"
            value={boatLength}
            onChange={(e) => setBoatLength(e.target.value)}
          />
        </div>
      </div>

      {filteredBoats.map((boat, index) => (
        <div key={index} className=" grid  grid-cols-1 gap-3 mt-[4%]">
          <div className=" w-full  gap-3 grid md:grid-cols-2">
            {boat.boatImages && boat.boatImages.length > 0 ? (
              <>
                <Slider
                  {...sliderSettings}
                  className="min-w-44"
                  autoplaySpeed={getRandomAutoplaySpeed()}
                >
                  {boat.boatImages[0].images.map((image, imageIndex) => (
                    <img
                      key={imageIndex}
                      src={image}
                      alt=""
                      className="w-full h-80 min-h-full object-cover"
                    />
                  ))}
                </Slider>
              </>
            ) : (
              <div className="md:w-64 w-1/2 flex flex-col items-center justify-center border border-dashed border-[#B7B7B7] rounded p-4">
                <AiOutlinePlus className="text-[#CBA557] text-4xl" />
                <p className="text-[#818C8E] text-sm mt-2">Add Image</p>
              </div>
            )}

            <div className="flex flex-col gap-2 items-start">
              <h1 className="text-[#00151C] font-semibold">
                {boat.rental.map((item) => item.BoatName)}
              </h1>
              <p className="text-[#818C8E] font-normal text-sm">
                {boat.boat.brand} - {boat.boat.year}
              </p>
              <div className="flex gap-1 items-center">
                <span className="text-[#CBA557]">
                  <TiLocation />
                </span>
                <p className="text-sm font-normal">{boat.boat.region}</p>
              </div>

              <div className="flex gap-2 my-[1%] flex-wrap">
                <button
                  className="md:px-4 md:py-2 px-3 py-1 bg-[#CBA557] border border-[#CBA557] rounded text-xs font-bold text-[#FFFFFF]"
                  onClick={() => handleManageCalendar(boat.boat._id)}
                >
                  Manage your calendar
                </button>

                <div className="flex gap-2 flex-wrap">
                  <button
                    type="button"
                    className="md:px-4 md:py-2 px-3 py-1 border border-[#000]"
                  >
                    Edit your boat
                  </button>
                  <select
                    name=""
                    id=""
                    className="bg-transparent py-2 px-3 border-0 outline-none md:text-xl text-xs"
                    onChange={(e) => {
                      handleChange(e, boat.boat._id);
                    }}
                  >
                    {pages.map((item, index) => (
                      <option key={index} value={item.path}>
                        {item.page}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex gap-1 flex-wrap">
                <p className="text-xs font-normal text-[#FAB10A]">
                  This announcement is not complete
                </p>
                <p className="text-xs font-bold text-[#07474F]">
                  • Complete the listing
                </p>
              </div>
              <button
                className="self-start text-xs text-[#E77359] font-bold underline"
                onClick={() => handleDeleteClick(boat.boat._id)}
              >
                Delete
              </button>
            </div>
          </div>

          <div className=" w-full  md:grid-cols-2 justify-center grid gap-3">
            <CircularBar completionPercentage={boat.completionPercentage} />
            <div className="flex flex-col space-y-2">
              <p className="text-[#818C8E] text-sm font-normal">2024</p>
              <div className="w-full border border-[#00151C] border-opacity-[12.5%] rounded">
                <div
                  className="flex flex-col w-full pl-4 pr-20 py-2 border-b"
                  style={{ borderBottomColor: "rgba(0, 21, 28, 0.125)" }}
                >
                  <div className="text-sm text-[#212529] font-bold">0 €</div>
                  <div className="text-xs text-[#818C8E] font-normal">
                    Income
                  </div>
                </div>
                <div
                  className="flex flex-col w-full pl-4 pr-20 py-2 border-b"
                  style={{ borderBottomColor: "rgba(0, 21, 28, 0.125)" }}
                >
                  <div className="text-sm text-[#212529] font-bold">0</div>
                  <div className="text-xs text-[#818C8E] font-normal">
                    Expenses
                  </div>
                </div>
                <div className="flex flex-col w-full pl-4 pr-20 py-2">
                  <div className="text-sm text-[#212529] font-bold">0</div>
                  <div className="text-xs text-[#818C8E] font-normal">
                    Rentals
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {showDeletePopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-md w-80">
            <p className="text-center text-gray-800">
              Are you sure you want to delete?
            </p>
            <div className="flex justify-center mt-4 gap-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={handleConfirmDelete}
              >
                Confirm
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
                onClick={handleCancelDelete}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBoats;
