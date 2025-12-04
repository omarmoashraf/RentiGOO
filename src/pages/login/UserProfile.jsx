import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsWindowDock } from "react-icons/bs";

import {
  Camera,
  Car,
  Star,
  CreditCard,
  Mail,
  Phone,
  Calendar,
  X,
  Save,
  MapPin,
  Edit as EditIcon,
  Lock,
  Plus,
  Shield,
  Bell,
} from "lucide-react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Personal");

  // Personal Info
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    birthDate: "1990-01-01",
  });

  const handlePersonalChange = (e) =>
    setPersonalInfo({ ...personalInfo, [e.target.id]: e.target.value });

  // Address Info
  const [addressInfo, setAddressInfo] = useState({
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States",
  });
  const handleAddressChange = (e) =>
    setAddressInfo({ ...addressInfo, [e.target.id]: e.target.value });

  // Driver's License
  const [licenseInfo, setLicenseInfo] = useState({
    licenseNumber: "DL123456789",
    licenseState: "NY",
    licenseExpiry: "2028-05-15",
  });
  const handleLicenseChange = (e) =>
    setLicenseInfo({ ...licenseInfo, [e.target.id]: e.target.value });

  // Notifications
  const [isEditingNotifications, setIsEditingNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: "booking-confirmations",
      label: "Booking Confirmations",
      desc: "Receive emails for booking confirmations",
      checked: true,
    },
    {
      id: "promotional",
      label: "Promotional Emails",
      desc: "Receive special offers and promotions",
      checked: false,
    },
    {
      id: "sms",
      label: "SMS Notifications",
      desc: "Receive text message updates",
      checked: true,
    },
    {
      id: "reminders",
      label: "Reminder Alerts",
      desc: "Get reminded about upcoming bookings",
      checked: true,
    },
  ]);

  const toggleNotification = (id) =>
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, checked: !n.checked } : n))
    );

  // Booking History (for History Tab)
  const bookingHistory = [
    {
      id: 1,
      car: "BMW 5 Series",
      image:
        "https://images.unsplash.com/photo-1656772119648-8fb884516e36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "Dec 20 - Dec 24, 2024",
      price: "$356.00",
      status: "completed",
    },
    {
      id: 2,
      car: "Tesla Model 3",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "Nov 15 - Nov 18, 2024",
      price: "$289.00",
      status: "completed",
    },
    {
      id: 3,
      car: "Mercedes-Benz C-Class",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "Oct 10 - Oct 14, 2024",
      price: "$425.00",
      status: "completed",
    },
  ];

  return (
    <div className="container mx-auto px-4 dark:bg-dark-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">My Profile</h1>
          <p className="text-gray-600 dark:text-dark-secondary_text">
            Manage your account information and preferences
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border shadow-sm bg-white sticky top-24 p-6 text-center space-y-4 dark:bg-dark-background">
              <div className="relative inline-block">
                <span className="flex w-24 h-24 overflow-hidden rounded-full bg-blue-500 text-white text-2xl items-center justify-center">
                  JD
                </span>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Camera size={16} />
                </button>
              </div>

              <div>
                <h3 className="font-semibold text-lg dark:text-dark-header_text">John Doe</h3>
                <p className="text-sm text-gray-500 dark:text-dark-secondary_text">john.doe@example.com</p>
                <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium mt-2 bg-blue-100 text-blue-800">
                  Premium Member
                </span>
              </div>

              <div className="border-t pt-3 space-y-3 text-left">
                <div className="flex justify-between text-sm dark:text-dark-header_text">
                  <span>Member Since</span>
                  <span className="font-medium dark:text-dark-secondary_text">January 2023</span>
                </div>
                <div className="flex justify-between text-sm dark:text-dark-header_text">
                  <span>Total Bookings</span>
                  <span className="font-medium dark:text-dark-secondary_text">24</span>
                </div>
                <div className="flex justify-between text-sm dark:text-dark-header_text">
                  <span>Loyalty Points</span>
                  <span className="font-medium text-blue-600">850</span>
                </div>
              </div>

              <div className="border-t pt-3 space-y-2">
                <button className="w-full flex items-center gap-4 px-3 py-2 text-sm border rounded-md hover:bg-gray-100 dark:text-dark-Buttons">
                  <Car size={16} /> My Bookings
                </button>
                <button className="w-full flex items-center gap-4 px-3 py-2 text-sm border rounded-md hover:bg-gray-100 dark:text-dark-Buttons">
                  <Star size={16} /> Favorites
                </button>
                <button className="w-full flex items-center gap-4 px-3 py-2 text-sm border rounded-md hover:bg-gray-100 dark:text-dark-Buttons">
                  <CreditCard size={16} /> Wallet
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Tabs */}
            <div className="flex gap-2 p-1 mb-8 rounded-3xl bg-blue-gray-50 dark:bg-dark-background">
              {["Personal", "Security", "Payment", "History"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-4 py-1 text-sm font-medium border rounded-xl ${
                    activeTab === tab
                      ? "bg-white shadow dark:bg-dark-Buttons"
                      : "hover:bg-gray-200 dark:hover:bg-dark-Buttons text-gray-700 "
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {/* Personal Tab */}
              {activeTab === "Personal" && (
                <div className="space-y-6">
                  {/* Personal Info Card */}
                  <div className="rounded-lg border shadow-sm bg-white p-6 dark:bg-dark-background">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="font-semibold dark:text-dark-header_text">Personal Information</h3>
                        <p className="text-sm text-gray-600 dark:text-dark-secondary_text">
                          Update your personal details
                        </p>
                      </div>
                      <div className="flex gap-2 dark:text-dark-header_text ">
                        {isEditingPersonal ? (
                          <>
                            <button
                              className="flex items-center gap-2 px-3 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-red-500 "
                              onClick={() => setIsEditingPersonal(false)}
                            >
                              <X size={16} /> Cancel
                            </button>
                            <button
                              className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                              onClick={() => setIsEditingPersonal(false)}
                            >
                              <Save size={16} /> Save
                            </button>
                          </>
                        ) : (
                          <button
                            className="flex items-center gap-2 px-3 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-dark-Buttons"
                            onClick={() => setIsEditingPersonal(true)}
                          >
                            Edit <EditIcon size={16} />
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label
                            className="text-base font-medium dark:text-dark-header_text"
                            htmlFor="firstName"
                          >
                            First Name
                          </label>
                          <input
                            id="firstName"

                            value={personalInfo.firstName}
                            onChange={handlePersonalChange}
                            className="w-full px-3 py-1 mt-1 border dark:bg-dark-background  text-gray-400 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:bg-blue-gray-50"
                          />
                        </div>

                        <div>
                          <label
                            className="text-base font-medium dark:text-dark-header_text"
                            htmlFor="lastName"
                          >
                            Last Name
                          </label>
                          <input
                            id="lastName"
                            value={personalInfo.lastName}
                            onChange={handlePersonalChange}
                            className="w-full px-3 py-1 mt-1 border dark:bg-dark-background   text-gray-400 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:bg-blue-gray-50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-base font-medium dark:text-dark-header_text" htmlFor="email">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 dark:text-dark-secondary_text text-gray-600" size={16} />
                          <input
                            id="email"
                            value={personalInfo.email}
                            onChange={handlePersonalChange}
                            className="w-full px-10 py-1 mt-1 border dark:bg-dark-background   text-gray-400 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:bg-blue-gray-50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-base font-medium dark:text-dark-header_text" htmlFor="phone">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 dark:text-dark-secondary_text text-gray-400" size={16} />
                          <input
                            id="phone"
                            value={personalInfo.phone}
                            onChange={handlePersonalChange}
                            className="w-full px-10 py-1 mt-1 border dark:bg-dark-background   text-gray-400 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:bg-blue-gray-50"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          className="text-base font-medium dark:text-dark-header_text"
                          htmlFor="birthDate"
                        >
                          Birth Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 dark:text-dark-header_text text-gray-400" size={16} />
                          <input
                            type="date"
                            id="birthDate"
                            value={personalInfo.birthDate}
                            onChange={handlePersonalChange}
                            className="w-full px-10 py-1 mt-1 border dark:bg-dark-background  text-gray-400 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:bg-blue-gray-50"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Address Card */}
                  <div className="rounded-lg border shadow-sm bg-white p-6 dark:bg-dark-background">
                    <div>
                      <h3 className="font-semibold dark:text-dark-header_text">Address Information</h3>
                      <p className="text-sm text-gray-600 dark:text-dark-secondary_text">
                        Your billing and contact address
                      </p>
                    </div>
                    <div className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <label className="text-base font-medium dark:text-dark-header_text" htmlFor="street">
                          Street Address
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            id="street"
                            value={addressInfo.street}
                            onChange={handleAddressChange}
                            className="w-full px-10 py-1 border rounded-md dark:bg-dark-background text-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-base font-medium dark:text-dark-header_text" htmlFor="city">
                            City
                          </label>
                          <input
                            id="city"
                            value={addressInfo.city}
                            onChange={handleAddressChange}
                            className="w-full px-3 py-1 border rounded-md dark:bg-dark-background  text-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="text-base font-medium dark:text-dark-header_text" htmlFor="state">
                            State
                          </label>
                          <input
                            id="state"
                            value={addressInfo.state}
                            onChange={handleAddressChange}
                            className="w-full px-3 py-1 border rounded-md dark:bg-dark-background  text-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-base font-medium dark:text-dark-header_text" htmlFor="zipCode">
                            ZIP Code
                          </label>
                          <input
                            id="zipCode"
                            value={addressInfo.zipCode}
                            onChange={handleAddressChange}
                            className="w-full px-3 py-1 border rounded-md dark:bg-dark-background  text-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="text-base font-medium dark:text-dark-header_text" htmlFor="country">
                            Country
                          </label>
                          <input
                            id="country"
                            value={addressInfo.country}
                            onChange={handleAddressChange}
                            className="w-full px-3 py-1 border rounded-md dark:bg-dark-background  text-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Driver's License Card */}
                  <div className="rounded-lg border shadow-sm bg-white p-6 dark:bg-dark-background">
                    <div className="flex flex-col space-y-1.5 mb-4">
                      <h3 className="font-semibold flex items-center gap-2 dark:text-dark-header_text">
                        <Shield className="w-5 h-5 text-blue-500" /> Driver's License
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-dark-secondary_text">Your driving credentials</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-base font-medium dark:text-dark-header_text" htmlFor="licenseNumber">
                          License Number
                        </label>
                        <input
                          id="licenseNumber"
                          value={licenseInfo.licenseNumber}
                          onChange={handleLicenseChange}
                          className="w-full px-3 py-1 border rounded-md dark:bg-dark-background  text-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-base font-medium dark:text-dark-header_text" htmlFor="licenseState">
                          Issuing State
                        </label>
                        <input
                          id="licenseState"
                          value={licenseInfo.licenseState}
                          onChange={handleLicenseChange}
                          className="w-full px-3 py-1 border rounded-md dark:bg-dark-background text-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-base font-medium dark:text-dark-header_text" htmlFor="licenseExpiry">
                          Expiry Date
                        </label>
                        <input
                          id="licenseExpiry"
                          type="date"
                          value={licenseInfo.licenseExpiry}
                          onChange={handleLicenseChange}
                          className="w-full px-3 py-1 border rounded-md dark:bg-dark-background text-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Notification Preferences */}
                 <div className="rounded-lg border shadow-sm bg-white p-6 space-y-4 dark:bg-dark-background">
  <div className="flex justify-between items-center mb-4">
    <div className="flex flex-col space-y-1.5">
      <h3 className="font-semibold flex items-center gap-2 dark:text-dark-header_text">
        <Bell className="w-5 h-5 text-blue-500" /> Notification Preferences
      </h3>
      <p className="text-sm text-gray-600 dark:text-dark-secondary_text">Manage how you receive updates</p>
    </div>

    <div className="flex gap-2">
      <button
        className="px-3 py-1 border rounded-md hover:bg-gray-100 dark:hover:bg-dark-Buttons dark:text-dark-header_text"
        onClick={() => setIsEditingNotifications(!isEditingNotifications)}
      >
        {isEditingNotifications ? "Done" : "Edit"}
      </button>
    </div>
  </div>

  <div className="space-y-4">
    {notifications.map((notif) => (
      <div key={notif.id} className="flex items-center justify-between">
        <div className="space-y-0.5">
          <label className="text-sm font-medium dark:text-dark-header_text">{notif.label}</label>
          <p className="text-sm text-gray-500 dark:text-dark-secondary_text">{notif.desc}</p>
        </div>

        {/* Toggle button */}
        <button
          type="button"
          role="switch"
          aria-checked={notif.checked}
          onClick={() =>
            setNotifications((prev) =>
              prev.map((n) =>
                n.id === notif.id ? { ...n, checked: !n.checked } : n
              )
            )
          }
          className={`inline-flex h-[1.15rem] w-8 items-center rounded-full border transition-all outline-none
            ${notif.checked ? "bg-blue-500" : "bg-gray-300 dark:bg-dark-secondary_text"}`}
        >
          <span
            className={`block w-4 h-4 rounded-full bg-white transition-transform
              ${notif.checked ? "translate-x-[calc(100%-2px)]" : "translate-x-0"}`}
          />
        </button>
      </div>
    ))}
  </div>
                </div>
                </div>
              )}

                 {/* Security Tab */}
              {activeTab === "Security" && (
                <div className="space-y-6">
                  {/* Change Password */}
                  <div className="rounded-lg border p-6 shadow-sm">
                    <h3 className="font-semibold flex items-center gap-2 dark:text-dark-header_text">🔒 Change Password</h3>
                    <p className="text-sm text-gray-500 dark:text-dark-secondary_text">Update your account password</p>
                    <div className="space-y-4 mt-4">
                      <div className="space-y-1">
                        <label htmlFor="currentPassword" className="text-sm font-medium dark:text-dark-header_text">Current Password</label>
                        <input
                          id="currentPassword"
                          type="password"
                          placeholder="Current password"
                          className="w-full px-3 py-2 border dark:bg-dark-background dark:text-d rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="newPassword" className="text-sm font-medium dark:text-dark-header_text">New Password</label>
                        <input
                          id="newPassword"
                          type="password"
                          placeholder="New password"
                          className="w-full px-3 py-2 border rounded-md dark:bg-dark-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="confirmPassword" className="text-sm font-medium dark:text-dark-header_text">Confirm New Password</label>
                        <input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm new password"
                          className="w-full px-3 py-2 border dark:bg-dark-background rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Update Password
                      </button>
                    </div>
                  </div>

                  {/* Two-Factor Authentication */}
                  <div className="rounded-lg border p-6 shadow-sm">
                    <h3 className="font-semibold flex items-center gap-2 dark:text-dark-header_text">🛡 Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-500 dark:text-dark-secondary_text">Add an extra layer of security</p>
                    <div className="flex justify-between items-center mt-4">
                      <div>
                        <label className="font-medium dark:text-dark-header_text">Enable 2FA</label>
                        <p className="text-sm text-gray-500 dark:text-dark-secondary_text">Protect your account with two-factor authentication</p>
                      </div>
                      <div className="w-12 h-6 rounded-full bg-gray-300 p-1 relative ">
                        <span className="absolute w-4 h-4 bg-white rounded-full shadow-md transform translate-x-0" />
                      </div>
                    </div>
                  </div>

                  {/* Active Sessions */}
                  <div className="rounded-lg border p-6 shadow-sm">
                    <h3 className="font-semibold dark:text-dark-header_text">Active Sessions</h3>
                    <p className="text-sm text-gray-500 dark:text-dark-secondary_text">Manage your active login sessions</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between p-4 bg-gray-100 dark:bg-dark-background rounded-lg">
                        <div>
                          <p className="font-medium dark:text-dark-header_text">Chrome on Windows</p>
                          <p className="text-sm text-gray-500">New York, NY • Current session</p>
                        </div>
                        <span className="text-green-700 text-sm">Active</span>
                      </div>
                      <div className="flex justify-between p-4 dark:bg-dark-background bg-gray-100 rounded-lg">
                        <div>
                          <p className="font-medium dark:text-dark-header_text">Safari on iPhone</p>
                          <p className="text-sm text-gray-500">New York, NY • 2 days ago</p>
                        </div>
                        <button className="text-sm px-2 py-1 bg-gray-200 rounded-md">Revoke</button>
                      </div>
                      <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
                        Sign Out All Other Sessions
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Tab */}
             {activeTab === "Payment" && (
           <div className="flex-1 outline-none space-y-6 p-6">

         {/* Payment Methods Card */}
         <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-border">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold leading-none tracking-tight dark:text-dark-header_text">Payment Methods</h3>
            <p className="text-sm text-gray-600 dark:text-dark-secondary_text">Manage your saved payment methods</p>
          </div>
          <button
      className="inline-flex items-center justify-center gap-1.5 h-8 px-3 text-sm rounded-md 
             bg-blue-600 text-white hover:bg-blue-800 shadow-sm"
        >
         <Plus className="w-4 h-4 text-white" />
          Add Card
          </button>
        </div>
      </div>

      <div className="p-6 pt-0 space-y-4">
  {/* Card Example 1 */}
  <div className="p-4 rounded-lg border-2 border-blue-500 hover:border-blue-600 flex items-center justify-between">
    <div className="flex items-center gap-4">
      {/* Delete Icon on card */}
      <div className="w-0 h-12 bg-gradient-to-br from-primary to-primary-secondary rounded-lg flex items-center justify-center">
        <RiDeleteBin6Line size={24} className="text-white" />
      </div>

      {/* Card Info */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
          <CreditCard size={28} className="text-white" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="font-medium text-foreground">Visa ending in 4567</p>
            <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs bg-gray-50 text-secondary-foreground">
              Default
            </span>
          </div>
          <p className="text-sm text-gray-600">Expires 12/26</p>
        </div>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex items-center gap-2">
      <button className="inline-flex items-center justify-center gap-1.5 h-8 px-3 text-sm rounded-md border bg-background hover:bg-accent">
        <RiDeleteBin6Line size={20}  />
      </button>
    </div>
  </div>

  {/* Card Example 2 */}
  <div className="p-4 rounded-lg border-2 border-blue-500 hover:border-blue-600 flex items-center justify-between">
    <div className="flex items-center gap-4">
      {/* Credit Card Icon */}
      <div className="ml-3 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
        <CreditCard size={28} className="text-white" />
      </div>

      {/* Card Info */}
      <div>
        <p className="font-medium text-foreground">Mastercard ending in 8901</p>
        <p className="text-sm text-gray-600">Expires 08/27</p>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex items-center gap-2">
      <button className="inline-flex items-center justify-center gap-1.5 h-8 px-3 text-sm rounded-md border bg-gray-50 hover:bg-blue-100">
        Set Default
      </button>
      <button className="inline-flex items-center justify-center gap-1.5 h-8 px-3 text-sm rounded-md border bg-gray-50 hover:bg-red-100">
        <RiDeleteBin6Line size={20}  />
      </button>
    </div>
  </div>
</div>
    </div>

    {/* Billing History Card */}
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-border">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="font-semibold leading-none tracking-tight">Billing History</h3>
        <p className="text-sm text-muted-foreground">View your past transactions</p>
      </div>
      <div className="p-6 pt-0 space-y-3">
        {[
          { title: "BMW 5 Series Rental", date: "Dec 20, 2024", amount: "$356.00" },
          { title: "Tesla Model 3 Rental", date: "Nov 15, 2024", amount: "$289.00" },
          { title: "Mercedes-Benz C-Class", date: "Oct 10, 2024", amount: "$425.00" },
        ].map((txn, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 bg-blue-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-foreground">{txn.title}</p>
              <p className="text-sm text-gray-600">{txn.date}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-foreground">{txn.amount}</p>
              <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs bg-green-100 text-green-700">Paid</span>
            </div>
          </div>
        ))}
        <button className="w-full h-9 px-4 mt-4 text-sm font-medium rounded-md border bg-background hover:bg-accent">
          View All Transactions
        </button>
      </div>
    </div>
  </div>
)}


              {/* History Tab */}
          {/* History Tab */}
{activeTab === "History" && (
  <div className="space-y-6">
    {/* Booking Cards */}
    {bookingHistory.map((booking) => (
      <div
        key={booking.id}
        className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
      >
        <div className="w-20 h-14 rounded-lg overflow-hidden bg-background flex-shrink-0">
          <img
            src={booking.image}
            alt={booking.car}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold">{booking.car}</h4>
            <span className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs bg-green-100 text-green-700">
              {booking.status}
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{booking.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-medium">{booking.price}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
            View Details
          </button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
            Book Again
          </button>
        </div>
      </div>
    ))}

    <button className="w-full px-4 py-2 border rounded-md hover:bg-gray-100">
      View All Bookings
    </button>

    {/* Summary Cards */}
    <div className="grid md:grid-cols-3 gap-6 mt-6">
      {/* Total Rentals */}
      <div className="rounded-lg border shadow-sm p-6 flex items-center gap-3 bg-white">
        <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
          <Car className="text-blue-500" />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-800">24</p>
          <p className="text-sm text-gray-500">Total Rentals</p>
        </div>
      </div>

      {/* Total Spent */}
      <div className="rounded-lg border shadow-sm p-6 flex items-center gap-3 bg-white">
        <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
          <CreditCard className="text-blue-500" />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-800">$4250.00</p>
          <p className="text-sm text-gray-500">Total Spent</p>
        </div>
      </div>

      {/* Loyalty Points */}
      <div className="rounded-lg border shadow-sm p-6 flex items-center gap-3 bg-white">
        <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
          <Star className="text-blue-500" />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-800">850</p>
          <p className="text-sm text-gray-500">Loyalty Points</p>
        </div>
      </div>
    </div>
  </div>
)}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
