import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaCar, 
  FaUsers, 
  FaChartLine,
  FaPlusCircle,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa";
import { 
  IoMdNotificationsOutline,
  IoIosTrendingUp,
  IoIosTrendingDown
} from "react-icons/io";
import { 
  LuCalendar, 
  LuCar, 
  LuUsers, 
  LuTrendingUp,
  LuClock,
  LuSettings,
  LuFileText,
  LuActivity
} from "react-icons/lu";
import { 
  FiDollarSign, 
  FiAlertCircle,
  FiEye,
  FiDownload,
  FiFilter
} from "react-icons/fi";
import { 
  GoXCircle, 
  GoCheckCircle,
  GoGraph
} from "react-icons/go";
import { 
  RiUserStarLine,
  RiTimeLine
} from "react-icons/ri";
import useTheme from "../../HOOKS/usetheme";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [timeRange, setTimeRange] = useState('week');

  // Sample data for charts
  const revenueData = [
    { name: 'Mon', revenue: 4200, bookings: 24 },
    { name: 'Tue', revenue: 5200, bookings: 32 },
    { name: 'Wed', revenue: 6100, bookings: 45 },
    { name: 'Thu', revenue: 4800, bookings: 29 },
    { name: 'Fri', revenue: 7300, bookings: 56 },
    { name: 'Sat', revenue: 8200, bookings: 68 },
    { name: 'Sun', revenue: 6900, bookings: 52 },
  ];

  const carTypeData = [
    { name: 'Sedan', value: 35, color: '#0072ff' },
    { name: 'SUV', value: 25, color: '#00c6ff' },
    { name: 'Luxury', value: 20, color: '#0066cc' },
    { name: 'Electric', value: 15, color: '#0099cc' },
    { name: 'Convertible', value: 5, color: '#00a8ff' },
  ];

  const quickStats = [
    {
      id: 1,
      title: "Active Bookings",
      value: "124",
      change: "+12%",
      trend: "up",
      icon: <LuCalendar className="w-6 h-6" />,
      color: "from-blue-500 to-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      textColor: "text-blue-600 dark:text-blue-400",
      link: "/bookingdetails"
    },
    {
      id: 2,
      title: "Total Revenue",
      value: "$47,250",
      change: "+18%",
      trend: "up",
      icon: <FiDollarSign className="w-6 h-6" />,
      color: "from-green-500 to-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      textColor: "text-green-600 dark:text-green-400",
      link: "/reports"
    },
    {
      id: 3,
      title: "Fleet Utilization",
      value: "87%",
      change: "+5%",
      trend: "up",
      icon: <LuCar className="w-6 h-6" />,
      color: "from-orange-500 to-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      textColor: "text-orange-600 dark:text-orange-400",
      link: "/carmanagement"
    },
    {
      id: 4,
      title: "Total Customers",
      value: "2,847",
      change: "+8%",
      trend: "up",
      icon: <LuUsers className="w-6 h-6" />,
      color: "from-purple-500 to-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      textColor: "text-purple-600 dark:text-purple-400",
      link: "/UserManagnment"
    }
  ];

  const recentBookings = [
    {
      id: "BK001",
      name: "John Smith",
      car: "BMW 5 Series",
      price: "$289",
      status: "active",
      statusColor: "bg-green-100 text-green-700 border border-green-200",
      time: "2 hours ago",
      avatar: "https://i.pravatar.cc/40?img=1"
    },
    {
      id: "BK002",
      name: "Sarah Johnson",
      car: "Tesla Model 3",
      price: "$225",
      status: "completed",
      statusColor: "bg-blue-100 text-blue-700 border border-blue-200",
      time: "4 hours ago",
      avatar: "https://i.pravatar.cc/40?img=2"
    },
    {
      id: "BK003",
      name: "Mike Davis",
      car: "Range Rover Sport",
      price: "$360",
      status: "pending",
      statusColor: "bg-yellow-100 text-yellow-700 border border-yellow-200",
      time: "6 hours ago",
      avatar: "https://i.pravatar.cc/40?img=3"
    },
    {
      id: "BK004",
      name: "Emily Brown",
      car: "Porsche 911",
      price: "$450",
      status: "active",
      statusColor: "bg-green-100 text-green-700 border border-green-200",
      time: "8 hours ago",
      avatar: "https://i.pravatar.cc/40?img=4"
    },
    {
      id: "BK005",
      name: "Alex Wilson",
      car: "Mercedes S-Class",
      price: "$520",
      status: "cancelled",
      statusColor: "bg-red-100 text-red-700 border border-red-200",
      time: "1 day ago",
      avatar: "https://i.pravatar.cc/40?img=5"
    }
  ];

  const alerts = [
    {
      id: 1,
      text: "Vehicle BMW X5 due for maintenance",
      time: "2 hours ago",
      icon: <FiAlertCircle className="w-5 h-5" />,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      priority: "medium"
    },
    {
      id: 2,
      text: "New customer registration: Alex Wilson",
      time: "4 hours ago",
      icon: <GoCheckCircle className="w-5 h-5" />,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      priority: "low"
    },
    {
      id: 3,
      text: "Payment failed for booking #BK005",
      time: "6 hours ago",
      icon: <GoXCircle className="w-5 h-5" />,
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      priority: "high"
    },
    {
      id: 4,
      text: "3 new bookings pending approval",
      time: "8 hours ago",
      icon: <LuCalendar className="w-5 h-5" />,
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      priority: "medium"
    }
  ];

  const performanceMetrics = [
    { metric: "Customer Satisfaction", value: "94%", trend: "+2%", trendType: "up" },
    { metric: "Fleet Availability", value: "89%", trend: "+5%", trendType: "up" },
    { metric: "On-time Returns", value: "96%", trend: "+1%", trendType: "up" },
    { metric: "Response Time", value: "15min", trend: "-2min", trendType: "down" },
    { metric: "Repeat Customers", value: "68%", trend: "+3%", trendType: "up" },
    { metric: "Avg. Booking Value", value: "$245", trend: "+$12", trendType: "up" }
  ];

  const quickActions = [
    { 
      label: "Manage Cars", 
      icon: <FaCar className="w-5 h-5" />, 
      action: () => navigate("/CarManagement"),
      color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
    },
    { 
      label: "View Bookings", 
      icon: <LuCalendar className="w-5 h-5" />, 
      action: () => navigate("/BookingDetails"),
      color: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
    },
    { 
      label: "Customers", 
      icon: <FaUsers className="w-5 h-5" />, 
      action: () => navigate("/UserManagnment"),
      color: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
    },
    { 
      label: "Reports", 
      icon: <GoGraph className="w-5 h-5" />, 
      action: () => navigate("/Reports"),
      color: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
    },
    { 
      label: "Add Car", 
      icon: <FaPlusCircle className="w-5 h-5" />, 
      action: () => navigate("/AddNewCar"),
      color: "bg-gradient-to-r from-light-Buttons to-light-secondary text-white"
    },
    { 
      label: "Settings", 
      icon: <LuSettings className="w-5 h-5" />, 
      action: () => navigate("/Settings"),
      color: "bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
    }
  ];

  const StatusBadge = ({ status }) => {
    const statusConfig = {
      active: {
        text: "Active",
        color: "bg-green-100 text-green-700 border border-green-200",
        dot: "bg-green-500"
      },
      completed: {
        text: "Completed",
        color: "bg-blue-100 text-blue-700 border border-blue-200",
        dot: "bg-blue-500"
      },
      pending: {
        text: "Pending",
        color: "bg-yellow-100 text-yellow-700 border border-yellow-200",
        dot: "bg-yellow-500"
      },
      cancelled: {
        text: "Cancelled",
        color: "bg-red-100 text-red-700 border border-red-200",
        dot: "bg-red-500"
      }
    };

    const config = statusConfig[status] || statusConfig.pending;

    return (
      <div className="flex items-center gap-1">
        <div className={`w-2 h-2 rounded-full ${config.dot}`}></div>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${config.color}`}>
          {config.text}
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-dark-background dark:to-gray-900 font-sans overflow-x-hidden">
      <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-light-Buttons to-light-secondary bg-clip-text text-transparent">
              Admin Dashboard
            </h2>
            <p className="text-gray-500 dark:text-dark-secondary_text text-sm md:text-base mt-2">
              Welcome back! Here's what's happening with RentiGO today.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 w-full lg:w-auto">
            <div className="flex items-center gap-2 bg-white dark:bg-dark-header_spaces px-4 py-2 rounded-xl border border-gray-200 dark:border-dark-header_spaces">
              <LuClock className="w-4 h-4 text-gray-400" />
              <select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="bg-transparent text-sm text-gray-700 dark:text-dark-header_text focus:outline-none"
              >
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
            
            <button
              onClick={() => navigate("/AddNewCar")}
              className="flex items-center gap-2 px-5 py-3 text-white bg-gradient-to-r from-light-Buttons to-light-secondary rounded-xl hover:shadow-xl transition-all duration-200 font-semibold hover:-translate-y-0.5"
            >
              <FaPlusCircle className="w-5 h-5" />
              Add New Car
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {quickStats.map((stat) => (
            <div
              key={stat.id}
              onClick={() => navigate(stat.link)}
              className="bg-white dark:bg-dark-background rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-header_spaces p-5 group hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${stat.bgColor} ${stat.textColor}`}>
                  {stat.icon}
                </div>
                <div className={`text-xs font-medium px-2 py-1 rounded-full ${stat.trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                  {stat.trend === 'up' ? <FaArrowUp className="inline w-3 h-3 mr-1" /> : <FaArrowDown className="inline w-3 h-3 mr-1" />}
                  {stat.change}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-dark-secondary_text mb-1">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-dark-header_text">
                  {stat.value}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-dark-header_spaces">
                <div className="w-full bg-gray-200 dark:bg-dark-header_spaces rounded-full h-1.5">
                  <div 
                    className={`bg-gradient-to-r ${stat.color} h-1.5 rounded-full`}
                    style={{ width: stat.id === 3 ? '87%' : stat.id === 4 ? '92%' : '78%' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts and Recent Bookings */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 bg-white dark:bg-dark-background rounded-2xl shadow-lg border border-gray-100 dark:border-dark-header_spaces p-5">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-header_text">
                  Revenue & Bookings Overview
                </h3>
                <p className="text-sm text-gray-500 dark:text-dark-secondary_text">
                  Last 7 days performance
                </p>
              </div>
              <button className="flex items-center gap-2 text-sm text-light-Buttons dark:text-dark-Buttons hover:underline">
                <FiDownload className="w-4 h-4" />
                Export Report
              </button>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#6b7280" 
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="#6b7280" 
                    fontSize={12}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.5rem'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#0072ff" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="bookings" 
                    stroke="#00c6ff" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Fleet Distribution */}
          <div className="bg-white dark:bg-dark-background rounded-2xl shadow-lg border border-gray-100 dark:border-dark-header_spaces p-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-header_text mb-6">
              Fleet Distribution
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={carTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {carTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.5rem'
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {carTypeData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-gray-600 dark:text-dark-secondary_text">{item.name}</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-dark-header_text ml-auto">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Bookings & Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Bookings */}
          <div className="lg:col-span-2 bg-white dark:bg-dark-background rounded-2xl shadow-lg border border-gray-100 dark:border-dark-header_spaces p-5">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-header_text">
                  Recent Bookings
                </h3>
                <p className="text-sm text-gray-500 dark:text-dark-secondary_text">
                  Latest customer bookings
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-dark-secondary_text dark:hover:text-dark-header_text rounded-lg hover:bg-gray-100 dark:hover:bg-dark-header_spaces">
                  <FiFilter className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate("/bookingdetails")}
                  className="text-sm font-semibold bg-gradient-to-r from-light-Buttons to-light-secondary bg-clip-text text-transparent hover:scale-105 transition-transform"
                >
                  View All
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-header_spaces transition-all duration-200 group cursor-pointer border border-transparent hover:border-gray-200 dark:hover:border-dark-header_spaces"
                  onClick={() => navigate(`/booking/${booking.id}`)}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={booking.avatar}
                        alt={booking.name}
                        className="w-10 h-10 rounded-full border-2 border-white dark:border-dark-background shadow-sm"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white dark:bg-dark-background border border-gray-200 dark:border-dark-header_spaces flex items-center justify-center">
                        <LuCar className="w-3 h-3 text-blue-500" />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-dark-header_text group-hover:text-light-Buttons dark:group-hover:text-dark-Buttons">
                        {booking.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-dark-secondary_text">{booking.car}</p>
                      <p className="text-xs text-gray-400 dark:text-dark-secondary_text mt-1">{booking.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-lg font-bold text-gray-900 dark:text-dark-header_text">
                      {booking.price}
                    </p>
                    <StatusBadge status={booking.status} />
                    <button className="p-2 text-gray-400 hover:text-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                      <FiEye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alerts Section */}
          <div className="bg-white dark:bg-dark-background rounded-2xl shadow-lg border border-gray-100 dark:border-dark-header_spaces p-5">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <IoMdNotificationsOutline className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-header_text">
                    Alerts & Notifications
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-dark-secondary_text">
                    System notifications
                  </p>
                </div>
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-red-50 text-red-600">
                4 New
              </span>
            </div>

            <div className="space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-xl border border-gray-200 dark:border-dark-header_spaces hover:border-light-Buttons/30 dark:hover:border-dark-Buttons/30 transition-all duration-200 ${alert.bgColor} cursor-pointer`}
                >
                  <div className="flex gap-3 items-start">
                    <div className={`p-2 rounded-lg ${alert.bgColor}`}>
                      <span className={alert.color}>{alert.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-dark-header_text">
                        {alert.text}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-dark-secondary_text mt-1">
                        {alert.time}
                      </p>
                    </div>
                    {alert.priority === 'high' && (
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-3 text-center text-light-Buttons dark:text-dark-Buttons hover:bg-gray-50 dark:hover:bg-dark-header_spaces rounded-xl border border-gray-200 dark:border-dark-header_spaces transition-colors">
              View All Notifications
            </button>
          </div>
        </div>

        {/* Performance Metrics & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Performance Metrics */}
          <div className="lg:col-span-2 bg-white dark:bg-dark-background rounded-2xl shadow-lg border border-gray-100 dark:border-dark-header_spaces p-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-header_text mb-6">
              Performance Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {performanceMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-gray-100 dark:border-dark-header_spaces hover:bg-gray-50 dark:hover:bg-dark-header_spaces transition-colors"
                >
                  <p className="text-sm font-medium text-gray-600 dark:text-dark-secondary_text mb-2">
                    {metric.metric}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-gray-900 dark:text-dark-header_text">
                      {metric.value}
                    </p>
                    <div className={`flex items-center gap-1 text-sm font-medium ${metric.trendType === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {metric.trendType === 'up' ? (
                        <IoIosTrendingUp className="w-4 h-4" />
                      ) : (
                        <IoIosTrendingDown className="w-4 h-4" />
                      )}
                      {metric.trend}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-dark-background rounded-2xl shadow-lg border border-gray-100 dark:border-dark-header_spaces p-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-header_text mb-6">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  className={`p-4 rounded-xl border border-gray-200 dark:border-dark-header_spaces hover:border-light-Buttons dark:hover:border-dark-Buttons transition-all duration-200 flex flex-col items-center gap-3 text-center group hover:-translate-y-1 ${action.color}`}
                >
                  <div className={`p-3 rounded-lg ${action.color.includes('bg-gradient') ? 'bg-white/20' : 'bg-white dark:bg-dark-background'} group-hover:scale-110 transition-transform`}>
                    {action.icon}
                  </div>
                  <span className="text-xs font-medium">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-header_spaces">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-dark-secondary_text">
              © 2024 RentiGO Admin Dashboard. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <button className="text-sm text-gray-500 dark:text-dark-secondary_text hover:text-light-Buttons dark:hover:text-dark-Buttons">
                Privacy Policy
              </button>
              <button className="text-sm text-gray-500 dark:text-dark-secondary_text hover:text-light-Buttons dark:hover:text-dark-Buttons">
                Terms of Service
              </button>
              <button className="text-sm text-gray-500 dark:text-dark-secondary_text hover:text-light-Buttons dark:hover:text-dark-Buttons">
                Help Center
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;