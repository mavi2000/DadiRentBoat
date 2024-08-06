import React, { useState, useContext, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AdminContext } from "../../../../../Context/AdminContext.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import baseURL from "../../../../../APi/BaseUrl.js";
import { useTranslation } from "react-i18next";

const RentalInformation = () => {
  const { t } = useTranslation();
  const id = localStorage.getItem("id");
  const { rentBoat, error, boatId, navigate } = useContext(AdminContext);
  const [rentalData, setRentalData] = useState({
    boatId: "",
    BoatName: "",
    Port: "",
    city: "",
    minPrice: "",
    duration: "",
  });

  useEffect(() => {
    setRentalData((prevState) => ({
      ...prevState,
      boatId: boatId,
    }));
  }, [boatId]);

  useEffect(() => {
    if (id) {
      const getBoatRent = async () => {
        try {
          const res = await baseURL("/rent/get-boat-rent/" + id);
          const {
            data: { rent },
          } = res;
          setRentalData({ ...rent });
        } catch (error) {
          console.log(error);
        }
      };
      getBoatRent();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRentalData({
      ...rentalData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
      try {
        await rentBoat(rentalData);
        toast.success(t("rentCreatedSuccess"));
        navigate("/Dashboard/my-boats/photo");
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          const errorMessage = error.response.data.error;
          toast.error(errorMessage);
        } else {
          toast.error(t("rentCreateFailed"));
        }
      }
    } else {
      try {
        const res = await baseURL.patch(
          "/rent/update-boat-rent/" + id,
          rentalData
        );
        localStorage.removeItem("id");
        setRentalData({ ...res.data.updatedRent });
        toast.success(t("rentUpdatedSuccess"));
        setTimeout(() => {
          navigate("/Dashboard/my-boats");
        }, 3000);
      } catch (error) {
        console.log(error);
        toast.error(t("rentUpdateFailed"));
      }
    }
  };

  return (
    <div className="flex flex-col w-[95%] gap-20">
      <form
        className="flex flex-wrap flex-col w-[90%] gap-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label className="text-sm font-normal text-[#4b465c]">
            {t("modelOrBoatName")}
          </label>
          <input
            type="text"
            required
            autoComplete="off"
            name="BoatName"
            value={rentalData.BoatName}
            onChange={handleChange}
            placeholder={t("writeBoatName")}
            className="border border-[#DBDADE] p-2 rounded-md text-sm outline-none"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-5 w-[100%]">
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C]">{t("place")}</div>
            <div className="w-[90%]">
              <input
                type="text"
                name="Port"
                value={rentalData.Port}
                onChange={handleChange}
                placeholder={t("enterPort")}
                className="w-[100%] bg-transparent border border-gray-400 text-gray-400 py-3 px-4 rounded 1000px:text-sm 300px:text-xs outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%]">
            <div className="text-[#4B465C] font-light">{t("city")}</div>
            <div className="w-[90%] border border-[#DBDADE] text-gray-400 rounded">
              <input
                type="text"
                name="city"
                value={rentalData.city}
                onChange={handleChange}
                placeholder={t("enterCity")}
                className="w-[100%] bg-transparent border-none py-3 px-4 rounded text-sm outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%]">
            <div className="text-[#4B465C] font-light">{t("minimumPrice")}</div>
            <div className="w-[90%] border border-[#DBDADE] text-gray-400 rounded">
              <input
                type="number"
                name="minPrice"
                value={rentalData.minPrice}
                onChange={handleChange}
                placeholder={t("enterMinimumPrice")}
                className="w-[100%] bg-transparent border-none py-3 px-4 rounded text-sm outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%]">
            <div className="text-[#4B465C] font-light">{t("duration")}</div>
            <div className="w-[90%] border border-[#DBDADE] text-gray-400 rounded">
              <select
                name="duration"
                value={rentalData.duration}
                onChange={handleChange}
                className="w-[100%] bg-transparent border-none py-3 px-4 rounded text-sm outline-none"
              >
                <option value="">{t("selectDuration")}</option>
                <option value="Full Day">{t("fullDay")}</option>
                <option value="Half Day morning">{t("halfDayMorning")}</option>
                <option value="Half Day Evening">{t("halfDayEvening")}</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="py-2 px-8 bg-[#cba557] text-sm text-white rounded-lg"
          >
            {id ? t("update") : t("save")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RentalInformation;
