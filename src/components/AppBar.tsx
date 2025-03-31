import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface AppBarProps {
  userName: string;
}

export const AppBar: React.FC<AppBarProps> = ({ userName }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logout user");
    navigate("/");
  };

  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4">PayTM App</div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">
          {userName ? userName : "Hello"}
        </div>
        <div className="relative">
          <div
            className="rounded-full h-12 w-12 bg-slate-200 flex justify-center  mt-1 mr-2"
            onClick={handleDropdown}
          >
            <div className=" flex flex-col items-center justify-center h-full text-xl">
              {userName ? userName[0].toUpperCase() : "H"}
            </div>
          </div>
          {dropdownOpen && (
            <div className="absloute my-2 top-full -translate-x-5 bg-slate-200 hover:bg-gray-100 text-slate-900 shadow-md rounded-lg p-2 w-28">
              <button
                className="block w-full text-centre"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
