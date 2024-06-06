// UserContext.js
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure to import the toastify CSS
import baseURL from "../APi/BaseUrl.js";

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const fetchBoatDetails = async () => {
    try {
      const response = await baseURL.get("/boat/get-boat");
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to fetch boat details";
      toast.error(errorMessage);
      throw error;
    }
  };

  return (
    <UserContext.Provider value={{ fetchBoatDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
