import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext.jsx';
import PopupsLayout from './PopupsLayout';
import { IoChevronBack } from 'react-icons/io5';

const ForgotPassword = () => {
  const { forgotPassword, inviteUser, error } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await inviteUser(email);
      setSuccessMessage('Invitation link sent successfully');
      setErrorMessage('');
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage(error.response?.data?.message || 'Error sending invitation link');
    }
  };

  return (
    <PopupsLayout
      isSocials={false}
      isBack={true}
      content={
        <div className="max-w-[450px]">
          <h2 className="text-2xl font-medium">Invite User 🔒</h2>
          <p className="text-base mb-8">Enter the user's email to send an invitation link</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              id="Email"
              name="Email"
              value={email}
              onChange={handleChange}
              placeholder="john.doe@gmail.com"
              className="w-full border-[1px] border-[#DBDADE] outline-none rounded-md mt-2 mb-6 px-4 py-2"
            />

            <button type="submit" className="bg-[--primary-color] px-6 py-3 rounded-md text-white w-full my-6">
              Send Invitation Link
            </button>
          </form>

          {successMessage && <div className="text-green-500">{successMessage}</div>}
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}

          <Link
            to="/Login"
            className="text-center text-[--primary-color] cursor-pointer flex gap-2 items-center justify-center"
          >
            <IoChevronBack size={20} />
            Back to log in
          </Link>
        </div>
      }
    />
  );
};

export default ForgotPassword;
