import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsWindowDock } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
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
  ChevronRight,
  Eye,
  EyeOff,
  LogOut,
  CheckCircle,
} from "lucide-react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Personal");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
  const [isEditingAddress, setIsEditingAddress] = useState(false);
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
  const [isEditingLicense, setIsEditingLicense] = useState(false);
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

  // Payment Methods
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "visa",
      last4: "4567",
      expiry: "12/26",
      isDefault: true,
    },
    {
      id: 2,
      type: "mastercard",
      last4: "8901",
      expiry: "08/27",
      isDefault: false,
    },
  ]);

  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  // Booking History
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

  // Tabs configuration
  const tabs = [
    { id: "Personal", label: "Personal", icon: "👤" },
    { id: "Security", label: "Security", icon: "🔒" },
    { id: "Payment", label: "Payment", icon: "💳" },
    { id: "History", label: "History", icon: "📋" },
  ];
  const navigate = useNavigate();

  return (
    <div className="min-h-screen dark:bg-dark-background bg-light-background transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-light-Buttons dark:text-dark-Buttons mb-2">
              My Profile
            </h1>
            <p className="text-gray-600 dark:text-dark-secondary_text text-base sm:text-lg">
              Manage your account information and preferences
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-dark-secondary p-6 space-y-6">
                {/* Profile Info */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center text-white text-2xl font-bold">
                      JD
                    </div>
                    <button className="absolute bottom-0 right-0 w-9 h-9 bg-light-Buttons dark:bg-dark-Buttons text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
                      <Camera size={18} />
                    </button>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg dark:text-dark-header_text">
                      John Doe
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-dark-secondary_text mt-1">
                      john.doe@example.com
                    </p>
                    <span className="inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium mt-3 bg-gradient-to-r from-light-Buttons to-light-secondary text-white">
                      Premium Member
                    </span>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {[
                    { label: "Member Since", value: "January 2023" },
                    { label: "Total Bookings", value: "24" },
                    { label: "Loyalty Points", value: "850", highlight: true },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-gray-600 dark:text-dark-secondary_text">
                        {stat.label}
                      </span>
                      <span
                        className={`font-medium ${
                          stat.highlight
                            ? "text-light-Buttons dark:text-dark-Buttons"
                            : "dark:text-dark-header_text"
                        }`}
                      >
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Quick Links */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
                  <button
                    onClick={() => navigate("/bookings")}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-background transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Car
                        size={18}
                        className="text-gray-600 dark:text-dark-secondary_text"
                      />
                      <span className="text-sm font-medium dark:text-dark-header_text">
                        My Bookings
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => navigate("/favourites")}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-background transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Star
                        size={18}
                        className="text-gray-600 dark:text-dark-secondary_text"
                      />
                      <span className="text-sm font-medium dark:text-dark-header_text">
                        Favorites
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => navigate("/wallet")}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-background transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <CreditCard
                        size={18}
                        className="text-gray-600 dark:text-dark-secondary_text"
                      />
                      <span className="text-sm font-medium dark:text-dark-header_text">
                        Wallet
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Tabs */}
              <div className="flex overflow-x-auto pb-2 mb-8 scrollbar-hide">
                <div className="flex gap-2 p-1 rounded-2xl bg-gray-100 dark:bg-dark-secondary min-w-max">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl whitespace-nowrap transition-all ${
                        activeTab === tab.id
                          ? "bg-white dark:bg-dark-background shadow-md text-light-Buttons dark:text-dark-Buttons"
                          : "text-gray-600 dark:text-dark-secondary_text hover:text-gray-900 dark:hover:text-dark-header_text"
                      }`}
                    >
                      <span>{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="space-y-6">
                {/* Personal Tab */}
                {activeTab === "Personal" && (
                  <div className="space-y-6">
                    {/* Personal Info Card */}
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary p-6 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-xl font-semibold dark:text-dark-header_text">
                            Personal Information
                          </h3>
                          <p className="text-gray-600 dark:text-dark-secondary_text text-sm mt-1">
                            Update your personal details
                          </p>
                        </div>
                        <div className="flex gap-2">
                          {isEditingPersonal ? (
                            <>
                              <button
                                onClick={() => setIsEditingPersonal(false)}
                                className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-background dark:text-dark-header_text transition-colors"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={() => setIsEditingPersonal(false)}
                                className="px-4 py-2 text-sm bg-gradient-to-r from-light-Buttons to-light-secondary text-white rounded-lg hover:opacity-90 transition-opacity shadow-sm"
                              >
                                Save Changes
                              </button>
                            </>
                          ) : (
                            <button
                              onClick={() => setIsEditingPersonal(true)}
                              className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-background dark:text-dark-header_text transition-colors"
                            >
                              <EditIcon size={16} />
                              Edit
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
                              First Name
                            </label>
                            <input
                              id="firstName"
                              value={personalInfo.firstName}
                              onChange={handlePersonalChange}
                              disabled={!isEditingPersonal}
                              className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
                              Last Name
                            </label>
                            <input
                              id="lastName"
                              value={personalInfo.lastName}
                              onChange={handlePersonalChange}
                              disabled={!isEditingPersonal}
                              className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
                            Email Address
                          </label>
                          <div className="relative">
                            <Mail
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-dark-secondary_text"
                              size={18}
                            />
                            <input
                              id="email"
                              type="email"
                              value={personalInfo.email}
                              onChange={handlePersonalChange}
                              disabled={!isEditingPersonal}
                              className="w-full pl-12 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-dark-secondary_text"
                              size={18}
                            />
                            <input
                              id="phone"
                              value={personalInfo.phone}
                              onChange={handlePersonalChange}
                              disabled={!isEditingPersonal}
                              className="w-full pl-12 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
                            Birth Date
                          </label>
                          <div className="relative">
                            <Calendar
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-dark-secondary_text"
                              size={18}
                            />
                            <input
                              id="birthDate"
                              type="date"
                              value={personalInfo.birthDate}
                              onChange={handlePersonalChange}
                              disabled={!isEditingPersonal}
                              className="w-full pl-12 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons transition-all"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Address Card */}
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary p-6 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-xl font-semibold dark:text-dark-header_text">
                            Address Information
                          </h3>
                          <p className="text-gray-600 dark:text-dark-secondary_text text-sm mt-1">
                            Your billing and contact address
                          </p>
                        </div>
                        <button
                          onClick={() => setIsEditingAddress(!isEditingAddress)}
                          className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-background dark:text-dark-header_text transition-colors"
                        >
                          <EditIcon size={16} />
                          {isEditingAddress ? "Cancel" : "Edit"}
                        </button>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
                            Street Address
                          </label>
                          <div className="relative">
                            <MapPin
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-dark-secondary_text"
                              size={18}
                            />
                            <input
                              id="street"
                              value={addressInfo.street}
                              onChange={handleAddressChange}
                              disabled={!isEditingAddress}
                              className="w-full pl-12 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
                              City
                            </label>
                            <input
                              id="city"
                              value={addressInfo.city}
                              onChange={handleAddressChange}
                              disabled={!isEditingAddress}
                              className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
                              State
                            </label>
                            <input
                              id="state"
                              value={addressInfo.state}
                              onChange={handleAddressChange}
                              disabled={!isEditingAddress}
                              className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
                              ZIP Code
                            </label>
                            <input
                              id="zipCode"
                              value={addressInfo.zipCode}
                              onChange={handleAddressChange}
                              disabled={!isEditingAddress}
                              className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
                              Country
                            </label>
                            <input
                              id="country"
                              value={addressInfo.country}
                              onChange={handleAddressChange}
                              disabled={!isEditingAddress}
                              className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons transition-all"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Driver's License Card */}
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary p-6 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center">
                            <Shield className="text-white" size={20} />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold dark:text-dark-header_text">
                              Driver's License
                            </h3>
                            <p className="text-gray-600 dark:text-dark-secondary_text text-sm mt-1">
                              Your driving credentials
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => setIsEditingLicense(!isEditingLicense)}
                          className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-background dark:text-dark-header_text transition-colors"
                        >
                          <EditIcon size={16} />
                          {isEditingLicense ? "Cancel" : "Edit"}
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div>
                          <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
                            License Number
                          </label>
                          <input
                            id="licenseNumber"
                            value={licenseInfo.licenseNumber}
                            onChange={handleLicenseChange}
                            disabled={!isEditingLicense}
                            className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
                            Issuing State
                          </label>
                          <input
                            id="licenseState"
                            value={licenseInfo.licenseState}
                            onChange={handleLicenseChange}
                            disabled={!isEditingLicense}
                            className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
                            Expiry Date
                          </label>
                          <input
                            id="licenseExpiry"
                            type="date"
                            value={licenseInfo.licenseExpiry}
                            onChange={handleLicenseChange}
                            disabled={!isEditingLicense}
                            className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Notification Preferences */}
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary p-6 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center">
                            <Bell className="text-white" size={20} />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold dark:text-dark-header_text">
                              Notification Preferences
                            </h3>
                            <p className="text-gray-600 dark:text-dark-secondary_text text-sm mt-1">
                              Manage how you receive updates
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            setIsEditingNotifications(!isEditingNotifications)
                          }
                          className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-background dark:text-dark-header_text transition-colors"
                        >
                          <EditIcon size={16} />
                          {isEditingNotifications ? "Done" : "Edit"}
                        </button>
                      </div>

                      <div className="space-y-4">
                        {notifications.map((notif) => (
                          <div
                            key={notif.id}
                            className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark-background transition-colors"
                          >
                            <div className="space-y-1">
                              <label className="font-medium dark:text-dark-header_text">
                                {notif.label}
                              </label>
                              <p className="text-sm text-gray-600 dark:text-dark-secondary_text">
                                {notif.desc}
                              </p>
                            </div>
                            <button
                              onClick={() => toggleNotification(notif.id)}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                notif.checked
                                  ? "bg-gradient-to-r from-light-Buttons to-light-secondary"
                                  : "bg-gray-300 dark:bg-gray-600"
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  notif.checked
                                    ? "translate-x-6"
                                    : "translate-x-1"
                                }`}
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
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center">
                          <Lock className="text-white" size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold dark:text-dark-header_text">
                            Change Password
                          </h3>
                          <p className="text-gray-600 dark:text-dark-secondary_text text-sm mt-1">
                            Update your account password
                          </p>
                        </div>
                      </div>

                      <div className="space-y-5">
                        <div>
                          <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
                            Current Password
                          </label>
                          <div className="relative">
                            <input
                              type={showCurrentPassword ? "text" : "password"}
                              placeholder="Enter current password"
                              className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons transition-all"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowCurrentPassword(!showCurrentPassword)
                              }
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-dark-secondary_text hover:text-light-Buttons dark:hover:text-dark-Buttons"
                            >
                              {showCurrentPassword ? (
                                <EyeOff size={20} />
                              ) : (
                                <Eye size={20} />
                              )}
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
                            New Password
                          </label>
                          <div className="relative">
                            <input
                              type={showNewPassword ? "text" : "password"}
                              placeholder="Enter new password"
                              className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons transition-all"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowNewPassword(!showNewPassword)
                              }
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-dark-secondary_text hover:text-light-Buttons dark:hover:text-dark-Buttons"
                            >
                              {showNewPassword ? (
                                <EyeOff size={20} />
                              ) : (
                                <Eye size={20} />
                              )}
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
                            Confirm New Password
                          </label>
                          <div className="relative">
                            <input
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="Confirm new password"
                              className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons transition-all"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-dark-secondary_text hover:text-light-Buttons dark:hover:text-dark-Buttons"
                            >
                              {showConfirmPassword ? (
                                <EyeOff size={20} />
                              ) : (
                                <Eye size={20} />
                              )}
                            </button>
                          </div>
                        </div>

                        <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-light-Buttons to-light-secondary text-white rounded-lg hover:opacity-90 transition-opacity shadow-sm font-medium">
                          Update Password
                        </button>
                      </div>
                    </div>

                    {/* Two-Factor Authentication */}
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center">
                            <Shield className="text-white" size={20} />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold dark:text-dark-header_text">
                              Two-Factor Authentication
                            </h3>
                            <p className="text-gray-600 dark:text-dark-secondary_text text-sm mt-1">
                              Add an extra layer of security
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            twoFactorEnabled
                              ? "bg-gradient-to-r from-light-Buttons to-light-secondary"
                              : "bg-gray-300 dark:bg-gray-600"
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              twoFactorEnabled
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-dark-secondary_text">
                        Protect your account with an extra layer of security.
                        When enabled, you'll need to enter a verification code
                        from your authenticator app when signing in.
                      </p>
                    </div>

                    {/* Active Sessions */}
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center">
                          <BsWindowDock className="text-white" size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold dark:text-dark-header_text">
                            Active Sessions
                          </h3>
                          <p className="text-gray-600 dark:text-dark-secondary_text text-sm mt-1">
                            Manage your active login sessions
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {[
                          {
                            device: "Chrome on Windows",
                            location: "New York, NY",
                            status: "active",
                            time: "Current session",
                          },
                          {
                            device: "Safari on iPhone",
                            location: "New York, NY",
                            status: "inactive",
                            time: "2 days ago",
                          },
                        ].map((session, index) => (
                          <div
                            key={index}
                            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark-background transition-colors"
                          >
                            <div className="space-y-1">
                              <p className="font-medium dark:text-dark-header_text">
                                {session.device}
                              </p>
                              <p className="text-sm text-gray-600 dark:text-dark-secondary_text">
                                {session.location} • {session.time}
                              </p>
                            </div>
                            <div className="flex items-center gap-3 mt-3 sm:mt-0">
                              <span
                                className={`text-sm px-3 py-1 rounded-full ${
                                  session.status === "active"
                                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                                }`}
                              >
                                {session.status === "active"
                                  ? "Active"
                                  : "Inactive"}
                              </span>
                              {session.status === "inactive" && (
                                <button className="text-sm px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-background dark:text-dark-header_text transition-colors">
                                  Revoke
                                </button>
                              )}
                            </div>
                          </div>
                        ))}

                        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-red-300 dark:border-red-700 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors font-medium">
                          <LogOut size={18} />
                          Sign Out All Other Sessions
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Payment Tab */}
                {activeTab === "Payment" && (
                  <div className="space-y-6">
                    {/* Payment Methods */}
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary p-6 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-xl font-semibold dark:text-dark-header_text">
                            Payment Methods
                          </h3>
                          <p className="text-gray-600 dark:text-dark-secondary_text text-sm mt-1">
                            Manage your saved payment methods
                          </p>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-light-Buttons to-light-secondary text-white rounded-lg hover:opacity-90 transition-opacity shadow-sm">
                          <Plus size={18} />
                          Add Card
                        </button>
                      </div>

                      <div className="space-y-4">
                        {paymentMethods.map((method) => (
                          <div
                            key={method.id}
                            className={`p-5 rounded-xl border-2 ${
                              method.isDefault
                                ? "border-light-Buttons dark:border-dark-Buttons bg-blue-50/50 dark:bg-blue-900/20"
                                : "border-gray-300 dark:border-gray-600"
                            }`}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center">
                                  <CreditCard
                                    className="text-white"
                                    size={24}
                                  />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <p className="font-medium dark:text-dark-header_text">
                                      {method.type === "visa"
                                        ? "Visa"
                                        : "Mastercard"}{" "}
                                      ending in {method.last4}
                                    </p>
                                    {method.isDefault && (
                                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-light-Buttons to-light-secondary text-white rounded-full">
                                        Default
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-sm text-gray-600 dark:text-dark-secondary_text mt-1">
                                    Expires {method.expiry}
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                {!method.isDefault && (
                                  <button className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-background dark:text-dark-header_text transition-colors">
                                    Set Default
                                  </button>
                                )}
                                <button className="px-4 py-2 text-sm border border-red-300 dark:border-red-700 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                                  <RiDeleteBin6Line size={18} />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Billing History */}
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary p-6 shadow-sm">
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold dark:text-dark-header_text">
                          Billing History
                        </h3>
                        <p className="text-gray-600 dark:text-dark-secondary_text text-sm mt-1">
                          View your past transactions
                        </p>
                      </div>

                      <div className="space-y-4">
                        {[
                          {
                            title: "BMW 5 Series Rental",
                            date: "Dec 20, 2024",
                            amount: "$356.00",
                            status: "paid",
                          },
                          {
                            title: "Tesla Model 3 Rental",
                            date: "Nov 15, 2024",
                            amount: "$289.00",
                            status: "paid",
                          },
                          {
                            title: "Mercedes-Benz C-Class",
                            date: "Oct 10, 2024",
                            amount: "$425.00",
                            status: "paid",
                          },
                        ].map((txn, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark-background transition-colors"
                          >
                            <div>
                              <p className="font-medium dark:text-dark-header_text">
                                {txn.title}
                              </p>
                              <p className="text-sm text-gray-600 dark:text-dark-secondary_text mt-1">
                                {txn.date}
                              </p>
                            </div>
                            <div className="flex items-center gap-4 mt-3 sm:mt-0">
                              <span className="font-semibold text-lg text-light-Buttons dark:text-dark-Buttons">
                                {txn.amount}
                              </span>
                              <span className="px-3 py-1 text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
                                {txn.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <button className="w-full mt-6 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-background dark:text-dark-header_text transition-colors font-medium">
                        View All Transactions
                      </button>
                    </div>
                  </div>
                )}

                {/* History Tab */}
                {activeTab === "History" && (
                  <div className="space-y-6">
                    {/* Booking History */}
                    <div className="space-y-4">
                      {bookingHistory.map((booking) => (
                        <div
                          key={booking.id}
                          className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary hover:shadow-md transition-shadow"
                        >
                          <div className="w-full sm:w-24 h-20 rounded-xl overflow-hidden">
                            <img
                              src={booking.image}
                              alt={booking.car}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                              <h4 className="font-semibold dark:text-dark-header_text">
                                {booking.car}
                              </h4>
                              <span className="px-3 py-1 text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full self-start">
                                {booking.status}
                              </span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
                              <div className="flex items-center gap-2 text-gray-600 dark:text-dark-secondary_text">
                                <Calendar size={16} />
                                <span>{booking.date}</span>
                              </div>
                              <span className="font-semibold text-light-Buttons dark:text-dark-Buttons">
                                {booking.price}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2 mt-4 sm:mt-0">
                            <button className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-background dark:text-dark-header_text transition-colors">
                              View Details
                            </button>
                            <button className="px-4 py-2 text-sm bg-gradient-to-r from-light-Buttons to-light-secondary text-white rounded-lg hover:opacity-90 transition-opacity">
                              Book Again
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-background dark:text-dark-header_text transition-colors font-medium">
                      View All Bookings
                    </button>

                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          icon: <Car size={24} />,
                          value: "24",
                          label: "Total Rentals",
                          color: "from-blue-500 to-blue-600",
                        },
                        {
                          icon: <CreditCard size={24} />,
                          value: "$4250.00",
                          label: "Total Spent",
                          color: "from-green-500 to-green-600",
                        },
                        {
                          icon: <Star size={24} />,
                          value: "850",
                          label: "Loyalty Points",
                          color: "from-yellow-500 to-yellow-600",
                        },
                      ].map((stat, idx) => (
                        <div
                          key={idx}
                          className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary p-6 shadow-sm"
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                            >
                              <div className="text-white">{stat.icon}</div>
                            </div>
                            <div>
                              <p className="text-2xl font-bold dark:text-dark-header_text">
                                {stat.value}
                              </p>
                              <p className="text-sm text-gray-600 dark:text-dark-secondary_text mt-1">
                                {stat.label}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
