import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import baseURL from "../APi/BaseUrl.js";

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [conditions, setConditions] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const createBoat = async (boatData) => {
    try {
      const response = await baseURL.post("/boat/CreateBoat", boatData);
      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || "Failed to create boat");
      throw error;
    }
  };
  const termCondition = async (conditionData) => {
    try {
      const response = await baseURL.post(
        "/condition/Term-condition",
        conditionData
      );
      setConditions([...conditions, response.data]); // Update conditions state
      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || "Failed to add condition");
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

  useEffect(() => {
    const checkAdminAuth = async () => {
      try {
        const response = await baseURL.get("/admin/checkAuth");
        setAdmin(response.data.admin);
      } catch (error) {
        setAdmin(null);
      }
    };
    checkAdminAuth();
  }, []);

  return (
    <AdminContext.Provider
      value={{
        admin,
        error,
        createBoat,
        rentBoat,
        termCondition,
        conditions,
        uploadBoatImage,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export { AdminContext, AdminProvider };
