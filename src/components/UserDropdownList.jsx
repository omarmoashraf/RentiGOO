import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  PowerIcon,
  UserCircleIcon,
  SunIcon,
  MoonIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  CalendarDaysIcon,
  BellIcon,
  CogIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useAuth } from "../context/AuthContext";
import useTheme from "../HOOKS/usetheme";

// Define menu items based on user role
const getMenuItems = (isAdmin) => {
  const baseItems = [
    { label: "My Profile", icon: UserCircleIcon, path: "/UserProfile", color: "text-blue-500" },
    { label: "My Bookings", icon: CalendarDaysIcon, path: "/bookings", color: "text-green-500" },
    { label: "Notifications", icon: BellIcon, path: "/notifications", color: "text-yellow-500" },
    { label: "Payment Methods", icon: CreditCardIcon, path: "/payment-methods", color: "text-purple-500" },
    { label: "Settings", icon: CogIcon, path: "/settings", color: "text-gray-500" },
    { label: "Sign Out", icon: PowerIcon, path: "/logout", color: "text-red-500", isDestructive: true },
  ];

  if (isAdmin) {
    baseItems.splice(1, 0, { 
      label: "Admin Dashboard", 
      icon: ShieldCheckIcon, 
      path: "/AdminDashboard", 
      color: "text-indigo-500" 
    });
  }

  return baseItems;
};

// Default guest avatar (using SVG placeholder)
const getDefaultAvatar = (name) => {
  // Generate initials for avatar
  const initials = name 
    ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : 'GU';
  
  // Create SVG with initials
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%230072ff"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="80" font-family="Arial, sans-serif">${initials}</text></svg>`;
};

export function AvatarWithUserDropdown() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  
  // Get user's current avatar or use default
  const userAvatar = user?.avatar || getDefaultAvatar(user?.name || "Guest");
  
  const isAdmin = user?.role === "admin";
  const menuItems = getMenuItems(isAdmin);

  const closeMenu = () => setIsMenuOpen(false);

  const handleItemClick = (item) => {
    if (item.label === "Sign Out") {
      logout();
    } else if (item.path) {
      navigate(item.path);
    }
    closeMenu();
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-2 rounded-full p-1 hover:bg-gray-100 dark:hover:bg-dark-secondary transition-all duration-200"
        >
          <div className="hidden sm:flex flex-col items-end">
            <Typography
              variant="small"
              className="font-semibold text-gray-800 dark:text-dark-header_text"
            >
              {user?.name || "Guest User"}
            </Typography>
            <Typography
              variant="small"
              className="text-xs text-gray-600 dark:text-dark-secondary_text"
            >
              {user?.email || "guest@example.com"}
            </Typography>
          </div>
          <div className="relative">
            <Avatar
              variant="circular"
              size="md"
              alt={user?.name || "Guest"}
              src={userAvatar}
              className="border-2 border-light-Buttons dark:border-dark-Buttons hover:scale-105 transition-transform duration-200"
            />
            {/* Online status indicator */}
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full border-2 border-white dark:border-dark-background"></div>
          </div>
        </Button>
      </MenuHandler>

      <MenuList className="p-2 min-w-[240px] max-w-[320px] bg-white dark:bg-dark-background border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl mt-2">
        {/* User Info Section */}
        <div className="flex items-center gap-3 p-3 border-b border-gray-100 dark:border-gray-700 mb-2">
          <Avatar
            size="lg"
            src={userAvatar}
            alt={user?.name || "Guest"}
            className="border-2 border-light-Buttons dark:border-dark-Buttons"
          />
          <div className="flex-1 min-w-0">
            <Typography
              variant="h6"
              className="font-bold text-gray-900 dark:text-dark-header_text truncate"
            >
              {user?.name || "Guest User"}
            </Typography>
            <Typography
              variant="small"
              className="text-gray-600 dark:text-dark-secondary_text truncate"
            >
              {user?.email || "guest@example.com"}
            </Typography>
            <div className="flex items-center gap-2 mt-1">
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-light-Buttons to-light-secondary text-white">
                {user?.role === "admin" ? "Admin" : user?.membership || "Member"}
              </span>
              {user?.role === "admin" && (
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                  Admin
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="py-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleItemClick(item)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-left ${
                item.isDestructive
                  ? "hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400"
                  : "hover:bg-gray-50 dark:hover:bg-dark-secondary text-gray-800 dark:text-dark-header_text"
              }`}
            >
              <div className={`p-1.5 rounded-lg ${item.color} bg-opacity-10`}>
                {React.createElement(item.icon, {
                  className: `h-5 w-5 ${item.color}`,
                })}
              </div>
              <Typography
                variant="small"
                className={`font-medium ${item.isDestructive ? "text-red-600 dark:text-red-400" : ""}`}
              >
                {item.label}
              </Typography>
            </button>
          ))}
        </div>

        {/* Theme Toggle Section */}
        <div className="p-3 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <Typography
              variant="small"
              className="font-medium text-gray-700 dark:text-dark-secondary_text"
            >
              Theme
            </Typography>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-dark-secondary hover:bg-gray-200 dark:hover:bg-dark-hover transition-colors"
            >
              {theme === "dark" ? (
                <>
                  <SunIcon className="h-4 w-4 text-yellow-500" />
                  <Typography
                    variant="small"
                    className="font-medium text-gray-700 dark:text-dark-header_text"
                  >
                    Light
                  </Typography>
                </>
              ) : (
                <>
                  <MoonIcon className="h-4 w-4 text-indigo-500" />
                  <Typography
                    variant="small"
                    className="font-medium text-gray-700 dark:text-dark-header_text"
                  >
                    Dark
                  </Typography>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-3 border-t border-gray-100 dark:border-gray-700">
          <Typography
            variant="small"
            className="font-medium text-gray-700 dark:text-dark-secondary_text mb-2"
          >
            Quick Actions
          </Typography>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => navigate("/new-booking")}
              className="px-3 py-2 text-xs font-medium rounded-lg bg-gradient-to-r from-light-Buttons to-light-secondary text-white hover:opacity-90 transition-opacity"
            >
              New Booking
            </button>
            <button
              onClick={() => navigate("/support")}
              className="px-3 py-2 text-xs font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-dark-header_text hover:bg-gray-50 dark:hover:bg-dark-secondary transition-colors"
            >
              Get Help
            </button>
          </div>
        </div>
      </MenuList>
    </Menu>
  );
}

export default AvatarWithUserDropdown;