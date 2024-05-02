import React from "react";

const ChangePassword = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className=" text-lg">Change Password</div>
      <form className=" flex flex-col gap-5 text-sm font-light">
        <div>
          <label
            htmlFor="current_password"
            className="block  500px:text-sm 300px:text-xs text-gray-700"
          >
            Current Password
          </label>
          <input
            type="password"
            name="current_password"
            id="current_password"
            autoComplete="current-password"
            className=" h-10 w-[50%] bg-transparent border border-[#DBDADE] rounded-md px-2"
          ></input>
        </div>
        <div>
          <label
            htmlFor="current_password"
            className="block  500px:text-sm 300px:text-xs text-gray-700"
          >
            New Password
          </label>
          <input
            type="password"
            name="current_password"
            id="current_password"
            autoComplete="current-password"
            className=" h-10 w-[100%] bg-transparent border border-[#DBDADE] rounded-md px-2"
          ></input>
        </div>
        <div>
          <label
            htmlFor="current_password"
            className="block 500px:text-sm 300px:text-xs text-gray-700"
          >
            Confirm New password
          </label>
          <input
            type="password"
            name="current_password"
            id="current_password"
            autoComplete="current-password"
            className=" h-10 w-[100%] bg-transparent border border-[#DBDADE] rounded-md px-2"
          ></input>
        </div>
        <div>
          <div className="880px:text-lg 300px:text-sm font-normal">
            Password Requirements:
          </div>
          <div className=" flex flex-col p-5 gap-2 880px:text-sm 300px:text-xs">
            <div>Minimum 8 characters long - the more, the better</div>
            <div>At least one lowercase character</div>
            <div>At least one number, symbol, or whitespace character</div>
          </div>
          <div className=" flex gap-4">
            <button className="bg-[#CBA557] text-white 880px:py-2 880px:px-4 300px:py-2 300px:px-3 600px:text-sm 300px:text-xs rounded-md">
              Save Changes
            </button>
            <button className="bg-[#A8AAAE29] text-[#A8AAAE] 880px:py-2 880px:px-4 300px:py-2 300px:px-3 600px:text-sm 300px:text-xs rounded-md">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
