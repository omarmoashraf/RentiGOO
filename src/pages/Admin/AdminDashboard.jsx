import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCar, FaUsers } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuCalendar, LuCar, LuUsers, LuTrendingUp } from "react-icons/lu";
import { FiDollarSign, FiAlertCircle } from "react-icons/fi";
import { GoXCircle, GoCheckCircle } from "react-icons/go";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-dark-background font-sans">
      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 lg:p-8 w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0066ff] to-[#0052cc] bg-clip-text text-transparent">
              Admin Dashboard
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-1">
              Welcome back! Here's what's happening with RentiGO today.
            </p>
          </div>

          <button
            onClick={() => navigate("/AddNewCar")}
            className="px-5 py-3 text-white bg-gradient-to-r from-[#0066ff] to-[#0052cc] rounded-xl hover:shadow-lg transition-all duration-200 font-semibold w-full sm:w-auto text-center"
          >
            Add New Car
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          {[
            { 
              title: "Total Revenue", 
              value: "$47,250", 
              icon: <FiDollarSign size={24} />, 
              color: "text-green-500",
              bgColor: "bg-green-50"
            },
            { 
              title: "Active Bookings", 
              value: "124", 
              icon: <LuCalendar size={24} />, 
              color: "text-blue-500",
              bgColor: "bg-blue-50"
            },
            { 
              title: "Fleet Utilization", 
              value: "87%", 
              icon: <LuCar size={24} />, 
              color: "text-orange-500",
              bgColor: "bg-orange-50"
            },
            { 
              title: "Total Customers", 
              value: "2,847", 
              icon: <LuUsers size={24} />, 
              color: "text-purple-500",
              bgColor: "bg-purple-50"
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-white dark:bg-dark-background p-4 md:p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
            >
              <div className="flex-1">
                <p className="text-gray-500 text-xs md:text-sm dark:text-dark-header_text">{item.title}</p>
                <h3 className="text-xl md:text-2xl font-bold mt-1 md:mt-2 dark:text-dark-secondary_text">{item.value}</h3>
                <div className={`flex items-center gap-1 ${item.color} mt-1`}>
                  <LuTrendingUp size={14} />
                  <p className="text-xs">+12% from last month</p>
                </div>
              </div>
              <div className={`p-2 md:p-3 rounded-xl ${item.bgColor} ${item.color}`}>
                {item.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Bookings + Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Recent Bookings */}
          <div className="lg:col-span-2 bg-white dark:bg-dark-background rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h3 className="font-bold text-lg md:text-xl text-gray-800 dark:text-dark-header_text">Recent Bookings</h3>
              <button
                className="text-sm font-semibold bg-gradient-to-r from-[#0066ff] to-[#0052cc] bg-clip-text text-transparent hover:scale-105 transition-transform"
                onClick={() => navigate("/booking")}
              >
                View All
              </button>
            </div>

            <div className="space-y-3 md:space-y-4">
              {[
                { 
                  name: "John Smith", 
                  car: "BMW 5 Series", 
                  price: "$289", 
                  status: "active", 
                  statusColor: "bg-green-100 text-green-700" 
                },
                { 
                  name: "Sarah Johnson", 
                  car: "Tesla Model 3", 
                  price: "$225", 
                  status: "completed", 
                  statusColor: "bg-blue-100 text-blue-700" 
                },
                { 
                  name: "Mike Davis", 
                  car: "Range Rover Sport", 
                  price: "$360", 
                  status: "pending", 
                  statusColor: "bg-yellow-100 text-yellow-700" 
                },
                { 
                  name: "Emily Brown", 
                  car: "Porsche 911", 
                  price: "$450", 
                  status: "active", 
                  statusColor: "bg-green-100 text-green-700" 
                },
              ].map((booking, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-3 md:p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-200"
                >
                  <div className="flex gap-3 md:gap-4 items-center flex-1">
                    <div className="p-2 bg-blue-50 text-blue-500 rounded-xl">
                      <LuCar size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 dark:text-dark-secondary_text">{booking.name}</p>
                      <p className="text-sm text-gray-500">{booking.car}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-normal">
                    <p className="font-semibold text-gray-800 dark:text-dark-secondary_text">{booking.price}</p>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${booking.statusColor}`}
                    >
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alerts Section */}
          <div className="bg-white dark:bg-dark-background rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-4 md:mb-6 flex items-center gap-2">
              <IoMdNotificationsOutline size={20} className="text-blue-500" /> 
              <span className="text-light-primary_text dark:text-dark-header_text">Alerts & Notifications</span>
              
            </h3>
            <div className="space-y-3 md:space-y-4">
              {[
                { 
                  text: "Vehicle BMW X5 due for maintenance", 
                  time: "2 hours ago", 
                  icon: <FiAlertCircle size={18} />, 
                  color: "text-yellow-500" 
                },
                { 
                  text: "New customer registration: Alex Wilson", 
                  time: "4 hours ago", 
                  icon: <GoCheckCircle size={18} />, 
                  color: "text-blue-500" 
                },
                { 
                  text: "Payment failed for booking #BK005", 
                  time: "6 hours ago", 
                  icon: <GoXCircle size={18} />, 
                  color: "text-red-500" 
                },
                { 
                  text: "3 new bookings pending approval", 
                  time: "8 hours ago", 
                  icon: <LuCalendar size={18} />, 
                  color: "text-orange-500" 
                },
              ].map((alert, index) => (
                <div 
                  key={index} 
                  className="p-3 md:p-4 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-500 transition-all duration-200 "
                >
                  <div className="flex gap-3 items-start">
                    <span className={`mt-0.5 ${alert.color}`}>{alert.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 font-medium dark:text-dark-header_text">{alert.text}</p>
                      <p className="text-xs text-gray-400 mt-1">{alert.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
          {/* Performance Metrics */}
          <div className="bg-white dark:bg-dark-background rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-4 dark:text-dark-header_text">Performance Metrics</h3>
            <div className="space-y-4">
              {[
                { metric: "Customer Satisfaction", value: "94%", trend: "+2%" },
                { metric: "Fleet Availability", value: "89%", trend: "+5%" },
                { metric: "On-time Returns", value: "96%", trend: "+1%" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-dark-secondary_text">{item.metric}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-800">{item.value}</span>
                    <span className="text-green-500 text-sm">{item.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-dark-background rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-4 dark:text-dark-header_text">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Manage Cars", icon: <FaCar size={18} />, action: () => navigate("/CarManagement") },
                { label: "View Bookings", icon: <LuCalendar size={18} />, action: () => navigate("/BookingDetails") },
                { label: "Customers", icon: <FaUsers size={18} />, action: () => navigate("/Customers") },
                { label: "Reports", icon: <FiDollarSign size={18} />, action: () => navigate("/Reports") },
              ].map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  className="p-3 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 flex flex-col items-center gap-2 text-center"
                >
                  <span className="text-blue-500">{action.icon}</span>
                  <span className="text-xs font-medium text-gray-700 dark:text-dark-secondary_text">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;