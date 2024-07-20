// UserContext.js
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import baseURL from "../APi/BaseUrl.js";
import {jwtDecode} from "jwt-decode";
import { useNavigate } from "react-router-dom"; // Ensure you have react-router-dom installed

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const token = localStorage.getItem('authToken');
  const navigate = useNavigate();
  const [myBookings, setMyBookings] = useState(null);

  const fetchMyBookings = async () => {
    if (token) {
      const decoded = jwtDecode(token);
      try {
        const res = await baseURL.get('/checkout/getUserPayments/' + decoded._id);
        setMyBookings(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

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

  const fetchBoatDetailsById = async (id) => {
    try {
      const response = await baseURL.get(`/boat/get-Sigle-boat/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Error fetching boat details');
    }
  };

  const updateUser = async (formData) => {
    try {
      const response = await baseURL.patch("/update-user", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Profile updated successfully");
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to update profile";
      toast.error(errorMessage);
      throw error;
    }
  };

  const updatePassword = async (passwordData) => {
    try {
      const response = await baseURL.patch("/update-password", passwordData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Password updated successfully");
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to update password";
      toast.error(errorMessage);
      throw error;
    }
  };

  const deleteUser = async () => {
    try {
      const response = await baseURL.delete("/deleteAccount", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Account deleted successfully");
      localStorage.removeItem('authToken');
      setMyBookings(null);
      navigate("/"); // Navigate to home page or login page
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to delete account";
      toast.error(errorMessage);
      throw error;
    }
  };

  return (
    <UserContext.Provider value={{ fetchBoatDetails, fetchBoatDetailsById, fetchMyBookings, myBookings, updateUser, updatePassword, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
