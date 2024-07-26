import React from "react";
import user from "../../../assets/Images/user.png";
import { useNavigate } from "react-router-dom";

const StatusDropdownMonthly = ({ statuses }) => {

  console.log("statuses",statuses)
  if (!statuses || statuses.length === 0) {
    return null; // Handle case where statuses are not provided
  }

  const navigate = useNavigate();

  const confirmedBookings = statuses.filter(status => status.status === 'confirmed');
  const pendingBookings = statuses.filter(status => status.status === 'pending');

  return (
    <div className="relative group">
      {confirmedBookings.length > 0 && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="w-full h-full bg-green-500 cursor-pointer" />
        </div>
      )}
      {pendingBookings.length > 0 && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="w-full h-full bg-yellow-500 cursor-pointer" />
        </div>
      )}
      <div className="absolute z-20 top-8 left-0 w-48 bg-white shadow-lg rounded-md p-2 hidden group-hover:block overflow-y-auto" style={{ maxHeight: '200px' }}>
        {statuses.map((status, index) => (
          <div key={index} className="mb-2">
            <div className="flex items-center gap-2 mb-2">
              <img src={user} alt="avatar" className="w-8 h-8 rounded-full" />
              <h1 className="text-black text-base font-semibold">{status.userId?.username}</h1>
            </div>
            <p
              className={`text-sm mb-2 ${status.status === 'confirmed' ? 'text-green-600' : 'text-yellow-600'}`}
            >
              {status.status === 'confirmed' ? 'Confirmed' : 'Pending'}
            </p>
            <p className="text-sm mb-2">Boat: <span className="font-medium">{status.boatName}</span></p>
            <p className="text-sm mb-2">Rate Type: <span className="font-medium">{status.rateType}</span></p>
            <button
              onClick={() => navigate(`/dashboard/booking-details/${status?.userId?._id}`)}
              className="text-sm text-blue-500 underline"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusDropdownMonthly;
