import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import baseURL from '../APi/BaseUrl.js';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const saveToken = (token) => {
    localStorage.setItem('authToken', token);
  };

  const removeToken = () => {
    localStorage.removeItem('authToken');
  };

  const getToken = () => {
    return localStorage.getItem('authToken');
  };

  const setAuthToken = (token) => {
    if (token) {
      baseURL.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete baseURL.defaults.headers.common['Authorization'];
    }
  };

  const signUp = async (signupData) => {
    try {
      const response = await baseURL.post('/signup', signupData);
      if (response.data?.user && response.data?.token) {
        setUser(response.data.user);
        saveToken(response.data.token);
        setAuthToken(response.data.token);
        toast.success('Signup successful!');
        navigate('/');
      } else {
        setError('Unexpected response format');
        toast.error('Unexpected response format');
      }
    } catch (error) {
      console.error('SignUp error:', error);
      setError(error.response?.data?.message || 'Network Error');
      toast.error(error.response?.data?.message || 'Network Error');
    }
  };

  const login = async (loginData) => {
    try {
      const response = await baseURL.post('/login', loginData);
      if (response.data?.user && response.data?.token) {
        setUser(response.data.user);
        const role = response.data.user.roles;
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('Token', response.data.token);
        toast.success('Loginup successful!');
        return role; // Return the role for navigation purposes
      } else {
        setError('Unexpected response format');
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
      throw error;
    }
  };



  const logout = async () => {
    try {
      removeToken();

      setAuthToken(null);

      setUser(null);

      navigate('/');
      toast.success('Logout successful!');
    } catch (error) {
      setError(error.response?.data?.message || 'Logout failed');
      toast.error(error.response?.data?.message || 'Logout failed');
    }
  }

  const forgotPassword = async (email) => {
    try {
      await baseURL.post('/invite', { email });
      setError(null);
      toast.success('Password reset email sent!');
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to send invite');
      toast.error(error.response?.data?.message || 'Failed to send invite');
    }
  };

  const resetPassword = async (token, newPassword) => {
    try {
      await baseURL.post('/invite/verify', { token, newPassword });
      setError(null);
      toast.success('Password reset successful!');
      navigate('/Login');
    } catch (error) {
      setError(error.response?.data?.message || 'Error resetting password');
      toast.error(error.response?.data?.message || 'Error resetting password');
    }
  };

  const inviteUser = async (email) => {
    try {
      await baseURL.post('/invite', { email });
      setError(null);
      toast.success('User invited successfully!');
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to invite user');
      toast.error(error.response?.data?.message || 'Failed to invite user');
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const token = getToken();
      if (token) {
        setAuthToken(token);
        try {
          const response = await baseURL.get('/checkAuth');
          setUser(response.data?.user);
        } catch (error) {
          setUser(null);
        }
      }
    };
    checkAuth();
  }, []);
  // update user profile
  const updateUser = async (userData) => {
    console.log(userData);
    try {
      const response = await baseURL.patch('/update-user', userData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });
      setUser(response.data.user)
      toast.success("Profile updated successfully!")
    } catch (error) {
      toast.error('Failed to update profile')
      console.log(error);
    }
  }
  return (
    <AuthContext.Provider
      value={{ user, error, signUp, login, logout, forgotPassword, resetPassword, inviteUser, updateUser }}
    >
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
