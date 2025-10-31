import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
      ? "bg-gradient-to-r from-[#0066ff] to-[#0052cc] text-white rounded-xl p-3 flex items-center gap-3 cursor-pointer shadow-lg transition-all duration-200 hover:shadow-xl"
      : "text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 rounded-xl p-3 flex items-center gap-3 cursor-pointer transition-all duration-200 border border-transparent hover:border-blue-100";
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const handleLogout = () => {
    // Add your logout logic here
    navigate("/login");
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* 🔹 Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-gradient-to-r from-[#0066ff] to-[#0052cc] text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 menu-button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
      </button>

      {/* 🔹 Sidebar */}
      <div
        className={`sidebar fixed md:relative top-0 left-0 h-screen w-full sm:w-80 md:w-72 bg-white shadow-xl md:shadow-lg p-4 sm:p-6 md:p-5 flex flex-col transform transition-all duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:rounded-se-3xl overflow-y-auto`}
      >
        {/* Header Section */}
        <div className="flex-1">
          <div className="mb-6 sm:mb-8 md:mb-6">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#0066ff] to-[#0052cc] bg-clip-text text-transparent">
              RentiGO Admin
            </h1>
            <p className="text-gray-500 text-xs sm:text-sm mt-1 font-medium">
              Management Portal
            </p>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-2">
            <div
              className={getNavItemClasses("/admindashboard")}
              onClick={() => handleNavigation("/admindashboard")}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleNavigation("/admindashboard")}
            >
              <MdDashboard size={20} className={currentPath === "/admindashboard" ? "text-white" : "text-gray-600"} />
              <div className="flex-1">
                <p className="font-semibold text-sm sm:text-base">Dashboard</p>
                <p className="text-xs opacity-90 mt-0.5">Overview & Analytics</p>
              </div>
            </div>

            <div
              className={getNavItemClasses("/carmanagement")}
              onClick={() => handleNavigation("/carmanagement")}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleNavigation("/carmanagement")}
            >
              <FaCar size={18} className={currentPath === "/carmanagement" ? "text-white" : "text-gray-600"} />
              <div className="flex-1">
                <p className="font-semibold text-sm sm:text-base">Car Management</p>
                <p className="text-xs text-gray-500 mt-0.5">Manage Fleet</p>
              </div>
            </div>

            <div
              className={getNavItemClasses("/bookingdetails")}
              onClick={() => handleNavigation("/bookingdetails")}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleNavigation("/bookingdetails")}
            >
              <LuCalendar size={18} className={currentPath === "/bookingdetails" ? "text-white" : "text-gray-600"} />
              <div className="flex-1">
                <p className="font-semibold text-sm sm:text-base">Bookings</p>
                <p className="text-xs text-gray-500 mt-0.5">Rental Management</p>
              </div>
            </div>
          </nav>
        </div>

        {/* Logout Section - Sticky at bottom */}
        <div className="sticky bottom-0 bg-white pt-4 border-t border-gray-100">
          <div
            className="text-gray-600 hover:bg-red-50 rounded-xl p-3 flex items-center gap-3 cursor-pointer transition-all duration-200 border border-transparent hover:border-red-100 hover:text-red-600"
            onClick={handleLogout}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleLogout()}
          >
            <HiOutlineLogout size={20} />
            <p className="font-semibold text-sm sm:text-base">Logout</p>
          </div>
        </div>
      </div>

      {/* 🔹 Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm md:hidden z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default AdminSidebar;