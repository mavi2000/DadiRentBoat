import { Link } from 'react-router-dom';
import PopupsLayout from './PopupsLayout';

const CheckEmail = () => {
  return (
    <PopupsLayout
      isSocials={false}
      isBack={true}
      content={
        <div className="max-w-[450px]">
          <h2 className="text-2xl font-medium">Check your email ✉️</h2>
          <p className="text-base mb-8">
            Account activation link sent to your email address:
            hello@example.com Please follow the link inside to continue.
          </p>

          <button className="bg-[--primary-color] px-6 py-3 rounded-md text-white w-full my-6">
            Skip for now
          </button>
          <p className="text-center">
            Didn't get the mail?&nbsp;&nbsp;
            <span className="text-[--primary-color] cursor-pointer">
              Resend
            </span>
          </p>
        </div>
      }
    />
  );
};
export default CheckEmail;
