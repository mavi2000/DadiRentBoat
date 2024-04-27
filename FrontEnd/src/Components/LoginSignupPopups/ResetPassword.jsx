import { IoChevronBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import PopupsLayout from './PopupsLayout';

const ResetPassword = () => {
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

          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="******"
            className="w-full border-[1px] border-[#DBDADE] outline-none rounded-md mt-2 mb-6 px-4 py-2"
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="******"
            className="w-full border-[1px] border-[#DBDADE] outline-none rounded-md mt-2 mb-6 px-4 py-2"
          />

          <button className="bg-[--primary-color] px-6 py-3 rounded-md text-white w-full my-6">
            Set New Password
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
export default ResetPassword;
