import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCar, FaUsers } from "react-icons/fa";
import { MdDashboard, MdOutlineCalendarMonth } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuCalendar , LuCar , LuUsers } from "react-icons/lu";
import { FiDollarSign } from "react-icons/fi";
import {  BsGraphUpArrow } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";

const AdminDashboard = () => {
  const navigate = useNavigate(); 

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <div className="w-64 bg-gray-70 shadow-lg p-5 rounded-se-3xl flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold text-blue-600 mb-2">RentiGO Admin</h1>
          <p className="text-gray-400 text-sm mb-8">Management Portal</p>

          <nav className="space-y-3">
            
            <div
              className="bg-blue-600 text-white rounded-xl p-3 flex items-center gap-3 cursor-pointer shadow-md"
              onClick={() => navigate("/AdminDashboard")}
            >
              <MdDashboard size={20} />
              <div>
                <p className="font-semibold">Dashboard</p>
                <p className="text-xs opacity-80">Overview & Analytics</p>
              </div>
            </div>

            <div
              className="text-gray-600 hover:bg-gray-100 rounded-xl p-3 flex items-center gap-3 cursor-pointer"
              onClick={() => navigate("/CarManagement")}
            >
              <FaCar size={20} />
              <div>
                <p className="font-semibold">Car Management</p>
                <p className="text-xs text-gray-400">Manage Fleet</p>
              </div>
            </div>

            <div
              className="text-gray-600 hover:bg-gray-100 rounded-xl p-3 flex items-center gap-3 cursor-pointer"
              onClick={() => navigate("/BookingDetails")} 
            >
              <LuCalendar size={20} />
              <div>
                <p className="font-semibold">Bookings</p>
                <p className="text-xs text-gray-400">Rental Management</p>
              </div>
            </div>
          </nav>
        </div>

        <div className="text-gray-600 hover:bg-gray-100 rounded-xl p-3 flex items-center gap-3 cursor-pointer" 
         onClick={() => navigate("/Home")}>
         
          <HiOutlineLogout size={20} />
          <p className="font-semibold">Logout</p>
        </div>
      </div>

      
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-700">Admin Dashboard</h2>
        <p className="text-gray-500 mb-6">
          Welcome back! Here's what's happening with RentiGO today.
        </p>
          </div>
          <div className="px-5 py-3 text-white bg-blue-700 rounded-xl mb-2">
            <button>
              Add Product
            </button>
          </div>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="flex justify-evenly items-center bg-white p-5 rounded-2xl shadow-sm hover:scale-105 transition">
            <div>
              <p className="text-gray-500 text-sm">Total Revenue</p>
            <h3 className="text-2xl font-bold mt-2">$47,250</h3>
            <div className="flex gap-2 text-green-500">
              <BsGraphUpArrow />
              <p className=" text-xs mt-1">+12.5%</p>
            </div>
            </div>
            <div className="p-2 bg-blue-100 text-green-400 rounded-xl">
                <FiDollarSign size={25}/>
              </div>
          </div>
          <div className="flex justify-evenly items-center bg-white p-5 rounded-2xl shadow-sm hover:scale-105 transition">
            
            <div>
              <p className="text-gray-500 text-sm">Active Bookings</p>
             <h3 className="text-2xl font-bold mt-2">$124</h3>
             <div className="flex gap-2 text-blue-500">
              <BsGraphUpArrow />
              <p className=" text-xs mt-1">+8.2%</p>
             </div>
              </div>
              <div className="p-2 bg-blue-100 text-blue-400 rounded-xl">
                <LuCalendar size={25}/>
              </div>
            
          </div>
          <div className="flex justify-evenly items-center bg-white p-5 rounded-2xl shadow-sm hover:scale-105 transition">
            <div>
              <p className="text-gray-500 text-sm">Fleet Utilization</p>
            <h3 className="text-2xl font-bold mt-2">87%</h3>
            <div className="flex gap-2 text-blue-500">
              <BsGraphUpArrow />
              <p className=" text-xs mt-1">+5.1%</p>
             </div>
            
            </div>
            <div className="p-2 bg-blue-100 text-blue-400 rounded-xl">
                <LuCar size={25}/>
              </div>
          </div>
          <div className="flex justify-evenly items-center bg-white p-5 rounded-2xl shadow-sm hover:scale-105 transition">
            <div>
              <p className="text-gray-500 text-sm">Total Customers</p>
            <h3 className="text-2xl font-bold mt-2">2,847</h3>
            <div className="flex gap-2  text-deep-purple-400">
              <BsGraphUpArrow />
              <p className=" text-xs mt-1">+15.3%</p>
             </div>
            </div>
            <div className="p-2 bg-blue-100 text-deep-purple-400 rounded-xl">
                <LuUsers size={25}/>
              </div>
          </div>
        </div>

        {/* Bottom Section */}
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
              <div className="flex justify-between items-center outline-gray-700  p-5 rounded-2xl bg-gray-30 shadow-blue-gray-100 border-b pb-3 hover:pt-6">
                <div className="flex gap-4">
                  <div className="p-2 bg-blue-100 text-blue-400 rounded-xl">
                <LuCar size={25}/>
              </div>
                <div >
                  <p className="font-semibold">John Smith</p>
                  <p className="text-sm text-gray-400">BMW 5 Series</p>
                </div>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-semibold">$289</p>
                  <span className="text-green-700 bg-green-200 px-2 rounded-2xl text-xs">
                    active
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center outline-gray-700  p-5 rounded-2xl bg-gray-30 shadow-blue-gray-100 border-b pb-3 hover:pt-6">
                <div className="flex gap-4">
                  <div className="p-2 bg-blue-100 text-blue-400 rounded-xl">
                <LuCar size={25}/>
              </div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-400">Tesla Model 3</p>
                </div>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-semibold">$225</p>
                  <span className="text-blue-700 bg-blue-200 px-2 rounded-2xl text-xs">
                    completed
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center outline-gray-700  p-5 rounded-2xl bg-gray-30 shadow-blue-gray-100 border-b pb-3 hover:pt-6">
                <div className="flex gap-4">
                  <div className="p-2 bg-blue-100 text-blue-400 rounded-xl">
                <LuCar size={25}/>
              </div>
                <div>
                  <p className="font-semibold">Mike Davis</p>
                  <p className="text-sm text-gray-400">Range Rover Sport</p>
                </div>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-semibold">$360</p>
                  <span className="text-yellow-700 bg-yellow-100 px-2 rounded-2xl text-xs">
                    pending
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center outline-gray-700  p-5 rounded-2xl bg-gray-30 shadow-blue-gray-100 border-b pb-3 hover:pt-6">
                <div className="flex gap-4">
                  <div className="p-2 bg-blue-100 text-blue-400 rounded-xl">
                <LuCar size={25}/>
              </div>
                <div>
                  <p className="font-semibold">Emily Brown</p>
                  <p className="text-sm text-gray-400">Prosche 911</p>
                </div>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-semibold">$450</p>
                  <span className="text-green-700 bg-green-100 px-2 rounded-2xl text-xs">
                    active
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <IoMdNotificationsOutline size={20} /> Alerts
            </h3>
            <div className="space-y-3 text-sm">
              <div className="border rounded-xl p-3 flex gap-3 items-start">
                <span className="text-yellow-500 mt-1">⚠</span>
                <div>
                  <p>Vehicle BMW X5 due for maintenance</p>
                  <p className="text-gray-400 text-xs">2 hours ago</p>
                </div>
              </div>

              <div className="border rounded-xl p-3 flex gap-3 items-start">
                <span className="text-blue-500 mt-1">🔔</span>
                <div>
                  <p>New customer registration: Alex Wilson</p>
                  <p className="text-gray-400 text-xs">4 hours ago</p>
                </div>
              </div>

              <div className="border rounded-xl p-3 flex gap-3 items-start">
                <span className="text-red-500 mt-1">❌</span>
                <div>
                  <p>Payment failed for booking #BK005</p>
                  <p className="text-gray-400 text-xs">6 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
