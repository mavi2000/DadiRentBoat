import { Link, useNavigate } from 'react-router-dom';
import PopupsLayout from './PopupsLayout';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../../Context/AuthContext'; // Update the path to AuthProvider
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { login, error } = useContext(AuthContext);
  const [loading, setLoading] = useState('')
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(prev => !prev)
    try {
      const role = await login(loginData);
      if (role === 'admin') {
        navigate('/Dashboard/my-boats');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Login error: ', error);
    } finally {
      setLoading(prev => !prev)
    }
  };
  // this useEffect will handle the alert
  useEffect(() => {
    if (error) {
      toast.error(error)
    }
  }, [error])
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
              onChange={handleChange}
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
              autoComplete="off"
              onChange={handleChange}
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
            {/* {error && <div className="text-red-500">{error}</div>} */}
            <button
              type="submit"
              className="bg-[--primary-color] px-6 py-3 rounded-md text-white w-full my-6"
              disabled={loading}
            >
              {loading ? "Checking ..." : "Log in"}
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
