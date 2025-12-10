import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  MdDashboard,
  MdSettings,
  MdAnalytics,
  MdReceipt
} from "react-icons/md";
import { 
  FaCar,
  FaUserFriends,
  FaChartLine,
  FaCreditCard
} from "react-icons/fa";
import { 
  LuCalendar,
  LuUsers,
  LuMessageSquare,
  LuBell,
  LuCircleHelp
} from "react-icons/lu";
import { 
  HiOutlineLogout, 
  HiOutlineMenuAlt3, 
  HiX,
  HiOutlineUserGroup,
  HiOutlineCash
} from "react-icons/hi";
import { 
  RiAdminLine,
  RiShieldUserLine
} from "react-icons/ri";
import { 
  BsGraphUp,
  BsCalendarCheck
} from "react-icons/bs";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Close sidebar on mobile when resizing to desktop
      if (!mobile && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && isOpen && !event.target.closest('.sidebar') && !event.target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, isOpen]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isMobile) {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isMobile]);

  const getNavItemClasses = (path) => {
    const isActive = currentPath === path;
    return isActive
      ? "bg-gradient-to-r from-light-Buttons to-light-secondary text-white rounded-xl p-3 flex items-center gap-3 cursor-pointer shadow-lg transition-all duration-200 hover:shadow-xl group"
      : "text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 dark:hover:bg-dark-header_spaces rounded-xl p-3 flex items-center gap-3 cursor-pointer transition-all duration-200 border border-transparent hover:border-light-Buttons/30 dark:hover:border-dark-Buttons/30 group";
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const handleLogout = () => {
    // Add your logout logic here
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const menuItems = [
    {
      id: "dashboard",
      title: "Dashboard",
      path: "/admindashboard",
      icon: <MdDashboard size={20} />,
      description: "Overview & Analytics",
      submenu: false
    },
    {
      id: "cars",
      title: "Car Management",
      path: "/carmanagement",
      icon: <FaCar size={18} />,
      description: "Manage Fleet",
      submenu: false
    },
    {
      id: "bookings",
      title: "Bookings",
      path: "/bookingdetails",
      icon: <LuCalendar size={18} />,
      description: "Rental Management",
      submenu: false
    },
    {
      id: "users",
      title: "User Management",
      path: "/User",
      icon: <LuUsers size={18} />,
      description: "Customer Management",
      submenu: false
    },
    {
      id: "reports",
      title: "Reports & Analytics",
      path: "/reports",
      icon: <BsGraphUp size={18} />,
      description: "Performance Insights",
      submenu: true,
      items: [
        { title: "Revenue Report", path: "/reports/revenue" },
        { title: "Usage Analytics", path: "/reports/analytics" },
        { title: "Customer Insights", path: "/reports/customers" }
      ]
    },
    {
      id: "payments",
      title: "Payments",
      path: "/payments",
      icon: <FaCreditCard size={18} />,
      description: "Transaction History",
      submenu: false
    },
    {
      id: "settings",
      title: "Settings",
      path: "/settings",
      icon: <MdSettings size={18} />,
      description: "System Configuration",
      submenu: true,
      items: [
        { title: "General Settings", path: "/settings/general" },
        { title: "Notifications", path: "/settings/notifications" },
        { title: "Security", path: "/settings/security" }
      ]
    }
  ];

  return (
    <>
      {/* 🔹 Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-gradient-to-r from-light-Buttons to-light-secondary text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 menu-button group"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <HiX size={24} className="group-hover:rotate-90 transition-transform duration-300" />
        ) : (
          <HiOutlineMenuAlt3 size={24} className="group-hover:rotate-180 transition-transform duration-300" />
        )}
      </button>

      {/* 🔹 Sidebar */}
      <div
        className={`sidebar fixed md:relative top-0 left-0 h-screen w-full sm:w-80 md:w-72 bg-white dark:bg-dark-background shadow-2xl md:shadow-lg p-4 sm:p-6 md:p-5 flex flex-col transform transition-all duration-300 z-40 overflow-hidden
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:rounded-se-3xl md:rounded-ee-3xl border-r border-gray-100 dark:border-dark-header_spaces`}
      >
        {/* Header Section */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="mb-6 sm:mb-8 md:mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-light-Buttons to-light-secondary flex items-center justify-center shadow-lg">
                <RiAdminLine className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-light-Buttons to-light-secondary bg-clip-text text-transparent">
                  RentiGO Admin
                </h1>
                <p className="text-gray-500 text-xs sm:text-sm mt-1 font-medium dark:text-dark-secondary_text">
                  Management Portal
                </p>
              </div>
            </div>
            
            {/* Admin Profile Card */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-dark-header_spaces dark:to-dark-secondary/30 p-4 rounded-xl border border-gray-200 dark:border-dark-header_spaces mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-light-Buttons to-light-secondary flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-dark-header_text">Admin User</h3>
                  <p className="text-xs text-gray-500 dark:text-dark-secondary_text">Super Administrator</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-900 dark:text-dark-header_text">42</p>
                  <p className="text-xs text-gray-500 dark:text-dark-secondary_text">Active</p>
                </div>
                <div className="h-6 w-px bg-gray-300 dark:bg-dark-header_spaces"></div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-900 dark:text-dark-header_text">128</p>
                  <p className="text-xs text-gray-500 dark:text-dark-secondary_text">Total</p>
                </div>
                <div className="h-6 w-px bg-gray-300 dark:bg-dark-header_spaces"></div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-900 dark:text-dark-header_text">$12.5K</p>
                  <p className="text-xs text-gray-500 dark:text-dark-secondary_text">Revenue</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-1.5">
            {menuItems.map((item) => (
              <div key={item.id} className="relative">
                <div
                  className={getNavItemClasses(item.path)}
                  onClick={() => item.submenu ? toggleSubmenu(item.id) : handleNavigation(item.path)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && (item.submenu ? toggleSubmenu(item.id) : handleNavigation(item.path))}
                >
                  <div className={`p-2 rounded-lg ${currentPath === item.path ? 'bg-white/20' : 'bg-gray-100 dark:bg-dark-header_spaces'} group-hover:bg-white/30 transition-colors`}>
                    {React.cloneElement(item.icon, {
                      className: currentPath === item.path ? "text-white" : "text-gray-600 dark:text-dark-secondary_text"
                    })}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-sm sm:text-base text-gray-900 dark:text-dark-header_text group-hover:text-light-Buttons dark:group-hover:text-dark-Buttons">
                        {item.title}
                      </p>
                      {item.submenu && (
                        <ChevronDown 
                          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${activeSubmenu === item.id ? 'rotate-180' : ''}`}
                        />
                      )}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-dark-secondary_text mt-0.5 truncate">
                      {item.description}
                    </p>
                  </div>
                  {currentPath === item.path && (
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-light-Buttons dark:bg-dark-Buttons rounded-l-full"></div>
                  )}
                </div>

                {/* Submenu */}
                {item.submenu && activeSubmenu === item.id && (
                  <div className="ml-8 mt-1 space-y-1 animate-slideDown">
                    {item.items.map((subItem, index) => (
                      <div
                        key={index}
                        onClick={() => handleNavigation(subItem.path)}
                        className="flex items-center gap-2 p-2 pl-4 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-header_spaces cursor-pointer transition-colors group"
                        role="button"
                        tabIndex={0}
                        onKeyPress={(e) => e.key === 'Enter' && handleNavigation(subItem.path)}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-light-Buttons/50 dark:bg-dark-Buttons/50 group-hover:bg-light-Buttons dark:group-hover:bg-dark-Buttons transition-colors"></div>
                        <span className="text-sm text-gray-600 dark:text-dark-secondary_text group-hover:text-gray-900 dark:group-hover:text-dark-header_text">
                          {subItem.title}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Divider */}
          <div className="my-6">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-dark-header_spaces to-transparent"></div>
          </div>

          {/* Quick Stats */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-dark-secondary_text uppercase tracking-wider mb-3">
              Quick Stats
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 dark:text-dark-secondary_text">Today</span>
                  <LuCalendar className="w-3 h-3 text-blue-500" />
                </div>
                <p className="text-sm font-bold text-gray-900 dark:text-dark-header_text mt-1">8 Bookings</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 dark:text-dark-secondary_text">Revenue</span>
                  <HiOutlineCash className="w-3 h-3 text-green-500" />
                </div>
                <p className="text-sm font-bold text-gray-900 dark:text-dark-header_text mt-1">$2,450</p>
              </div>
            </div>
          </div>
        </div>

        {/* Logout Section - Sticky at bottom */}
        <div className="sticky bottom-0 bg-white dark:bg-dark-background pt-4 border-t border-gray-100 dark:border-dark-header_spaces">
          {/* Help & Support */}
          <div className="flex items-center gap-2 mb-4">
            <button className="flex-1 flex items-center justify-center gap-2 p-2 text-gray-600 dark:text-dark-secondary_text hover:text-light-Buttons dark:hover:text-dark-Buttons hover:bg-gray-100 dark:hover:bg-dark-header_spaces rounded-lg transition-colors">
              <LuCircleHelp size={18} />
              <span className="text-sm font-medium">Help</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 p-2 text-gray-600 dark:text-dark-secondary_text hover:text-light-Buttons dark:hover:text-dark-Buttons hover:bg-gray-100 dark:hover:bg-dark-header_spaces rounded-lg transition-colors">
              <LuMessageSquare size={18} />
              <span className="text-sm font-medium">Support</span>
            </button>
          </div>

          {/* Logout Button */}
          <div
            className="text-gray-600 dark:text-dark-secondary_text hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 dark:hover:bg-red-500/20 rounded-xl p-3 flex items-center gap-3 cursor-pointer transition-all duration-200 border border-transparent hover:border-red-200 dark:hover:border-red-500/30 hover:text-red-600 dark:hover:text-red-400 group"
            onClick={handleLogout}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleLogout()}
          >
            <div className="p-2 rounded-lg bg-gray-100 dark:bg-dark-header_spaces group-hover:bg-red-100 dark:group-hover:bg-red-500/30 transition-colors">
              <HiOutlineLogout size={18} className="group-hover:rotate-180 transition-transform duration-300" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm sm:text-base">Logout</p>
              <p className="text-xs text-gray-500 dark:text-dark-secondary_text group-hover:text-red-500/70">
                Sign out of account
              </p>
            </div>
          </div>

          {/* Version Info */}
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-dark-header_spaces">
            <p className="text-xs text-center text-gray-400 dark:text-dark-secondary_text">
              v2.1.0 • © 2024 RentiGO
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm md:hidden z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Custom Scrollbar Styles */}
      
    </>
  );
};

// ChevronDown component
const ChevronDown = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default AdminSidebar;