import { Link } from 'react-router-dom';
import PopupsLayout from './PopupsLayout';

const SignUp = () => {
  return (
    <PopupsLayout
      isSocials={true}
      content={
        <div className="max-w-[450px]">
          <h2 className="text-2xl font-medium">Adventure starts here 🚀</h2>
          <p className="text-base mb-8">
            Create your account and book you Boat
          </p>

          <label htmlFor="Username">Username* </label>
          <input
            type="text"
            id="Username"
            name="Username"
            placeholder="john.doe"
            className="w-full border-[1px] border-[#DBDADE] outline-none rounded-md mt-2 mb-6 px-4 py-2"
          />

          <label htmlFor="Email">Email*</label>
          <input
            type="email"
            id="Email"
            name="Email"
            placeholder="john.doe@gmail.com"
            className="w-full border-[1px] border-[#DBDADE] outline-none rounded-md mt-2 mb-6 px-4 py-2"
          />

          <label htmlFor="phoneNumber">Phone Number*</label>
          <div className="flex mt-2 mb-6">
            <select
              name="phoneNumber"
              id="phoneNumber"
              className="border-[1px] border-[#DBDADE] text-[#4B465C] outline-none rounded-l-md px-4 py-2"
            >
              <option value="+39">+39</option>
              <option value="+91">+91</option>
              <option value="+92">+92</option>
            </select>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="313414242"
              className="w-full border-[1px] border-[#DBDADE] outline-none rounded-r-md px-4 py-2"
            />
          </div>

          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="&#183;&nbsp;&#183;&nbsp;&#183;&nbsp;&#183;&nbsp;&#183;&nbsp;&#183;&nbsp;&#183;&nbsp;&#183;&nbsp;&#183;"
            className="w-full border-[1px] border-[#DBDADE] outline-none rounded-md mt-2 mb-6 px-4 py-2"
          />
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              id="agreement"
              name="agreement"
              className="w-5 h-5 border-[1.5px] border-[#CBA55733] outline-none rounded-md accent-[--primary-color]"
            />
            <label htmlFor="agreement">
              I agree to&nbsp;
              <span className="text-[--primary-color] cursor-pointer">
                privacy policy & terms
              </span>
            </label>
          </div>
          <button className="bg-[--primary-color] px-6 py-3 rounded-md text-white w-full my-6">
            Sign up
          </button>
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
