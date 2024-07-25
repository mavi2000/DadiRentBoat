import React, { useState, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from "jwt-decode";
import { UserContext } from "../../../Context/UserContext";

const ChangePassword = () => {
  const { updatePassword } = useContext(UserContext);
  const [data, setData] = useState({
    oldPass: "",
    newPass: "",
    confirmPass: "",
  });

  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.newPass !== data.confirmPass) {
      toast.error("New password and confirm password do not match");
      return;
    }
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        toast.error("Authentication failed");
        return;
      }
      const decoded = jwtDecode(token);
      const res = await updatePassword({
        oldPass: data.oldPass,
        newPass: data.newPass,
        userId: decoded._id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="text-lg">Change Password</div>
      <form
        className="flex flex-col gap-5 text-sm font-light"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="oldPass" className="block text-sm text-gray-700">
            Current Password
          </label>
          <input
            type="password"
            name="oldPass"
            id="oldPass"
            autoComplete="curPass"
            onChange={handleChange}
            className="h-10 w-[50%] bg-transparent border border-[#DBDADE] rounded-md px-2"
          ></input>
        </div>
        <div>
          <label htmlFor="newPass" className="block text-sm text-gray-700">
            New Password
          </label>
          <input
            type="password"
            name="newPass"
            id="newPass"
            autoComplete="newPass"
            onChange={handleChange}
            className="h-10 w-[100%] bg-transparent border border-[#DBDADE] rounded-md px-2"
          ></input>
        </div>
        <div>
          <label htmlFor="confirmPass" className="block text-sm text-gray-700">
            Confirm New password
          </label>
          <input
            type="password"
            name="confirmPass"
            id="confirmPass"
            autoComplete="confirmPass"
            onChange={handleChange}
            className="h-10 w-[100%] bg-transparent border border-[#DBDADE] rounded-md px-2"
          ></input>
        </div>
        <div>
          <div className="text-lg font-normal">Password Requirements:</div>
          <div className="flex flex-col p-5 gap-2 text-sm">
            <div>Minimum 8 characters long - the more, the better</div>
            <div>At least one lowercase character</div>
            <div>At least one number, symbol, or whitespace character</div>
          </div>
          <div className="flex gap-4">
            <button className="bg-[#CBA557] text-white py-2 px-4 text-sm rounded-md">
              Save Changes
            </button>
            <button className="bg-[#A8AAAE29] text-[#A8AAAE] py-2 px-4 text-sm rounded-md">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
