import React, { useState } from "react";
import { toast } from "react-toastify";
import baseURL from "../../../APi/BaseUrl";
import { jwtDecode } from "jwt-decode";
const ChangePassword = () => {
  const [data, setData] = useState({
    oldPass: "", newPass:
      '', confirmPass: ""
  })
  const handleChange = (e) => {
    setData(prev => {
      setData({ ...prev, [e.target.name]: e.target.value })
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (data.newPass !== data.confirmPass) {
      toast.error("New password and confirm password do not match")
      return;
    }
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        toast.error("Authentication failed");
        return;
      }
      const decoded = jwtDecode(token);
      const res = await baseURL.patch('/update-password', { oldPass: data.oldPass, newPass: data.newPass, userId: decoded._id })
      toast.success(res.data.message)
    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong")
    }
  }
  return (
    <div className="flex flex-col gap-10" onSubmit={handleSubmit}>
      <div className=" text-lg">Change Password</div>
      <form className=" flex flex-col gap-5 text-sm font-light">
        <div>
          <label
            htmlFor="oldPass"
            className="block  500px:text-sm 300px:text-xs text-gray-700"
          >
            Current Password
          </label>
          <input
            type="password"
            name="oldPass"
            id="oldPass"
            autoComplete="curPass"
            onChange={handleChange}
            className=" h-10 w-[50%] bg-transparent border border-[#DBDADE] rounded-md px-2"
          ></input>
        </div>
        <div>
          <label
            htmlFor="newPass"
            className="block  500px:text-sm 300px:text-xs text-gray-700"
          >
            New Password
          </label>
          <input
            type="password"
            name="newPass"
            id="newPass"
            autoComplete="newPass"
            onChange={handleChange}
            className=" h-10 w-[100%] bg-transparent border border-[#DBDADE] rounded-md px-2"
          ></input>
        </div>
        <div>
          <label
            htmlFor="confirmPass"
            className="block 500px:text-sm 300px:text-xs text-gray-700"
          >
            Confirm New password
          </label>
          <input
            type="password"
            name="confirmPass"
            id="confirmPass"
            autoComplete="confirmPass"
            onChange={handleChange}
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
