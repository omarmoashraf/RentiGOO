import { useState, useEffect } from "react";

import { Button, Typography, IconButton } from "@material-tailwind/react";
import {
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
  FaHeart,
  FaWallet,
} from "react-icons/fa";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import rentigoLogo from "../assets/rentigo-logo.png";
import { useNavigate } from "react-router-dom";

import usetheme from "../HOOKS/usetheme";
import { useAuth } from "../context/AuthContext";
import { useLogged } from "../HOOKS/UseLogged";
import AvatarWithUserDropdown from "./UserDropdownList";



const Header = ({ currentPage, onNavigate}) => {
  const { user, logout } = useAuth();
const isLogged = !!user;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "cars", label: "Cars", path: "/cars" },
    { id: "pricing", label: "Pricing", path: "/pricing" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };
  const { theme, mode } = usetheme();

  return (
    <nav
      className={`fixed top-0 z-50 w-full h-20 border-b transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/40 backdrop-blur-lg shadow-md border-gray-200"
          : "bg-transparent backdrop-blur-0 border-transparent"
      }`}
    >
      <div className="max-w-7.5xl mx-auto px-2  sm:px-2 lg:px-2 ">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => navigate("/")}
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 transition-transform duration-200 group-hover:scale-105">
              <img
                src={rentigoLogo}
                alt="RentiGO Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <Typography
                as="span"
                className="text-xl lg:text-2xl font-bold text-light-primary_text dark:text-dark-header_text"
              >
                RentiGO
              </Typography>
              <Typography
                as="span"
                className="block text-xs text-gray-600 dark:text-dark-secondary_text font-medium -mt-1"
              >
                Premium Car Rental
              </Typography>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg
        dark:text-gray-300
        ${
          currentPage === item.id
            ? "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950/40"
            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:hover:text-blue-400 dark:hover:bg-gray-800/50"
        }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <IconButton
              variant="text"
              onClick={mode}
              className="rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              {theme == "dark" ? (
                <FaSun className="w-5 h-5 dark:text-dark-nav_icons" />
              ) : (
                <FaMoon className="w-5 h-5" />
              )}
            </IconButton>

            <Button
              variant="text"
              onClick={() => navigate("/favourites")}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <FaHeart className="w-4 h-4 dark:text-dark-nav_icons" />
              <span className="font-semibold dark:text-dark-nav_icons">
                Favorites
              </span>
            </Button>

            <Button
              variant="text"
              onClick={() => navigate("/wallet")}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <FaWallet className="w-4 h-4 dark:text-dark-nav_icons" />
              <span className="font-semibold dark:text-dark-nav_icons">
                Wallet
              </span>
            </Button>

            {isLogged ? (
              <AvatarWithUserDropdown />
            ) : (
              <Button
                onClick={() => navigate("/login")}
                className="bg-gradient-to-r from-[#0066ff] dark:bg-dark-Buttons to-[#0052cc] hover:from-[#0052cc] hover:to-[#004bb5] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 "
              >
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <IconButton
              variant="text"
              onClick={mode}
              className="text-gray-600 hover:text-blue-600"
            >
              {theme == "dark" ? (
                <FaSun className="w-5 h-5 dark:text-dark-nav_icons" />
              ) : (
                <FaMoon className="w-5 h-5" />
              )}
            </IconButton>

            <IconButton
              variant="text"
              color="blue"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6 dark:text-dark-nav_icons" />
              ) : (
                <FaBars className="w-6 h-6 dark:text-dark-nav_icons" />
              )}
            </IconButton>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-light-background dark:bg-dark-background backdrop-blur-xl border-t border-gray-200 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            {/* Mobile Navigation Items */}
            <div className="grid gap-2 mb-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    navigate(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center px-4 py-3 text-left rounded-xl transition-all duration-200 
        ${
          currentPage === item.id
            ? "bg-blue-50 text-blue-600 font-semibold dark:bg-blue-950/40 dark:text-blue-400"
            : "text-gray-700 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
        }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
              <Button
                variant="outlined"
                onClick={() => navigate("/favourites")}
                className="flex items-center justify-center gap-2 rounded-lg border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600"
              >
                <FaHeart className="w-4 h-4 dark:text-dark-nav_icons" />
                <span className="font-semibold dark:text-dark-nav_icons text-center">
                  Favorites
                </span>
              </Button>

              <Button
                variant="outlined"
                onClick={() => navigate("/wallet")}
                className="flex items-center justify-center gap-2 rounded-lg border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600"
              >
                <FaWallet className="w-4 h-4 dark:text-dark-nav_icons" />
                <span className="font-semibold dark:text-dark-nav_icons text-center">
                  Wallet
                </span>
              </Button>

              <Button
                onClick={() => navigate("/login")}
                className="col-span-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 py-3 transform hover:scale-105"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
