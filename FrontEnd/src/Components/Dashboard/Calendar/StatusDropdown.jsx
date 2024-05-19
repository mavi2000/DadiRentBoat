import user from '../../../assets/Images/user.png';
const StatusDropdown = ({ status }) => {
  return (
    <div className="absolute z-20 top-6 right-0 text-[#676767] bg-white w-full rounded-md whitespace-nowrap text-center px-4 py-2 shadow-lg show-status hidden">
      <div className="flex gap-2 items-center w-full justify-center ">
        <img src={user} alt="avatar" className="size-[25px]" />
        <h1 className="text-black text-base font-semibold">John Doe</h1>
      </div>
      <p
        className={`text-[#008000] font-medium text-sm my-3  ${
          status
            ? status.status === 'confirmed'
              ? 'text-[#008000]'
              : 'text-[#F9DB7B]'
            : ''
        }`}
      >
        {status ? status.status : ''}
      </p>
      <p className="font-medium text-base mb-2">
        Departure: <span className="font-normal">7:00am</span>
      </p>
      <p className="font-medium text-base">
        Return Time: <span className="font-normal">7:00pm</span>
      </p>
      <p className="font-normal text-base my-2">Paid online: $40</p>
      <p className="font-normal text-base">Pay at Harbor: $10</p>
    </div>
  );
};
export default StatusDropdown;
