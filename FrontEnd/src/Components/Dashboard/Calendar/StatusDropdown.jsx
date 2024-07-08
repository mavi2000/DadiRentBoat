import React from 'react';
import user from '../../../assets/Images/user.png';

const StatusDropdown = ({ status }) => {
  if (!status) {
    return null; // Handle case where status is not provided
  }

  const { status: bookingStatus, userId, boatName, rateType } = status;

  return (
    <div className="absolute z-20 top-6 right-0 text-[#676767] bg-white w-full rounded-md whitespace-nowrap text-center px-4 py-2 shadow-lg show-status hidden">
      <div className="flex gap-2 items-center w-full justify-center ">
        <img src={user} alt="avatar" className="size-[25px]" />
        <h1 className="text-black text-base font-semibold">{userId?.username}</h1>
      </div>
      <p
        className={`${
          bookingStatus === 'confirmed' ? 'text-[#008000]' : 'text-[#C07F00]'
        } font-medium text-sm my-3`}
      >
        {bookingStatus === 'confirmed' ? 'Confirmed' : 'Pending'}
      </p>
      <p className="text-[#676767] font-medium text-sm">
        Boat: <span>{boatName}</span>
      </p>
      <p className="text-[#676767] font-medium text-sm">
        Rate Type: <span>{rateType}</span>
      </p>
    </div>
  );
};

export default StatusDropdown;
