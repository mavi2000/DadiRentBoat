import React, { useState, useContext } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import PopupsLayout from './PopupsLayout';
import { AuthContext } from '../../../Context/AuthContext.jsx'; // Import the AuthContext


const ResetPassword = () => {
  const { resetPassword } = useContext(AuthContext); // Access resetPassword function from AuthContext
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
  
    try {
      await resetPassword(token, newPassword); // Call resetPassword function with token and newPassword
      setSuccessMessage('Password reset successfully');
      setErrorMessage('');
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage(error.response?.data?.message || 'Error resetting password');
    }
  };

  return (
    <PopupsLayout
      isSocials={false}
      isBack={true}
      content={
        <div className="max-w-[450px]">
          <h2 className="text-2xl font-medium">Reset Password 🔒</h2>
          <p className="text-base mb-8">
            for <span className="font-semibold">john.doe@email.com</span>
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="******"
              className="w-full border-[1px] border-[#DBDADE] outline-none rounded-md mt-2 mb-6 px-4 py-2"
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="******"
              className="w-full border-[1px] border-[#DBDADE] outline-none rounded-md mt-2 mb-6 px-4 py-2"
            />

            <button type="submit" className="bg-[--primary-color] px-6 py-3 rounded-md text-white w-full my-6">
              Set New Password
            </button>
          </form>

          {successMessage && <div className="text-green-500">{successMessage}</div>}
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}

          <Link to="/Login">
            <p className="text-center text-[--primary-color] cursor-pointer flex gap-2 items-center justify-center">
              <IoChevronBack size={20} />
              Back to log in
            </p>
          </Link>
        </div>
      }
    />
  );
};

export default ResetPassword;