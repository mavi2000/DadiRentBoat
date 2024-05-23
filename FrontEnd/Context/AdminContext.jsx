import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import baseURL from "../APi/BaseUrl.js";

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [error, setError] = useState(null);

  const createBoat = async (boatData) => {
    try {
      const response = await baseURL.post("/boat/CreateBoat", boatData);
      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || "Failed to create boat");
      throw error;
    }
  };
  const AddRate = async () => {
    try {
      const responce = await baseURL.post("/Rate/add-Rates");
      return responce.data;
    } catch (error) {
      setError(error.response?.data?.message || "Failed to Add Rate");
      throw error;
    }
  };

  const rentBoat = async (rentalData) => {
    try {
      const response = await baseURL.post("/rent/RentBoat", rentalData);
      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || "Failed to rent boat");
      throw error;
    }
  };

  const getTermsAndConditions = async () => {
    try {
      const response = await baseURL.get("/condition/get-condition");
      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || "Failed to fetch conditions");
      throw error;
    }
  };

  const addTermAndCondition = async (conditionData) => {
    console.log("conditionDatassadsadsa", conditionData);
    try {
      const response = await baseURL.post(
        "/condition/Term-condition",
        conditionData
      );
      // toast.success('Condition added successfully');
      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || "Failed to add condition");
      throw error;
    }
  };

  const createVoucher = async (voucherData) => {
    try {
      const response = await baseURL.post(
        "/voucher/create-voucher",
        voucherData
      );
      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || "Failed to create voucher");
      throw error;
    }
  };

  // useEffect(() => {
  //   const checkAdminAuth = async () => {
  //     try {
  //       const response = await baseURL.get('/admin/checkAuth');
  //       setAdmin(response.data.admin);
  //     } catch (error) {
  //       setAdmin(null);
  //     }
  //   };
  //   checkAdminAuth();
  // }, []);

  return (
    <AdminContext.Provider
      value={{
        admin,
        error,
        createBoat,
        AddRate,
        rentBoat,
        getTermsAndConditions,
        addTermAndCondition,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export { AdminContext, AdminProvider };
