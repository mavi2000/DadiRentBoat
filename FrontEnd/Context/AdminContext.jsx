import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure to import the toastify CSS
import baseURL from "../APi/BaseUrl.js";
import { useNavigate } from "react-router-dom";

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [error, setError] = useState(null);
  const [boatId, setBoatIdState] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const storedBoatId = sessionStorage.getItem("boatId");
    if (storedBoatId) {
      setBoatIdState(storedBoatId);
    }
  }, []);

  const setBoatId = (id) => {
    setBoatIdState(id);
    sessionStorage.setItem("boatId", id);
  };

  const createBoat = async (boatData) => {
    console.log("boatData", boatData);
    try {
      const response = await baseURL.post("/boat/CreateBoat", boatData);
      // toast.success("Boat created successfully");
      const boatId = response?.data;
      if (boatId) {
        setBoatId(response?.data.boat._id);
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
      // toast.success("Boat rented successfully");
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
      // toast.success("deposit amount successfully");
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to deposit amount";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  };

  const Insurances = async (InsuranceData) => {
    try {
      const response = await baseURL.post(
        "/insurence/add-Insurence",
        InsuranceData
      );
      // toast.success("deposit amount successfully");
      return response.data;
    } catch (error) {
      error.response?.data?.message || "Failed to add Insurance";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  };

  const ExtraServices = async (servicesData) => {
    console.log("servicesData", servicesData)
    try {
      const response = await baseURL.post(
        "/service/Extra-Service",
        servicesData
      );
      // toast.success("services added successfully");
      return response.data;
    } catch (error) {
      error.response?.data?.message || "Failed to add services";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  };

  const getExtraServices = async (getServicesData) => {
    try {
      const response = await baseURL.get(
        "/service/Extra-Service",
        getServicesData
      );
      // toast.success("displayed services successfully");
      return response.data;
    } catch (error) {
      error.response?.data?.message || "Failed to display services";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  };

  const boatDescription = async (boatDescription) => {
    console.log("boatDescription", boatDescription)
    try {
      const response = await baseURL.post(
        "/decription/add-Description",
        boatDescription
      );
      // toast.success("discription added successfully");
      return response.data;
    } catch (error) {
      error.response?.data?.message || "Failed to add description";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  };



  const InfoAccess = async (infoAccess) => {
    try {
      const response = await baseURL.post(
        "/boatAccess/Boat-Access",
        infoAccess
      );
      console.log(response);
      // toast.success("Information added successfully");
      return response.data;
    } catch (error) {
      error.response?.data?.message || "Failed to add Information";
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
      // toast.success("Condition added successfully");
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
      // toast.success("Rates fetched successfully");
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to fetch rates";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  };

  const createVoucher = async (voucherData) => {
    console.log("voucherData", voucherData)
    try {
      const response = await baseURL.post(
        "/voucher//create-vouchers",
        voucherData
      );
      // toast.success("Voucher created successfully");
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
      console.log(response);
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

  const getUnavailableBoatDates = async ({ startDate, endDate, timeSlot,boatId }) => {
    try {
      const response = await baseURL.post("/Booking/Book-boat", {
        startDate,
        endDate,
        timeSlot,
        boatId
      });
      // toast.success("Unavailable boat dates fetched successfully");
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

  const createLocation = async (locationData) => {
    console.log("locationData", locationData);
    try {
      const response = await baseURL.post(
        "/location/add-location",
        locationData
      );
      toast.success("Location created successfully");
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to create location";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  };

  const createEquipment = async (equipmentData) => {
    try {
      const response = await baseURL.post(
        "/equipment/Add-Equipment",
        equipmentData
      );
      toast.success("Equipment created successfully");
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to create equipment";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  };

  const addRate = async (rateData) => {
    console.log("rateData", rateData);
    try {
      const response = await baseURL.post("/Rate/add-Rates", rateData);
      // toast.success("Rate created successfully");
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to create rate";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  };

  const EditTermAndCondition = async (condition) => {
    try {
      const response = await baseURL.put(
        "/condition/edit-condition",
        condition
      );
      toast.success("Condition Edited successfully");
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to create rate";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  };

  const DeleteTermAndCondition = async (conditionId) => {
    console.log("conditionId", conditionId);
    try {
      const response = await baseURL.delete("/condition/delete-condition", {
        data: { conditionId },
      });
      // toast.success("Condition deleted successfully");
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to delete condition";
      toast.error(errorMessage);
      throw error;
    }
  };

  const addBoatAccessInformation = async (formData) => {
    console.log("formData", formData);
    try {
      const response = await baseURL.post("/boatAccess/Boat-Access", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // toast.success("Access information added successfully");
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to add access information";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  };



  const getBoats = async () => {
    try {
      const response = await baseURL.get("/boat/get-boat");
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to fetch boats";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  };


  const deleteBoat = async (boatId) => {

    console.log("boatId", boatId)
    try {
      const response = await baseURL.delete('/boat/delete-boat', {
        data: { id: boatId } // Pass the boat ID in the request body
      });
      toast.success("Boat deleted successfully");
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to delete boat";
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
        setBoatId,
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
        Insurances,
        createLocation,
        createEquipment,
        ExtraServices,
        getExtraServices,
        boatDescription,
        InfoAccess,
        addRate,
        EditTermAndCondition,
        DeleteTermAndCondition,
        addBoatAccessInformation,
        getBoats,
        deleteBoat, navigate
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export { AdminContext, AdminProvider };
