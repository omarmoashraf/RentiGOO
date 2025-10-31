import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCar, FaUsers } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuCalendar, LuCar, LuUsers, LuTrendingUp } from "react-icons/lu";
import { FiDollarSign, FiAlertCircle, FiMenu } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";
import { GoXCircle, GoCheckCircle } from "react-icons/go";
import AdminSidebar from "./components/AdminSidebar";
import GropLyout from "./GropLyout";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">


      <div
        className={`fixed z-20 md:static w-64 bg-white shadow-lg p-5 rounded-se-3xl flex flex-col justify-between transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          <h1 className="text-2xl font-bold text-blue-600 mb-2">RentiGO Admin</h1>
          <p className="text-gray-400 text-sm mb-8">Management Portal</p>

          <nav className="space-y-3">
            <div
              className="bg-blue-600 text-white rounded-xl p-3 flex items-center gap-3 cursor-pointer shadow-md"
              onClick={() => {
                navigate("/AdminDashboard");
                setSidebarOpen(false);
              }}
            >
              <MdDashboard size={20} />
              <div>
                <p className="font-semibold">Dashboard</p>
                <p className="text-xs opacity-80">Overview & Analytics</p>
              </div>
            </div>

            <div
              className="text-gray-600 hover:bg-gray-100 rounded-xl p-3 flex items-center gap-3 cursor-pointer"
              onClick={() => {
                navigate("/CarManagement");
                setSidebarOpen(false);
              }}
            >
              <FaCar size={20} />
              <div>
                <p className="font-semibold">Car Management</p>
                <p className="text-xs text-gray-400">Manage Fleet</p>
              </div>
            </div>

            <div
              className="text-gray-600 hover:bg-gray-100 rounded-xl p-3 flex items-center gap-3 cursor-pointer"
              onClick={() => {
                navigate("/BookingDetails");
                setSidebarOpen(false);
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
          onClick={() => navigate("/Login")}
        >
          <HiOutlineLogout size={20} />
          <p className="font-semibold">Logout</p>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <button
              className="md:hidden text-gray-600 mb-3"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <FiMenu size={26} />
            </button>
            <h2 className="text-3xl font-bold text-blue-700">Admin Dashboard</h2>
            <p className="text-gray-500">
              Welcome back! Here's what's happening with RentiGO today.
            </p>
          </div>

          <button
            onClick={() => navigate("/AddNewCar")}
            className="px-5 py-3 text-white bg-blue-700 rounded-xl hover:bg-blue-800 transition"
          >
            Add Product
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Total Revenue", value: "$47,250", icon: <FiDollarSign size={25} />, color: "text-green-500" },
            { title: "Active Bookings", value: "124", icon: <LuCalendar size={25} />, color: "text-blue-500" },
            { title: "Fleet Utilization", value: "87%", icon: <LuCar size={25} />, color: "text-blue-500" },
            { title: "Total Customers", value: "2,847", icon: <LuUsers size={25} />, color: "text-purple-500" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-white p-5 rounded-2xl shadow-sm hover:scale-105 transition"
            >
              <div>
                <p className="text-gray-500 text-sm">{item.title}</p>
                <h3 className="text-2xl font-bold mt-2">{item.value}</h3>
                <div className={`flex gap-2 ${item.color}`}>
                  <LuTrendingUp />
                  <p className="text-xs mt-1">+12%</p>
                </div>
              </div>
              <div className={`p-2 bg-blue-100 rounded-xl ${item.color}`}>{item.icon}</div>
            </div>
          ))}
        </div>

        {/* Recent Bookings + Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Bookings */}
          <div className="col-span-2 bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Recent Bookings</h3>
              <button
                className="text-blue-600 text-sm font-semibold"
                onClick={() => navigate("/booking")}
              >
                View All
              </button>
            </div>

            <div className="space-y-4">
              {[
                { name: "John Smith", car: "BMW 5 Series", price: "$289", status: "active", color: "green" },
                { name: "Sarah Johnson", car: "Tesla Model 3", price: "$225", status: "completed", color: "blue" },
                { name: "Mike Davis", car: "Range Rover Sport", price: "$360", status: "pending", color: "yellow" },
                { name: "Emily Brown", car: "Porsche 911", price: "$450", status: "active", color: "green" },
              ].map((b, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b p-3 rounded-2xl hover:bg-gray-50 transition"
                >
                  <div className="flex gap-4 items-center">
                    <div className="p-2 bg-blue-100 text-blue-400 rounded-xl">
                      <LuCar size={25} />
                    </div>
                    <div>
                      <p className="font-semibold">{b.name}</p>
                      <p className="text-sm text-gray-400">{b.car}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="font-semibold">{b.price}</p>
                    <span
                      className={`text-${b.color}-700 bg-${b.color}-100 px-2 rounded-2xl text-xs capitalize`}
                    >
                      {b.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alerts */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <IoMdNotificationsOutline size={20} /> Alerts
            </h3>
            <div className="space-y-3 text-sm">
              {[
                { text: "Vehicle BMW X5 due for maintenance", time: "2 hours ago", icon: <FiAlertCircle size={20} />, color: "yellow" },
                { text: "New customer registration: Alex Wilson", time: "4 hours ago", icon: <GoXCircle size={20}/>, color: "blue" },
                { text: "Payment failed for booking #BK005", time: "6 hours ago", icon: <GoCheckCircle size={20}/>, color: "red" },
              ].map((a, i) => (
                <div key={i} className="border rounded-xl p-3 flex gap-3 items-start">
                  <span className={`text-${a.color}-500 mt-1`}>{a.icon}</span>
                  <div>
                    <p>{a.text}</p>
                    <p className="text-gray-400 text-xs">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
