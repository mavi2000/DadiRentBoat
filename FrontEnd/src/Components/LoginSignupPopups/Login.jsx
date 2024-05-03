import { Link } from 'react-router-dom';
import PopupsLayout from './PopupsLayout';
import axiosBaseUrl from '../../../axios.config.js';
import { useState } from 'react';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const onChangeHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosBaseUrl.post('/login', loginData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PopupsLayout
      isSocials={true}
      content={
        <div className="max-w-[450px]">
          <h2 className="text-base">Welcome to Dadi Rental! 👋</h2>
          <p className="text-base mb-8">
            Please sign in to your account and start the adventure
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email or Username or Phone</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={onChangeHandler}
              placeholder="john.doe"
              className="w-full border-[1px] border-[#DBDADE] outline-none rounded-md mt-2 mb-6 px-4 py-2"
            />

            <label htmlFor="password" className="flex gap-3 justify-between">
              Password
              <Link to="/Forgot-Password">
                <span className="text-[--primary-color] cursor-pointer">
                  Forgot Password?
                </span>
              </Link>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={onChangeHandler}
              autoComplete="off"
              placeholder="&#183;&nbsp;&#183;&nbsp;&#183;&nbsp;&#183;&nbsp;&#183;&nbsp;&#183;&nbsp;&#183;&nbsp;&#183;&nbsp;&#183; "
              className="w-full border-[1px] border-[#DBDADE] outline-none rounded-md mt-2 mb-6 px-4 py-2"
            />
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="w-5 h-5 border-[1.5px] border-[#CBA55733] outline-none rounded-md accent-[--primary-color]"
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <button
              type="submit"
              className="bg-[--primary-color] px-6 py-3 rounded-md text-white w-full my-6"
            >
              Log in
            </button>
          </form>
          <p className="text-center">
            New on our platform?&nbsp;&nbsp;
            <Link to="/Signup">
              <span className="text-[--primary-color] cursor-pointer">
                Create an account
              </span>
            </Link>
          </p>
        </div>
      }
    />
  );
};
export default Login;
