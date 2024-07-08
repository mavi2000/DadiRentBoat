// UserContext.js
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure to import the toastify CSS
import baseURL from "../APi/BaseUrl.js";
import { jwtDecode } from 'jwt-decode'
const UserContext = createContext();
const UserProvider = ({ children }) => {
  const token = localStorage.getItem('authToken')
  const [myBookings, setMyBookings] = useState(null)
  // fetch all my bookings
  const fetchMyBookings = async () => {
    if (token) {
      const decoded = jwtDecode(token)
      try {
        const res = await baseURL('/checkout/getUserPayments/' + decoded._id)
        setMyBookings(res.data)
      } catch (error) {
        console.log(error);
      }
    }
  }
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

    // console.log("id", id)

    try {
      const response = await baseURL.get(`/boat/get-Sigle-boat/${id}`);
      // console.log("response.data", response.data)
      return response.data;

    } catch (error) {
      throw new Error(error.response.data.message || 'Error fetching boat details');
    }
  };


  return (
    <UserContext.Provider value={{ fetchBoatDetails, fetchBoatDetailsById, fetchMyBookings, myBookings }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
