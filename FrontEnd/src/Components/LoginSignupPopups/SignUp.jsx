import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../../Context/AuthContext.jsx';
import { Link } from 'react-router-dom';
import PopupsLayout from './PopupsLayout';
import { toast } from 'react-toastify';

const SignUp = () => {
  const { signUp, error } = useContext(AuthContext);
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    countryCode: '+39',
    phoneNumber: '',
    password: '',
  });
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (error) {
      toast.error(error)
    }
  }, [error])
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setIsAgreementChecked(checked);
    } else {
      setSignupData({
        ...signupData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    if (isAgreementChecked) {
      try {
        const completePhoneNumber = signupData.countryCode + signupData.phoneNumber;
        const { countryCode, ...rest } = signupData;
        signUp({ ...rest, phoneNumber: completePhoneNumber });
      } catch (error) {
        console.log("signup error", error);
      } finally {
        setLoading(false)
      }
    }
  };

  console.log("signupData", signupData);

  return (
    <PopupsLayout
      isSocials={true}
      content={
        <div className="max-w-[450px]">
          <h2 className="text-2xl font-medium">Adventure starts here 🚀</h2>
          <p className="text-base mb-8">Create your account and book your Boat</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username* </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              placeholder="john.doe"
              className="w-full border-[1px] border-[#DBDADE] outline-none rounded-md mt-2 mb-6 px-4 py-2"
            />

            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="john.doe@gmail.com"
              className="w-full border-[1px] border-[#DBDADE] outline-none rounded-md mt-2 mb-6 px-4 py-2"
            />

            <label htmlFor="phoneNumber">
              Phone Number*
              <div className="flex mt-2 mb-6">
                <select
                  name="countryCode"
                  id="countryCode"
                  onChange={handleChange}
                  className="border-[1px] border-[#DBDADE] text-[#4B465C] outline-none rounded-l-md px-4 py-2"
                >
                  <option value="+39">+39</option>
                  <option value="+91">+91</option>
                  <option value="+92">+92</option>
                </select>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="313414242"
                  onChange={handleChange}
                  className="w-full border-[1px] border-[#DBDADE] outline-none rounded-r-md px-4 py-2"
                />
              </div>
            </label>

            <label htmlFor="password">Password*</label>
            <input
              type="password"
              id="password"
              autoComplete="off"
              name="password"
              onChange={handleChange}
              placeholder="&#183;&nbsp;&#183;&nbsp;&#183;&nbsp;&#183;&nbsp;&#183;&nbsp;&#183;&nbsp;&#183;&nbsp;&#183;&nbsp;&#183;"
              className="w-full border-[1px] border-[#DBDADE] outline-none rounded-md mt-2 mb-6 px-4 py-2"
            />
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                checked={isAgreementChecked}
                onChange={handleChange}
                className="w-5 h-5 border-[1.5px] border-[#CBA55733] outline-none rounded-md accent-[--primary-color]"
              />
              <label htmlFor="agreement">
                I agree to&nbsp;
                <span className="text-[--primary-color] cursor-pointer">
                  privacy policy & terms
                </span>
              </label>
            </div>
            {error && <div className="text-red-500">{error}</div>}

            <button
              type="submit"
              className={`bg-[--primary-color] px-6 py-3 rounded-md text-white w-full my-6 ${!isAgreementChecked && 'opacity-50 cursor-not-allowed'}`}
              disabled={!isAgreementChecked}
            >
              {loading ? "Checking..." : "Sign up"}
            </button>
          </form>
          <p className="text-center">
            Already have an account? &nbsp;&nbsp;
            <Link to="/Login">
              <span className="text-[--primary-color] cursor-pointer">
                Sign in instead
              </span>
            </Link>
          </p>
        </div>
      }
    />
  );
};

export default SignUp;
