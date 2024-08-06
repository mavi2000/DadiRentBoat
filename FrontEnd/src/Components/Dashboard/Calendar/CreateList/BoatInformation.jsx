import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../../../Context/AdminContext.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import baseURL from "../../../../../APi/BaseUrl.js";
import yatch from "../../../../assets/Images/Yatch Boat.png";
import sail from "../../../../assets/Images/Sail Boat.png";
import catamaran from "../../../../assets/Images/Catamaran Boat.png";
import jet from "../../../../assets/Images/Jet Skies Boat.png";
import House from "../../../../assets/Images/House Baot.png";
import Rib from "../../../../assets/Images/RIB Boat.png";
import Gullet from "../../../../assets/Images/GullET Boat.png";
import Motor from "../../../../assets/Images/Motor Boat.png";
import { useTranslation } from "react-i18next";

const BoatInformation = () => {
  const { t } = useTranslation();
  const id = localStorage.getItem("id");
  const { createBoat, error, navigate } = useContext(AdminContext);

  const [formData, setFormData] = useState({
    type: "",
    brand: "",
    model: "",
    year: 2017,
    region: "Livorno, Italy",
    city: "Livorno",
    boardingCapacity: 8,
    harbour: "",
    totalEnginePowerHP: 40,
    lengthMeters: 7,
    telephone: "+39 3701564317",
    waterTankLiters: 25,
    fuelTankLiters: 50,
    droughtMeters: 90,
  });

  useEffect(() => {
    if (id) {
      const getBoatInfo = async () => {
        try {
          const res = await baseURL("/boat/get-boat-info/" + id);
          const {
            data: { boat },
          } = res;
          setFormData({ ...boat });
        } catch (error) {
          console.log(error);
        }
      };
      getBoatInfo();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      try {
        const res = await baseURL.patch("/boat/update-boat/" + id, formData);
        toast.success(t("boatUpdatedSuccess"));
        localStorage.removeItem("id");
        setFormData({ ...res.data.updatedBoat });
        setTimeout(() => {
          navigate("/Dashboard/my-boats");
        }, 3000);
      } catch (error) {
        toast.error(t("boatUpdateFailed"));
      }
    } else {
      try {
        await createBoat(formData);
        toast.success(t("boatCreatedSuccess"));
      } catch (error) {
        console.error(t("boatCreateError"), error);
        const errors = error?.response?.data?.error;
        if (Array.isArray(errors)) {
          errors.forEach((err) => {
            toast.error(err);
          });
        } else {
          toast.error(errors || t("boatCreateFailed"));
        }
      }
    }
  };

  const boatTypes = [
    { name: t("sail"), image: sail },
    { name: t("motorboat"), image: Motor },
    { name: t("rubberDinghy"), image: Rib },
    { name: t("jetSkis"), image: jet },
    { name: t("yachts"), image: yatch },
    { name: t("houseboat"), image: House },
    { name: t("catamaran"), image: catamaran },
    { name: t("gullet"), image: Gullet },
  ];

  return (
    <div className="flex flex-col w-[100%] gap-20">
      <div className="flex justify-center flex-col gap-4 w-[100%]">
        <div>{t("boatType")}</div>
        <div className="flex flex-wrap gap-3">
          {boatTypes.map((item, index) => (
            <label
              key={index}
              className="flex items-center gap-2 border border-[#CBA557] p-4 rounded"
            >
              <input
                type="radio"
                name="type"
                value={item.name}
                checked={formData.type === item.name}
                onChange={handleChange}
                className="w-4 h-4 hidden"
              />
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 object-cover"
              />
              <div className="font-normal text-[#CBA557] 500px:text-sm 300px:text-xs outline-none">
                {item.name}
              </div>
            </label>
          ))}
        </div>
      </div>
      <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">{t("boatType")}</div>
            <div className="w-[90%]">
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder={t("enterBoatType")}
                className="w-[100%] bg-transparent border border-gray-400 text-gray-400 py-3 px-4 rounded 1000px:text-sm 300px:text-xs outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">{t("boatBrand")}</div>
            <div className="w-[90%]">
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder={t("enterBoatBrand")}
                className="w-[100%] bg-transparent border border-gray-400 text-gray-400 py-3 px-4 rounded 1000px:text-sm 300px:text-xs outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">{t("model")}</div>
            <div className="w-[90%]">
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                placeholder={t("enterModel")}
                className="w-[100%] bg-transparent border border-gray-400 text-gray-400 py-3 px-4 rounded 1000px:text-sm 300px:text-xs outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">{t("year")}</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs outline-none">
              <input
                type="number"
                name="year"
                min={2010}
                value={formData.year}
                onChange={handleChange}
                className="w-[100%] h-[100%] py-3 px-4 bg-transparent outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">{t("region")}</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs outline-none">
              <input
                type="text"
                name="region"
                placeholder="Livorno, Italy"
                value={formData.region}
                onChange={handleChange}
                className="w-[100%] bg-transparent border-none py-3 px-4 rounded 1000px:text-sm 300px:text-xs"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">{t("city")}</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs outline-none">
              <input
                type="text"
                name="city"
                placeholder="Livorno"
                value={formData.city}
                onChange={handleChange}
                className="w-[100%] bg-transparent border-none py-3 px-4 rounded 1000px:text-sm 300px:text-xs"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">{t("harbour")}</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs outline-none">
              <input
                type="text"
                name="harbour"
                placeholder=""
                value={formData.harbour}
                onChange={handleChange}
                className="w-[100%] bg-transparent border-none py-3 px-4 rounded 1000px:text-sm 300px:text-xs"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">{t("boardingCapacity")}</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs outline-none">
              <input
                type="number"
                name="boardingCapacity"
                min={0}
                value={formData.boardingCapacity}
                onChange={handleChange}
                className="w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">{t("totalEnginePower")}</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs outline-none">
              <input
                type="number"
                name="totalEnginePowerHP"
                step="0.1"
                value={formData.totalEnginePowerHP}
                onChange={handleChange}
                className="w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">{t("length")}</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs outline-none">
              <input
                type="Number"
                name="lengthMeters"
                step="0.1"
                value={formData.lengthMeters}
                onChange={handleChange}
                className="w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">{t("telephone")}</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs outline-none">
              <input
                type="text"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">{t("waterTank")}</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs outline-none">
              <input
                type="Number"
                name="waterTankLiters"
                min={0}
                step="0.1"
                value={formData.waterTankLiters}
                onChange={handleChange}
                className="w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">{t("fuelTank")}</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs outline-none">
              <input
                type="number"
                name="fuelTankLiters"
                min={0}
                step="0.1"
                value={formData.fuelTankLiters}
                onChange={handleChange}
                className="w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">{t("drought")}</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs outline-none">
              <input
                type="number"
                name="droughtMeters"
                min={0}
                step="0.1"
                value={formData.droughtMeters}
                onChange={handleChange}
                className="w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="py-3 px-8 bg-[#cba557] text-sm text-white rounded-lg"
          >
            {!id ? t("next") : t("update")}
          </button>
        </div>
        {error && <div className="text-red-500">{error}</div>}
      </form>
    </div>
  );
};

export default BoatInformation;
