import React, { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

import {
  User as UserIcon,
  Search,
  Eye,
  MoreHorizontal,
  Calendar,
  CreditCard,
  Users,
  CheckCircle,
} from "lucide-react";
import useTheme from "../../HOOKS/usetheme";

const sampleUsers = [
  {
    id: "USR001",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    joined: "2023-06-15",
    bookings: 12,
    totalSpent: 1650,
    status: "active",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: "USR002",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "+1 (555) 987-6543",
    location: "Los Angeles, USA",
    joined: "2023-08-22",
    bookings: 8,
    totalSpent: 980,
    status: "active",
    avatar: "",
  },
  {
    id: "USR003",
    name: "Mike Davis",
    email: "mike.davis@example.com",
    phone: "+1 (555) 456-7890",
    location: "Chicago, USA",
    joined: "2023-04-10",
    bookings: 25,
    totalSpent: 3200,
    status: "inactive",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: "USR004",
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    phone: "+1 (555) 789-1234",
    location: "Miami, USA",
    joined: "2023-10-01",
    bookings: 5,
    totalSpent: 450,
    status: "suspended",
    avatar: "",
  },
  {
    id: "USR005",
    name: "Liam Brown",
    email: "liam.brown@example.com",
    phone: "+1 (555) 321-6547",
    location: "Seattle, USA",
    joined: "2023-09-15",
    bookings: 15,
    totalSpent: 1200,
    status: "active",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
];

const UserManagement = () => {
  const [users, setUsers] = useState(sampleUsers);
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [statusOpen, setStatusOpen] = useState(false);
  const [viewUser, setViewUser] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(null);
    const theme=useTheme();

  // Filter users based on search and status
  const filteredUsers = users.filter(
    (user) =>
      (user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())) &&
      (selectedStatus === "All Status" || user.status === selectedStatus.toLowerCase())
  );

  // Delete user
  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
    setMenuOpen(null);
  };

  // Update user
  const handleUpdate = (updatedUser) => {
    setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    setEditUser(null);
  };

  // Function to get status color classes
  const getStatusClasses = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700";
      case "inactive":
        return "bg-gray-100 text-gray-500";
      case "suspended":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen dark:bg-dark-background">
      <h1 className="text-2xl font-bold text-blue-600">User Management</h1>
      <p className="text-gray-500 mb-6">Manage customer accounts and profiles</p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between dark:bg-dark-background">
          <div>
            <p className="text-gray-500 text-sm dark:text-dark-header_text">Total Users</p>
            <p className="text-xl font-bold  text-blue-600">{users.length}</p>
          </div>
          <Users className="text-blue-500" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between dark:bg-dark-background">
          <div>
            <p className="text-gray-500 text-sm dark:text-dark-header_text">Active Users</p>
            <p className="text-xl font-bold text-green-600">
              {users.filter((u) => u.status === "active").length}
            </p>
          </div>
          <CheckCircle className="text-green-500" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between dark:bg-dark-background">
          <div>
            <p className="text-gray-500 text-sm dark:text-dark-header_text">New This Month</p>
            <p className="text-xl font-bold text-blue-600">124</p>
          </div>
          <Calendar className="text-blue-500" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between dark:bg-dark-background">
          <div>
            <p className="text-gray-500 text-sm dark:text-dark-header_text">Avg. Spent</p>
            <p className="text-xl font-bold  text-blue-600 ">$1,245</p>
          </div>
          <CreditCard className="text-blue-500" />
        </div>
      </div>

      {/* Search & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-10 w-full ">
  {/* Search Input */}
  <div className="flex items-center border rounded-lg bg-white p-2 flex-1 min-w-0 dark:bg-dark-background">
    <Search className="text-gray-400 mr-2 dark:text-light-background" />
    <input
      type="text"
      placeholder="Search users..."
      className="outline-none w-full text-sm sm:text-base dark:bg-dark-background dark:text-dark-nav_icons"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>

  {/* Status Dropdown */}
  <div className="relative w-full sm:w-40 ">
    <div
      onClick={() => setStatusOpen(!statusOpen)}
      className={`flex items-center justify-between cursor-pointer border rounded-lg py-2 px-3 sm:py-3 sm:px-4  text-sm sm:text-base bg-dark-Buttons   ${
        statusOpen ? "outline outline-2 outline-blue-400" : ""
      }`}
    >
      <BiFilterAlt className=" text-black" size={20} />
      <span className=" truncat text-blacke">{selectedStatus}</span>
      <GoChevronDown
        className={`transition-transform duration-200 text-black ${
          statusOpen ? "rotate-180" : ""
        }`}
        size={18}
      />
    </div>

    {statusOpen && (
      <div className="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 text-sm sm:text-base dark:bg-dark-background dark:text-dark-header_text">
        {["All Status", "Active", "Inactive", "Suspended"].map((status) => (
          <div
            key={status}
            className="p-2 hover:bg-blue-100 cursor-pointer truncate"
            onClick={() => {
              setSelectedStatus(status);
              setStatusOpen(false);
            }}
          >
            {status}
          </div>
        ))}
      </div>
    )}
  </div>
</div>


      {/* User Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto dark:bg-dark-background ">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50 dark:text-dark-background">
      <tr>
        <th className="px-6 py-3 text-left text-xs sm:text-[10px] md:text-xs font-medium  uppercase text-dark-background">
          User
        </th>
        <th className="px-6 py-3 text-left text-xs sm:text-[10px] md:text-xs font-medium text-dark-background uppercase">
          Contact
        </th>
        <th className="px-6 py-3 text-left text-xs sm:text-[10px] md:text-xs font-medium text-dark-background uppercase">
          Joined
        </th>
        <th className="px-6 py-3 text-left text-xs sm:text-[10px] md:text-xs font-medium text-dark-background uppercase">
          Bookings
        </th>
        <th className="px-6 py-3 text-left text-xs sm:text-[10px] md:text-xs font-medium text-dark-background uppercase">
          Total Spent
        </th>
        <th className="px-6 py-3 text-left text-xs sm:text-[10px] md:text-xs font-medium text-dark-background uppercase">
          Status
        </th>
        <th className="px-6 py-3 text-left text-xs sm:text-[10px] md:text-xs font-medium text-dark-background uppercase">
          Actions
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200 dark:bg-dark-background">
      {filteredUsers.map((user) => (
        <tr key={user.id}>
          <td className="px-6 py-4 flex items-center gap-2 text-sm sm:text-[10px] md:text-xs ">
            {user.avatar ? (
              <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
            ) : (
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center font-bold text-xs sm:text-[10px] md:text-xs">
                {user.name.split(" ").map((n) => n[0]).join("")}
              </div>
            )}
            <div>
              <p className="text-gray-900 font-medium text-sm sm:text-[10px] dark:text-dark-header_text md:text-xs">{user.name}</p>
              <p className="text-gray-400 text-sm sm:text-[9px] md:text-xs dark:text-dark-secondary_text">{user.id}</p>
            </div>
          </td>
          <td className="px-6 py-4 text-gray-900 text-sm sm:text-[10px] md:text-xs dark:text-dark-secondary_text">
            <p>{user.email}</p>
            <p className="text-gray-400 text-sm sm:text-[9px] md:text-xs dark:text-dark-secondary_text">{user.phone}</p>
          </td>
          <td className="px-6 py-4 text-gray-900 text-sm sm:text-[10px] md:text-xs dark:text-dark-secondary_text">{user.joined}</td>
          <td className="px-6 py-4 text-gray-900 text-sm sm:text-[10px] md:text-xs dark:text-dark-secondary_text">{user.bookings}</td>
          <td className="px-6 py-4 text-gray-900 font-semibold text-sm sm:text-[10px] md:text-xs dark:text-dark-Buttons">
            ${user.totalSpent}
          </td>
          <td className="px-6 py-4 text-sm sm:text-[10px] md:text-xs">
            <span
              className={`px-2 py-1 rounded-full font-semibold text-xs sm:text-[9px] md:text-[10px] ${getStatusClasses(
                user.status
              )}`}
            >
              {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
            </span>
          </td>
          <td className="px-6 py-4 flex gap-5 relative text-sm sm:text-[10px] md:text-xs">
            <button className="text-gray-500 hover:text-gray-700" onClick={() => setViewUser(user)}>
              <Eye size={16} />
            </button>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setMenuOpen(menuOpen === user.id ? null : user.id)}
            >
              <MoreHorizontal size={16} />
            </button>

            {menuOpen === user.id && (
              <div className="absolute top-6 right-0 bg-white border rounded shadow-md z-50 w-32 text-sm sm:text-[10px] md:text-xs dark:bg-dark-background">
            
                <div
                  className="px-3 py-2 hover:bg-red-100 cursor-pointer text-red-600"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete User
                </div>
              </div>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


      {/* View User Modal */}
      {viewUser && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 shadow-lg relative dark:bg-dark-background">
            <button
              onClick={() => setViewUser(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold"
            >
              X
            </button>
            <div className="flex flex-col items-center gap-2">
              {viewUser.avatar ? (
                <img
                  src={viewUser.avatar}
                  alt={viewUser.name}
                  className="w-16 h-16 rounded-full"
                />
              ) : (
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-lg font-bold ">
                  {viewUser.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
              <h2 className="text-xl font-semibold dark:text-dark-header_text">{viewUser.name}</h2>
              <p className="text-gray-500">{viewUser.phone}</p>
              <p className="text-gray-500">{viewUser.location}</p>
              <p className="text-gray-500">Member Since: {viewUser.joined}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Edit User Modal Component


export default UserManagement;