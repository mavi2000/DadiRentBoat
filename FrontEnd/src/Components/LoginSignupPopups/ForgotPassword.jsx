import { Link } from 'react-router-dom';
import PopupsLayout from './PopupsLayout';
import { IoChevronBack } from 'react-icons/io5';

const ForgotPassword = () => {
  return (
    <PopupsLayout
      isSocials={false}
      isBack={true}
      content={
        <div className="max-w-[450px]">
          <h2 className="text-2xl font-medium">Forgot Password? 🔒</h2>
          <p className="text-base mb-8">
            Enter your email, and we'll send you instructions to reset your
            password
          </p>

          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="Email"
            name="Email"
            placeholder="john.doe@gmail.com"
            className="w-full border-[1px] border-[#DBDADE] outline-none rounded-md mt-2 mb-6 px-4 py-2"
          />

          <button className="bg-[--primary-color] px-6 py-3 rounded-md text-white w-full my-6">
            Send Reset Link
          </button>
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
export default ForgotPassword;
