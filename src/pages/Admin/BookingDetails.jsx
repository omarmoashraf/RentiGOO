import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  Download,
  CalendarDays,
  CheckCircle2,
  Clock,
  Search,
  ListFilter,
  Eye,
  MoreHorizontal,
  Circle,
  CheckCircle,
} from "lucide-react";

const stats = [
  {
    title: "Total Bookings",
    value: "124",
    icon: CalendarDays,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Active",
    value: "42",
    icon: CheckCircle2,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Pending",
    value: "18",
    icon: Clock,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
  {
    title: "Revenue",
    value: "$12,450",
    icon: CalendarDays,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
];

const bookings = [
  {
    id: "BK001",
    customer: { name: "John Smith", email: "john.smith@example.com" },
    vehicle: {
      name: "BMW 5 Series",
      image: "https://placehold.co/120x80/333/fff?text=BMW+5",
    },
    duration: { days: "3 days", range: "2024-01-15 - 2024-01-18" },
    amount: "$267",
    status: "active",
  },
  {
    id: "BK002",
    customer: { name: "Sarah Johnson", email: "sarah.j@example.com" },
    vehicle: {
      name: "Tesla Model 3",
      image: "https://placehold.co/120x80/555/fff?text=Tesla+3",
    },
    duration: { days: "3 days", range: "2024-01-10 - 2024-01-13" },
    amount: "$225",
    status: "completed",
  },
  {
    id: "BK003",
    customer: { name: "Michael Brown", email: "mike.b@example.com" },
    vehicle: {
      name: "Audi Q5",
      image: "https://placehold.co/120x80/777/fff?text=Audi+Q5",
    },
    duration: { days: "5 days", range: "2024-01-12 - 2024-01-17" },
    amount: "$450",
    status: "pending",
  },
];

const StatusBadge = ({ status }) => {
  const statusMap = {
    active: {
      text: "Active",
      icon: <Circle className="w-2 h-2 mr-1.5 fill-current" />,
      className: "bg-green-100 text-green-700",
    },
    completed: {
      text: "Completed",
      icon: <CheckCircle className="w-3 h-3 mr-1" />,
      className: "bg-blue-100 text-blue-700",
    },
    pending: {
      text: "Pending",
      icon: <Clock className="w-3 h-3 mr-1" />,
      className: "bg-yellow-100 text-yellow-700",
    },
  };

  const currentStatus = statusMap[status] || statusMap.pending;

  return (
    <span
      className={`inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full ${currentStatus.className}`}
    >
      {currentStatus.icon}
      {currentStatus.text}
    </span>
  );
};

const StatCard = ({ title, value, icon: Icon, color, bgColor }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
      </div>
      <div className={`p-3 rounded-full ${bgColor} ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  );
};

export default function BookingDetails() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-inter antialiased">
      <div className="max-w-screen-xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <button
              className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full"
              onClick={() => navigate("/admindashboard")}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Booking Management
              </h1>
              <p className="text-gray-600 mt-1">
                Manage and track all rental bookings
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-lg shadow-sm border border-gray-300 hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center">
            <Download className="w-4 h-4" />
            Export
          </button>
        </header>

        {/* Stats Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
              bgColor={stat.bgColor}
            />
          ))}
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mt-12 p-8 w-full text-center mb-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search bookings..."
              className="w-full sm:w-3/4 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Availability Filter */}
            <div className="flex items-center gap-1">
              <select
                id="availability"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="all">All Status</option>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>
          </div>
        </div>

        {/* Recent Bookings Table Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <h2 className="text-lg font-semibold text-gray-900 p-6">
            Recent Bookings
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              {/* Table Header */}
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                    Booking ID
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                    Customer
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                    Vehicle
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                    Duration
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                    Amount
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                    Status
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody className="divide-y divide-gray-200">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {booking.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {booking.customer.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {booking.customer.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <img
                          src={booking.vehicle.image}
                          alt={booking.vehicle.name}
                          className="w-16 h-10 object-cover rounded-md border border-gray-200"
                          onError={(e) => {
                            e.target.src =
                              "https://placehold.co/120x80/eee/ccc?text=Error";
                          }}
                        />
                        <span className="text-sm font-medium text-gray-900">
                          {booking.vehicle.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {booking.duration.days}
                      </div>
                      <div className="text-sm text-gray-500">
                        {booking.duration.range}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {booking.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={booking.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
