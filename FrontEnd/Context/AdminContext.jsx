import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure to import the toastify CSS
import baseURL from "../APi/BaseUrl.js";

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [error, setError] = useState(null);
  const [boatId, setBoatId] = useState(null);

  const createBoat = async (boatData) => {
    console.log("boatData",boatData)
    try {

      const response = await baseURL.post('/boat/CreateBoat', boatData);
      toast.success('Boat created successfully');
      const boatId= response?.data
      if(boatId){
        setBoatId(response?.data.boat._id)
      }
      return response?.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to create boat";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  };

  const rentBoat = async (rentalData) => {
    try {
      const response = await baseURL.post("/rent/RentBoat", rentalData);
      toast.success("Boat rented successfully");
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to rent boat";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  };
  const damageDeposit = async (depositData) => {
    try {
      const response = await baseURL.post(
        "/demage/Demage-Deposits",
        depositData
      );
      console.log(response);
      toast.success("deposit amount successfully");
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to deposit amount";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  };

  const getTermsAndConditions = async () => {
    try {
      const response = await baseURL.get("/condition/get-condition");
      toast.success("Terms and conditions fetched successfully");
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to fetch conditions";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  };

  const addTermAndCondition = async (conditionData) => {
    try {
      const response = await baseURL.post(
        "/condition/Term-condition",
        conditionData
      );
      toast.success("Condition added successfully");
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to add condition";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  };
  const getRate = async () => {
    try {
      const response = await baseURL.get("/Rates/get-Rates");
      toast.success("Rates fetched successfully");
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to fetch rates";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  };
  const addRate = async (rateData) => {
    try {
      const response = await baseURL.post("/Rate/add-Rates", rateData);
      toast.success("Rate added successfully");
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to add rate";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  };

  const createVoucher = async (voucherData) => {
    try {
      const response = await baseURL.post(
        "/voucher/create-voucher",
        voucherData
      );
      toast.success("Voucher created successfully");
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to create voucher";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  };

  const uploadBoatImages = async (formData) => {
    try {
      const response = await baseURL.post("/image/uploadBoatImages", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Image uploaded successfully");
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to upload image";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  };

  const getUnavailableBoatDates = async (startDate, endDate) => {
    try {
      const response = await baseURL.post("/Booking//Book-boat", {
        startDate,
        endDate,
      });
      toast.success("Unavailable boat dates fetched successfully");
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to fetch unavailable boat dates";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  };

  return (
    <AdminContext.Provider
      value={{
        admin,
        error,
        boatId,
        createBoat,
        rentBoat,
        getTermsAndConditions,
        addTermAndCondition,
        createVoucher,
        uploadBoatImages,
        getUnavailableBoatDates,
        addRate,
        getRate,
        damageDeposit,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export { AdminContext, AdminProvider };
