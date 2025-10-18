import { useState, useEffect } from "react";
import { Button, Typography, IconButton } from "@material-tailwind/react";
import { FaBars, FaTimes, FaSun, FaMoon, FaHeart, FaWallet } from "react-icons/fa";
import rentigoLogo from "../assets/rentigo-logo.png";
import { useNavigate } from "react-router-dom"; 

const Header = ({ currentPage, onNavigate, isDarkMode, onToggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { id: "home", label: "Home"  , path:"/" },
    { id: "about", label: "About", path:"/about" },
    { id: "cars", label: "Cars", path:"/cars" },
    { id: "pricing", label: "Pricing" , path:"/pricing"},
    { id: "contact", label: "Contact" , path:"/contact"},
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

  return (
   <nav
  className={`fixed top-0 z-50 w-full border-b transition-all duration-500 ease-in-out ${
    isScrolled
      ? "bg-white/40 backdrop-blur-lg shadow-md border-gray-200"
      : "bg-transparent backdrop-blur-0 border-transparent"
  }`}
>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="text-xl lg:text-2xl font-bold text-gray-900"
              >
                RentiGO
              </Typography>
              <Typography
                as="span"
                className="block text-xs text-gray-600 font-medium -mt-1"
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
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg ${
                  currentPage === item.id
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <IconButton
              variant="text"
              onClick={onToggleTheme}
              className="rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </IconButton>

            <Button
              variant="text"
              onClick={() => navigate("/favourites")}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <FaHeart className="w-4 h-4" />
              <span className="font-semibold">Favorites</span>
            </Button>

            <Button
              variant="text"
              onClick={() => navigate("/wallet")}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <FaWallet className="w-4 h-4" />
              <span className="font-semibold">Wallet</span>
            </Button>

             <Button
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <IconButton
              variant="text"
              onClick={onToggleTheme}
              className="text-gray-600 hover:text-blue-600"
            >
              {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </IconButton>

            <IconButton
              variant="text"
              color="blue"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </IconButton>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
<div className="lg:hidden bg-white/60 backdrop-blur-xl border-t border-gray-200 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            {/* Mobile Navigation Items */}
            <div className="grid gap-2 mb-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(item.path)}
                  className={`flex items-center px-4 py-3 text-left rounded-xl transition-all duration-200 ${
                    currentPage === item.id
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
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
                <FaHeart className="w-4 h-4" />
                <span className="font-semibold">Favorites</span>
              </Button>

              <Button
                variant="outlined"
                onClick={() => navigate("/wallet")}
                className="flex items-center justify-center gap-2 rounded-lg border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600"
              >
                <FaWallet className="w-4 h-4" />
                <span className="font-semibold">Wallet</span>
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