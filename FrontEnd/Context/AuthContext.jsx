import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import baseURL from '../APi/BaseUrl.js'; // Import the base URL from the configuration file

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Helper function to handle signup
  const signUp = async (signupData) => {
    try {
      const response = await baseURL.post('/signup', signupData);
      console.log('SignUp response:', response);
      if (response.data && response.data.user) {
        setUser(response.data.user);
        navigate('/Login');
      } else {
        setError('Unexpected response format');
      }
    } catch (error) {
      console.error('SignUp error:', error);
      setError(error.response?.data?.message || 'Network Error');
    }
  };
  console.log("user",user)

  // Helper function to handle login
  const login = async (loginData) => {
    try {
      const response = await baseURL.post('/login', loginData);
      setUser(response.data.user);
      navigate('/Our-Fleet');
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
      throw error;
    }
  };
  // Helper function to handle logout
  const logout = async () => {
    try {
      await baseURL.post('/logout');
      setUser(null);
      navigate('/login');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  // Helper function to handle forgot password
  const forgotPassword = async (email) => {
    try {
      await baseURL.post('/forgot-password', { email });
      setError(null);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  // Helper function to handle reset password
  const resetPassword = async (resetData) => {
    try {
      await baseURL.post('/reset-password', resetData);
      setError(null);
      navigate('/login');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  // Check if user is authenticated on initial load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await baseURL.get('/checkAuth');
        setUser(response.data.user);
      } catch (error) {
        setUser(null);
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, error, signUp, login, logout, forgotPassword, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
