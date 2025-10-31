import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { LuCalendar } from "react-icons/lu";
import { HiOutlineLogout, HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const getNavItemClasses = (path) => {
    const isActive = currentPath === path;
    return isActive
      ? "bg-blue-600 text-white rounded-xl p-3 flex items-center gap-3 cursor-pointer shadow-md transition-all"
      : "text-gray-600 hover:bg-gray-100 rounded-xl p-3 flex items-center gap-3 cursor-pointer transition-all";
  };

  return (
    <>
      {/* 🔹 زر العلوي (Menu / Close) يظهر فقط على الموبايل */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-lg shadow-lg"
      >
        {isOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
      </button>

      {/* 🔹 Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-screen w-64 bg-gray-50 shadow-lg p-5 rounded-se-3xl flex flex-col justify-between transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0`}
      >
        <div>
          <h1 className="text-2xl font-bold text-blue-600 mb-2 hidden md:block">
            RentiGO Admin
          </h1>
          <p className="text-gray-400 text-sm mb-8 hidden md:block">
            Management Portal
          </p>

          <nav className="space-y-3">
            <div
              className={getNavItemClasses("/AdminDashboard")}
              onClick={() => {
                navigate("/AdminDashboard");
                setIsOpen(false);
              }}
            >
              <MdDashboard size={20} />
              <div>
                <p className="font-semibold">Dashboard</p>
                <p className="text-xs opacity-80">Overview & Analytics</p>
              </div>
            </div>

            <div
              className={getNavItemClasses("/CarManagement")}
              onClick={() => {
                navigate("/CarManagement");
                setIsOpen(false);
              }}
            >
              <FaCar size={20} />
              <div>
                <p className="font-semibold">Car Management</p>
                <p className="text-xs text-gray-400">Manage Fleet</p>
              </div>
            </div>

            <div
              className={getNavItemClasses("/BookingDetails")}
              onClick={() => {
                navigate("/BookingDetails");
                setIsOpen(false);
              }}
            >
              <LuCalendar size={20} />
              <div>
                <p className="font-semibold">Bookings</p>
                <p className="text-xs text-gray-400">Rental Management</p>
              </div>
            </div>
          </nav>
        </div>

        <div
          className="text-gray-600 hover:bg-gray-100 rounded-xl p-3 flex items-center gap-3 cursor-pointer"
          onClick={() => {
            navigate("/Home");
            setIsOpen(false);
          }}
        >
          <HiOutlineLogout size={20} />
          <p className="font-semibold">Logout</p>
        </div>
      </div>

      {/* 🔹 Overlay لما القائمة تفتح على الموبايل */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default AdminSidebar;
